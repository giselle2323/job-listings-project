import React, { useState} from 'react';
import './App.css';
import {Data} from './data'
import NavBar from './components/NavBar';
import Card from './components/Card';

const App = ()  => {

  const [data, setData] = useState(Data);
  const [query, setQuery] = useState([]);

  const handleClick = (e) => {
    const buttonValue = e.target.value;
    const val = query.filter(text => text === buttonValue)
    let filterVal = query;
    if (val.length === 0) {
      filterVal = query.concat(buttonValue)
      setQuery(filterVal)
    }

    filterFunction(filterVal)
  }
  const removeButton = (e) => {
    let buttonValue = e.target.value;
    let filteredItems = query.filter(text => text !== buttonValue)
    console.log(filteredItems, 'remove')
    setQuery(filteredItems);

  }
  const filterFunction = (filterVal) => {
    setData(data);
    const filtered = data.filter(job => filterVal.length ?
      filterVal.includes(job.role) ||
      filterVal.includes(job.level) ||
      job.tools.some(tool => filterVal.includes(tool)) ||
      job.languages.some(language => filterVal.includes(language))
      : data
    )
    setData(filtered);
    console.log(filtered);
  }
  console.log(query, 'outside')
  return (
    <div className="App">
      <NavBar />
      {/* Correction */}
      {
        query.length > 0 && (
            <div className='filter-container'>
              {query.map((queryText, key) => <button className={`card-button-label ${queryText}`} key={key} value={queryText}>{queryText} <span className='close__button' onClick={removeButton}>X</span> </button>)}
            </div>
        )
      }
      <div className='job-listings-container'>
        {data.map(job => (
          job.featured ? <Card key={job.id} data={job} className={'featured-job'} onClickFunction={handleClick} /> : <Card key={job.id} data={job} onClickFunction={handleClick} />

        ))}
      </div>
    </div>
  );
};

export default App;
