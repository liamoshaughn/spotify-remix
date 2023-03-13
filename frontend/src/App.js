import logo from "./logo.svg";
import "./App.css";
import XMLConvert from "./components/XMLConvert";
import SongDisplay from "./components/SongDisplay";
import { useEffect, useState } from "react";
import axios from "axios";
import { LoginButton } from "./components/Spotify";

function App() {
  axios({
    method: "get",
    url: "http://localhost:3005/login",
    responseType: "stream",
  }).then(function (response) {
    console.log(response);
  });

  return (
    <div className="App">
      <LoginButton />
      <XMLConvert />
      <SongDisplay />
    </div>
  );
}

export default App;
