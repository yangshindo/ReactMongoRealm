import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/Navbar";
import ExercisesList from "./components/ExercisesList";
import CreateExercise from "./components/CreateExercise.js";
import CreateUser from "./components/CreateUser"


function App() {
  return (
  <Router>
    <Navbar />
    <br/>
    <Routes>
    <Route path="/" exact element={<ExercisesList />} />
    <Route path="create" element={<CreateExercise />} />
    <Route path="/user" element={<CreateUser />} />
    </Routes>
  </Router>
  );
}

export default App;
