import React from 'react';
import {
    Container
} from 'reactstrap';

import Layout from '../../components/hoc/Layout/layout';
import './home.css';

const Home = () => {
    return (
        <Layout type="auth">
            <Container className="container content">
                <div className="box-wrapper projects-wrapper">
                  We don't have home yet
                </div>
            </Container>
        </Layout>
    )
}

export default Home;
