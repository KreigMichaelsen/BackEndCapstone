const apiUrl = "/api/project";

export const getProjects = () => {
  return fetch(apiUrl).then((res) => res.json());
};

export const getProjectsByUserId = (userId) => {
  return fetch(`${apiUrl}/${userId}/forUser`).then((res) => res.json());
};

export const getProjectById = (id) => {
  return fetch(`${apiUrl}/${id}`).then((res) => res.json());
  
};

export const editProject = (project) => {
  return fetch(`${apiUrl}/${project.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  });
};

export const updateProjectCompletion = (id, progressNumber) => {
  return fetch(`${apiUrl}/${id}/updateCompletion`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(progressNumber),
  });
};

export const completeProject = (id) => {
  return fetch(`${apiUrl}/${id}/complete`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(id),
  });
};

export const unCompleteProject = (id) => {
  return fetch(`${apiUrl}/${id}/incomplete`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(id),
  });
};

export const createProject = (project) => {
  return fetch(apiUrl, {
    method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(project),
  }).then((res) => res.json());
};

export const deleteProject = (id) => {
  return fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
  });
};

