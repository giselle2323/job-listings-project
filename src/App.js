import React, { useState} from 'react';
import './App.css';
import {Data} from './data'
import NavBar from './components/NavBar';
import Card from './components/Card';

const App = ()  => {

  const [data, setData] = useState(Data);
  const [filterArray, setFilterArray] = useState([]);

  const handleClick = (e) => {
    setFilterArray(filterArray.concat(1))
    console.log(filterArray)
    e.preventDefault();
    // const filtered = data.filter(job => job.languages)
    // setData(filtered);
  }
  return (
    <div className="App">
      <NavBar />
      <div className='filter-container'>

      </div>
      <div className='job-listings-container'>
        {data.map(job => (
          job.featured ? <Card key={job.id} data={job} className={'featured-job'} onClickFunction={handleClick} />  : <Card key={job.id} data={job} />
          
        ))}
      </div>
    </div>
  );
}

export default App;
