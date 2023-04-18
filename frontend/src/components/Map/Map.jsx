import { useState, useRef, useEffect } from 'react'
import './map.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGames } from '../../store/games';

const Map = () => {

    const [map, setMap] = useState();
    const mapRef = useRef();
    const markers = useRef({})
    const averageLatLng = {lat: 0, lng: 0}
    const games = useSelector(state => Object.values(state.games))
    let updater = 1


    useEffect(() => {
        
                setMap(
                    new window.google.maps.Map(
                        mapRef.current, {
                            // center: {lat: averageLatLng.lat, lng: averageLatLng.lng},
                            center: { lat: 40.77, lng: -73.97 },
                            zoom: 11
                        }
                    )
                )
            }, [])


    useEffect(() => {

        games.forEach((game) => {
            markers.current[game._id] = new window.google.maps.Marker(
                {
                    position: {lat: game.coordinates.lat, lng: game.coordinates.lng},
                    map: map,
                    title: `${game.sport}`,
                    label: `${game.skillLevel}`
                }
            )
            markers.current[game._id].addListener('click', () => {
                alert(`This is ${game.sport}`)
            })

        })
    // }, [map])
    }, [games])


    return(
        <>
            <div ref={mapRef} id='map'></div>
        </>
    )
};

export default Map;