import {useState, useEffect} from 'react';

import './App.css';

function App() {

  const [timer, setTimer] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const handleReset = () => {
    setTimer(false)
    setSeconds(0)
    secondHand.style.transform = `rotate(90deg)`;
  }

  
  const handleStart = () => setTimer(prevTimer => !prevTimer);
  const timer_started_message = timer ? 'Stop Timer' : 'Start Timer';
  const secondHand = document.querySelector('.second-hand');
  const secondsDegrees = ((seconds / 60) * 360) + 90;


  useEffect(() => {
    let clock = null;
    if (timer) {
      clock = setInterval(() => {
        setSeconds(seconds => seconds + 1);
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
      }, 1000);
    } 
    return () => {
      clearInterval(clock);
    }
  }, [timer, seconds])
    
  return (
    <div className="App">
      <div className="wrap">
        <div class="clock">
            <div class="clock-face">
              <div class="hand second-hand"></div>
              <div className="circle">
              <div className="time">{seconds}</div>
              </div>
            </div>
        </div>
        <div>
          <button onClick={handleStart}>{timer_started_message}</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
