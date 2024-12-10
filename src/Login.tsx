import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { default as Select } from "react-select";

import "./styles/Login.css"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }
    
    function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    return (
        <>
        <div className="Login">
        
            <Form onSubmit={handleSubmit}>
                <select>
                    <option value="Admin">Diretor</option>
                    <option value="User">Coordenador</option>
                </select>
                <Form.Group controlId="number">
                    <Form.Label>Número</Form.Label>
                        <Form.Control
                            autoFocus
                            type=""
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button type="submit" disabled={!validateForm()}>Entrar</Button>
            </Form>
        </div>
        </>
    );
}

export default Login;