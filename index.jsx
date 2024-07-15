import React from 'react';
import ReactDOM from 'react-dom/client';
import Info from './Components/Info'

function App() {
  return (
    <div className='main'>
     <Info /> 
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 