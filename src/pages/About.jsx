import React from 'react';
import { useLocation } from 'react-router-dom';

function About() {
  const location = useLocation();
  const { description, image, url } = location.state;
  return (
    <div>
      <p>{description}</p>
      <td onClick={() => window.open(url, '_blank')}>続きはこちら</td>
      <img src={image}></img>
    </div>
  );
}

export default About;
