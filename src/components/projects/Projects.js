import './Projects.css';
import SlidingFeature from './SlidingFeature';
import {sliderdata} from './projdata';

function Projects(){
    return <SlidingFeature slides={sliderdata}/>
}

export default Projects