const apiUrl = "/api/projectNote";

export const getProjectNotes = () => {
  return fetch(apiUrl).then((res) => res.json());
};

export const getProjectNoteById = (id) => {
  return fetch(`${apiUrl}/${id}`).then((res) => res.json());
  
};

export const getProjectNotesByProjectId = (id) => {
  return fetch(`${apiUrl}/${id}/forProject`).then((res) => res.json());
  
};

export const deleteNote = (id) => {
  return fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
  });
};

export const createProjectNote =  (note) => {
  return fetch(apiUrl, {
    method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
  }).then((res) => res.json());
};


export const editNote = (note) => {
  return fetch(`${apiUrl}/${note.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  });
};

// export const completeTask = (id) => {
//   return fetch(`${apiUrl}/${id}/complete`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(id),
//   });
// };