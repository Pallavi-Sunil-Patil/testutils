import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [selected, setSelected] = useState("option2");

  function handleRadioChange(event) {
  const value = event.target.value;
  setSelected(value);

  if (value === "option1") {
    document.body.style.backgroundColor = "#f55050";
    props.setMode("danger");
    document.title = 'TextUlits - Red';
  } else if (value === "option2") {
    document.body.style.backgroundColor = "#050595";
    props.setMode("primary");
    document.title = 'TextUlits - Blue';
  }
}

  // Fix: dynamic text color based on mode
  const textColor = props.mode === "light" ? "dark" : "light";

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">

          <Link className={`navbar-brand text-${textColor}`} to="/">
            {props.title2}
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">

            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link active text-${textColor}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link active text-${textColor}`} to="/about">{props.aboutText}</Link>
              </li>
            </ul>

            {/* Light/Dark toggle */}
            <div className="form-check form-switch me-3">
              <input
                className="form-check-input"
                type="checkbox"
                onClick={props.toggleMode}
                id="flexSwitchCheckDefault"
              />
            </div>

            {/* Radio buttons */}
            <div className="d-flex">
              <div className="form-check p-0 me-4">
                <input style={{ backgroundColor: "red", border: "2px solid white", fontSize: "20px" }}
                  className="form-check-input"
                  type="radio"
                  name="radioDefault"
                  id="radioDefault1"
                  value="option1"
                  checked={selected === "option1"}
                  onChange={handleRadioChange}
                />
              </div>

              <div className="form-check p-0">
                <input style={{ backgroundColor: "blue", border: "2px solid white", fontSize: "20px" }}
                  className="form-check-input"
                  type="radio"
                  name="radioDefault"
                  id="radioDefault2"
                  value="option2"
                  checked={selected === "option2"}
                  onChange={handleRadioChange}
                />
              </div>
            </div>

          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  title2: PropTypes.string.isRequired,
  aboutText: PropTypes.string
};

Navbar.defaultProps = {
  title2: 'set web title',
  aboutText: 'set about text'
};