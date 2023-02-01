import React from "react";
import "../styles/App.css";
import tlo from '../img/tlo.png';
import my from '../img/my.png';

function importAll(r) {
	let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
	return images
}

const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));

var looper;
var degrees = 0;
function rotateAnimation(el,speed){
    var elem = document.getElementById(el);
    elem.style.transform .transform = "rotate("+degrees+"deg)";
    looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed);
    degrees++;
    if(degrees > 359){
        degrees = 1;
    }
}

const Home = () => {

    //rotateAnimation("img1",30);

    return (
        <div>
           <div className="tlo"><img src={images["tlo.png"]}/></div>

            <div className="home-p">
                <div className="three-col"> 
                    <div className="exp">
                        <div className="napisy_boczne_j">julia</div>
                    </div>
                    <div>
                        <div className="badge-parent">
                            <div className="heading">LOVE</div>
                            <img id="img1" src={images["badge.png"]} style={{maxWidth: "100%"}} />
                            {/* <script>rotateAnimation ("img1",30);</script> */}
                        </div>
                        <div className="picture"><img src={images["my.png"]} alt="my" className="my"/></div>
                        {/* <div className="home-info">
                        
                            <div><p>9 września 2023 | 15:00</p></div>
                            <div className="grey-bg">
                                <div><h3>julia &</h3></div>
                                <div><h3>grześ</h3></div>
                            </div>
                            <h5>Zapraszają na ślub i wesele</h5>
                        </div> */}
                    </div>
                    <div className="exp">
                        <div className="napisy_boczne_g"><div className="none">0000</div> grześ</div>
                    </div>   
                </div>  
            </div> 
        </div>
    );
};

export default Home;