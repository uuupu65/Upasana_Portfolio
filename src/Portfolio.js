// import React, { useState, useEffect } from 'react';

// const Portfolio = () => {
//   const [activeTab, setActiveTab] = useState('home');
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);
//   const [code, setCode] = useState(`// Your code will appear here as you edit
// // Make changes in your VS Code and see them here`);

//   // Check system preference for dark mode
//   useEffect(() => {
//     if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//       setDarkMode(true);
//     }
//   }, []);

//   // Apply dark mode class to body
//   useEffect(() => {
//     if (darkMode) {
//       document.body.classList.add('dark-mode');
//     } else {
//       document.body.classList.remove('dark-mode');
//     }
//   }, [darkMode]);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   const projects = [
//     {
//       id: 1,
//       title: 'E-Commerce website',
//       description: 'A website build using html and css used for business.',
//       technologies: ['Html', 'CSS', 'js'],
//       image: 'https://via.placeholder.com/400x250/4361EE/FFFFFF?text=E-Commerce+Website'
//     },
//     {
//       id: 2,
//       title: 'React Task Manager',
//       description: 'A task management application with drag-and-drop functionality.',
//       technologies: ['React', 'JavaScript', 'CSS3'],
//       image: 'https://via.placeholder.com/400x250/7E57C2/FFFFFF?text=React+App'
//     },
//     {
//       id: 3,
//       title: 'University Database System',
//       description: 'A database management system for university records using SQL.',
//       technologies: ['SQL', 'Python', 'MySQL'],
//       image: 'https://via.placeholder.com/400x250/26A69A/FFFFFF?text=Database+System'
//     }
//   ];

//   const education = [
//     {
//       degree: 'Bachelor of Science in Computer Science and Artificial Intelligence',
//       institution: 'Sunway College',
//       year: '2024 - Present',
//       details: 'Relevant coursework: Data Structures, Algorithms, Machine Learning, Database Systems'
//     },
//     {
//       degree: 'High School (+2)',
//       institution: 'Uniglobe SS/College',
//       year: '2022 - 2024',
//       details: 'Science Stream with Computer Science'
//     }
//   ];

//   const skills = {
//     'Languages': ['Python', 'JavaScript', 'HTML/CSS', 'SQL'],
//     'Frameworks & Libraries': ['React', 'TensorFlow', 'Node.js'],
//     'Tools & Technologies': ['Git', 'VS Code', 'Jupyter Notebook']
//   };

//   // Simulate code updates
//   useEffect(() => {
//     const codeExamples = [
//       `function Welcome() {
//   return <h1>Hello, Upasana!</h1>;
// }`,
//       `class Portfolio extends React.Component {
//   render() {
//     return (
//       <div className="portfolio">
//         <Header />
//         <Projects />
//         <Contact />
//       </div>
//     );
//   }
// }`,
//       `const DataDisplay = ({ data }) => (
//   <div className="data-container">
//     {data.map(item => (
//       <DataCard key={item.id} item={item} />
//     ))}
//   </div>
// );`
//     ];

