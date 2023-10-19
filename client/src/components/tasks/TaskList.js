import React, { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import { getProjectTasks } from "../../managers/projectTaskManager";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  const getAllTasks = () => {
    getProjectTasks().then(setTasks); // Replace getOrders with your actual method to fetch orders
  };

  useEffect(() => {
    getAllTasks();
  }, []);



  return (
    <>  
      
      {tasks.map((task) => (
        <TaskCard
          task={task}
          key={task.id}
          getAllTasks={getAllTasks}
        ></TaskCard>
      ))}
    </>
  );
}
