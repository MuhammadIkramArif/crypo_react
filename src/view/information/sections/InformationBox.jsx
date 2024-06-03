import React from 'react';
import { useLocation } from 'react-router-dom';

const InformationBox = ({ item, className }) => {
  const { hash } = useLocation();
  return (
    <div id={item.id} className='scroll-settings'>
      <div
        key={item.id}
        className={`p-4 box-information mb-3 ${hash === item.set && className}`}
      >
        <div className='heading-secondary-2 fw-bold mb-2'>{item.title}</div>
        <p className='mb-0'>{item.text}</p>
      </div>
    </div>
  );
};

export default InformationBox;
