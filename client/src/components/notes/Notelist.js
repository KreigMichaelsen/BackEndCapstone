import React, { useState, useEffect } from "react";
import { getProjectTasks } from "../../managers/projectTaskManager";
import { Button } from "reactstrap";
import NoteCard from "./NoteCard";
import { getProjectNotes } from "../../managers/projectNoteManager";

export default function NoteList() {
  const [notes, setNotes] = useState([]);
//   const [filteredTasks, setFilteredTasks] = useState([]);
//   const [completed, setCompleted] = useState([]);



  const getAllNotes = () => {
    getProjectNotes().then(setNotes); // Replace getOrders with your actual method to fetch orders
  };

  useEffect(() => {

    getAllNotes();

  }, []);


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
    <div className="noteCardListContainer">
      {/* <Button onClick={ () => { setCompleted(false) } }> Incomplete</Button>
      <Button onClick={ () => { setCompleted(true) } }> Complete</Button>  */}
      {notes.map((note) => (
        <NoteCard
          note={note}
          key={note.id}
          getAllNotes={getAllNotes}
        ></NoteCard>
      ))}
      </div>
    </>
  );
}
