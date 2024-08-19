import React, { useState } from 'react';
import './MoodTracker.css';

const MoodTracker = () => {
  // State to manage selected moods and journal entry
  const [selectedMoods, setSelectedMoods] = useState([]);
  const [otherMood, setOtherMood] = useState('');
  const [journalEntry, setJournalEntry] = useState('');

  // Function to handle mood selection
  const handleMoodSelection = (mood) => {
    // Check if mood is already selected
    if (selectedMoods.includes(mood)) {
      // Remove mood from selected moods
      setSelectedMoods(selectedMoods.filter((m) => m !== mood));
    } else {
      // Add mood to selected moods
      setSelectedMoods([...selectedMoods, mood]);
    }
  };

  // Function to handle "Other" mood input
  const handleOtherMoodChange = (event) => {
    setOtherMood(event.target.value);
  };

  // Function to add "Other" mood to selected moods
  const handleAddOtherMood = () => {
    if (otherMood.trim() !== '') {
      setSelectedMoods([...selectedMoods, otherMood.trim()]);
      setOtherMood('');
    }
  };

  // Function to handle journal entry input
  const handleJournalEntryChange = (event) => {
    setJournalEntry(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = () => {
    // Here you can implement logic to handle form submission, e.g., send to backend
    console.log(`Selected moods: ${selectedMoods}`);
    console.log(`Journal entry: ${journalEntry}`);
    // Reset selected moods and journal entry after submission if needed
    setSelectedMoods([]);
    setOtherMood('');
    setJournalEntry('');
  };

  return (
    <div className="mood-tracker">
      <h2>Mood Tracker</h2>
      <p>Select all the moods that describe how you feel:</p>
      <div className="mood-options">
        {/* Buttons for predefined moods */}
        <button
          className={`mood-option ${selectedMoods.includes('happy') ? 'selected' : ''}`}
          onClick={() => handleMoodSelection('happy')}
        >
          😊 Happy
        </button>
        <button
          className={`mood-option ${selectedMoods.includes('sad') ? 'selected' : ''}`}
          onClick={() => handleMoodSelection('sad')}
        >
          😢 Sad
        </button>
        <button
          className={`mood-option ${selectedMoods.includes('angry') ? 'selected' : ''}`}
          onClick={() => handleMoodSelection('angry')}
        >
          😡 Angry
        </button>
        <button
          className={`mood-option ${selectedMoods.includes('calm') ? 'selected' : ''}`}
          onClick={() => handleMoodSelection('calm')}
        >
          😌 Calm
        </button>
        <button
          className={`mood-option ${selectedMoods.includes('anxious') ? 'selected' : ''}`}
          onClick={() => handleMoodSelection('anxious')}
        >
          😰 Anxious
        </button>
        <button
          className={`mood-option ${selectedMoods.includes('grateful') ? 'selected' : ''}`}
          onClick={() => handleMoodSelection('grateful')}
        >
          😌 Grateful
        </button>
        <button
          className={`mood-option ${selectedMoods.includes('proud') ? 'selected' : ''}`}
          onClick={() => handleMoodSelection('proud')}
        >
          🌟 Proud
        </button>
        <button
          className={`mood-option ${selectedMoods.includes('bored') ? 'selected' : ''}`}
          onClick={() => handleMoodSelection('bored')}
        >
          😑 Bored
        </button>
        {/* <button
          className={`mood-option ${selectedMoods.includes('guilt') ? 'selected' : ''}`}
          onClick={() => handleMoodSelection('guilt')}
        >
          😔 Guilt
        </button> */}
        {/* <button
          className={`mood-option ${selectedMoods.includes('shame') ? 'selected' : ''}`}
          onClick={() => handleMoodSelection('shame')}
        >
          😳 Shame
        </button>
        <button
          className={`mood-option ${selectedMoods.includes('loved') ? 'selected' : ''}`}
          onClick={() => handleMoodSelection('loved')}
        >
          ❤️ Loved
        </button> */}
      </div>

      {/* Input for "Other" mood */}
      <div className="other-mood">
        <input
          type="text"
          value={otherMood}
          onChange={handleOtherMoodChange}
          placeholder="Type another mood..."
        />
        <button onClick={handleAddOtherMood}>Add</button>
      </div>

      {/* Journal entry textarea always visible */}
      <div className="journal-entry">
        <h3>Journal Entry</h3>
        <textarea
          rows="5"
          value={journalEntry}
          onChange={handleJournalEntryChange}
          placeholder="Write about your feelings, thoughts, or experiences..."
        />
      </div>

      {/* Submit button */}
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default MoodTracker;
