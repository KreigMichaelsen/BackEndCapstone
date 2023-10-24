import { Route, Routes } from "react-router-dom";
import { AuthorizedRoute } from "./auth/AuthorizedRoute";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Projects from "./projects/Projects";
import ProjectDetails from "./projects/ProjectDetails";
import { ProjectCreationForm } from "./projects/ProjectCreationForm";
import { TaskCreationForm } from "./tasks/TaskCreationForm";
import TaskDetails from "./tasks/TaskDetails";
import Tasks from "./tasks/Tasks";
import { ProjectEditForm } from "./projects/ProjectEditForm";
import UserProfiles from "./users/UserProfiles";
import UserProfileDetails from "./users/UserProfileDetails";
import UserProjects from "./userProjects/UserProjects";
import { ProjectUserAddForm } from "./projects/ProjectUserAddForm";
import { ProjectTaskAddForm } from "./projects/ProjectTaskAddForm";
import { TaskEditForm } from "./tasks/TaskEditForm";

export default function ApplicationViews({ loggedInUser, setLoggedInUser }) {
  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              Filler Text
            </AuthorizedRoute>
          }
        />
        <Route path="projects">
        <Route
        index
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <Projects />
            </AuthorizedRoute>
          }
        />
        <Route
          path=":id"
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <ProjectDetails />
            </AuthorizedRoute>
          }
        />
        <Route
          path=":id/edit"
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <ProjectEditForm/>
            </AuthorizedRoute>
          }
        />
        <Route
          path=":id/addUser"
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <ProjectUserAddForm/>
            </AuthorizedRoute>
          }
        />
         <Route
          path=":id/addTask"
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <ProjectTaskAddForm/>
            </AuthorizedRoute>
          }
        />
        <Route
            path="create"
            element={
              <AuthorizedRoute loggedInUser={loggedInUser}>
                <ProjectCreationForm/>
              </AuthorizedRoute>
            }
            />
        </Route>
        <Route path="tasks">
        <Route
        index
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <Tasks />
            </AuthorizedRoute>
          }
        />
        <Route
          path=":id"
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <TaskDetails />
            </AuthorizedRoute>
          }
        />
        <Route
          path=":id/edit"
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <TaskEditForm/>
            </AuthorizedRoute>
          }
        />
        <Route
            path="create"
            element={
              <AuthorizedRoute loggedInUser={loggedInUser}>
                <TaskCreationForm/>
              </AuthorizedRoute>
            }
            />
        </Route>
        <Route path="users">
        <Route
        index
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <UserProfiles/>
            </AuthorizedRoute>
          }
        />
        <Route
          path=":id"
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <UserProfileDetails />
            </AuthorizedRoute>
          }
        />
        {/* <Route
            path="create"
            element={
              <AuthorizedRoute loggedInUser={loggedInUser}>
                <TaskCreationForm/>
              </AuthorizedRoute>
            }
            /> */}
        </Route>
        
        <Route path="userProjects">
        <Route
        index
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <UserProjects/>
            </AuthorizedRoute>
          }
        />
        {/* <Route
          path=":id"
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <UserProfileDetails />
            </AuthorizedRoute>
          }
        /> */}
        <Route
            path="create"
            element={
              <AuthorizedRoute loggedInUser={loggedInUser}>
                <TaskCreationForm/>
              </AuthorizedRoute>
            }
            />
        </Route>
        
        <Route
          path="login"
          element={<Login setLoggedInUser={setLoggedInUser} />}
        />
        <Route
          path="register"
          element={<Register setLoggedInUser={setLoggedInUser} />}
        />
      </Route>
      <Route path="*" element={<p>Whoops, nothing here...</p>} />
    </Routes>
  );
}
