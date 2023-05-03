import React from 'react'
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../Styles/Home.css";



function Home() {
  return (
    <div className="home">
        <div className="about">
            <h2>Hi,My Name is Pavan</h2>
            <div className="prompt">
                <p>
                Hardworking and passionate job seeker with strong organizational skills eager to
                secure entry-level position. Ready to help team achieve company goals.
                </p>
                <a href="mailto:pavankusampalli852@gmail.com">
                <EmailIcon /> 
                </a>
                <a href= "https://www.linkedin.com/in/pavan-kusampalli/" target="_blank" rel="noreferrer">
                <LinkedInIcon />
                </a>
            </div>
        </div>
        <div className="skills">
            <h1> Skills</h1>
            <ol className="list">
                <li className="item">
                    <h2>Front-End</h2>
                    <span>ReactJS, JavaScript, HTML, CSS, NPM, MaterialUI </span>
                </li>
                <li className="item">
                    <h2>Back-End</h2>
                    <span>NodeJS, .NET, MySQL, MongoDB  </span>
                </li>
                <li>
                    <h2>Languages</h2>
                    <span>JavaScript,C#,TypeScript</span>
                </li>
                <li className="item">
                    <h2>Cirtificates</h2>  
                    <a href='https://www.coursera.org/account/accomplishments/specialization/certificate/39F336B4NAU4'target="_blank" rel="noopener noreferrer">
                        Google Data Analytics
                    </a><br/>
                    <span>Key Skills- SQL server management, Power Bi </span>
                </li>
            </ol>

        </div>
    </div>
  )
}

export default Home