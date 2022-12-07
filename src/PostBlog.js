import "./PostBlog.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import editbuton from "./image/pencil.png";
import deleteicon from "./image/delete.png";
export const PostBlog = () => {
  const navigate = useNavigate();
  const [comment, setComment] = useState("");
  const [output, setOutput] = useState([]);
  const [img, setImg] = useState("");
  const [disable, setDisable] = useState(false);

  // functions for taking the value from input boxes
  const commentHandler = (e) => {
    setComment(e.target.value);
  };
  const UploadFileHandler = (event) => {
    // upload abd display image
    let p1 = URL.createObjectURL(event.target.files[0]);
    setImg(p1);
  };
  //   post button function
  const postHandler = (e) => {
    setComment("");
    var obj = {
      data: comment,
      image: img,
      id: Math.random(),
    };
    if (obj.data === "") {
      alert("Please write something");
    } else {
      setDisable(false);
      setOutput([...output, obj]);
    }
  };
  //   edit function
  const editHandler = (val) => {
    for (let i = 0; i < output.length; i++) {
      setDisable(true);
      if (val === output[i].id) {
        setComment([output[i].data]);
        output.splice(i, 1);
      }
      setOutput([...output]);
    }
  };
  //   delete function
  const deleteHandler = (val) => {
    let confirm = window.confirm("This will delete this blog ,Continue");
    if (confirm === true) {
      for (let i = 0; i < output.length; i++) {
        if (val === output[i].id) {
          output.splice(i, 1);
        }
      }
      setOutput([...output]);
    }
  };
  //   back to main page
  const backButtonHandler = () => {
    navigate("/");
  };
  return (
    <>
      <center>
        <button
          onClick={backButtonHandler}
          className="backButton"
          style={{ marginRight: "80%" }}
        >
          Back
        </button>
        <h2>BLOG</h2>
        <div className="comment">
          <textarea
            name=""
            id=""
            value={comment}
            onChange={commentHandler}
            placeholder="write comment Here"
          ></textarea>
          <br />
          <input
            type="file"
            name="photo"
            id="files"
            onChange={UploadFileHandler}
          />
          <br />
          <button className="postbutton" onClick={postHandler}>
            post
          </button>
          <ul>
            <div className="BlogContainer" key={Math.random()}>
              {output.map((element) => (
                <div className="Posted" key={Math.random()}>
                  <img id="img1" src={element.image} alt="" />

                  <div className="CaptionDiv">
                    {element.data} {""} <br />
                    <br />
                    <div style={{ marginTop: "9%" }}>
                      <button
                        className="EditButton"
                        disabled={disable}
                        onClick={() => editHandler(element.id)}
                      >
                        <img
                          className="EditImg"
                          id="Submit_id"
                          src={editbuton}
                          alt=""
                        />
                      </button>
                      <img
                        onClick={() => deleteHandler(element.id)}
                        className="DeleteIcon"
                        src={deleteicon}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ul>{" "}
        </div>
      </center>
    </>
  );
};
