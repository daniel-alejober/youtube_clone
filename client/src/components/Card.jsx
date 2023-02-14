import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Image,
  ChannelImage,
  Details,
  Texts,
  Title,
  ChannelName,
  Info,
} from "../styles/cardStyles";

const Card = ({ type }) => {
  return (
    <Container type={type}>
      <Link to={`/video/${1}`}>
        <Image
          src="https://i.ytimg.com/vi/GliNSzCXPE0/maxresdefault.jpg"
          type={type}
        />
      </Link>
      <Details type={type}>
        <ChannelImage
          src="https://avatars.githubusercontent.com/u/74944181?s=400&u=e703ca9165d84a1db5007876497551be79f5f85a&v=4"
          type={type}
        />
        <Texts>
          <Title>Test Video</Title>
          <ChannelName>Daniel Puppy</ChannelName>
          <Info>660,908 views • 1 day ago</Info>
        </Texts>
      </Details>
    </Container>
  );
};

export default Card;
