import React from 'react';

function About() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2>About Me</h2>
      <p style={{ margin: '1rem 0' }}>I am an engineering student dedicated to software engineering and modern development frameworks.</p>
      
      <h3>Educational Qualification</h3>
      <p>B.Tech in Computer Engineering - Christ College of Engineering (Autonomous),Irinjalakuda (APJ Abdul Kalam Technological University)</p>

      <h3 style={{ marginTop: '20px' }}>Technical Skills</h3>
      <p>JavaScript, React.js, Python, C, MATLAB, Node.js, and Networking (VLSM).</p>

      <h3 style={{ marginTop: '20px' }}>Work Experience & Workshops</h3>
      <ul>
        <li>Participated in Mercedes-Benz Automotive Workshop & DETROIT technical event.</li>
        <li>Completed Agentic AI workshops and national-level hackathons.</li>
      </ul>

      <h3 style={{ marginTop: '20px' }}>Certifications & Achievements</h3>
      <p>Active participant in technical coding symposiums and collaborative software engineering projects.</p>

      <h3 style={{ marginTop: '20px' }}>Career Interests & Goals</h3>
      <p>Aspiring to build robust full-stack applications, master web technologies, and contribute to open-source software ecosystems.</p>
    </div>
  );
}

export default About;