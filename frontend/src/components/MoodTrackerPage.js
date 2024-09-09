import React, { useState } from 'react';
import Banner from './Banner';
import moodTrackerImage from '../assets/moodtracker-banner.jpg';
import MoodTracker from './MoodTracker';
import JournalEntry from './JournalEntry';
import Recommendations from './Recommendations';

const MoodTrackerPage = () => {
  // State to trigger refresh of recommendations
  const [shouldRefreshRecommendations, setShouldRefreshRecommendations] = useState(false);

  // Function to handle mood submit success and trigger refresh
  const handleMoodSubmitSuccess = () => {
    setShouldRefreshRecommendations(true);
    // Reset the refresh flag after recommendations update
    setTimeout(() => setShouldRefreshRecommendations(false), 500);
  };

  return (
    <div>
      <Banner 
        image={moodTrackerImage} 
        title="Track Your Emotions" 
        subtitle="Reflect on your feelings and gain insights into your mental well-being." 
      />
      {/* Pass the success handler to MoodTracker */}
      <MoodTracker onSuccess={handleMoodSubmitSuccess} />
      <JournalEntry />
      {/* Pass the refresh flag to Recommendations */}
      <Recommendations refresh={shouldRefreshRecommendations} />
    </div>
  );
}

export default MoodTrackerPage;
