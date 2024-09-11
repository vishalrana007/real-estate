import React from 'react';
import TeamMemberCard from './TeamMemberCard';
import './TeamSection.css'; 

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="team-header">
        <h2>OUR TEAM MEMBERS</h2>
        <h3>Lorem Ipsum Dip Sum Dip Gim Gil Mer</h3>
        <p>
        Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac malesuada leo volutpat.
        </p>
      </div>
      <div className="team-content">
        <div className="team-card-wrapper">
          <TeamMemberCard />
        </div>
        <div className="team-details">
          <h3>Lorem Ipsum Dip Sum Dip Gim Gil Mer</h3>
          <p>
            All our teams are professional and competent in their fields and will help you realize your dream building
            with excellent results. More than 20 years of experience in the field of architecture and has worked on
            projects up to 100+.
          </p>
          <div className="team-buttons">
            <button className="see-team-button">See All Team</button>
            <button className="how-it-works-button">How it works &rarr;</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
