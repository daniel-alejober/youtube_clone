import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import clientAxios from "../utils/clientAxios";
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

const Card = ({ type, video }) => {
  const [channel, setChannel] = useState({});
  useEffect(() => {
    const getDataChanel = async () => {
      try {
        const { data } = await clientAxios.get(`/users/find/${video?.userId}`);
        if (data.success) setChannel(data.user);
      } catch (error) {
        console.log(error);
      }
    };
    getDataChanel();
  }, []);

  return (
    <Container type={type}>
      <Link to={`/video/${video?._id}`}>
        <Image src={video?.imgUrl} type={type} />
      </Link>
      <Details type={type}>
        <ChannelImage src={channel?.img} type={type} />
        <Texts>
          <Title>{video?.title}</Title>
          <ChannelName>{channel?.name}</ChannelName>
          <Info>
            {video?.views} views • {format(video?.createdAt)}
          </Info>
        </Texts>
      </Details>
    </Container>
  );
};

export default Card;
