import "../styles/Main.css";
import "../styles/Dashboard.css";
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
import Codepen from "../assets/codepen-1.jpg";
import Shophub from "../assets/shop-hub.jpg";
import Counselor from "../assets/counselor-img.jpg";

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

  // React.useEffect(() => {
  //   const parent = document.getElementById("root-dash");
  //   const childElements = parent.children;
  //   for (let i = 0; i < childElements.length; i++) {
  //     const childEl = childElements[i];
  //     setTimeout(() => {
  //       childEl.classList.add("slideup-class");
  //     }, i * 250);
  //   }
  // }, []);

  const changeActive = () => {
    document.querySelector(".nav-link.active").classList.remove("active");
    document.getElementById("about").classList.add("active");
  };

  const redirectFeatured = () => {
    window.location = "https://dzitting.github.io";
  };

  return (
    <main className="dashboard" id="root-dash">
      <div className="slideup-class" id="profileDisplay-div">
        <div
          id="dash--wrapper"
          onClick={() => {
            changeState("about");
            changeActive();
          }}
        >
          <figure id="dash-img--wrapper">
            <img
              id="dash-img"
              style={{ width: 70, height: 70 }}
              src={UserImg}
            />
          </figure>
          <div id="dash-name-text">
            <h3 className="green">Denise Zitting</h3>
            <h3 className="green">Front End Developer</h3>
            <p>
              <em>Arizona, USA</em>
            </p>
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
        <a onClick={(event) => {changeState('contact'); changeActive(event)}}>
          <figure id="write-me--container">
            <img src={WriteMe} />
          </figure>
        </a>
      </div>

      <div className="slideup-class" id="coursesDisplay-div">
        <h1 className="green">In Progress</h1>
        <div id="cards--wrapper" className="top">
          {inProg.map((item, index) => (
            <div key={index}>
              <h3>{item.title}</h3>
              <p>Provider: {item.provider}</p>
              <figure id={index}>
                <img src={item.image} />
              </figure>
              <p>{item.description}</p>
              {item.avgScore && <p>Average Score: {item.avgScore}</p>}
            </div>
          ))}
        </div>
        <h1 className="green">Completed</h1>
        <div id="cards--wrapper" className="bottom">
          {completed.map((item, index) => (
            <div key={index}>
              <h3>{item.title}</h3>
              <p>Provider: {item.provider}</p>
              <figure id={index}>
                <img src={item.image} />
              </figure>
              <p>{item.description}</p>
              <p>Completed: {item.date}</p>
              {item.avgScore && <p>Average Score: {item.avgScore}</p>}
            </div>
          ))}
        </div>
      </div>
      <div className="slideup-class" id="featured-div">
        <h1 className="green">Featured</h1>
        <figure id="featured-img--wrapper">
          <img src={HeadImage} />
        </figure>
        <div onClick={() => redirectFeatured()} className="featured-container">
          <div>
            <h2>Check out Chattle!</h2>
            <a href='https://chattle.netlify.app/'>Chattle Chat App</a>
          </div>
          <figure className="featured-wrapper">
            <img src={Shophub} />
          </figure>
          <figure className="featured-wrapper">
            <img src={Counselor} />
          </figure>
          <figure className="featured-wrapper">
            <img src={Codepen} />
          </figure>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
