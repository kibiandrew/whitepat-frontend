import React, { useState }from "react";
import NavBar from "./NavBar";
import NewPostForm from "./NewPostForm";

import PostList from "./PostList";


const Home = ({post,  onAddPost ,onPostDelete}) => {
  const [isHide, setIsHide] = useState(false);
  // const [search, setSearch] = useState();
  const [btnText, setBtnText] = useState("post an event");
  const [hideButtom, setHideButton] = useState(false);




  const postdisplay = post.map((repo) => (
    <PostList 
    id={repo.id} 
    repo={repo} 
    onPostDelete={onPostDelete}
    />
  ));

  const togglePopUp = () => {
    if (isHide) {
      setIsHide("");
      setBtnText("post an event");
    } else {
      setIsHide(<NewPostForm  onAddPost={onAddPost} />);
      setBtnText("close");
    }
  };

  return (
    <div>
    <NavBar />
    <div className="container-Post">

    <div className="form_container">{true ? [isHide] : null}</div>

      <div className="displayuserName">
      </div>
      <div className="formcont">
    
      <div style={{display: hideButtom}}>
      <button className="add-btn" onClick={togglePopUp} >
        {btnText}
      </button>
    </div>

      </div>

        <div className="searchbar">
          <input type="text" className="search"  placeholder="search by title" />
          <h3 >posts display</h3>

        </div>

        {/* Post */}
        <div className="Postheader">
        </div>

        <div className="displayPost">
          <table>
            <thead>
            <tr>
              <th>Time&Date</th>
              <th>Title</th>
              <th>Description</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {postdisplay}
            </tbody>
          </table>
          </div>
          </div>
      </div>
  );
};

export default Home;
