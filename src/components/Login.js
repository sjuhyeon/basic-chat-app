import { Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase';
function Login() {

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) => {
            alert(error.message);
        })
    }

    return (
       <LoginContainer>
           <LoginInnerContainer>
                <img src="https://i.ibb.co/Xb04kNk/s-letter-logo-design-letter-s-design-s-logo-vector-28025074-removebg-preview-1.png" />
                <h1>Sign in to the Sjuhyeon Chat </h1>
                <p>chat.sjuhyeon.dev</p>

                <Button onClick={signIn}>
                    Sign in with Google
                </Button>
           </LoginInnerContainer>
       </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display:grid;
    place-items:center;
`;

const LoginInnerContainer = styled.div`
    padding: 100px;
    text-align:center;
    background-color: whote;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgb(0,0,0, 0.12), 0 1px 2px rgba(0,0,0, 0.24);

    >img {
        object-fit:contain;
        height: 100px;
        margin-bottom: 40px;
    }

    >button {
        margin-top:50px;
        text-transform: inherit !important;
        background-color: #0a8d48 !important;
        color:white;
    }
`;
