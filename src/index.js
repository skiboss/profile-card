import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skillSet = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#F0DB4F",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#61DBFB",
  },
  {
    skill: "Bootstrap",
    level: "intermediate",
    color: "#563D7C",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img className="avatar" src="./IMG_6464.jpeg" alt="Avatar" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Oghenemeru Avwemoya</h1>
      <p>
        Frontend Developer and Technical Writer, passionate about solving
        problems. When I'm not coding, you can find me swimming or cooking.
      </p>
    </div>
  );
}

function SkillList() {
  const skills = skillSet;

  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} level={skill.level} bgColor={skill.color} />
      ))}
      {/* <Skill skill="Writing" emoji="📝" bgColor="green" />
      <Skill skill="JavaScript" emoji="🐱‍👤" bgColor="yellow" />
      <Skill skill="React" emoji="⚛️" />
      <Skill skill="Bootstrap" emoji="📦" bgColor="teal" /> */}
    </ul>
  );
}

function Skill({ skill, level, bgColor }) {
  return (
    <li>
      <h3
        className="skill"
        style={
          bgColor ? { backgroundColor: bgColor } : { backgroundColor: "blue" }
        }
      >
        <span>{skill}</span>
        <span>
          {level === "advanced" && "🐱‍👤"}
          {level === "intermediate" && "👍"}
          {level === "beginner" && "😁"}
        </span>
      </h3>
    </li>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
