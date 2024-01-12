const projectHasErrors = (project) => {
  if (!project.title || !project.title.length) {
    return true;
  } else if (!project.description || !project.description.length) {
    return true;
  } else if (!project.image || !project.image.length) {
    return true;
  }

  return false;
};

export default projectHasErrors;
