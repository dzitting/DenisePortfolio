import '../styles/Main.css';
import '../styles/Dashboard.css';
import React from "react";
import UserImg from "../assets/undraw_female_avatar_efig.svg";
import Cert from "../assets/certificate.svg";
import XP from "../assets/experience.svg";
import Skills from "../assets/undraw_learning_sketching_nd4f.svg";
import FullStack from "../assets/undraw_portfolio_website_re_jsdd.svg";
import Android from "../assets/undraw_android_jr64.svg";
import AI from "../assets/undraw_artificial_intelligence_re_enpp.svg";
import HeadImage from "../assets/undraw_teaching_re_g7e3.svg";
import WriteMe from "../assets/letter.svg";


function Dashboard({ changeState }) {
  const inProg = [
    {
      title: "Fullstack Engineer",
      provider: "CodeCademy",
      description: "Learn to build web applications from start to finish.",
      image: FullStack,
      avgScore: 83,
    },
    {
      title: "Build Android Apps with Java",
      provider: "CodeCademy",
      description: "Building functional Quiz Game for Android Devices.",
      image: Android,
      avgScore: "",
    },
    {
      title: "Intro to Artificial Intelligence with Python",
      provider: "Harvard",
      description:
        "AI covers a range of techniques that appear as sentient behavior by the computer.",
      image: AI,
      avgScore: "",
    },
  ];
  const completed = [
    {
      title: "Intro to Computer Science",
      provider: "Harvard",
      description: "Broad overview of various languages",
      date: "April 2023",
      image: FullStack,
      avgScore: 3.87,
    },
    {
      title: "Responsive Web Design",
      provider: "freeCodeCamp",
      description: "Using HTML/CSS & Javascript to create resonsive websites",
      date: "March 2023",
      image: FullStack,
      avgScore: "",
    },
    {
      title: "JavaScript Data Algorithms & Structures",
      provider: "freeCodeCamp",
      description: "Javascript focus and scripting algorithms",
      date: "May 2023",
      image: FullStack,
      avgScore: "",
    },
    {
      title: "Frontend Development Libraries",
      provider: "freeCodeCamp",
      description: "React and Redux focus with Bootstrap Libraries",
      date: "July 2023",
      image: FullStack,
      avgScore: "",
    },
  ];

  React.useEffect(() => {
    const parent = document.getElementById("root-dash");
    const childElements = parent.children;
    for (let i = 0; i < childElements.length; i++) {
      const childEl = childElements[i];
      setTimeout(() => {
        childEl.classList.add("slideup-class");
      }, i * 250);
    }
  }, []);

  return (
    <main className="dashboard" id="root-dash">
      <div id="profileDisplay-div">
        <div id="dash--wrapper" onClick={() => changeState('about')}>
          <figure id="dash-img--wrapper">
            <img
              id="dash-img"
              style={{ width: 70, height: 70 }}
              src={UserImg}
            />
          </figure>
          <div id="dash-name-text">
            <h3>Denise Zitting</h3>
            <h3>Front End Developer</h3>
            <p>Arizona, USA</p>
          </div>
          <div id="badges--wrapper">
            <div id="certs--wrapper">
              <img src={Cert} />
              <h4>Certified</h4>
            </div>
            <div id="years--wrapper">
              <img src={XP} />
              <h4>Experienced</h4>
            </div>
          </div>
        </div>

        <section id="skills--container">
          <figure>
            <img src={Skills} />
          </figure>
          <div>
            <h2 className="center" style={{ paddingTop: "10px" }}>
              Skills
            </h2>
            <div className="row">
              <p>HTML</p>
              <p>CSS</p>
            </div>
            <div className="row">
              <p>JavaScript</p>
              <p>React</p>
            </div>
            <div className="row">
              <p>WordPress</p>
              <p>Python</p>
            </div>
            <div className="row">
              <p>Adobe Suite</p>
              <p>Figma</p>
            </div>
            <div className="row">
              <p>SQL</p>
              <p>GIMP</p>
            </div>
            <div className="row">
              <p>Microsoft Office</p>
              <p>Responsive Design</p>
            </div>
          </div>
        </section>
        <figure id="write-me--container">
          <img src={WriteMe} />
        </figure>
      </div>

      <div id="coursesDisplay-div">
        <h1>In Progress</h1>
        <div id="cards--wrapper" className="top">
          {inProg.map((item, index) => (
            <div key={index}>
              <h3>{item.title}</h3>
              <p>Provider: {item.provider}</p>
              <figure id={index}>
                <img src={item.image} />
              </figure>
              <p>Description: {item.description}</p>
              {item.avgScore && <p>Average Score: {item.avgScore}</p>}
            </div>
          ))}
        </div>
        <h1>Completed</h1>
        <div id="cards--wrapper" className="bottom">
          {completed.map((item, index) => (
            <div key={index}>
              <h3>{item.title}</h3>
              <p>Provider: {item.provider}</p>
              <figure id={index}>
                <img src={item.image} />
              </figure>
              <p>Description: {item.description}</p>
              <p>Completed: {item.date}</p>
              {item.avgScore && <p>Average Score: {item.avgScore}</p>}
            </div>
          ))}
        </div>
      </div>
      <div id="peopleSay-div">
        <figure id="peopleSay-img--wrapper">
          <img src={HeadImage} />
        </figure>
      </div>
    </main>
  );
}

export default Dashboard;