//     const interval = setInterval(() => {
//       const randomCode = codeExamples[Math.floor(Math.random() * codeExamples.length)];
//       setCode(randomCode);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className={`portfolio ${darkMode ? 'dark-mode' : ''}`}>
//       {/* Navigation */}
//       <header className="header">
//         <div className="container">
//           <div className="header-content">
//             <a href="#home" className="logo">Upasana Neupane</a>
//             <div className="header-controls">
//               <button className="dark-mode-toggle" onClick={toggleDarkMode}>
//                 {darkMode ? '☀️' : '🌙'}
//               </button>
//               <div className={`menu-btn ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </div>
//             </div>
//             <nav className={`nav ${menuOpen ? 'active' : ''}`}>
//               <ul>
//                 <li><a href="#home" className={activeTab === 'home' ? 'active' : ''} onClick={() => { setActiveTab('home'); setMenuOpen(false); }}>Home</a></li>
//                 <li><a href="#about" className={activeTab === 'about' ? 'active' : ''} onClick={() => { setActiveTab('about'); setMenuOpen(false); }}>About</a></li>
//                 <li><a href="#projects" className={activeTab === 'projects' ? 'active' : ''} onClick={() => { setActiveTab('projects'); setMenuOpen(false); }}>Projects</a></li>
//                 <li><a href="#education" className={activeTab === 'education' ? 'active' : ''} onClick={() => { setActiveTab('education'); setMenuOpen(false); }}>Education</a></li>
//                 <li><a href="#skills" className={activeTab === 'skills' ? 'active' : ''} onClick={() => { setActiveTab('skills'); setMenuOpen(false); }}>Skills</a></li>
//                 <li><a href="#contact" className={activeTab === 'contact' ? 'active' : ''} onClick={() => { setActiveTab('contact'); setMenuOpen(false); }}>Contact</a></li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section id="home" className="hero">
//         <div className="container">
//           <div className="hero-content">
//             <div className="hero-text">
//               <h1>Hi, I'm Upasana Neupane</h1>
//               <h2>AI & Computer Science Student</h2>
//               <p>Passionate about creating intelligent solutions through code and machine learning</p>
//               <div className="hero-btns">
//                 <a href="#projects" className="btn">View My Work</a>
//                 <a href="#contact" className="btn btn-outline">Contact Me</a>
//               </div>
//             </div>
//             <div className="hero-image">
//               <div className="image-placeholder">
//                 <span>Your Photo Here</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="about">
//         <div className="container">
//           <div className="section-title">
//             <h2>About Me</h2>
//             <div className="underline"></div>
//           </div>
//           <div className="about-content">
//             <div className="about-text">
//               <p>I am a passionate AI and Computer Science student with a strong foundation in programming and problem-solving. Although I'm at the beginning of my professional journey, I have developed skills in various technologies through my coursework and personal projects.</p>
//               <p>My interest lies in creating intelligent systems that can solve real-world problems. I enjoy the process of learning new technologies and applying them to create meaningful applications.</p>
//               <p>When I'm not coding, I enjoy exploring new AI research, participating in coding communities, and expanding my knowledge in machine learning concepts.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="projects">
//         <div className="container">
//           <div className="section-title">
//             <h2>My Projects</h2>
//             <div className="underline"></div>
//           </div>
//           <div className="projects-grid">
//             {projects.map(project => (
//               <div key={project.id} className="project-card">
//                 <div className="project-img">
//                   <img src={project.image} alt={project.title} />
//                   <div className="project-overlay">
//                     <div className="project-links">
//                       <a href="#demo" className="project-link">View Demo</a>
//                       <a href="#github" className="project-link">GitHub</a>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="project-info">
//                   <h3>{project.title}</h3>
//                   <p>{project.description}</p>
//                   <div className="project-tech">
//                     {project.technologies.map((tech, index) => (
//                       <span key={index} className="tech-tag">{tech}</span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Education Section */}
//       <section id="education" className="education">
//         <div className="container">
//           <div className="section-title">
//             <h2>Education</h2>
//             <div className="underline"></div>
//           </div>
//           <div className="education-timeline">
//             {education.map((item, index) => (
//               <div key={index} className="timeline-item">
//                 <div className="timeline-content">
//                   <h3>{item.degree}</h3>
//                   <h4>{item.institution}</h4>
//                   <span className="timeline-year">{item.year}</span>
//                   <p>{item.details}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className="skills">
//         <div className="container">
//           <div className="section-title">
//             <h2>Skills</h2>
//             <div className="underline"></div>
//           </div>
//           <div className="skills-container">
//             {Object.entries(skills).map(([category, items]) => (
//               <div key={category} className="skill-category">
//                 <h3>{category}</h3>
//                 <div className="skill-list">
//                   {items.map((skill, index) => (
//                     <div key={index} className="skill-item">
//                       <span className="skill-name">{skill}</span>
//                       <div className="skill-bar">
//                         <div className="skill-progress" style={{width: `${70 + (index * 10)}%`}}></div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Code Preview Section */}
//       <section className="code-preview">
//         <div className="container">
//           <div className="section-title">
//             <h2>Live Code Preview</h2>
//             <div className="underline"></div>
//             <p>As you edit your code in VS Code, changes will appear here</p>
//           </div>
//           <div className="code-container">
//             <pre className="code-block">
//               <code>{code}</code>
//             </pre>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="contact">
//         <div className="container">
//           <div className="section-title">
//             <h2>Get In Touch</h2>
//             <div className="underline"></div>
//           </div>
//           <div className="contact-content">
//             <div className="contact-info">
//               <h3>Let's Connect!</h3>
//               <p>I'm always open to discussing new projects, ideas, or opportunities to learn and grow.</p>
//               <div className="contact-details">
//                 <div className="contact-item">
//                   <span>📧</span>
//                   <span>neupaneupasana037@gmail.com</span>
//                 </div>
//                 <div className="contact-item">
//                   <span>📍</span>
//                   <span>Kathmandu, Nepal</span>
//                 </div>
//               </div>
//               <div className="social-links">
//                 <a href="#linkedin" className="social-link">LinkedIn</a>
//                 <a href="#github" className="social-link">GitHub</a>
//                 <a href="#twitter" className="social-link">Twitter</a>
//               </div>
//             </div>
//             <form className="contact-form">
//               <div className="form-group">
//                 <input type="text" placeholder="Your Name" required />
//               </div>
//               <div className="form-group">
//                 <input type="email" placeholder="Your Email" required />
//               </div>
//               <div className="form-group">
//                 <textarea placeholder="Your Message" rows="5" required></textarea>
//               </div>
//               <button type="submit" className="btn">Send Message</button>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="container">
//           <p>&copy; 2023 Upasana Neupane. All rights reserved.</p>
//         </div>
//       </footer>

