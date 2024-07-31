import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const Sidebar1 = () => {
  const categories = ['General', 'Technology', 'Entertainment', 'Sports', 'Politics', 'Fashion'];
  return (
    <div className="sidebar">
      <Button variant="primary" className="sidebar-button">
        Create a Post
      </Button>
      <Button variant="secondary" className="sidebar-button">
        My Posts
      </Button>
      <h5>Categories</h5>
      <ListGroup>
        {categories.map((category, index) => (
          <ListGroup.Item key={index}>{category}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Sidebar1;
