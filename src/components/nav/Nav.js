import React from "react";
import { Routes, Route, NavLink } from 'react-router-dom';

import Home from "../home/Home";
import SponSales from "../sponSales/SponSales";
import VolSales from "../volSales/VolSales";
import MemSales from "../memSales/MemSales";
import SponSum from "../sponSum/SponSum";
import RemSpon from "../remSpon/RemSpon";
import VolInfo from "../volInfo/VolInfo";

function Nav() {
    return (
        <div className="nav">
            <nav>
                <ul>
                    <li>
                        <NavLink className="link" to="/" activeClassName="active">
                            TRC<br />Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="/Sponsorship-Sales" activeClassName="active">
                            Sponsorship<br />Sales
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="/Volunteer-Sales" activeClassName="active">
                            Volunteer<br />Sales
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="/Membership-Sales" activeClassName="active">
                            Membership<br />Sales
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="/Sponsorship-Summary" activeClassName="active">
                            Sponsorship<br />Summary
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="/Remaining-Sponsorship" activeClassName="active">
                            Remaining<br />Sponsorship
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="/Volunteer-Info" activeClassName="active">
                        Volunteer<br />Info
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Sponsorship-Sales" element={<SponSales />} />
                <Route path="/Volunteer-Sales" element={<VolSales />} />
                <Route path="/Membership-Sales" element={<MemSales />} />
                <Route path="/Sponsorship-Summary" element={<SponSum />} />
                <Route path="/Remaining-Sponsorship" element={<RemSpon />} />
                <Route path="/Volunteer-Info" element={<VolInfo />} />
            </Routes>
        </div>
    )
}

export default Nav;