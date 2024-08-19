// src/components/Challenges.js
import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import challengesImage from '../assets/challenges-banner.jpg';
import axios from 'axios';
import SubmitProof from './SubmitProof'; // Import the SubmitProof component

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
        title="Challenges" 
        subtitle="Explore our curated list of mental health resources." 
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
