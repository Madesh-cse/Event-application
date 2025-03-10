import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import PaperPresentation from './Pages/Events/PaperPresntation';
import CodeRescue from './Pages/Events/CodeRescue';
import WebWhiz from './Pages/Events/WebWhiz';
import Cinematica from './Pages/Events/Cinematica';
import FunFinity from './Pages/Events/FunFinity';
import SharkTank from './Pages/Events/SharkTank';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='events/Presentation-BlitZ' element={<PaperPresentation/>}/>
        <Route path='events/CodeRescue' element={<CodeRescue/>}/>
        <Route path='events/WebWhiz' element={<WebWhiz/>}/>
        <Route path='events/Cinematica' element={<Cinematica/>}/>
        <Route path='events/FunFinity-Wars' element={<FunFinity/>}/>
        <Route path ='events/SharK-Tank' element={<SharkTank/>}/>
      </Routes>
  </Router>
  )
  
}

export default App;
