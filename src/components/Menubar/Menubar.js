import { Box } from "@mui/system";
import Button from "@restart/ui/esm/Button";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import useFirebase from "../../Hook/useFirebase";
import "./Menubar.css";
// import logo from "../../../images/Banner&Background/logo.png";
// import useFirebase from './../../Hook/useFirebase';

const Menubar = () => {
  // const { user } = useFirebase();
  const { user, handleLogout } = useFirebase();
  return (
    <div>
      <div className="menubar-container">
        <div className="menubar container">
          <div className="row">
            <div className="col-md-2 col-sm-12">
              <div className="logo-img">
                <img
                  className="p-2 w-100"
                  src="https://i.ibb.co/QvMLCj4/Group-1329.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-10 col-sm-12">
              <div className="menu-items text-center">
                <ul className="d-flex align-items-end justify-content-end me-5">
                  <li className="items p-2">
                    <Link className="items p-2" to="/home">
                      Home
                    </Link>
                  </li>
                  <li className="items p-2">
                    <Link className="items p-2" to="/blog">
                      blog
                    </Link>
                  </li>
                  <li className="items p-2">
                    <Link className="items p-2" to="/About">
                      About Us
                    </Link>
                  </li>
                  <li className="items p-2">
                    <Link className="items p-2" to="/Donation">
                      Donation
                    </Link>
                  </li>
                  <li className="items p-2">
                    <Link className="items p-2" to="/Events">
                      Events
                    </Link>
                  </li>

                  <Link to="/appointment"><Button color="inherit">Appointment</Button></Link>
                  {
                    user?.email ?
                      <Box>
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                          <Button color="inherit">Dashboard</Button>
                        </NavLink>
                        <Button onClick={handleLogout} color="inherit">Logout</Button>
                      </Box>
                      :
                      <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                        <Button color="inherit">Login</Button>
                      </NavLink>
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
