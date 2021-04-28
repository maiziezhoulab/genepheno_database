import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import {hashHistory} from 'react-router';

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Index from "views/pages/Index.js";

// others
import HomePaperPage from "views/pages/HomePaperPage.js";
import HomeGenePage from "views/pages/HomeGenePage.js";
import ResultPaperPage from "views/pages/ResultPaperPage.js";
import ResultGenePage from "views/pages/ResultGenePage.js";



ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/search_paper/" component={HomePaperPage} />
      <Route exact path="/search_gene/" component={HomeGenePage} />
      <Route path="/search_paper/:id" exact component={ResultPaperPage} />
      <Route path="/search_gene/:id" exact component={ResultGenePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
