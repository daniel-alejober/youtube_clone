import React from "react";
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
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <IconSearch />
        </Search>
        <BtnLogin>
          <IconUser /> SIGN IN
        </BtnLogin>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
