import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Blog.css' // Arrow icon


const BlogSection = () => {
    const blogPosts = [
      {
        title: 'Winter Festivals in Columbus',
        description: 'Explore the exciting winter festivals happening around the city...',
        image: 'https://via.placeholder.com/250x150?text=Festival',
        link: '#',
      },
      {
        title: 'Top Parks to Visit This Winter',
        description: 'Discover the best parks to visit during the winter months...',
        image: 'https://via.placeholder.com/250x150?text=Park',
        link: '#',
      },
      {
        title: 'Columbus Food Scene: Winter Edition',
        description: 'Warm up with some of the best comfort food in Columbus...',
        image: 'https://via.placeholder.com/250x150?text=Food',
        link: '#',
      },
      {
        title: 'Indoor Activities for Cold Days',
        description: 'Don’t let the cold keep you indoors—check out these indoor spots...',
        image: 'https://via.placeholder.com/250x150?text=Indoor',
        link: '#',
      },
    ];
  
    return (
      <div className="blog-section">
        <h2>Discover Columbus This Season</h2>
        <div className="cards-container">
          {blogPosts.map((post, index) => (
            <div key={index} className="card">
              <img src={post.image} alt={post.title} className="card-image" />
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <a href={post.link} className="read-more">
                <span>Read More</span> <FaArrowRight />
              </a>
            </div>
          ))}
        </div>
        <div className="view-more-container">
          <button className="view-more-button">View More Blogs</button>
        </div>
      </div>
    );
  };
  
  export default BlogSection;
