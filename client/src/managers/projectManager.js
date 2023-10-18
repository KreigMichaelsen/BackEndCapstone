const apiUrl = "/api/project";

export const getProjects = () => {
  return fetch(apiUrl).then((res) => res.json());
};

export const getProjectById = (id) => {
  return fetch(`${apiUrl}/${id}`).then((res) => res.json());
  
};