//       <style jsx>{`
//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }
        
//         body {
//           font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//           line-height: 1.6;
//           color: #333;
//         }
        
//         body.dark-mode {
//           background-color: #1a1a2e;
//           color: #e6e6e6;
//         }
        
//         .container {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 20px;
//         }
        
//         /* Header Styles */
//         .header {
//           background-color: #fff;
//           box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
//           position: fixed;
//           top: 0;
//           left: 0;
//           right: 0;
//           z-index: 1000;
//         }
        
//         body.dark-mode .header {
//           background-color: #16213e;
//           box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
//         }
        
//         .header-content {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 1rem 0;
//         }
        
//         .logo {
//           font-size: 1.5rem;
//           font-weight: bold;
//           text-decoration: none;
//           color: #4cc9f0;
//         }
        
//         .header-controls {
//           display: flex;
//           align-items: center;
//         }
        
//         .dark-mode-toggle {
//           background: none;
//           border: none;
//           font-size: 1.5rem;
//           cursor: pointer;
//           margin-right: 1rem;
//         }
        
//         .menu-btn {
//           display: none;
//           flex-direction: column;
//           cursor: pointer;
//         }
        
//         .menu-btn span {
//           width: 25px;
//           height: 3px;
//           background-color: #333;
//           margin: 3px 0;
//           transition: 0.3s;
//         }
        
//         body.dark-mode .menu-btn span {
//           background-color: #e6e6e6;
//         }
        
//         .nav ul {
//           display: flex;
//           list-style: none;
//         }
        
//         .nav a {
//           text-decoration: none;
//           color: #333;
//           padding: 0.5rem 1rem;
//           transition: color 0.3s;
//         }
        
//         body.dark-mode .nav a {
//           color: #e6e6e6;
//         }
        
//         .nav a:hover, .nav a.active {
//           color: #4cc9f0;
//         }
        
