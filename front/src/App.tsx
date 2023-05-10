import React from 'react';
import Calendar from './modules/Calendar';

function App() {
  return (
    <div className="w-screen h-screen justify-center items-center flex">
    
      <div className='container h-[640px] w-[1280px]'>
        <Calendar />
      </div>

    </div>
  );
}

export default App;
