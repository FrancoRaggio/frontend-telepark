import React from 'react';

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Form from '../components/Form';
import FormLogin from '../components/FormLogin'

class Register extends React.Component {
    render() {
        return (
            <Router>
            <div className="register">
                <Navbar />
                <Route exact path="/" component={Form}/>
                <Route exact path="/FormLogin" component={FormLogin}/>
                <Footer />
            </div>
            </Router>
        )
    }
}
export default Register;