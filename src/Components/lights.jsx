import { useEffect, useState } from "react"

export function Lights(){
 const [light, setLight] = useState('red')
const [cycle, setCycle] = useState(false)

 const switchLights = () => {
    setCycle(true);
  };

 const stopCycle = () => {
    setCycle(false);
  };


 useEffect(() => {
    
if(cycle===true){
      const interval = setInterval(() => {
        switch (light) {
          case 'red':
            setLight('yellow');
            break;
          case 'yellow':
            setLight('green');
            break;
          case 'green':
            setLight('red');
            break;
          default:
            setLight('red');
        }
      }, 2000);
      return() => clearInterval(interval)
    } 
},[light, cycle]);


  

 

function red(){
    setLight('red')
}
function yellow(){
    setLight('yellow')
}
function green(){
    setLight('green')
}



    return(
        <div className="flex gap-2 mt-8 bg-black rounded flex-col p-3 w-36 m-auto border border-solid border-black items-center">
        <div className={`bg-red-700 hover:opacity-100 w-28 h-28 rounded-full ${light==='red' ? 'opacity-100' : 'opacity-40'}` } onClick={red}></div>
        <div className={`bg-yellow-500 hover:opacity-100 w-28 h-28 rounded-full ${light==='yellow' ? 'opacity-100' : 'opacity-40'}` } onClick={yellow}></div>
        <div className={`bg-green-700 hover:opacity-100 w-28 h-28 rounded-full ${light==='green' ? 'opacity-100' : 'opacity-40'}`} onClick={green}></div>
        {cycle 
        ? <button className="text-white border p-2 mt-2 bg-slate-700 border-white border-solid" onClick={stopCycle}>Stop Cycle</button>
        : <button className="text-white border p-2 mt-2 bg-slate-700 border-white border-solid" onClick={switchLights}>Cycle lights</button>
    }
        </div>
    )
}