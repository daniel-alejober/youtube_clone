import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import clientAxios from "../utils/clientAxios";
import { format } from "timeago.js";
import { loginSuccess } from "../redux/userSlice";
import Comments from "../components/Comments";
import Card from "../components/Card";
import { blockVideo } from "../icons";
import IconLike from "../icons/IconLike";
import IconDislike from "../icons/IconDislike";
import IconCurrentDislike from "../icons/IconCurrentDislike";
import IconCurrentLike from "../icons/IconCurrentLike";
import {
  Container,
  Content,
  Recommendation,
  VideoWrapper,
  Title,
  Details,
  Info,
  Buttons,
  Button,
  Hr,
  Channel,
  ChannelInfo,
  Image,
  ChannelDetail,
  ChannelName,
  ChannelCounter,
  Description,
  Subscribe,
} from "../styles/videoStyles";
const Video = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { id } = useParams();
  const [dataVideo, setDataVideo] = useState({});
  const [dataUserChannel, setDataUserChannel] = useState({});
  const [likeR, setLikeR] = useState(null);
  const [subChannel, setSubChannel] = useState(null);

  useEffect(() => {
    const getDataVideo = async () => {
      try {
        const { data } = await clientAxios.get(`videos/find/${id}`);

        if (data.success) setDataVideo(data.video);
        const userData = await clientAxios.get(
          `/users/find/${data.video.userId}`
        );

        if (userData.data.success) setDataUserChannel(userData.data.user);
      } catch (error) {
        console.log(error);
      }
    };
    getDataVideo();
  }, [likeR, subChannel]);

  const changeLike = async () => {
    if (dataVideo?.likes?.includes(currentUser?._id)) return;

    try {
      const { data } = await clientAxios.put(`users/like/${id}`);

      if (data.success) {
        setLikeR(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const changeDislike = async () => {
    if (dataVideo?.dislikes?.includes(currentUser?._id)) return;

    try {
      const { data } = await clientAxios.put(`users/dislike/${id}`);

      if (data.success) {
        setLikeR(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const subscribeChannel = async () => {
    if (!currentUser?.subscribedUsers?.includes(dataUserChannel?._id)) {
      try {
        const { data } = await clientAxios.put(
          `/users/sub/${dataUserChannel?._id}`
        );

        if (data.success) {
          dispatch(loginSuccess(data.user));
          setSubChannel(true);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const { data } = await clientAxios.put(
          `/users/unsub/${dataUserChannel?._id}`
        );

        if (data.success) {
          setSubChannel(false);
          dispatch(loginSuccess(data.user));
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoWrapper>
        <Title>{dataVideo?.title}</Title>
        <Details>
          <Info>
            {dataVideo?.views} views • {format(dataVideo?.createdAt)}
          </Info>
          <Buttons>
            <Button onClick={changeLike}>
              {dataVideo?.likes?.includes(currentUser?._id) ? (
                <IconCurrentLike />
              ) : (
                <IconLike />
              )}
              Like {dataVideo?.likes?.length > 0 && dataVideo?.likes?.length}
            </Button>
            <Button onClick={changeDislike}>
              {dataVideo?.dislikes?.includes(currentUser?._id) ? (
                <IconCurrentDislike />
              ) : (
                <IconDislike />
              )}
              Dislike{" "}
              {dataVideo?.dislikes?.length > 0 && dataVideo?.dislikes?.length}
            </Button>
            {blockVideo.map((btn) => (
              <Button key={btn.description}>
                <btn.icon /> {btn.description}
              </Button>
            ))}
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src={dataUserChannel?.img} alt={dataUserChannel?.name} />
            <ChannelDetail>
              <ChannelName>{dataUserChannel?.name}</ChannelName>
              <ChannelCounter>
                {dataUserChannel?.subscribers} subscribers
              </ChannelCounter>
              <Description>{dataVideo?.desc}</Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe onClick={subscribeChannel}>
            {currentUser?.subscribedUsers?.includes(dataUserChannel?._id)
              ? "SUBSCRIBED"
              : "SUBSCRIBE"}
          </Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      {/* <Recommendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommendation> */}
    </Container>
  );
};

export default Video;
