import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import IconUser from "../icons/IconUser";
import IconSearch from "../icons/IconSearch";
import IconVideoCamera from "../icons/IconVideoCamera";
import {
  Search,
  BtnLogin,
  Input,
  Wrapper,
  Container,
  User,
  Avatar,
} from "../styles/navbarStyles";
import Upload from "./Upload";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Container>
        <Wrapper>
          <Search>
            <Input placeholder="Search" />
            <IconSearch />
          </Search>
          {currentUser ? (
            <User>
              <IconVideoCamera
                style={{ cursor: "pointer" }}
                onClick={() => setOpenModal(true)}
              />
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
      {openModal && <Upload setOpenModal={setOpenModal} />}
    </>
  );
};

export default Navbar;
