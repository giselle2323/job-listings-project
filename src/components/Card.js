import React from 'react';
import PropTypes from 'prop-types';
import image from '../images/account.svg';

const Card = ({data, className, onClickFunction}) => {
  const handleClick = (e) => {
    onClickFunction(e)
  }
  return (
      <div className={`card ${className}`}>
        <img className='card-image' src={image} alt="account" />
        <div className='card-body'>
          <div className='labels'>
            <h4 className='company-name'>{data.company}</h4>
            {data.new ? <button className='card-label new-btn'>NEW!</button> : ''}
            {data.featured ? <button className='card-label featured-btn'>FEATURED</button> : ''}     
          </div>
          <h3 className='card-job-position'>{data.position}</h3>
          <div className='card-bottom'>
            <h3 className='posted-at'>{data.postedAt}</h3>
            <ul className='card-list'>
            <li className='contract'> <span className='card-bullet'>&bull;</span> {data.contract}</li>
            <li className='location'><span className='card-bullet'>&bull;</span>{data.location}</li>
            </ul>
          </div>
          <hr className='card-horizontal-rule'/>
          <div className='card-bottom-buttons'>
            <button className='card-button-label' value={data.role} onClick={handleClick}>{data.role}</button>
            <button className='card-button-label' value={data.level} onClick={handleClick}>{data.level}</button>
            {data.languages.map((language, idx) => (
              <button key={idx} className='card-button-label' value={language} onClick={handleClick}>{language}</button>
            ))}
            {data.tools.map((tool, idx) => (
              <button key={idx} className='card-button-label' value={tool} onClick={handleClick}>{tool}</button>
            ))}
          </div>
        </div>
        
      </div>
  )
}

Card.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  onClickFunction : PropTypes.func
}

Card.defaultProps = {
  className: ''
}

export default Card;