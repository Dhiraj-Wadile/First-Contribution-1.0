import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';

const[MORNING,AFTERNOON,EVENING,NIGHT]=["MORNING","AFTERNOON","EVENING","NIGHT"];
function App() {

  const[currentTimeOfTheDay,setCurrentTimeOFTheDay]=useState();
  // const currentDateAndTime=new Date();
  useEffect(()=>{
  const currentHour=new Date().getHours();
  if(currentHour>=3||currentHour<=11){
    setCurrentTimeOFTheDay(MORNING);
  }
  else if(currentHour>=11||currentHour<15){
    setCurrentTimeOFTheDay(AFTERNOON);
  }
  else if(currentHour>=15||currentHour<22){
    setCurrentTimeOFTheDay(EVENING);
  }
  else{
    setCurrentTimeOFTheDay(NIGHT);
  }
    // console.log(currentDateAndTime.getHours())
  },[]);
  switch(currentTimeOfTheDay){
    case MORNING:
      return <div className='morning'>
        <h1>GOOD Morning :)</h1>
      </div>
    case AFTERNOON:
        return <div className='morning'>
          <h1>GOOD Afternoon :(</h1>
        </div>
    case EVENING:
      return <div className='morning'>
        <h1>GOOD Evening :)</h1>
      </div>    
    case NIGHT:
          return <div className='morning'>
            <h1>GOOD Night :|</h1>
          </div>
    default :
    throw new Error("Invalid Time") ;     
  }
}

export default App;
