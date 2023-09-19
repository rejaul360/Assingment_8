import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';

import { useState } from 'react';
import Blog from './Component/Blog/Blog';
import SideCart from './Component/SideCart/SideCart';

function App() {
  const [bookMarkItem, setBookmarkItem] = useState([]);


  const [watchTime, setWatchTime] = useState("")

  const handleWathTime = (time) => {
    const previousTime = JSON.parse(localStorage.getItem("watchTime"))
    if (previousTime) {
      const sum = previousTime + time;
      localStorage.setItem("watchTime", sum);
      setWatchTime(sum)
    } else {
      localStorage.setItem("watchTime", time);
      setWatchTime(time)
    }
  }


  return (
    <div className="App">
      <div>
        <Navbar></Navbar>
      </div>
      <div className='main row'>
        <div className='col-md-8'>
          <Home
            bookMarkItem={bookMarkItem}
            setBookmarkItem={setBookmarkItem}
            handleWathTime={handleWathTime}
          ></Home>
        </div>
        <div className='col-md-4 '>
          <SideCart
            bookMarkItem={bookMarkItem}
            watchTime={watchTime}
            key={watchTime.id}
          ></SideCart>
        </div>
      </div>
      <Blog></Blog>

    </div>
  );
}

export default App;
