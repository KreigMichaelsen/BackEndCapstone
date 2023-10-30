const apiUrl = "/api/projectTask";

export const getProjectTasks = () => {
  return fetch(apiUrl).then((res) => res.json());
};

export const getProjectTaskById = (id) => {
  return fetch(`${apiUrl}/${id}`).then((res) => res.json());
};

export const getProjectTaskByProjectId = (id) => {
  return fetch(`${apiUrl}/${id}/forProject`).then((res) => res.json());
  
};

export const getProjectTasksByUserId = (id) => {
  return fetch(`${apiUrl}/${id}/forUser`).then((res) => res.json());
  
};

export const deleteTask = (id) => {
  return fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
  });
};

export const createProjectTask =  (task) => {
  return fetch(apiUrl, {
    method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
  }).then((res) => res.json());
};


export const editTask = (task) => {
  return fetch(`${apiUrl}/${task.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
};

export const completeTask = (id) => {
  return fetch(`${apiUrl}/${id}/complete`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(id),
  });
};