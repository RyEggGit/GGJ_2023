import RainEffect from "/RainEffect.png";
import RainGround from "/rain_ground.png";

import SnowEffect from "/SnowEffect.png";
import LightningEffect from "/Lightning.png"
import { animateRain } from "../anime/rain";
import { animateSnow } from "../anime/snow";
import { animateBlizzard } from "../anime/blizzard";
import { animateLightning } from "../anime/lightning";




import { RootState } from "../store/store";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';


const Weather = () => {
    const events = useSelector((state: RootState) => state.game.eventsList);

    var isRaining = false;

    var isSnowing = false;
    var isBlizzarding = false;
    var isLightning = false;

    

    if(events.includes(1)){
        isRaining = true;
        isSnowing = false;
        isBlizzarding = false;
        isLightning = false;
    } else if(events.includes(7)){
        isSnowing = true;
        isRaining = false;
        isBlizzarding = false;
        isLightning = false;
    } else if(events.includes(7)){
        isBlizzarding = true;
        isRaining = false;
        isSnowing = false;
        isLightning = false;
    } else if(events.includes(1)){
        isBlizzarding = false;
        isRaining = false;
        isSnowing = false;
        isLightning = true;
    } else {
        var isRaining = false;
        var isSnowing = false;
        var isBlizzarding = false;
        var isLightning = false;
    }

    const rain = () => {
        animateRain(document.getElementById(`.rain`)!);
    };
    const snow = () => {
        animateSnow(document.getElementById(`.snow`)!);
    };
    const blizzard = () => {
        animateBlizzard(document.getElementById(`.blizzard`)!);
    };
    const lightning = () => {
        animateLightning(document.getElementById(`.lightning`)!);
    };

    return ( //ground and trees on z20
        <div className='z-10'>
            <div id={`.rain`} onLoad={rain} className='z-0 h-[200vh] top-[-100vh] absolute overflow-hidden '>
                {/* @ts-ignore */}
                {isRaining &&
                    <div>
                        <img src={RainEffect} className='h-[100vh]'></img>
                        <img src={RainEffect} className='h-[100vh] top-[100vh]'></img>
                    </div>
                }    
                {/* @ts-ignore */}
            </div>
            <div id={`.snow`} onLoad={snow} className='z-0 h-[200vh] top-[-100vh] absolute overflow-hidden '>
                {/* @ts-ignore */}
                {isSnowing &&
                    <div>
                        <img src={SnowEffect} className='h-[100vh]'></img>
                        <img src={SnowEffect} className='h-[100vh] top-[100vh]'></img>
                    </div>
                }
                {/* @ts-ignore */}
            </div>
            <div id={`.blizzard`} onLoad={blizzard} className='z-0 h-[200vh] top-[-100vh] absolute overflow-hidden '>
                {/* @ts-ignore */}
                {isBlizzarding &&
                <div>
                    <img src={SnowEffect} className='h-[100vh]'></img>
                    <img src={SnowEffect} className='h-[100vh] top-[100vh]'></img>
                </div>
                }
                {/* @ts-ignore */}
            </div>

        </div>
        






    );
};

export default Weather; 
