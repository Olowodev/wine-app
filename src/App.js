import './App.css';
import LeftContainer from './components/LeftContainer';
import RightContainer from './components/RightContainer';
import {useEffect, useRef, useState} from 'react'

function App() {

  const [screen, setScreen] = useState(0);
  const themes = ['first', 'second', 'third'];




  const Next = () => {
    if (screen < 2) {
      setScreen((lastScreen)=> lastScreen + 1)
    } else if (screen == 2) {
      setScreen(0)
    }

    document.body.classList.replace(themes[screen], themes[screen == 2 ? 0 : screen + 1])
  }

  const ChangeTheme = async () => {
    const red = document.getElementById('red');
    red.style.padding = '1500px'; 
     Next();
  }

  return (
    <div className="App grid grid-cols-4">
      <LeftContainer />
      <RightContainer />
      <div className='w-[2px] left-[90%] h-full bg-[#e5e7eb] absolute'></div>
      <div onClick={()=>Next()} className='cursor-pointer flex items-center justify-center border-2 z-10 rounded-100 absolute w-32 h-32 rightCircle top-[30%] left-[86%]'>
        {/*<div id='red' className='rounded-100 bg-red-600 w-10 h-10 z-0 absolute transition-all'></div>*/}
        <p className='z-10'>Next</p>
      </div>
      {/*{screen == 2 && <div onClick={()=>ChangeTheme()} className='cursor-pointer flex items-center justify-center border-slate-900 border-2 z-10 rounded-100 absolute w-32 h-32 bg-[#f8f4e5] top-[30%] left-[86%]'>
        <div id='red' className='text-white rounded-100 bg-red-600 w-10 h-10 absolute transition-all'></div>
        <p className='z-10'>Next</p>
      </div>}*/}
    </div>
  );
}

export default App;
