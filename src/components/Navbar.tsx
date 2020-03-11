import React, { Component } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import logo from '../assets/logo_msg.svg';

type NavbarProps = RouteComponentProps & {}

class Navbar extends Component<NavbarProps> {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" href="https://msg-systems.ro">
            <img src={logo} alt="logo" width="112" height="28" />
          </Link>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/products" className="navbar-item">
              Products
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button className="button is-primary is-outlined is-rounded"
                  onClick={() => this.props.history.push("/cart")}>
                  Shopping Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav >
    );
  }
}

export default withRouter(Navbar);