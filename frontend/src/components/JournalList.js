// src/components/JournalList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JournalList = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/journal')
      .then(response => {
        setEntries(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the journal entries!', error);
      });
  }, []);

  return (
    <div>
      <h3>Journal Entries</h3>
      <ul>
        {entries.map(entry => (
          <li key={entry.id}>
            <p>{entry.entry}</p>
            <small>{new Date(entry.createdAt).toLocaleDateString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JournalList;
