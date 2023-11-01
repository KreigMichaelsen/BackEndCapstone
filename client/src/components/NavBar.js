import { useState } from "react";
import { Link, NavLink as RRNavLink } from "react-router-dom";
import {
Button,
Collapse,
Nav,
NavLink,
NavItem,
Navbar,
NavbarBrand,
NavbarToggler,
} from "reactstrap";
import { logout } from "../managers/authManager";
import "./Navbar.css"
import { BsUiChecks, BsPersonFill, BsClipboardDataFill } from "react-icons/bs";
import { SlNotebook } from "react-icons/sl";
export default function NavBar({ loggedInUser, setLoggedInUser }) {
const [open, setOpen] = useState(false);

const toggleNavbar = () => setOpen(!open);

return (
    <div>
        {loggedInUser ? (
        <>
            <Nav  className="Nav" navbar>
              <div className="NavDiv">
             
              <NavItem className="NavLogo"  onClick={() => setOpen(false)}>
                  <NavLink  className="NavLink" tag={RRNavLink} to="/">
                     <img src="/Images/GoodAsDoneLogo.png" alt="Logo" style={{ width: 125, height: 125}}></img>
                  </NavLink>
                </NavItem>
                <NavItem className="NavItem"  onClick={() => setOpen(false)}>
                  <NavLink  className="NavLink" tag={RRNavLink} to="/projects">
                  <BsClipboardDataFill/> My Projects
                  </NavLink>
                </NavItem>
                <NavItem className="NavItem" onClick={() => setOpen(false)}>
                  <NavLink className="NavLink" tag={RRNavLink} to="/tasks">
                 <BsUiChecks/> My Tasks
                  </NavLink>
                </NavItem>
                <NavItem className="NavItem" onClick={() => setOpen(false)}>
                  <NavLink className="NavLink" tag={RRNavLink} to="/notes">
                  <SlNotebook/> Notes
                  </NavLink>
                </NavItem>
                <NavItem className="NavItem" onClick={() => setOpen(false)}>
                  <NavLink  className="NavLink"tag={RRNavLink} to="/users">
                  <BsPersonFill/> Users
                  </NavLink>
                </NavItem>
                {loggedInUser.roles.includes("Admin") && (
                  <NavItem className="NavItem" onClick={() => setOpen(false)}>
                    <NavLink className="NavLink" tag={RRNavLink} to="/userProjects">
                      User Projects
                      
                    </NavLink>
                  </NavItem>
                )}
                {loggedInUser.roles.includes("Admin") && (
                  <NavItem className="NavItem" onClick={() => setOpen(false)}>
                    <NavLink className="NavLink" tag={RRNavLink} to="/AllProjects">
                      All Projects
                    </NavLink>
                  </NavItem>
                )}
                 {loggedInUser.roles.includes("Admin") && (
                  <NavItem className="NavItem" onClick={() => setOpen(false)}>
                    <NavLink className="NavLink" tag={RRNavLink} to="/AllTasks">
                      All Tasks
                    </NavLink>
                  </NavItem>
                )}
            <Button
            className="NavLogoutButton"
            color="warning"
            onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                logout().then(() => {
                setLoggedInUser(null);
                setOpen(false);
                });
            }}
            >
            Logout
            </Button>
            </div>
              </Nav>
        </>
        ) : (
        <Nav navbar>
            {/* <NavItem className="NavItem">
            <NavLink  className="NavLink" tag={RRNavLink} to="/login">
                <Button color="primary">Login</Button>
            </NavLink>
            </NavItem> */}
        </Nav>
        )}
    </div>
);


// return (
//   <div>
//   {loggedInUser ? (
//    <>         
//   <div className="CustomNavbar">
//     <div className="Logo">Good As Done</div>
//     <Nav className="Links">
//     <NavbarBrand className="NavbarBrand" tag={RRNavLink} to="/">
//          Good As Done
//     </NavbarBrand>
//     <NavItem className="NavItem"  onClick={() => setOpen(false)}>
//                   <NavLink  className="NavLink" tag={RRNavLink} to="/projects">
//                     My Projects
//                   </NavLink>
//                 </NavItem>
//       <NavItem className="NavItem" onClick={() => setOpen(false)}>
//                   <NavLink className="NavLink" tag={RRNavLink} to="/tasks">
//                     My Tasks
//                   </NavLink>
//                 </NavItem>
//       <NavItem className="NavItem" onClick={() => setOpen(false)}>
//                   <NavLink className="NavLink" tag={RRNavLink} to="/notes">
//                     Notes
//                   </NavLink>
//                 </NavItem>
//       <NavItem className="NavItem" onClick={() => setOpen(false)}>
//                   <NavLink  className="NavLink"tag={RRNavLink} to="/users">
//                     Users
//                   </NavLink>
//                 </NavItem>
//       {loggedInUser.roles.includes("Admin") && (
//                   <NavItem className="NavItem" onClick={() => setOpen(false)}>
//                     <NavLink className="NavLink" tag={RRNavLink} to="/userProjects">
//                       User Projects
                      
//                     </NavLink>
//                   </NavItem>
//                 )}
//       {loggedInUser.roles.includes("Admin") && (
//                   <NavItem className="NavItem" onClick={() => setOpen(false)}>
//                     <NavLink className="NavLink" tag={RRNavLink} to="/AllProjects">
//                       All Projects
//                     </NavLink>
//                   </NavItem>
//                 )}
//       {loggedInUser.roles.includes("Admin") && (
//                   <NavItem className="NavItem" onClick={() => setOpen(false)}>
//                     <NavLink className="NavLink" tag={RRNavLink} to="/AllTasks">
//                       All Tasks
//                     </NavLink>
//                   </NavItem>
//                 )}
//       </Nav>
//       <Button
//         color="primary"
//         onClick={(e) => {
//           e.preventDefault();
//           setOpen(false);
//           logout().then(() => {
//             setLoggedInUser(null);
//             setOpen(false);
//           });
//         }}
//       >
//         Logout
//       </Button>
//       </>
      
      
//         ) : (
//         <Nav navbar>
//             <NavItem className="NavItem">
//             <NavLink  className="NavLink" tag={RRNavLink} to="/login">
//                 <Button className="Button" color="primary">Login</Button>
//             </NavLink>
//             </NavItem>
//         </Nav>);
// </div>
// );
}