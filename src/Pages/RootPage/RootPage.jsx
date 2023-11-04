import { Outlet } from "react-router-dom"
import AppNavbar from "../../Layouts/AppNavbar"
import Footer from "../../Components/Footer/Footer"

const RootPage = () => {
  return (
    <div className=" overflow-y-scroll w-full h-screen overflow-hidden dark:bg-black dark:text-white">
      <div className=" h-full container mx-auto">
        <AppNavbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default RootPage