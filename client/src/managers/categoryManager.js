const apiUrl = "/api/category";

export const getCategories = () => {
  return fetch(apiUrl).then((res) => res.json());
};

// export const getProjectById = (id) => {
//   return fetch(`${apiUrl}/${id}`).then((res) => res.json());
  
// };

// export const createProject =  (project) => {
//   return fetch(apiUrl, {
//     method: "POST",
//         headers: {
//         "Content-Type": "application/json",
//         },
//         body: JSON.stringify(project),
//   }).then((res) => res.json());
// };
