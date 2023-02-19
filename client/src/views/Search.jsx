import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import clientAxios from "../utils/clientAxios";
import styled from "styled-components";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
const NoVideos = styled.h1`
  color: ${({ theme }) => theme.text};
  text-align: center;
  margin: 2rem auto;
`;

const Search = () => {
  const [videos, setVideos] = useState([]);
  const [msgError, setmsgError] = useState("");
  const query = useLocation().search;

  useEffect(() => {
    const getVideosQuery = async () => {
      setmsgError("");
      try {
        const { data } = await clientAxios.get(`/videos/search${query}`);

        if (data.success) setVideos(data.videos);
      } catch (error) {
        console.log();
        if (!error.response.data.success)
          setmsgError(error.response.data.message);
      }
    };
    getVideosQuery();
  }, [query]);

  return (
    <Container>
      {msgError ? (
        <NoVideos>{msgError}</NoVideos>
      ) : (
        videos.map((video) => <Card key={video._id} video={video} />)
      )}
    </Container>
  );
};

export default Search;
