import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false
    };
  }

  toggleDarkMode = () => {
    this.setState(prevState => ({
      darkMode: !prevState.darkMode
    }));
  }

  render() {
    const { darkMode } = this.state;

    return (
      <>
        <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">DinoNews</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
              </ul>
              <button className="btn btn-primary" onClick={this.toggleDarkMode}>
                {darkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
              </button>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
