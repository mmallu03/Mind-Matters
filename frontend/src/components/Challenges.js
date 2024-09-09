// src/components/Challenges.js
import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import challengesImage from '../assets/challenges-banner.jpg';
import axios from 'axios';
import SubmitProof from './SubmitProof';
import './Challenges.css';

const Challenges = () => {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/challenges')
      .then(response => {
        setChallenges(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the challenges!', error);
      });
  }, []);

  return (
    <div>
      <Banner 
        image={challengesImage} 
        title="Take on the Challenge" 
        subtitle="Boost your mental wellness with daily tasks and earn rewards along the way!" 
      />
      <h3>30-Day Self-Love Challenge</h3>
      <ul>
        {challenges.map(challenge => (
          <li key={challenge.id}>
            Day {challenge.day}: {challenge.task}
          </li>
        ))}
      </ul>
      <h3>Submit Proof</h3>
      <SubmitProof /> {/* Add the SubmitProof component here */}
    </div>
  );
};

export default Challenges;
