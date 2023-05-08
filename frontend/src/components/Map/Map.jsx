import { useState, useRef, useEffect } from 'react'
import './map.css';
import { useDispatch, useSelector } from 'react-redux';
import { formatTime } from '../../utils/utils';
import GamesShow from '../GamesShow/GamesShow';
import { Modal } from '../../context/Modal'
import { fetchGame } from '../../store/games';
import mapsPin from '../../assets/maps-pins/maps-pin.png'


const Map = ({sport, skillLevel}) => {
    const dispatch = useDispatch();
    const [map, setMap] = useState();
    const mapRef = useRef();
    const markers = useRef({});
    const games = useSelector(state => Object.values(state.games));
    const [showModal, setShowModal] = useState(false);
    const [currentGameId, setCurrentGameId] = useState();
    const [currentInfoWindow, setCurrentInfoWindow] = useState(null);
    let openInfoWindows = [];

    const [markerChanged, setMarkerChanged] = useState(false);

    useEffect(() => {       

        setMap(
            new window.google.maps.Map(    
                mapRef.current, {
                    // center: {lat: averageLatLng.lat, lng: averageLatLng.lng},
                    center: { lat: 40.77, lng: -73.97 },
                    zoom: 13
                }
            )
        )
        if (currentGameId) {
            dispatch(fetchGame())
        }
    }, [dispatch, sport, skillLevel]);

    useEffect(() => {

        if (map) {

          const clickListener = map.addListener("click", (event) => {
            // Check if info window is open
            if (currentInfoWindow) {
              // Check if clicked element is inside the info window
              if (!currentInfoWindow.getContent().contains(event.target)) {
                // Close info window if clicked element is outside of it
                currentInfoWindow.close();
                setCurrentInfoWindow(null);
              }
            }
          })
      

            games.forEach((game) => {
              const infoWindow = new window.google.maps.InfoWindow();
            
          
              if (markers.current[game._id]) {
                // Marker already exists, update its position
                markers.current[game._id].setPosition({
                  lat: game.coordinates.lat,
                  lng: game.coordinates.lng,
                });
              } else {
                // Create a new marker
                markers.current[game._id] = new window.google.maps.Marker({
                  position: { lat: game.coordinates.lat, lng: game.coordinates.lng },
                  map: map,
                //   label: {
                //     color: "#C70E20",
                //     fontWeight: "bold",
                //     textShadow:
                //       "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                //   },
                  icon: {
                    url: mapsPin,
                    labelOrigin: new window.google.maps.Point(80, 23),
                  },
                });
               
                markers.current[game._id].addListener("click", function(event) {
                  for(let i = 0; i < openInfoWindows.length; i++) {
                    openInfoWindows[i].close();
                  }
                })

                markers.current[game._id].addListener("click", () => {
                  const content = document.createElement("div");
                  content.setAttribute("id", "pin-textbox");
          
                  const nameElement = document.createElement("h2");
                  nameElement.addEventListener("click", () => {
                    setShowModal(game);
                    setCurrentGameId(markers.current[game._id]);
                  });
                  nameElement.textContent = game.sport;
                  nameElement.setAttribute("id", "pin-title");
                  content.appendChild(nameElement);
          
                  const placeIdElement = document.createElement("p");
                  placeIdElement.textContent = `${game.date.month}/${game.date.day}/${game.date.year}`;
                  placeIdElement.setAttribute("id", "pin-date");
                  content.appendChild(placeIdElement);
          
                  const placeAddressElement = document.createElement("p");
                  placeAddressElement.textContent = formatTime(
                    game.time.hours,
                    game.time.minutes
                  );
                  placeAddressElement.setAttribute("id", "pin-time");
                  content.appendChild(placeAddressElement);
          
                  infoWindow.setContent(content);
                  infoWindow.open(map, markers.current[game._id]);
                  openInfoWindows.push(infoWindow)
                  setCurrentInfoWindow(infoWindow)

                });
              }
            });
        }

      
        // Remove markers for games that are no longer in the games array
        Object.keys(markers.current).forEach((gameId) => {
          const gameExists = games.some((game) => game._id === gameId);
          if (!gameExists) {
            const marker = markers.current[gameId];
            if (marker) {
              marker.setMap(null);
              delete markers.current[gameId];
            }
          }
        });
      }, [games, map]);

    useEffect(() => {
        if(markerChanged){
            setMarkerChanged(false)
        }
    }, [markerChanged])


    function clear() {
        setMap(null);
    //   responseDiv.style.display = "none";
    }

    return(
        <>
            <div ref={mapRef} id='map'></div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <GamesShow game={showModal}/>
                </Modal>
            )}
        </>
    )
};

export default Map;