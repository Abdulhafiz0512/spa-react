import React from 'react';
import Card from './Card';
import './Services.css';
import Tag from './Tag';
const Services = () => {
  return (
    <div className="services">
      <img src="/public/Rectangle 20.png" alt="" />
      <div className="tags_top">
      <Tag title="Project Plan"></Tag>
      <Tag title="Project Plan"></Tag>
      <Tag title="Project Plan"></Tag>
      </div>
      <div className="tags_bottom">
      <Tag title="2d/3d Art Work"></Tag>
      <Tag title="Interior Work"></Tag>   
      <Tag title="Decoration Work"></Tag>
      </div>
    </div>
  );
};

export default Services;
