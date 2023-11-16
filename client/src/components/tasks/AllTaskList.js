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
        setTasks(t); 
      }
    }); 
  };

  useEffect(() => {

    getAllTasks();

  }, [showCompleted]);

  useEffect(() => {

    setFilteredTasks(tasks);

  }, [tasks]);


  return (
    <>  
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