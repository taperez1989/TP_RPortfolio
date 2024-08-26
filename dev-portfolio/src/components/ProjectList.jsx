import React from 'react';

function ProjectList() {
  return (
    <div className='projects'>
      <h2>Project List</h2>

      <div className='projectGrid'>
        <div className='projectItem'>
          <img src="/images/fit_find.png" alt="Fitness Finder" className='projectImages' />
          <a href='https://taperez1989.github.io/Super_secret_project/'>Fitness Finder</a>
        </div>

        <div className='projectItem'>
          <img src="/images/gameChaser.png" alt="Game Chaser" className="projectImages" />
          <a href="https://gamechaser-wlza.onrender.com/">Game Chaser</a>
        </div>

        <div className='projectItem'>
          <img src="/images/expressNotes.png" alt="Express Notes" className="projectImages" />
          <a href="https://express-notes-1-9i9x.onrender.com/">Express Notes</a>
        </div>

        <div className='projectItem'>
          <img src="/images/employTrack.png" alt="Employee Tracker" className="projectImages" />
          <a href="https://github.com/taperez1989/Employ_track.git">Employee Tracker</a>
        </div>

        <div className='projectItem'>
          <img src="/images/blogAPI.png" alt="Blog API" className="projectImages" />
          <a href="https://taperez1989.github.io/Blog_api/">Blog API</a>
        </div>

        <div className='projectItem'>
          <img src="/images/taskBoard.png" alt="Task Board" className="projectImages" />
          <a href="https://taperez1989.github.io/2Do_tasks/">Task Board</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectList;






// src = "/images/fit_find.png"