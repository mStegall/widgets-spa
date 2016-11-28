import React, { Component } from 'react';

import { BrowserRouter, Match } from "react-router";

import Sidebar from "./components/sidebar";
import Header from "./components/header";

import Dashboard from "./views/dashboard";
import Users from "./views/usersList";
import UserDetail from "./views/userDetails";
import Widgets from "./views/widgetsList";
import WidgetDetail from "./views/widgetDetails";
import AddEditWidget from "./views/addEditWidget";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="page-wrapper" className="open">
          <Sidebar />
          <div id="content-wrapper">
            <div className="page-content">
              <Header />
              
              <Match exactly pattern="/" component={Dashboard} />
              <Match exactly pattern="/user" component={Users} />
              <Match pattern="/user/:id" component={UserDetail} />
              <Match exactly pattern="/widget" component={Widgets} />
              <Match pattern="/widget/add" component={AddEditWidget} />
              <Match pattern="/widget/update/:id" component={AddEditWidget} />
              <Match exactly pattern="/widget/details/:id" component={WidgetDetail} />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
