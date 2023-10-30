import { useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
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

export default function NavBar({ loggedInUser, setLoggedInUser }) {
const [open, setOpen] = useState(false);

const toggleNavbar = () => setOpen(!open);

return (
    <div>
    <Navbar color="light" light fixed="true" expand="lg">
        <NavbarBrand className="mr-auto" tag={RRNavLink} to="/">
        Good As Done
        </NavbarBrand>
        {loggedInUser ? (
        <>
            <NavbarToggler onClick={toggleNavbar} />
            <Collapse isOpen={open} navbar>
            <Nav navbar>
                <NavItem onClick={() => setOpen(false)}>
                  <NavLink tag={RRNavLink} to="/projects">
                    My Projects
                  </NavLink>
                </NavItem>
                <NavItem onClick={() => setOpen(false)}>
                  <NavLink tag={RRNavLink} to="/tasks">
                    My Tasks
                  </NavLink>
                </NavItem>
                <NavItem onClick={() => setOpen(false)}>
                  <NavLink tag={RRNavLink} to="/notes">
                    Notes
                  </NavLink>
                </NavItem>
                <NavItem onClick={() => setOpen(false)}>
                  <NavLink tag={RRNavLink} to="/users">
                    Users
                  </NavLink>
                </NavItem>
                {/* <NavItem onClick={() => setOpen(false)}>
                  <NavLink tag={RRNavLink} to="/userProjects">
                    User Projects
                  </NavLink>
                </NavItem> */}
                {loggedInUser.roles.includes("Admin") && (
                  <NavItem onClick={() => setOpen(false)}>
                    <NavLink tag={RRNavLink} to="/userProjects">
                      User Projects
                      
                    </NavLink>
                  </NavItem>
                )}
                {loggedInUser.roles.includes("Admin") && (
                  <NavItem onClick={() => setOpen(false)}>
                    <NavLink tag={RRNavLink} to="/AllProjects">
                      All Projects
                    </NavLink>
                  </NavItem>
                )}
                 {loggedInUser.roles.includes("Admin") && (
                  <NavItem onClick={() => setOpen(false)}>
                    <NavLink tag={RRNavLink} to="/AllTasks">
                      All Tasks
                    </NavLink>
                  </NavItem>
                )}
              </Nav>
            </Collapse>
            <Button
            color="primary"
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
        </>
        ) : (
        <Nav navbar>
            <NavItem>
            <NavLink tag={RRNavLink} to="/login">
                <Button color="primary">Login</Button>
            </NavLink>
            </NavItem>
        </Nav>
        )}
    </Navbar>
    </div>
);
}