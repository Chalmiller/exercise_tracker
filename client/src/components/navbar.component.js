import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to='/' className="navbar-brand">Fitness Tracker</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to='/exercises' className="nav-link">Exercises</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to='/nutritions' className="nav-link">Nutrition Tracker</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to='/create' className="nav-link">Create Exercise Log</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to='/user' className="nav-link">Create User</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to='/nutrition' className="nav-link">Create Nutrition</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
