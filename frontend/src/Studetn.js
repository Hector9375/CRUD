import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./Form";
function Studetn() {
  const [students, setStudents] = useState([]);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8080/")
      .then(({ data }) => {
        setStudents(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-75 bg-white rounded">
        <button
          className="btn btn-success"
          onClick={() => {
            setVisible(!visible);
          }}
        >
          Add +
        </button>
        {visible ? <Form close={() => setVisible(false)} /> : null}
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, idx) => {
              return (
                <tr key={`s_${idx}`}>
                  <td>{student.Name}</td>
                  <td>{student.Email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Studetn;
