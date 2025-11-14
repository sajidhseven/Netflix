import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfileSelection.css';
import Home from './Home';

const ProfileSelection = () => {
  const navigate = useNavigate();

  const profiles = [
    {
      id: 1,
      name: 'Recruiter',
      image: 'https://www.pinterest.com/pin/639018634670352062/',
      route: '/home'
    },
    {
      id: 2,
      name: 'Developer',
      image: 'https://www.pinterest.com/pin/214484000998761471/',
      route: '/home'
    },
    {
      id: 3,
      name: 'Stalker',
      image: 'https://www.pinterest.com/pin/375909900167651520/',
      route: '/home'
    }
  ];

 const selectProfile = (profile) => {
  console.log(`Storing profile: ${profile.name}`); // Add this
  sessionStorage.setItem('selectedProfile', profile.name);
  navigate(profile.route);
};


  return (
    <div className="browse-container">
      <div className="browse-header">
        <h1 className="browse-title">Who's Watching?</h1>
        {/* <p className="browse-subtitle">Select your profile to continue</p> */}
      </div>

      <div className="profiles-container">
        {profiles.map((profile) => (
          <div 
            key={profile.id}
            className="profiles-card" 
            onClick={() => selectProfile(profile)}
            
          >
            <img 
              src={profile.image} 
              alt={`${profile.name} Profile`} 
              className="profiles-avatar"
            />
            <p className="profiles-name">{profile.name}</p>
          </div>
        ))}
      </div>

      {/* <button className="manage-profiles-btn">MANAGE PROFILES</button> */}
    </div>
  );
};

export default ProfileSelection;

