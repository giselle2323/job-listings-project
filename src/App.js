import React, { useState} from 'react';
import './App.css';
import {Data} from './data'
import NavBar from './components/NavBar';
import Card from './components/Card';

const App = ()  => {

  const [data, setData] = useState(Data);
  const [filterArray, setFilterArray] = useState([]);

  const handleClick = (e) => {
    e.persist()
    setFilterArray(filterArray => [e.target.value, ...filterArray])
    const filtered = data.filter(job => filterArray.includes(job.role))
    setData(filtered);
    console.log(filtered)
  }
  console.log(filterArray, data)
  return (
    <div className="App">
      <NavBar />
      <div className='filter-container'>

      </div>
      <div className='job-listings-container'>
        {data.map(job => (
          job.featured ? <Card key={job.id} data={job} className={'featured-job'} onClickFunction={handleClick} /> : <Card key={job.id} data={job} onClickFunction={handleClick} />
          
        ))}
      </div>
    </div>
  );
}

export default App;
