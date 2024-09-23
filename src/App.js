import './App.css';
import {FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin} from "react-icons/fa";

function App() {
  return (
<div class="resume">
    <header>
      <h1>MILAGROS DARLENE MAE M. BULAON</h1>
      <h2>FUTURE SOFTWARE ENGINEER</h2>
    </header>

    <div class="content">
      <section class="sidebar">
        <div class="contact">
          <h1>Contact</h1>
            <p>mdmmbulaon.student@ua.edu.ph <FaEnvelope/> </p>
            <p>09217233898 <FaPhone/> </p>
            <p>San Luis, Pampanga <FaMapMarkerAlt/> </p>
            <a href="https://github.com/darlenemaebulaon">Github <FaGithub/> </a> <br></br> <br></br>
            <a href="https://ph.linkedin.com/in/milagros-darlene-mae-bulaon-3326a831a">LinkedIn <FaLinkedin/> </a>
        </div>

        <div class="education">
          <h1>Education</h1>
            <p>Bachelor of Science in Information Technology</p>
            <p>University of the Assumption</p>
            <p>(2022 - Present)</p>
        </div>

        <div class="skills">
          <h1>Skills</h1>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
              <li>MySQL</li>
              <li>Python</li>
            </ul>
        </div>
      </section>

      <section class="main-content">
        <div class="experience">
          <h1>Learning Experience</h1>
            <div class="yr">
              <h3>First Year (2022 - 2023)</h3>
                <h4><li>Python and Figma</li></h4>
                  <ul>
                    <p>- Learned the basics of Python, covering inputs, operations, sysntax, variables, functions, and loops.</p>
                    <p>- Gained experience with Figma for designing wireframes, which enhanced understanding of UI/UX design.</p>
                  </ul>
            </div>

            <div class="yr">
              <h3>Second Year (2023 - 2024)</h3>
                <h4><li>MySQL, HTML, CSS, and JavaScript</li></h4>
                  <ul>
                    <p>- Studied programming languages like MySQL, HTML, CSS, and JavaScript.</p>
                    <p>- Learned database creation, querying, and graph generation using MySQL.</p>
                    <p>- Focused on web content structuring and styling with HTML and CSS, using CodePen to create interactive projects.</p>
                  </ul>
            </div>

            <div class="yr">
              <h3>Third Year (2024 - Present)</h3>
                <h4><li>HTML, CSS, JavaScript, Bootstrap, and REACTJS</li></h4>
                  <ul>
                    <p>- Focused on advanced HTML, CSS, JavaScript, Bootstrap, and React.js.</p>
                    <p>- Developed dynamic websites and worked with contemporary tools like Vercel and Node.js.</p>
                    <p>- Deployed projects on GitHub and replicated web designs to improve web development skills.</p>
                  </ul>
            </div>
        </div>
      </section>

    </div>
  </div>
  );
}

export default App;
