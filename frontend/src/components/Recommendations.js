// src/components/Recommendations.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    // Fetch recommendations from the backend
    axios.get('http://localhost:5000/api/recommendations')
      .then(response => {
        setRecommendations(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching recommendations!', error);
      });
  }, []);

  return (
    <div>
      <h3>Recommendations</h3>
      <ul>
        {recommendations.map((rec, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: rec }}></li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;
