import React from "react";
import { useNavigate } from "react-router-dom";
import IconUser from "../icons/IconUser";
import IconSearch from "../icons/IconSearch";
import {
  Search,
  BtnLogin,
  Input,
  Wrapper,
  Container,
} from "../styles/navbarStyles";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <IconSearch />
        </Search>
        <BtnLogin onClick={() => navigate("/signin")}>
          <IconUser /> SIGN IN
        </BtnLogin>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
