//import logo from './logo.svg';
import './app.scss';
import Home from './pages/Home';
import HotelList from './pages/HotelList';
import Hotel from './pages/Hotel';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hotelList' element={<HotelList />} />
          <Route path='/hotels/:id' element={<Hotel />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
