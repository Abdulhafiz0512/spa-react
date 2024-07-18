import React from 'react';
import Card from './Card';
import './Project.css';

const Project = () => {
  return (
    <div className="project">
      <img src="/public/project.png" alt="" />
      <div className="cards">
        <Card src="/public/Rectangle 27.png"></Card>
        <Card src="/public/Rectangle 28.png"></Card>
      </div>
    </div>
  );
};

export default Project;
