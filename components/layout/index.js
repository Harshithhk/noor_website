import NavBar from "../navbar/NavBar"
import Footer from "../footer"
const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
