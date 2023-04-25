import { useState, useRef, useEffect } from 'react'
import './map.css';
import { useSelector, useDispatch } from 'react-redux';


let map;
let marker;
let geocoder;

const GamesFormMap = ({parentCallback}) => {

    const [map, setMap] = useState();
    const mapRef = useRef();
    const markers = useRef({});
    // const averageLatLng = {lat: 0, lng: 0};
    const [geocoder, setGeocoder] = useState();
    const [marker, setMarker] = useState();


    useEffect(() => {
        setMap(
            new window.google.maps.Map(    
                mapRef.current, {
                    // center: {lat: averageLatLng.lat, lng: averageLatLng.lng},
                    center: { lat: 40.77, lng: -73.97 },
                    zoom: 13,
                    mapTypeControl: false,
                }
            )
        )
    }, []);


    //-----------------------------GEOLOCATE CODE----------------------

    useEffect(() => {

        setGeocoder(new window.google.maps.Geocoder());

        const inputText = document.createElement("input");
        inputText.type = "text";
        inputText.placeholder = "Enter a location";
    
        
        const submitButton = document.createElement("input");
        submitButton.type = "button";
        submitButton.value = "Geocode";
        submitButton.classList.add("button", "button-primary");
    

        const clearButton = document.createElement("input");
        clearButton.type = "button";
        clearButton.value = "Clear";
        clearButton.classList.add("button", "button-secondary");


        const instructionsElement = document.createElement("p");
        instructionsElement.id = "instructions";
        instructionsElement.innerHTML =
            "<strong>Instructions</strong>: Enter an address in the textbox to geocode or click on the map to reverse geocode.";
            setMarker(new window.google.maps.Marker({
                map,
            }));
            
            if(map){
                map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(inputText);
                map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(submitButton);
                map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(clearButton);
                map.controls[window.google.maps.ControlPosition.LEFT_TOP].push(instructionsElement);
            map.addListener("click", (e) => {
                geocode({ location: e.latLng });
            });
            submitButton.addEventListener("click", () =>
                geocode({ address: inputText.value })
            );
            clearButton.addEventListener("click", () => {
                clear();
            });
            clear();

        }


    }, [map])


    function clear() {
        // marker.setMap(null);
    //   responseDiv.style.display = "none";
    }
    
    const geocode = (request) => {
        clear();
        geocoder
        .geocode(request)
        .then((result) => {
            const { results } = result;
    
            map.setCenter(results[0].geometry.location);
            marker.setPosition(results[0].geometry.location);
            marker.setMap(map);
            parentCallback({"lng": results[0].geometry.viewport.Ha.lo, "lat": results[0].geometry.viewport.Va.lo})
            return results;
        })
        .catch((e) => {
            alert("Geocode was not successful for the following reason: " + e);
        });
    }


    return(
        <>
            <div ref={mapRef} id='gf-map'></div>
        </>
    )
};

export default GamesFormMap;