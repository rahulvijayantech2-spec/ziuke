import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
     <img 
  src="/my-photo.jpg" 
  alt="Rahul Vijayan" 
  style={{ 
    borderRadius: '50%', 
    width: '150px', 
    height: '150px', 
    objectFit: 'cover', 
    marginBottom: '1rem' 
  }} 
/>
      <h1>Rahul Vijayan</h1>
      <h2>Software Developer & React Enthusiast</h2>
      <p style={{ maxWidth: '600px', margin: '1rem auto' }}>
        Welcome to my professional portfolio website built using React.js.
      </p>
      
      <div style={{ margin: '20px 0' }}>
        <button onClick={() => navigate('/about')} className="btn">View My Work</button>
        <button onClick={() => navigate('/contact')} className="btn" style={{ marginLeft: '10px' }}>Contact Me</button>
      </div>

      <section style={{ marginTop: '40px' }}>
        <h3>Technical Skills</h3>
        <p>React.js, JavaScript, HTML/JSX, CSS, Python, C, MATLAB</p>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h3>Featured Projects</h3>
        <p>Personal Portfolio Website - A responsive 3-page web application with routing and form validation.</p>
      </section>
    </div>
  );
}

export default Home;