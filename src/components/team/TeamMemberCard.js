import React from 'react';
import './TeamMemberCard.css';
import team from '../assets/images/house6.jpg';
import girlpic from '../assets/images/teamgirl.jpg';

const TeamMemberCard = () => {
  return (
    <div className="team-card">
      <img
        className="team-image"
        src={team}
        alt="Team Member Background"
      />
      <div className="team-info">
        <img
          className="profile-image"
          src={girlpic}
          alt="Dianne Russell"
        />
        <h3 className="team-name">Dianne Russell</h3>
        <p className="team-description">
          More than 20 years of experience in the field of architecture and has worked on project up to 100+.
        </p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
