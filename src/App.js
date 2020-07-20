import React, { useState} from 'react';
import './App.css';
import {Data} from './data'
import NavBar from './components/NavBar';
import Card from './components/Card';

function App() {

  const [data] = useState(Data);
  return (
    <div className="App">
      <NavBar />
      <div className='filter-container'>

      </div>
      <div className='job-listings-container'>
        {data.map(job => (
          job.featured ? <Card key={job.id} data={job} className={'featured-job'}/>  : <Card key={job.id} data={job} />
          
        ))}
      </div>
    </div>
  );
}

export default App;
