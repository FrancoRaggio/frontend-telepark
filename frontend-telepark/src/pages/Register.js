import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Form from '../components/Form';
class Register extends React.Component {
    render() {
        return (
            <div className="register">
                <Navbar />
                <Form />
                <Footer />
            </div>
        )
    }
}
export default Register;