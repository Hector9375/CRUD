import { useState } from "react";
import axios from "axios";

export default function Form({ close }) {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  function nameChange({ target }) {
    setFormName(target.value);
  }

  function emailChange({ target }) {
    setFormEmail(target.value);
  }

  function save() {
    axios
      .post("http://localhost:8080", {
        name: formName,
        email: formEmail,
      })
      .then((res) => {
        console.log(res);
      });
  }
  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "#000000af",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
      }}
      className="d-flex vh-100 justify-content-center align-items-center"
    >
      <form style={{ backgroundColor: "white" }}>
        <table className="table">
          <tbody>
            <tr>
              <th>이름</th>
              <td>
                <input type="text" onChange={nameChange} value={formName} />
              </td>
              <th>이메일</th>
              <td>
                <input type="text" onChange={emailChange} value={formEmail} />
              </td>
            </tr>
            <tr>
              <td colSpan={4} style={{ textAlign: "center" }}>
                <input type="button" value="저장" onClick={save} />
                <input type="button" value="닫기" onClick={close} />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
