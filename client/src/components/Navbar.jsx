import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import IconUser from "../icons/IconUser";
import IconSearch from "../icons/IconSearch";
import {
  Search,
  BtnLogin,
  Input,
  Wrapper,
  Container,
  User,
  Avatar,
} from "../styles/navbarStyles";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <IconSearch />
        </Search>
        {currentUser ? (
          <User>
            <Avatar src={currentUser?.img} />
            {currentUser.name}
          </User>
        ) : (
          <BtnLogin onClick={() => navigate("/signin")}>
            <IconUser /> SIGN IN
          </BtnLogin>
        )}
      </Wrapper>
    </Container>
  );
};

export default Navbar;
