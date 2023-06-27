import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <>
    <div className='card'>
      <Avatar />
      <div className='data'>
        <Intro />
        <SkillList />
      </div>
    </div>   
    </>
  );
}

function SkillList() {
  return (
    <div className='skill-list'>
      <Skill Skill="Unity" emoji="💪" color="cyan" />
      <Skill Skill="PHP" emoji="💪" color="orange" />
      <Skill Skill="React" emoji="🧒" color="yellow" />
      <Skill Skill="MySQL" emoji="👍" color="orangered" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className='skill' style={{ backgroundColor: props.color }}>
      <span>{props.Skill}</span>
      <span>{props.emoji}</span>
    </div>

  );
}

function Intro() {
  return (
    <div>
      <h1>นายพิสิษฐ์ ตรีรัตน์วิชชา</h1>
      <p>
        นักศึกษาสาขาเทคโนโลยีสารสนเทศและการสื่อสาร คณะวิทยาศาสตร์
        มหาวิทยาลัยอุบลราชธี ชื่นชอบในการตัดต่อ
        งานอดิเรก อ่านนิยาย ฟังเพลง
      </p>
    </div>
  );
}

function Avatar() {
  return <img className='avatar' src="GitHub-Mark.png" alt="My Avatar" />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

