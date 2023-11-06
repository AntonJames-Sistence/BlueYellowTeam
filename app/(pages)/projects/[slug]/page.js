import { allProjects } from '../../../../data/projects';
import PageHeader from '../../components/PageHeader';
import './style.css';

export default function ProjectIndexPage({ params: { slug } }) {
  const project = allProjects.find((project) => project.slug === slug);
  return (
    <div id="project-page">
      <div>
        <a href="/projects">
          <button id="back-button">« ALL PROJECTS</button>
        </a>
        <div id="project-cont">
          <div id="title">{project.title}</div>
          <div id="date">{project.date}</div>
          <img id="img" src={`..${project.img}`}></img>
          <div id="para">{project.para}</div>
        </div>
      </div>
    </div>
  );
}