//         /* Hero Section */
//         .hero {
//           padding: 100px 0 50px;
//           background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
//         }
        
//         body.dark-mode .hero {
//           background: linear-gradient(135deg, #16213e 0%, #1a1a2e 100%);
//         }
        
//         .hero-content {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//         }
        
//         .hero-text {
//           flex: 1;
//           padding-right: 2rem;
//         }
        
//         .hero-text h1 {
//           font-size: 3rem;
//           margin-bottom: 1rem;
//           color: #333;
//         }
        
//         body.dark-mode .hero-text h1 {
//           color: #e6e6e6;
//         }
        
//         .hero-text h2 {
//           font-size: 1.5rem;
//           margin-bottom: 1rem;
//           color: #4cc9f0;
//         }
        
//         .hero-text p {
//           font-size: 1.1rem;
//           margin-bottom: 2rem;
//           color: #666;
//         }
        
//         body.dark-mode .hero-text p {
//           color: #ccc;
//         }
        
//         .hero-btns {
//           display: flex;
//           gap: 1rem;
//         }
        
//         .btn {
//           display: inline-block;
//           padding: 0.8rem 1.5rem;
//           background-color: #4cc9f0;
//           color: white;
//           text-decoration: none;
//           border-radius: 5px;
//           font-weight: bold;
//           transition: background-color 0.3s;
//         }
        
//         .btn:hover {
//           background-color: #3aa8d0;
//         }
        
//         .btn-outline {
//           background-color: transparent;
//           border: 2px solid #4cc9f0;
//           color: #4cc9f0;
//         }
        
//         .btn-outline:hover {
//           background-color: #4cc9f0;
//           color: white;
//         }
        
//         .hero-image {
//           flex: 1;
//           display: flex;
//           justify-content: center;
//         }
        
//         .image-placeholder {
//           width: 300px;
//           height: 300px;
//           border-radius: 50%;
//           background-color: #ddd;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: #777;
//           font-weight: bold;
//         }
        
//         body.dark-mode .image-placeholder {
//           background-color: #0f3460;
//           color: #ccc;
//         }
        
//         /* Section Styles */
//         section {
//           padding: 80px 0;
//         }
        
//         .section-title {
//           text-align: center;
//           margin-bottom: 3rem;
//         }
        
//         .section-title h2 {
//           font-size: 2.5rem;
//           margin-bottom: 1rem;
//           color: #333;
//         }
        
//         body.dark-mode .section-title h2 {
//           color: #e6e6e6;
//         }
        
//         .underline {
//           width: 80px;
//           height: 4px;
//           background-color: #4cc9f0;
//           margin: 0 auto;
//           border-radius: 2px;
//         }
        
//         /* About Section */
//         .about {
//           background-color: #f8f9fa;
//         }
        
//         body.dark-mode .about {
//           background-color: #0f3460;
//         }
        
//         .about-text p {
//           margin-bottom: 1.5rem;
//           font-size: 1.1rem;
//           line-height: 1.8;
//           color: #555;
//         }
        
//         body.dark-mode .about-text p {
//           color: #ccc;
//         }
        
//         /* Projects Section */
//         .projects-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//           gap: 2rem;
//         }
        
//         .project-card {
//           background-color: white;
//           border-radius: 10px;
//           overflow: hidden;
//           box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
//           transition: transform 0.3s;
//         }
        
//         body.dark-mode .project-card {
//           background-color: #1e2a47;
//           box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
//         }
        
//         .project-card:hover {
//           transform: translateY(-10px);
//         }
        
//         .project-img {
//           position: relative;
//           height: 200px;
//           overflow: hidden;
//         }
        
//         .project-img img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }
        
//         .project-overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background-color: rgba(0, 0, 0, 0.7);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           opacity: 0;
//           transition: opacity 0.3s;
//         }
        
//         .project-card:hover .project-overlay {
//           opacity: 1;
//         }
        
