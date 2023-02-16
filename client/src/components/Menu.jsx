import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Wrapper,
  Logo,
  Name,
  Item,
  Hr,
  Login,
  BtnLogin,
} from "../styles/menuStyles";
import IconYoutube from "../icons/IconYoutube";
import IconUser from "../icons/IconUser";
import { blockOne, blockTwo, blockThree, blockFour } from "../icons";

const Menu = ({ setDarkMode, darkMode }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <Logo>
            <IconYoutube height="2.5rem" width="2.5rem" color="red" />
            <Name>Daniel Alejo</Name>
          </Logo>
        </Link>
        {blockOne.map((block) => (
          <Link to={block.route} key={block.description}>
            <Item>
              <block.icon />
              <Name bold>{block.description}</Name>
            </Item>
          </Link>
        ))}
        <Hr />
        {blockTwo.map((block) => (
          <Item key={block.description}>
            <block.icon />
            <Name bold>{block.description}</Name>
          </Item>
        ))}
        <Hr />
        <Login>
          <Name>Sing in to like videos,comment, and subscribe.</Name>
          <BtnLogin onClick={() => navigate("/signin")}>
            {" "}
            <IconUser /> SIGN IN
          </BtnLogin>
        </Login>
        <Hr />
        {blockThree.map((block) => (
          <Item key={block.description}>
            <block.icon />
            <Name bold>{block.description}</Name>
          </Item>
        ))}
        <Hr />
        {blockFour.map((block) =>
          block.description === "Change Mode" ? (
            <Item
              key={block.description}
              onClick={() => setDarkMode(!darkMode)}
            >
              <block.icon />
              <Name bold>{darkMode ? "Light Mode" : "Dark Mode"}</Name>
            </Item>
          ) : (
            <Item key={block.description}>
              <block.icon />
              <Name bold>{block.description}</Name>
            </Item>
          )
        )}
      </Wrapper>
    </Container>
  );
};

export default Menu;
