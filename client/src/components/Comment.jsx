import React, { useState, useEffect } from "react";
import { format } from "timeago.js";
import {
  Text,
  Date,
  Name,
  Details,
  Avatar,
  Container,
} from "../styles/commentStyles";
import clientAxios from "../utils/clientAxios";

const Comment = ({ comment }) => {
  const [userComment, setUserComment] = useState({});
  useEffect(() => {
    const getUserComment = async () => {
      try {
        const { data } = await clientAxios.get(
          `/users/find/${comment?.userId}`
        );
        if (data.success) setUserComment(data.user);
      } catch (error) {
        console.log(error);
      }
    };
    getUserComment();
  }, []);

  return (
    <Container>
      <Avatar src={userComment?.img} alt={userComment?.name} />
      <Details>
        <Name>
          {userComment?.name} <Date>{format(comment?.updatedAt)}</Date>
        </Name>
        <Text>{comment?.desc}</Text>
      </Details>
    </Container>
  );
};

export default Comment;
