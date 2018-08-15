import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from "./components/hoc/Layout/layout";
import Home from "./pages/Home/home";
import SignIn from "./pages/Signin/signin";
import Projects from "./pages/Projects/projects";
import ProjectDetails from "./pages/ProjectDetails/project_details";
import Ideas from "./pages/Ideas/ideas";
import Search from "./pages/Search/search";


class Routes extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/sign-in" exact component={SignIn} />
                    <Route path="/projects" exact component={Projects}/>
                    <Route path="/projects/:id" exact component={ProjectDetails}/>
                    <Route path="/ideas" exact component={Ideas}/>
                    <Route path="/search" exact component={Search}/>
                </Switch>
            </Layout>
        )
    }
}

export default Routes;