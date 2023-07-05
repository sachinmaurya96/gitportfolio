import React from 'react'
import "./Resume.css"


function Resume() {

  return (
    <>
      <div class="">
        <div class="pdf" id='pdfr'>
            <div class="header">
                <img src="../images/hero.jpg" alt=""/>
                <div class="heading">
                    <h2>Sachin Maurya </h2>
                    <h6 class="subheading">Full-Stack web developer</h6>
                </div>
            </div>
            <div class="content">
                <div class="left">
                    <div class="contact">
                        <div class="title">contact</div>
                        <ul>
                           <li><i class="fa-solid fa-phone"></i><a href="tel:+919695439912">+919695439912</a></li>
                           <li><i class="fa-solid fa-envelope"></i><a href="mailto:nitinmaurya969543@gmail.com" target="_blank">nitinmaurya969543@gmail.com</a></li>
                           <li><i class="fa-solid fa-location-dot"></i><a href="https://goo.gl/maps/fikb59aiaWTkwsS36" target="_blank">Noida, Sec-62 (UP)</a></li>
                           <li><i class="fa-brands fa-linkedin"></i><a href="https://www.linkedin.com/in/sachin-maurya-826111267/" target="_blank">Linkedin</a></li>
                           <li><i class="fa-brands fa-github"></i><a href="https://github.com/sachinmaurya96" target="_blank">Github</a></li>
                        </ul>
                    </div>
                    <div class="interest">
                        <div class="title">interests</div>
                        <ul>
                            <li>traveling</li>
                            <li>Movies</li>
                            <li>arts & entertainment</li>
                            <li>Gaming</li>
                        </ul>

                    </div>
                    <div class="education">
                        <div class="title">education</div>
                        <ul>
                            <li>degree/bachelor</li>
                            <li>BCA (Bachlor of Computer Application)</li>
                            <li>Allahabad University</li>
                            <li>2022-2024</li>
                        </ul>
                    </div>
                    <div class="language">
                        <div class="title">language</div>
                        <ul>
                            <li>English</li>
                            <li>Hindi</li>
                        </ul>
                    </div>
                    <div class="keyskills">
                        <div class="title">KEY SKILLS</div>
                        <ul>
                            <li>Fast Learning</li>
                            <li>Problem Solving</li>
                            <li>Team Work</li>
                        </ul>
                    </div>
                </div>
                <div class="right">
                    <div class="profile">
                        <div class="title">profile</div>
                        <p>Hii! My name is Sachin Maurya. "As a MERN developer, I specialize in building web applications using MongoDB, Express.js, React.js, and Node.js. I have a solid understanding of JavaScript and its concepts, as well as experience in front-end development using HTML, CSS, and React.js.
                        <p>I am also skilled in back-end development using Node.js and Express.js, as well as database management with MongoDB. I have worked on a variety of projects, including e-commerce websites, social media platforms, and productivity applications.</p>                        </p>
                    </div>
                    <div class="experience">
                        <div class="title">experience</div>
                        <ul>
                            <li>Fresher</li>
                        </ul>
                        <p>I am fresher but I have strong problem-solving abilities, attention to detail, and the ability to work well in a team. I am committed to staying up-to-date with the latest developments in web development and am always looking for new ways to improve my skills.</p>
                    </div>
                    <div class="projects">
                        <div class="title">projects</div>
                        <ol>
                            <li><a href="#">Portfolio-Web</a></li>
                            <li><a href="#">Apple india ui clone</a></li>
                            <li><a href="#">google digital garage clone</a></li>
                            <li><a href="#">a mini freelance web ui</a></li>
                            <li><a href="#">Movieapp</a></li>
                            <li><a href="#">TextUtils</a></li>
                            <li><a href="#">Weather App</a></li>
                            <li><a href="#">Todo list</a></li>
                        </ol>
                    </div>
                    <div class="tecnical">
                        <div class="title">technical skills</div>
                        <ul>
                            <li>HTML, CSS , Javascript , React.js</li>
                            <li>Node.js , Express.js , MongoDB</li>
                            <li>Github</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    
    </>
  )
}

export default Resume
