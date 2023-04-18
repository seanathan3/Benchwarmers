import { useState, useRef, useEffect } from 'react'
import './map.css';
import { useSelector, useDispatch } from 'react-redux';

const Map = () => {

    const [map, setMap] = useState();
    const mapRef = useRef();
    const markers = useRef({});
    // const averageLatLng = {lat: 0, lng: 0};
    const games = useSelector(state => Object.values(state.games));


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
    }, []);


    useEffect(() => {

        games.forEach((game) => {

            const infoWindow = new window.google.maps.InfoWindow();

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
        })
    }, [games, map])


    return(
        <>
            <div ref={mapRef} id='map'></div>
        </>
    )
};

export default Map;