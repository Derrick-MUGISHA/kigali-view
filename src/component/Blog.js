import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Blog.css';

const BlogSection = () => {
  const blogPosts = [
    {
      title: 'Top Cultural Festivals in Rwanda',
      description: 'Experience the vibrant culture of Rwanda through its festivals, from Umuganura to Kwita Izina...',
      image: 'https://media.licdn.com/dms/image/v2/D4D12AQHddXSv2IOUUQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1662536049497?e=1743638400&v=beta&t=ciAOsnCpa4QZ98yFFLNsPLFssMNMmoK4QAP97ftOsBg',
      link: '#',
    },
    {
      title: 'Must-Visit National Parks in Rwanda',
      description: 'Explore Rwanda’s stunning national parks, including Volcanoes, Akagera, and Nyungwe...',
      image: 'data:image/jpeg;base64,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',
      link: '#',
    },
    {
      title: 'Rwandan Cuisine: A Food Lover’s Guide',
      description: 'Discover the flavors of Rwanda, from hearty dishes like Ugali and Isombe to local coffee...',
      image: 'https://paanvuusafaris.com/wp-content/uploads/2024/03/Discovering-the-Culinary-Delights-of-Rwanda-Paanvuu-Safaris.jpeg.webp',
      link: '#',
    },
    {
      title: 'Indoor Activities in Kigali for Rainy Days',
      description: 'Don’t let the rain stop you—visit Kigali’s museums, art galleries, and cozy cafes...',
      image: 'https://www.carolinesyrup.com/content/images/size/w1000/2022/12/PXL_20220629_132753005.jpg',
      link: '#',
    },
    {
      title: 'Gorilla Trekking: A Once-in-a-Lifetime Experience',
      description: 'Everything you need to know about trekking to see Rwanda’s majestic mountain gorillas...',
      image: 'https://www.onthegotours.com/cdn-cgi/image/f=auto,q=80,w=506/repository/Male-gorilla-walking-through-forest-660831537271099.jpg',
      link: '#',
    },
    {
      title: 'Exploring Kigali’s Art and Music Scene',
      description: 'Dive into Kigali’s creative side with visits to Inema Arts Center and local music events...',
      image: 'https://africantravelinc.com/sites/default/files/Kigali%20Art%20x850.png',
      link: '#',
    },
    {
      title: 'Sustainable Tourism in Rwanda',
      description: 'Learn how Rwanda is leading the way in eco-friendly and sustainable tourism...',
      image: 'https://visitrwanda.com/wp-content/uploads/2020/03/IMG-20200310-WA0003-768x480.jpg',
      link: '#',
    },
    {
      title: 'Hidden Gems in Rwanda: Off-the-Beaten-Path',
      description: 'Discover lesser-known destinations like Lake Kivu, Musanze Caves, and more...',
      image: 'https://m.mightytravels.com/caches/79aa6a81147c9d542251b5f0837e6def---991.jpg',
      link: '#',
    },
  ];

  return (
    <div className="blog-section">
      <h2>Discover Rwanda</h2>
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