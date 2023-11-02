'use client';
import { useEffect, useState } from 'react';
import MainProjectCard from './MainProjectCard';

export default function HomeProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (!projects.length) {
      const getProjects = async () => {
        const request = await fetch('/api/projects');
        if (request.ok) {
          const data = await request.json();
          setProjects(Object.values(data));
        }
      };
      getProjects();
    }
  }, []);

  return (
    <>
      {projects.length &&
        projects.map((item, index) => {
          return (
            <MainProjectCard
              key={index}
              id={item.id}
              img={item.img}
              title={item.title}
              para={item.para}
            />
          );
        })}
    </>
  );
}
