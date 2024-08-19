// src/components/Resources.js
import React from 'react';
import Banner from './Banner';
import resourcesImage from '../assets/resources-banner.jpg'; // Import your banner image
import resourcesData from '../resourcesData'; // Import your resources data
import promptsData from '../promptsData'; // Import your prompts data
import articlesData from '../articlesData'; // Import your articles data
import videosData from '../videosData'; // Import your articles data
import workoutsData from '../workoutsData'; // Import your articles data
import './Resources.css'; // Import your CSS file

const Resources = () => {
  return (
    <div>
      <Banner 
        image={resourcesImage} 
        title="Welcome to our library!" 
        subtitle="Explore our curated list of mental health resources." 
      />

      <div className="resources-content">
        {/* Resources Section */}
        <h3>Hotlines</h3>
        <ul>
          {resourcesData.map(resource => (
            <li key={resource.id}>
              <a href={resource.link} target="_blank" rel="noopener noreferrer">
                {resource.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Articles Section */}
        <h3>Articles</h3>
        <ul>
          {articlesData.map(article => (
            <li key={article.id}>
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Prompts Section */}
        <h3>Journal Prompts</h3>
        <ul>
          {promptsData.map(prompt => (
            <li key={prompt.id}>
              <a href={prompt.link} target="_blank" rel="noopener noreferrer">
                {prompt.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Videos Section */}
        <h3>Educational Videos</h3>
        <ul>
          {videosData.map(video => (
            <li key={video.id}>
              <a href={video.link} target="_blank" rel="noopener noreferrer">
                {video.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Workouts Section */}
        <h3>Guided Workouts</h3>
        <ul>
          {workoutsData.map(workout => (
            <li key={workout.id}>
              <a href={workout.link} target="_blank" rel="noopener noreferrer">
                {workout.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resources;

