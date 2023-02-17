import React, { useState } from "react";
import clientAxios from "../utils/clientAxios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import { auth, provider } from "../firebase/firebase";
import { signInWithPopup } from "firebase/auth";
import {
  Link,
  Links,
  More,
  Button,
  Input,
  SubTitle,
  Title,
  Wrapper,
  Container,
  Form,
} from "../styles/signinStyles";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
  });
  const [signUp, setSignUp] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChageSingin = (e) => {
    setSignIn({ ...signIn, [e.target.name]: e.target.value });
  };

  const handleSubmitSingin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());

    try {
      const { data } = await clientAxios.post("/auth/signin", {
        email: signIn.email,
        password: signIn.password,
      });

      if (data._id) {
        dispatch(loginSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(loginFailure());
      console.log(error);
    }
  };

  const handleChageSingup = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
  };

  const handleSubmitSingup = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const { data } = await clientAxios.post("/auth/signup", {
        email: signUp.email,
        password: signUp.password,
        name: signUp.username,
      });

      if (data.success) {
        dispatch(loginSuccess(data.user));
        navigate("/");
      }
    } catch (error) {
      dispatch(loginFailure());
      console.log(error);
    }
  };

  const signInGoogle = async () => {
    dispatch(loginStart());
    try {
      const resultFireBase = await signInWithPopup(auth, provider);
      const data = await clientAxios.post("/auth/signin-google", {
        name: resultFireBase.user.displayName,
        img: resultFireBase.user.photoURL,
        email: resultFireBase.user.email,
      });

      if (data.status === 200) {
        dispatch(loginSuccess(data.data));
        navigate("/");
      }
    } catch (error) {
      dispatch(loginFailure());
      console.log(error);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <SubTitle>to continue to your channel</SubTitle>
        <Form onSubmit={handleSubmitSingin}>
          <Input
            placeholder="email"
            name="email"
            value={signIn.email}
            onChange={handleChageSingin}
          />
          <Input
            type="password"
            placeholder="password"
            name="password"
            value={signIn.password}
            onChange={handleChageSingin}
          />
          <Button type="submit">Sign in</Button>
        </Form>
        <Title>or</Title>
        <Button onClick={signInGoogle}>Signin whit Google</Button>
        <Form onSubmit={handleSubmitSingup}>
          <Input
            placeholder="username"
            name="username"
            value={signUp.username}
            onChange={handleChageSingup}
          />
          <Input
            placeholder="email"
            type="email"
            name="email"
            value={signUp.email}
            onChange={handleChageSingup}
          />
          <Input
            type="password"
            placeholder="password"
            name="password"
            value={signUp.password}
            onChange={handleChageSingup}
          />
          <Button type="submit">Sign up</Button>
        </Form>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default SignIn;
