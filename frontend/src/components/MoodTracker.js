// src/components/MoodTracker.js
import React, { useState } from 'react';
import axios from 'axios';

const MoodTracker = ({ onSuccess }) => {
  const [mood, setMood] = useState('');

  const handleMoodSubmit = () => {
    axios.post('http://localhost:5000/api/mood', { mood })
      .then(response => {
        console.log(response.data);
        onSuccess(); // Trigger parent callback to refresh recommendations
      })
      .catch(error => {
        console.error('There was an error submitting the mood!', error);
      });
  };

  return (
    <div>
      <h3>Log your mood</h3>
      <input type="text" value={mood} onChange={(e) => setMood(e.target.value)} />
      <button onClick={handleMoodSubmit}>Submit</button>
    </div>
  );
};

export default MoodTracker;
