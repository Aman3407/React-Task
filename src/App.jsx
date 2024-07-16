import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  createBrowserRouter,
} from "react-router-dom";
import { AppProvider } from "./context/context";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/Signup" element={<Signup />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/employee/:id" element={<Details />} />
    //     <Route path="*" element={<Error />} />
    //   </Routes>
    // </Router>
    <AppProvider>
      <Outlet />
    </AppProvider>
  );
}

export default App;
