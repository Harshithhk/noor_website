import NavBar from "../navbar/NavBar"

const Layout = ({children}) => {
    return (
        <div>
            <NavBar/>
            {children}
        </div>
    )
}

export default Layout
