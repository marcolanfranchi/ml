import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function Navbar() {
     return (
    <nav className="nav">
        <Link to="/" className="home">-</Link>
        <ul>
            <CustomLink to="/about">about</CustomLink>
            <CustomLink to="/projects">projects</CustomLink>
            <CustomLink to="/other">other</CustomLink>
        </ul>
    </nav>
    )
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active": ""}>
            <Link to={to} {...props}> 
            {children}
            </Link>
        </li>
    )
}