// React
import {  useState,  } from "react";

// Services

// Models

export function HomePage() {
  // #region Logic

  const [spin, setSpin] = useState(false);

  const [clickable, setClickable] = useState(true);

  const [buttonActive, setButtonActive] = useState(false);

  const [min, setMin] = useState(5);
  const [max, setMax] = useState(10);
  const [turns, setTurns] = useState(0);


  const clickButton = ()=>{
    setButtonActive(true)
   
    setTimeout(() => {
      setButtonActive(false)
    }, 100);


  }

  const spinWheel = ()=>{
    setSpin(true)
    setClickable(false)

    //const rnd = Math.floor(Math.random() * (max - min) + min)
    const rnd = Math.random() * (max - min) + min
    console.log("rnd", min, max, rnd)

    setTurns(rnd)
    setMin(rnd)
    setMax(rnd+5)

    setTimeout(() => {
      setClickable(true)
    }, 2500);


  }


  let dots = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330]


  return (
    <>
      <div className="mx-auto" >


        <div className="circle-container">
          <div style={{position: 'relative',}}>
            <div className="circle-shadow z-10" style={{position: 'absolute',}}></div>
          </div>

        
         


          <div className={
            "circle transition-ease"
            + (spin ? " " : "")
            } 
            style={{transform: 'rotate(' + turns + 'turn)'}}
          >
            <div className="z-20" style={{position: 'relative', transformOrigin:'center',  transform: 'translateX(-5px) translateY(-5px)',}}>
              {dots?.map((d) => (
                <div className={"circle-dot z-20 rotate-"+d} style={{position: 'absolute', transform: 'translateX(138px) translateY(0)'}}></div>
              ))}
            </div>

            <div style={{position: 'relative',}}>
              <span className="text rotate-0 overflow-visible text-nowrap" style={{position:"absolute", transformOrigin:'left', transform: 'translateX(40px) translateY(-15px)'}}>Vinst</span>
              <span className="text rotate-90 overflow-visible text-nowrap" style={{position:"absolute", transformOrigin:'left', transform: 'translateX(30px) translateY(0)'}}>Ej vinst</span>
              <span className="text rotate-180 overflow-visible text-nowrap" style={{position:"absolute", transformOrigin:'left', transform: 'translateX(40px) translateY(15px)'}}>Ej vinst</span>
              <span className="text rotate-270 overflow-visible text-nowrap" style={{position:"absolute", transformOrigin:'left', transform: 'translateX(50px) translateY(5px)'}}>Ej vinst</span>
            </div>
            
          </div>
          <div style={{position: 'relative', transformOrigin:'center',  transform: 'translateX(125px) translateY(-300px)'}}>
            <div className="stick z-40" style={{position: 'absolute', }}>
            </div>
          </div>
        </div>

        <div className="wheel-button-container">
          <button className={"wheel-button " + (buttonActive ? "active" : "")} onClick={()=> { clickButton(); clickable ? spinWheel() : null }}>Snurra hjulet</button>
        </div>
         
      </div>
    </>
  );
}

