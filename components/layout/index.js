import NavBar from "../navbar/NavBar"
import Footer from "../footer"
import BottomNavbar from "../bottom-navbar/index"
const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
      <BottomNavbar />
    </div>
  )
}

export default Layout
