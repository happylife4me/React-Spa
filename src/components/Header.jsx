import React, { Component } from 'react';
import {Route, Link, Switch} from "react-router-dom"

import logo from '../logo.svg';
import '../App.css';

import {Home} from "./Home"
import {Customers} from "./Customers"
import {Login} from "./Login"
import Cars from "./Cars"
import {CarDetails} from "./CarDetails"
import {Greet} from "./Greet"

 class Header extends Component {
  render() {
    return (
       <div>

        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />        
                </header>
                </div>
                <ul class="nav navbar-nav">
                  <li><Link exact to="/">Home</Link></li>
                  <li> <Link exact to="/users">Customers</Link></li>
                  {/* <li> <Link exact to="/cars">Cars</Link></li> */}
                  <li> <Link exact to="/login">Home</Link></li>
                  <li> <Link exact to="/Greet/Jagadeesh">Greet</Link></li>
                </ul>
                {/* <ul class="nav navbar-nav">
                <li class="active"><a href="#">Home</a></li>
                <li><a href="#">Page 1</a></li>
                <li><a href="#">Page 2</a></li>
                <li><a href="#">Page 3</a></li>
                </ul> */}
            </div>
            </nav>
            <mail className="container">
                <Switch>
                  <Route path="/" exact component={Home}></Route>
                  <Route path="/users" exact component={Customers}></Route>
                  <Route path="/login" exact component={Login}></Route>
                  <Route path="/cars" exact component={Cars}></Route>
                  <Route path="/carDetails/:carId" component={CarDetails}/>
                  <Route path="/greet/:username" render={(props) => (<Greet{...props}/>)}/>
                  <Route component={NotFound}/>
                </Switch> 
            </mail>
      </div>
    );
  }
}

const NotFound= () => <h1>File Not Found</h1>

export default Header;