//         .project-links {
//           display: flex;
//           gap: 1rem;
//         }
        
//         .project-link {
//           padding: 0.5rem 1rem;
//           background-color: #4cc9f0;
//           color: white;
//           text-decoration: none;
//           border-radius: 5px;
//           transition: background-color 0.3s;
//         }
        
//         .project-link:hover {
//           background-color: #3aa8d0;
//         }
        
//         .project-info {
//           padding: 1.5rem;
//         }
        
//         .project-info h3 {
//           font-size: 1.5rem;
//           margin-bottom: 0.5rem;
//           color: #333;
//         }
        
//         body.dark-mode .project-info h3 {
//           color: #e6e6e6;
//         }
        
//         .project-info p {
//           color: #666;
//           margin-bottom: 1rem;
//         }
        
//         body.dark-mode .project-info p {
//           color: #ccc;
//         }
        
//         .project-tech {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 0.5rem;
//         }
        
//         .tech-tag {
//           padding: 0.3rem 0.8rem;
//           background-color: #e9ecef;
//           border-radius: 20px;
//           font-size: 0.8rem;
//           color: #495057;
//         }
        
//         body.dark-mode .tech-tag {
//           background-color: #4cc9f0;
//           color: white;
//         }
        
//         /* Education Section */
//         .education-timeline {
//           position: relative;
//           max-width: 800px;
//           margin: 0 auto;
//         }
        
//         .timeline-item {
//           padding: 2rem;
//           background-color: white;
//           border-radius: 10px;
//           box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
//           margin-bottom: 2rem;
//           position: relative;
//         }
        
//         body.dark-mode .timeline-item {
//           background-color: #1e2a47;
//           box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
//         }
        
//         .timeline-content h3 {
//           font-size: 1.5rem;
//           margin-bottom: 0.5rem;
//           color: #333;
//         }
        
//         body.dark-mode .timeline-content h3 {
//           color: #e6e6e6;
//         }
        
//         .timeline-content h4 {
//           font-size: 1.2rem;
//           margin-bottom: 0.5rem;
//           color: #4cc9f0;
//         }
        
//         .timeline-year {
//           display: inline-block;
//           padding: 0.3rem 0.8rem;
//           background-color: #4cc9f0;
//           color: white;
//           border-radius: 20px;
//           font-size: 0.8rem;
//           margin-bottom: 1rem;
//         }
        
//         .timeline-content p {
//           color: #666;
//         }
        
//         body.dark-mode .timeline-content p {
//           color: #ccc;
//         }
        
//         /* Skills Section */
//         .skills-container {
//           display: grid;
//           grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//           gap: 2rem;
//         }
        
//         .skill-category {
//           background-color: white;
//           padding: 1.5rem;
//           border-radius: 10px;
//           box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
//         }
        
//         body.dark-mode .skill-category {
//           background-color: #1e2a47;
//           box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
//         }
        
//         .skill-category h3 {
//           font-size: 1.3rem;
//           margin-bottom: 1rem;
//           color: #333;
//         }
        
//         body.dark-mode .skill-category h3 {
//           color: #e6e6e6;
//         }
        
//         .skill-item {
//           margin-bottom: 1rem;
//         }
        
//         .skill-name {
//           display: block;
//           margin-bottom: 0.5rem;
//           color: #666;
//         }
        
//         body.dark-mode .skill-name {
//           color: #ccc;
//         }
        
//         .skill-bar {
//           height: 10px;
//           background-color: #e9ecef;
//           border-radius: 5px;
//           overflow: hidden;
//         }
        
//         body.dark-mode .skill-bar {
//           background-color: #0f3460;
//         }
        
//         .skill-progress {
//           height: 100%;
//           background-color: #4cc9f0;
//           border-radius: 5px;
//         }
        
//         /* Code Preview Section */
//         .code-preview {
//           background-color: #f8f9fa;
//         }
        
//         body.dark-mode .code-preview {
//           background-color: #0f3460;
//         }
        
