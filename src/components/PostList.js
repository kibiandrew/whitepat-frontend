import React, { useState } from "react";
const Url ="http://localhost:9292/posts"


const PostList = ({ id, repo, onReportDelete,params }) => {
  const [isChecked,setIsChecked] = useState(false)
// console.log(repo)

  const handleEditClick = () => {
    setIsChecked((isChecked)=>!isChecked)
    
    
  };

  const handleDeleteClick = () => {
    fetch(`${Url}/deleteposts/${id}`, {
      method: "DELETE",
      headers: {
        "content-Type": "application/json",
      },
    });

    onReportDelete(id);
  };

  return (
    <>
      <tr>
        <td>{repo.created_at}</td>
        <td>{repo.title}</td>
        <td>{repo.description}</td>
        <td>{repo.location}</td>
        <td className="tbtn">
          <button onClick={handleDeleteClick}>
            <span className="btn1">
              <i className="fa fa-trash"></i>
            </span>
          </button>
          {
           params.role === 'user'?
            <button onClick={handleEditClick}>
            <span className="btn2">
              <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            </span>
          </button>
          : 
          <button onClick={handleEditClick}>{isChecked? "Checked" : "check"}</button>
          }

        </td>
      </tr>
    </>
  );
};

export default PostList;
