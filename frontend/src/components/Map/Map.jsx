import { useState, useRef, useEffect } from 'react'
import './map.css';
import { useDispatch, useSelector } from 'react-redux';
import { formatTime } from '../../utils/utils';
import GamesShow from '../GamesShow/GamesShow';
import { Modal } from '../../context/Modal'
import { fetchGame } from '../../store/games';
import baseballImg from '../../assets/sports-logos/baseball.png';
import mapsPin from '../../assets/maps-pins/maps-pin.png'
import { fetchGames } from '../../store/games';


const Map = ({sport, skillLevel}) => {
    const dispatch = useDispatch();
    const [map, setMap] = useState();
    const mapRef = useRef();
    // ORIGINAL CODE HERE
    const markers = useRef({});
    // ORIGINAL CODE HERE
    const games = useSelector(state => Object.values(state.games));
    const [showModal, setShowModal] = useState(false);
    const [currentGameId, setCurrentGameId] = useState();
    const [currentInfoWindow, setCurrentInfoWindow] = useState(null);

    // below is chat
    // const [markers, setMarkers] = useState({})
    const [markerChanged, setMarkerChanged] = useState(false);
    // above is chat

    useEffect(() => {       

        // clear(); 
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



    //REAL CODE BELOW

//     useEffect(() => {
//         //below is chat code
//         // Object.values(markers).forEach((marker) => {marker.setMap(null)})
//         // const newMarkers = {}


//         // above is chat
//         games.forEach((game) => {
//             // clear();
//             const infoWindow = new window.google.maps.InfoWindow();


//             //below is chat code

//             //above is chat code



//             markers.current[game._id] = new window.google.maps.Marker(
//             // newMarkers[game._id] = new window.google.maps.Marker(
//                 {
//                     position: {lat: game.coordinates.lat, lng: game.coordinates.lng},
//                     map: map,
//                     // title: `${game.sport}`,
//                     label: {
//                             // text: `${game.sport}`,
//                             color: '#C70E20',
//                             fontWeight: 'bold',
//                             textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
//                     },
//                     icon: {
//                         url: mapsPin,
//                         labelOrigin: new window.google.maps.Point(80, 23),
//                         // size: (50,50)
//                     },
//                 }
//             )
// // debugger
            
//             markers.current[game._id].addListener('click', () => {
//             // newMarkers[game._id].addListener('click', () => {    
//                 const content = document.createElement("div");
//                 content.setAttribute('id', 'pin-textbox');
                
                
//                 const nameElement = document.createElement("h2");
//                 nameElement.addEventListener('click', () => {
//                     setShowModal(game)
//                     setCurrentGameId(markers.current[game._id])
//                     // setCurrentGameId(newMarkers[game._id])
//                 })
//                 nameElement.textContent = game.sport;
//                 nameElement.setAttribute('id','pin-title')
//                 content.appendChild(nameElement);
        

//                 const placeIdElement = document.createElement("p");
//                 placeIdElement.textContent = `${game.date.month}/${game.date.day}/${game.date.year}`;
//                 placeIdElement.setAttribute('id','pin-date')
//                 content.appendChild(placeIdElement);


//                 const placeAddressElement = document.createElement("p");
//                 placeAddressElement.textContent = formatTime(game.time.hours, game.time.minutes);
//                 placeAddressElement.setAttribute('id','pin-time')
//                 content.appendChild(placeAddressElement);


//                 infoWindow.setContent(content);
//                 infoWindow.open(map,  markers.current[game._id]);
//                 // infoWindow.open(map,  newMarkers[game._id]);
//             });
//         })
//         //chat
//         // setMarkers(newMarkers)
//         // setMarkerChanged(true)
//         // markers.current = newMarkers
//         //chat
//     // }, [games, map])
//     }, [games])
    //REAL CODE ABOVE



    //CHAT CODE BELOW




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
                  setCurrentInfoWindow(infoWindow)

                  // map.addListener("click", (event) => {
                  //   debugger
                  //   // Close the current info window if it exists and the click is not on a marker or the map itself
                  //   if (currentInfoWindow && event.target !== currentInfoWindow) {
                  //     currentInfoWindow.close();
                  //     currentInfoWindow = null;
                  //   }
                  // });

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









    //CHAT CODE ABOVE






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