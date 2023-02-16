import React, { useState, useEffect } from "react";
import clientAxios from "../utils/clientAxios";
import Card from "../components/Card";
import { Container } from "../styles/homeStyles";

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const { data } = await clientAxios.get(`/videos/${type}`);
        if (data.success) setVideos(data.videos);
      } catch (error) {
        console.log(error);
      }
    };
    getVideos();
  }, [type]);

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Home;
