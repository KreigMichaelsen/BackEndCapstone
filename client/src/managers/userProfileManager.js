const apiUrl = "/api/userProfile";

export const getUsers = () => {
  return fetch(apiUrl).then((res) => res.json());
};

export const getUsersNotAssociatedWithProject = (projectId) => {
  return fetch(`${apiUrl}/${projectId}/userProfilesNotInProject`).then((res) => res.json());
};

export const getUserById = (id) => {
  return fetch(`${apiUrl}/${id}`).then((res) => res.json());
  
};

// export const createProject =  (project) => {
//   return fetch(apiUrl, {
//     method: "POST",
//         headers: {
//         "Content-Type": "application/json",
//         },
//         body: JSON.stringify(project),
//   }).then((res) => res.json());
// };
