import React, { useState} from 'react';
import './App.css';
import {Data} from './data'
import NavBar from './components/NavBar';
import Card from './components/Card';

const App = ()  => {

  const [data, setData] = useState(Data);
  const [filterKey, setFilter] = useState([]);

  const handleClick = (e) => {
    setFilter([e.target.value])
    console.log(e.target.value)
    console.log(filterKey)
    const filtered = data.filter(job => filterKey.includes(job.role, console.log(job, job.role, job.tools.map(key => key) )))
    setData(filtered)
    console.log(filtered, filterKey)
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
