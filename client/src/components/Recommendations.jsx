import React, { useState, useEffect, lazy, Suspense } from "react";
import clientAxios from "../utils/clientAxios";
import Spinner from "./Spinner";
import { Recommendation } from "../styles/videoStyles";

const LazyCard = lazy(() => import("./Card"));

const Recommendations = ({ tags }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      if (tags?.length === 0) {
        try {
          const { data } = await clientAxios.get(`/videos/random`);

          if (data.success) setVideos(data.videos);
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          const { data } = await clientAxios.get(`/videos/tags?tags=${tags}`);

          if (data.success) setVideos(data.videos);
        } catch (error) {
          console.log(error);
        }
      }
    };
    getVideos();
  }, []);

  return (
    <Recommendation>
      {videos.map((video) => (
        <Suspense key={video._id} fallback={<Spinner />}>
          <LazyCard video={video} type="sm" />
        </Suspense>
      ))}
    </Recommendation>
  );
};

export default Recommendations;
