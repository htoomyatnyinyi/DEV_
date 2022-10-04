import React, { Fragment } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set_file } from "../../redux/ducks/fileUploadSlice";

const FileUpload = () => {
  const [file, setFile] = useState();
  const [filename, setFilename] = useState("Choose File To Upload It.");

  const dispatch = useDispatch();
  const fileUpload = useSelector((state) => state.fileupload.file);
  console.log(fileUpload);

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  return (
    <Fragment>
      <form
        className="bg-red-500 bg-opicity-500 text-center"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData();
          formData.append("file", file);
          console.log(formData);

          dispatch(set_file({ formData, filename }));
        }}
      >
        <h3>To Upload Image to DATABASE!</h3>
        <div>
          <label>{filename}</label>
          <input type="file" onChange={onChange} />
        </div>
        <input type="submit" className="bg-yellow-500 p-2 rounded-md" />
      </form>
    </Fragment>
  );
};

export default FileUpload;
