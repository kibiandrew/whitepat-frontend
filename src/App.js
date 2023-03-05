import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import About from "./components/About";
import NewPostForm from "./components/NewPostForm";
const url ="http://localhost:9292/posts"
function App() {
  // const [isDarkMode,setIsDarkMode]=useState(false)
  const [post, setPost] = useState([]);
  // this will be used for the Dark Mode Toggle feature
  // function handleButton(){
  //   setIsDarkMode((isDarkMode)=> !isDarkMode)

  // }
  // const appClass = isDarkMode ? "App dark" : "App light"

  // fetching

  useEffect(() => {
    fetch(`${url}/posts`)
      .then((res) => res.json())
      .then((data) => console(data));
  }, []);

  // const onAddReport = (addNewReport) => {
  //   setReport([addNewReport, ...report]);
  // };
  // const handleDeleteReport = (id) => {
  //   const updateReport = report.filter((report) => report.id !== id);
  //   setReport(updateReport);
  // };


  return (
    <div>
      <Routes>
        <Route
          element={
            <Home
            // params={params}
            //   post={post}
            //   onAddPost={onAddPost}
            //   onPostDelete={handleDeletePost}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/addpost" element={<NewPostForm   />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
