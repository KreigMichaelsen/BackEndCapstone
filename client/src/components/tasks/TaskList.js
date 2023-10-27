import React, { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import { getProjectTasks } from "../../managers/projectTaskManager";
import { Button } from "reactstrap";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);



  const getAllTasks = () => {
    getProjectTasks().then((t) => {
      if (showCompleted === true) {
        const completedTasks = t.filter(t => t.isCompleted);
        setTasks(completedTasks);
      } else if (showCompleted === false) {
        const incompleteTasks = t.filter(t => !t.isCompleted);
        setTasks(incompleteTasks);
      } else {
        setTasks(t); // Show all tasks
      }
    }); // Replace getOrders with your actual method to fetch orders
  };

  useEffect(() => {

    getAllTasks();

  }, [showCompleted]);

  useEffect(() => {

    setFilteredTasks(tasks);

  }, [tasks]);

//   useEffect(
//     () => {
//         if (completed) {
//             const finishedTasks = tasks.filter(task => task.isCompleted === true)
//             setFilteredTasks(finishedTasks)
//         }
//         else {
//             const unfinishedTasks = tasks.filter(task => task.isCompleted === false)
//             setFilteredTasks(unfinishedTasks)
//             // getAllFilteredUserCoffeeShops()
//         }
//     },
//     [completed]
// )



  return (
    <>  
      <Button onClick={() => setShowCompleted(false)}>Show Incomplete</Button>
      <Button onClick={() => setShowCompleted(true)}>Show Completed</Button>
      <Button onClick={() => setShowCompleted(null)}>Show All Tasks</Button>
      {filteredTasks.map((task) => (
        <TaskCard
          task={task}
          key={task.id}
          getAllTasks={getAllTasks}
        ></TaskCard>
      ))}
    </>
  );
}
