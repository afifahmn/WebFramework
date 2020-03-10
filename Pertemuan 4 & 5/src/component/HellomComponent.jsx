//agar function arrow HelloComponent bisa berjalan di ract
import React from "react";
import "./HelloComponent.css";

//function arrow
const HelloComponent = () => {
  return (
    <div>
      <center>
        <br />
        <h2>Form Login</h2>
        <form>
          <h1>Tugas Pertemuan Ketiga</h1>
          {/* <div className="imgcontainer">
            <img src="avatar.png" alt="Avatar" className="avatar" />
          </div> */}

          <div className="container">
            <label>
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Masukkan Username Anda"
              name="uname"
              required
            />
            <label>
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Masukkan Password Anda"
              name="psw"
              required
            />
            <button type="submit">Login</button>
            <input type="checkbox" defaultChecked /> Remember me
          </div>
          <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
            <button type="button" className="cancelbtn">
              Cancel
            </button>
          </div>
        </form>
      </center>
    </div>
  );
};

//agar component dapat dipakai dimana saja
export default HelloComponent;
