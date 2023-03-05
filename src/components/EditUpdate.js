import React from "react";

const EditUpdate = () => {


    // const handleInputChange = (event) => {
    //     setInputData({
    //         ...inputData,[event.target.name]: event.target.value
    //     })
    //   };
    //   const handleInputDescription = (event) => {
    //     setInputData({
    //         ...inputData,[event.target.name]: event.target.value
    //     })
    //   };
    
    //   const handleInputLocation = (event) => {
    //     setInputData({
    //         ...inputData,[event.target.name]: event.target.value
    //     })
    //   };

    //   const handleSubmit = (e) => {
    //     e.preventDefault();



    
    //   }
  return (
    <div>
      <form  className="formR">
        <input
          type="text"
          name="title"
          placeholder="Enter Type of emergency report"
        //   onChange={handleInputChange}
        //   value={inputData.title}
        />
        <br />
        <textarea
          type="text"
          name="description"
          placeholder="Enter Description of emergency report"
        //   onChange={handleInputDescription}
        //   value={inputData.description}
        />
        <br />
        <input
          type="text"
          name="location"
          placeholder="Enter Location of emergency report"
        //   onChange={handleInputLocation}
        //   value={inputData.location}
        />
        <br />

        <div className="action_btn">
        <button type="submit" className="report-btn">
          Submit
        </button>
{/* 
        <a className="close-btn" onClick={hidePopUp}>
          Close
        </a> */}
        </div>
        
      </form>
    </div>
  );
};

export default EditUpdate;
