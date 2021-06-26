import React,{useState} from 'react';
import './Projects.css'; 
import { sliderdata } from './projdata';
import leftarr from './assets/left.svg';
import rightarr from './assets/right.svg';


const SlidingFeature =({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }


        return(
            <div>
                <div><h1>Projects</h1></div>
                <div id="speakacc">
                    <img id="leftarr" src={leftarr} alt=""  onClick={prevSlide}/>
                    <img id="rightarr" src={rightarr} alt="" onClick={nextSlide}/>
                        {sliderdata.map((slide,index)=>{
                            return(
                                    <div id="spks" className={index === current ? 'slide active' : 'slide'} key={index}>
                                        {index === current && (
                                            <div className="insideslider">
                                                <h3>{slide.title}</h3>
                                                <div className="spkinfo">
                                                    <div className="spkimg"><img className="screen-hor" src={slide.image} alt=""/></div>
                                                    <div>
                                                        <p className="spk des">{slide.des}</p>
                                                        <a className="butt-git" href="{slide.link}">GitHub</a>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                            )
                        })}
                </div>
                <div className="progressBar">0{current+1}<progress value={current+1} max="8"></progress>08</div>
            </div>
        );
}


export default SlidingFeature;