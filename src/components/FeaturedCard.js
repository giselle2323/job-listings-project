import React from 'react';
import image from '../images/account.svg';

const FeaturedCard = ({data}) => (
  <div className='featured-card'>
    <img className='card-image' src={image} alt="account" />
    <div className='card-banner'>
    </div>
    <div className='card-body'>
      <div className='labels'>
        <h4 className='comapany-name'>{data.company}</h4>
        <button className='card-label'>{data.company}</button>
        <button className='card-label'>{data.company}</button>
      </div>

    </div>
  </div>
)

export default FeaturedCard;