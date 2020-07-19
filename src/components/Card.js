import React from 'react';
import PropTypes from 'prop-types';
import image from '../images/account.svg';

const Card = ({data, className}) => {

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
            <button className='card-button-label'>{data.role}</button>
            {data.languages.map(language => (
              <button className='card-button-label'>{language}</button>
            ))}
            {data.tools.map(tool => (
              <button className='card-button-label'>{tool}</button>
            ))}
          </div>
        </div>
        
      </div>
  )
}

Card.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array
}

Card.defaultProps = {
  className: ''
}

export default Card;