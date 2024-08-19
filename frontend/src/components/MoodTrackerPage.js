// src/components/MoodTrackerPage.js
import React from 'react';
import Banner from './Banner';
import moodTrackerImage from '../assets/moodtracker-banner.jpg';
import MoodTracker from './MoodTracker';
import JournalEntry from './JournalEntry';
import Recommendations from './Recommendations';

const MoodTrackerPage = () => {
  return (
    <div>
      <Banner 
        image={moodTrackerImage} 
        title="Mood Tracker" 
        subtitle="Explore our curated list of mental health resources." 
      />
      <MoodTracker />
      <JournalEntry />
      <Recommendations />
    </div>
  );
}

export default MoodTrackerPage;
