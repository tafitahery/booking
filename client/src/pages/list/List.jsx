import './list.css';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function List() {
  const location = useLocation();
  const [destination, setDestinantion] = useState(location.state.destination);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="">Destiantion</label>
              <input type="text" />
            </div>
            <div className="lsItem">
              <label htmlFor="">Check-in Date</label>
              <span></span>
            </div>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  );
}
