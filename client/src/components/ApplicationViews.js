import { Route, Routes } from "react-router-dom";
import { AuthorizedRoute } from "./auth/AuthorizedRoute";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Projects from "./projects/Projects";
import ProjectDetails from "./projects/ProjectDetails";

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
            path="create"
            element={
              <AuthorizedRoute loggedInUser={loggedInUser}>
                Test
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
