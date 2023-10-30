const apiUrl = "/api/userproject";

export const getUserProjects = () => {
  return fetch(apiUrl).then((res) => res.json());
};

export const getUserProjectById = (id) => {
  return fetch(`${apiUrl}/${id}`).then((res) => res.json());
  
};

export const getUserProjectsByProjectId = (id) => {
  return fetch(`${apiUrl}/${id}/forProject`).then((res) => res.json());
  
};

export const getUserProjectsByUserId = (id) => {
  return fetch(`${apiUrl}/${id}/forUser`).then((res) => res.json());
  
};

export const getUserProjectsNotAssociatedByProjectWithId = (id) => {
  return fetch(`${apiUrl}/${id}/notForProject`).then((res) => res.json());
  
};

// export const editUserProject = (project) => {
//   return fetch(`${apiUrl}/${project.id}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(project),
//   });
// };

export const createUserProject = (project) => {
  return fetch(apiUrl, {
    method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(project),
  }).then((res) => res.json());
};

export const deleteUserProject = (id) => {
  return fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
  });
};