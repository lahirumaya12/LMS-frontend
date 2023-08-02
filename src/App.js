import React from "react";

import AboutDes from "./components/AboutDes/AboutDes";
import About from "./pages/AboutUs";
import AllcoursePage from "./pages/AllcoursePage";
import ContactPage from "./pages/ContactPage";
import AllService from "./pages/AllService";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";




function App() {
  return (
    <BrowserRouter>
    <AppRouter/>
    
    </BrowserRouter>
  );
}

export default App;
