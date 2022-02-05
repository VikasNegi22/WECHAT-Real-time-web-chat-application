import React from "react";
import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";


import Join from "./Components/Join/Join";
import Chat from "./Components/Chat/Chat";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Join />} />
        <Route path="/chat" element={<Chat  />} />
      </Routes>
    </Router>
  );
};

export default App;
