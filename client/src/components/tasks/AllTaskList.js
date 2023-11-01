import React, { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import { getProjectTasks } from "../../managers/projectTaskManager";
import { Button, ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

export default function AllTaskList() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const toggle = () => setDropdownOpen((prevState) => !prevState);



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
      {/* <Button onClick={() => setShowCompleted(false)}>Show Incomplete</Button>
      <Button onClick={() => setShowCompleted(true)}>Show Completed</Button>
      <Button onClick={() => setShowCompleted(null)}>Show All Tasks</Button> */}
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret color="primary">
          Filter Completed
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => setShowCompleted(false)}>Show Incomplete</DropdownItem>
          <DropdownItem onClick={() => setShowCompleted(true)}>Show Completed</DropdownItem>
          <DropdownItem onClick={() => setShowCompleted(null)}>Show All Tasks</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
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