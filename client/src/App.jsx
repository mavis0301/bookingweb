//import logo from './logo.svg';
import './app.scss';
import Home from './pages/Home';
import HotelList from './pages/HotelList';
import Hotel from './pages/Hotel';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Article from './pages/Article';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hotelList' element={<HotelList />} />
          <Route path='/hotels/:id' element={<Hotel />} />
          <Route path='/article' element={<Article />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
