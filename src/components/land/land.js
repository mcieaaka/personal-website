import './land.css';
import React from 'react';
import hs from './hs.svg';

class Land extends React.Component{
    render(){
        return(
            <div id="landing" className="container">
                <div className="row">
                    <div className="col-sm my-pic">
                        <img src={hs} alt=""/>
                    </div>
                    <div className="col-sm abt-con">
                        <h3>Hi there, My name is Harshit Srivastava!</h3>
                        <p>
                            I am currently the <i><b>Technical and Research Head at SIAM-VIT</b></i>, an international student chapter in VIT, Vellore.
                            <br/>Currently, a second year, B.tech. student of Computer Science and Technology, I am an enthusiastic learner who believes in working hard and never giving up. My areas of interest majorly involve<b> Deep Learning, Data Mining and Web Development</b>. <br/><br/>Mathematics has always been my favourite subject and i intend to use <b>applied maths</b> to resolve day to day problems. Music has always been my hobby. I am also a <b>Tabla player</b>. The most important principle of my life is<b> Punctuality and honesty</b>.<br/><br/> My motto is, <b>"Endure and Fight"</b>.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Land;