//         .code-container {
//           background-color: #2d3748;
//           border-radius: 10px;
//           overflow: hidden;
//         }
        
//         .code-block {
//           padding: 1.5rem;
//           color: #e2e8f0;
//           font-family: 'Courier New', monospace;
//           overflow-x: auto;
//           background-color: #1a202c;
//         }
        
//         /* Contact Section */
//         .contact-content {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 3rem;
//         }
        
//         .contact-info h3 {
//           font-size: 1.5rem;
//           margin-bottom: 1rem;
//           color: #333;
//         }
        
//         body.dark-mode .contact-info h3 {
//           color: #e6e6e6;
//         }
        
//         .contact-info p {
//           color: #666;
//           margin-bottom: 2rem;
//         }
        
//         body.dark-mode .contact-info p {
//           color: #ccc;
//         }
        
//         .contact-details {
//           margin-bottom: 2rem;
//         }
        
//         .contact-item {
//           display: flex;
//           align-items: center;
//           margin-bottom: 1rem;
//           color: #666;
//         }
        
//         body.dark-mode .contact-item {
//           color: #ccc;
//         }
        
//         .contact-item span:first-child {
//           margin-right: 1rem;
//           font-size: 1.2rem;
//         }
        
//         .social-links {
//           display: flex;
//           gap: 1rem;
//         }
        
//         .social-link {
//           padding: 0.5rem 1rem;
//           background-color: #4cc9f0;
//           color: white;
//           text-decoration: none;
//           border-radius: 5px;
//           transition: background-color 0.3s;
//         }
        
//         .social-link:hover {
//           background-color: #3aa8d0;
//         }
        
//         .contact-form {
//           background-color: white;
//           padding: 2rem;
//           border-radius: 10px;
//           box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
//         }
        
//         body.dark-mode .contact-form {
//           background-color: #1e2a47;
//           box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
//         }
        
//         .form-group {
//           margin-bottom: 1.5rem;
//         }
        
//         .form-group input,
//         .form-group textarea {
//           width: 100%;
//           padding: 0.8rem;
//           border: 1px solid #ddd;
//           border-radius: 5px;
//           font-family: inherit;
//         }
        
//         body.dark-mode .form-group input,
//         body.dark-mode .form-group textarea {
//           background-color: #0f3460;
//           border-color: #1a1a2e;
//           color: #e6e6e6;
//         }
        
//         .form-group textarea {
//           resize: vertical;
//           min-height: 120px;
//         }
        
//         /* Footer */
//         .footer {
//           background-color: #333;
//           color: white;
//           text-align: center;
//           padding: 2rem 0;
//         }
        
//         body.dark-mode .footer {
//           background-color: #0f3460;
//         }
        
//         /* Responsive Design */
//         @media (max-width: 768px) {
//           .menu-btn {
//             display: flex;
//           }
          
//           .nav {
//             position: absolute;
//             top: 100%;
//             left: 0;
//             right: 0;
//             background-color: white;
//             box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
//             flex-direction: column;
//             padding: 1rem;
//             clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
//             transition: clip-path 0.3s;
//           }
          
//           body.dark-mode .nav {
//             background-color: #16213e;
//             box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
//           }
          
//           .nav.active {
//             clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
//           }
          
//           .nav ul {
//             flex-direction: column;
//           }
          
//           .nav a {
//             display: block;
//             padding: 0.5rem 0;
//           }
          
//           .hero-content {
//             flex-direction: column;
//             text-align: center;
//           }
          
//           .hero-text {
//             padding-right: 0;
//             margin-bottom: 2rem;
//           }
          
//           .hero-btns {
//             justify-content: center;
//           }
          
//           .contact-content {
//             grid-template-columns: 1fr;
//           }
          
//           .projects-grid {
//             grid-template-columns: 1fr;
//           }
          
//           .skills-container {
//             grid-template-columns: 1fr;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Portfolio;