import React from 'react';
import './Blog.css';
import house4 from '../assets/images/house10.jpg';
import house8 from '../assets/images/house8.jpg';
import house9 from '../assets/images/house9.jpg';
const BlogsPosts = () => {
  const blogs = [
    {
      id: 1,
      date: '28 Tue',
      title: 'Top 10 Home Buying Mistakes to Avoid',
      description: 'Etiam eget elementum elit. Aenean dignissim dapibus vestibulum',
      image:house4,
      author: 'Tracey Wilson',
      datePublished: 'August 20, 2022',
    },
    {
      id: 2,
      date: '08 Mon',
      title: 'How to Stage Your Home for a Quick Sale',
      description: 'Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc.',
    image:house8,
      author: 'Tracey Wilson',
      datePublished: 'August 20, 2022',
    },
    {
      id: 3,
      date: '26 Wed',
      title: '5 Tips for First-Time Home Sellers',
      description: 'In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.',
      image:house9,
      author: 'Tracey Wilson',
      datePublished: 'August 20, 2022',
    }
  ];

  return (
    <section className="blogs-posts">
      <div className="heading">
        <h2>Latest Blogs & Posts</h2>
        <p>Donec Porttitor Euismod Dignissim. Nulla A Lacinia Ipsum, Nec Dignissim Purus.</p>
      </div>

      <div className="blogs-container">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <div className="date-badge">{blog.date}</div>
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <div className="blog-footer">
                <span className="author">{blog.author}</span>
                <span className="date">{blog.datePublished}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogsPosts;
