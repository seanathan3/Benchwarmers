import './heroSection.css'
import volleyball from '../../assets/videos/volleyball.mp4';
import basketball from '../../assets/videos/basketball.mp4';
import running from '../../assets/videos/running.mp4';
import cycling from '../../assets/videos/cycling.mp4';
import soccer from '../../assets/videos/soccer.mp4';
import { useState } from 'react';

const HeroSection = () => {
    const [video, setVideo] = useState(0);

    

    
    return(
        <>
            <video autoPlay muted loop id="hs-video">
                <source src={soccer} type="video/mp4"/>
                <source src={volleyball} tye="video/mp4" />
                <source src={basketball} tye="video/mp4" />
                <source src={cycling} tye="video/mp4" />
            </video>
        </>
    )

}

export default HeroSection;