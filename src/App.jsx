import LandingPage from "./pages/LandingPage";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const path = window.location.pathname

  return path === "/admin" ? <AdminDashboard/> : <LandingPage/>
}

export default App