import React from 'react';
import {Link} from 'react-router-dom';

import Layout from "../../components/hoc/Layout/layout";
import {Button} from '../../components/Buttons/buttons';
import './signin.css';


const SignIn = () => {
    return (
        <Layout type="not-auth">
            <div className="white-box login-wrapper clearfix">
                <Link to="/" className="logo">
                    <img src="/images/logo.svg" alt="Logo"/>
                </Link>
                <div className="signin-wrap">
                    <h2 className="headline-b-2">Sign in with Google</h2>
                    <p className="std-text">Please use your Google account to <br/> Sign in iCarLabs</p>
                    <Button
                        icon="icon-g"
                        text="Sign in with Google"
                        type="google"
                    />
                </div>
            </div>
        </Layout>
    )
}

export default SignIn;
