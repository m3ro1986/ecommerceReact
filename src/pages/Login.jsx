import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const submit = ( data ) => {
        console.log( data );
        axios.post('https://e-commerce-api-v2.academlo.tech/api/v1/users/login', data)
            .then( res => {
                localStorage.setItem( 'token', res.data.token);
                navigate('/')
            })
            .catch( error => {
                if (error.response.status === 401){
                    alert('credenciales incorrectas')
                }
                console.log( error );
            })
    }

    return (
        <div>
            <Form onSubmit={handleSubmit(submit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email"
                        { ...register( 'email')}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        { ...register( 'password')}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Login;