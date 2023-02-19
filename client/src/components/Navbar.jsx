import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import IconUser from "../icons/IconUser";
import IconSearch from "../icons/IconSearch";
import IconVideoCamera from "../icons/IconVideoCamera";
import IconLogout from "../icons/IconLogout";
import {
  Search,
  BtnLogin,
  Input,
  Wrapper,
  Container,
  User,
  Avatar,
  BtnSend,
  BtnLogout,
} from "../styles/navbarStyles";
import Upload from "./Upload";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [openModal, setOpenModal] = useState(false);
  const [searchVideo, setSearchVideo] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchVideo === "") return;

    navigate(`/search?q=${searchVideo}`);
  };

  const logout = () => {
    // navigate('/')
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Search onSubmit={handleSearch}>
            <Input
              placeholder="Search"
              value={searchVideo}
              onChange={(e) => setSearchVideo(e.target.value)}
            />
            <BtnSend>
              <IconSearch />
            </BtnSend>
          </Search>
          {currentUser ? (
            <User>
              <IconVideoCamera
                style={{ cursor: "pointer" }}
                onClick={() => setOpenModal(true)}
              />
              <Avatar src={currentUser?.img} />
              {currentUser.name}
              <BtnLogout onClick={logout}>
                Logout <IconLogout />
              </BtnLogout>
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
