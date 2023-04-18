import { useState, useRef, useEffect } from 'react'
import './map.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGames } from '../../store/games';

const Map = () => {

    const [map, setMap] = useState();
    const mapRef = useRef();
    const markers = useRef({});
    const averageLatLng = {lat: 0, lng: 0};
    const games = useSelector(state => Object.values(state.games));


    useEffect(() => {        
        setMap(
            // new window.google.maps.Map(
            new window.google.maps.Map(    
                mapRef.current, {
                    // center: {lat: averageLatLng.lat, lng: averageLatLng.lng},
                    center: { lat: 40.77, lng: -73.97 },
                    zoom: 11
                }
            )
        )
    }, []);


    useEffect(() => {

        games.forEach((game) => {
            // markers.current[game._id] = new window.google.maps.Marker(
            //     {
            //         position: {lat: game.coordinates.lat, lng: game.coordinates.lng},
            //         map: map,
            //         title: `${game.sport}`,
            //         label: `${game.skillLevel}`
            //     }
            // )

            // markers.current[game._id].addListener('click', () => {
            //     alert(`This is ${game.sport}`)
            // });

            // const request = {
            //     placeId: `${game._id}`,
            //     fields: [`${game.sport}`, `${game.skillLevel}`]
            // };

            const infoWindow = new window.google.maps.InfoWindow();
            // const infoWindow = new window.google.maps.InfoWindow;
// debugger
            // const service = new window.google.maps.places.PlacesService(map)

            // service.getDetails(request, (place, status) => {
            //     if(
            //         status === window.google.maps.places.PlacesServiceStatus.OK &&
            //         place &&
            //         place.gemoetry &&
            //         place.gemoetry.location
            //     ) {
                    markers.current[game._id] = new window.google.maps.Marker(
                        {
                            position: {lat: game.coordinates.lat, lng: game.coordinates.lng},
                            map: map,
                            title: `${game.sport}`,
                            label: `${game.skillLevel}`
                        }
                    )

                    markers.current[game._id].addListener('click', () => {
                        const content = document.createElement("div");
                        const nameElement = document.createElement("h2");
                
                        nameElement.textContent = game.sport;
                        content.appendChild(nameElement);
                
                        const placeIdElement = document.createElement("p");
                
                        placeIdElement.textContent = game.sport;
                        content.appendChild(placeIdElement);
                
                        const placeAddressElement = document.createElement("p");
                
                        placeAddressElement.textContent = game.sport;
                        content.appendChild(placeAddressElement);
                        infoWindow.setContent(content);
                        infoWindow.open(map,  markers.current[game._id]);
                    });
                // }

                
            // })
            //--------------------------------------JUST GET INFO WINDOW---------------------------
            // const infowindow = new window.google.maps.InfoWindow({
            //     content: game?.sport,
            //     arialabel: game._id,
            // })
            // markers.current[game._id].addListener('click', () => {
            //     infowindow.open({
            //         anchor: markers.current[game._id],
            //         map,
            //     })
            // })

        })

    // }, [map])
    }, [games, map])


    return(
        <>
            <div ref={mapRef} id='map'></div>
        </>
    )
};

export default Map;