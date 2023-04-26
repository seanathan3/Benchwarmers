import { useState, useRef, useEffect } from 'react'
import './map.css';
import { useSelector, useDispatch } from 'react-redux';
import magnifyIcon from '../../assets/maps-pins/magnifying-glass.png'



//might not need this anymore either
async function PlaceAutocompleteElement() {
    window.google.maps.importLibrary("places")
}    


let map;
let marker;
let geocoder;
let inputText;

const GamesFormMap = ({parentCallback}) => {

    const [map, setMap] = useState();
    const mapRef = useRef();
    const markers = useRef({});
    const [geocoder, setGeocoder] = useState();
    const [marker, setMarker] = useState();
    





    useEffect(() => {
        setMap(
            new window.google.maps.Map(    
                mapRef.current, {
                    center: { lat: 40.77, lng: -73.97 },
                    zoom: 13,
                    mapTypeControl: false,
                }
            )
        )
        PlaceAutocompleteElement();
    }, []);


    //-----------------------------GEOLOCATE/AUTOCOMPLETE CODE----------------------

    useEffect(() => {
        setGeocoder(new window.google.maps.Geocoder());

        inputText = document.createElement("input");
        // setInputText(document.createElement("input"));
        inputText.type = "text";
        inputText.placeholder = "Enter a location";

        const autocomplete = new window.google.maps.places.Autocomplete(inputText);
        if (map) {
            autocomplete.bindTo("bounds", map);
        }
    
        
        const submitButton = document.createElement("button");
        submitButton.setAttribute('id','search-container')
        submitButton.style.width = '40px'
        const magnifyingGlass = document.createElement('img')
        submitButton.appendChild(magnifyingGlass)
        magnifyingGlass.src = magnifyIcon;
        magnifyingGlass.style.height = '35px'
        magnifyingGlass.style.width = '35px'
        magnifyingGlass.setAttribute('id','magnifying-glass')
        submitButton.classList.add("button", "button-primary");


         setMarker(new window.google.maps.Marker({
            map,
        }));
            
        if(map){
            map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(inputText);
            map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(submitButton);
            map.addListener("click", (e) => {
                geocode({ location: e.latLng });
            });
            submitButton.addEventListener("click", () =>
                geocode({ address: inputText.value })
            );
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
debugger
            map.setCenter(results[0].geometry.location);
            marker.setPosition(results[0].geometry.location);
            marker.setMap(map);
            // parentCallback({"lng": results[0].geometry.viewport.Ha.lo, "lat": results[0].geometry.viewport.Va.lo})
            parentCallback({"lng": results[0].geometry.viewport.Ga.lo, "lat": results[0].geometry.viewport.Ua.lo})
            inputText.value = `${results[0].formatted_address}`
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