import React from 'react';
import { FacebookLoginButton, GoogleLoginButton } from '../../atoms';
import styled from 'styled-components';

function Login() {
  const Form = styled.div`
    position: relative;
    width: 50%;
    height: 100px;
    left: 50%;
    transform: translateX(-50%);
  `;

  return (
    <Form>
      <GoogleLoginButton />

      <FacebookLoginButton />
    </Form>
  );
}

export default Login;
