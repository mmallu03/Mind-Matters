import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import rewardsImage from '../assets/rewards-banner.jpg'; // Update path if needed
import reward1Image from '../assets/reward1.jpg'; // Import images statically
import reward2Image from '../assets/reward2.jpg'; // Import images statically
import './RewardsHub.css'; // Ensure you have the CSS file for styling

const RewardsHub = () => {
  // Example state for rewards and progress (this can be fetched from an API)
  const [rewards, setRewards] = useState([
    { id: 1, name: 'Gift Card', description: 'Earn this gift card by completing the 30-day challenge!', image: reward1Image, progress: 14, total: 30 },
    { id: 2, name: 'Exclusive Content', description: 'Unlock exclusive content after reaching 500 points.', image: reward2Image, progress: 400, total: 500 },
    // Add more rewards as needed
  ]);

  useEffect(() => {
    // Fetch user progress from backend or calculate based on user activity
  }, []);

  const calculateProgressPercentage = (progress, total) => {
    return (progress / total) * 100;
  };

  return (
    <div>
      <Banner 
        image={rewardsImage} 
        title="Rewards Hub" 
        subtitle="Earn rewards as you make progress on your mental health journey!" 
      />

      <div className="rewards-container">
        <section className="reward-category">
          <h2>Available Rewards</h2>
          <ul>
            {rewards.map((reward) => (
              <li key={reward.id} className="reward-item">
                <img src={reward.image} alt={reward.name} />
                <div className="reward-details">
                  <h3>{reward.name}</h3>
                  <p>{reward.description}</p>
                  <div className="reward-progress">
                    <div className="progress-bar">
                      <div 
                        className="progress" 
                        style={{ width: `${calculateProgressPercentage(reward.progress, reward.total)}%` }}>
                      </div>
                    </div>
                    <p>{reward.progress}/{reward.total}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default RewardsHub;
