import React, { useState} from 'react';
import './App.css';
import {Data} from './data'
import NavBar from './components/NavBar';
import Card from './components/Card';

const App = ()  => {

  const [data, setData] = useState(Data);
  const [query, setQuery] = useState([]);

  const handleClick = (e) => {
    e.persist()
    setQuery(queryText => [e.target.value, ...queryText])
    filterFunction()
  }

  const filterFunction = () => {
    const filtered = data.filter(job => query.length ?
      query.includes(job.role) ||
      query.includes(job.level) ||
      job.tools.some(tool => query.includes(tool)) ||
      job.languages.some(language => query.includes(language))
      : data
    )

    console.log(filtered);
    return (
      <div className='modal'>
        <div className='filter-container'>
          {query.map(queryText => <button className={`card-button-label ${queryText}`} key={queryText}>{queryText}</button>)}
        </div>
      </div>
    )
  }
  return (
    <div className="App">
      <NavBar />
      <div className='job-listings-container'>
        {data.map(job => (
          job.featured ? <Card key={job.id} data={job} className={'featured-job'} onClickFunction={handleClick} /> : <Card key={job.id} data={job} onClickFunction={handleClick} />
          
        ))}
      </div>
    </div>
  );
};

export default App;
