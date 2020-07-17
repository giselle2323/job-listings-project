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