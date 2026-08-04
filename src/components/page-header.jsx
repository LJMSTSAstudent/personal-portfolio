import { NavLink } from "react-router-dom";

function PageHeader() {
    return(
        <div className="Header flex flex-row justify-between px-20 pt-15 mb-10">
            <h3 className="text-2xl text-accent font-bold">Vaibhav Saravanan</h3>

        <div className="Buttons flex flex-row gap-5">
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive
                    ? "text-accent font-bold"
                    : "text-primary hover:text-accent transition-colors"
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) =>
                    isActive
                    ? "text-accent font-bold"
                    : "text-primary hover:text-accent transition-colors"
                }
            >
                About
            </NavLink>
            <NavLink
                to="/projects"
                className={({ isActive }) =>
                    isActive
                    ? "text-accent font-bold"
                    : "text-primary hover:text-accent transition-colors"
                }
            >
                Projects
            </NavLink>
            <NavLink
                to="/contact"
                className={({ isActive }) =>
                    isActive
                    ? "text-accent font-bold"
                    : "text-primary hover:text-accent transition-colors"
                }
            >
                Contact
            </NavLink>
        </div>
        </div>
    )
}

export default PageHeader;