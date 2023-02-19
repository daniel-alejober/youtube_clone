import React, { useState, useEffect } from "react";
import clientAxios from "../utils/clientAxios";
import { useSelector } from "react-redux";
import Comment from "./Comment";
import {
  Avatar,
  Input,
  NewComment,
  Container,
  NoComments,
  Form,
  BtnSend,
} from "../styles/commentsStyles";
import IconSend from "../icons/IconSend";

const Comments = ({ videoId }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [comments, setComments] = useState([]);
  const [contentComment, setContentComment] = useState("");

  const getAllComments = async () => {
    try {
      const { data } = await clientAxios.get(`/comments/${videoId}`);
      if (data.success) setComments(data.comments);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllComments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (contentComment === "") return;
    try {
      const { data } = await clientAxios.post(`/comments/${videoId}`, {
        desc: contentComment,
      });
      if (data.success) {
        await getAllComments();
        setContentComment("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <NewComment>
        <Avatar src={currentUser?.img} />
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Add a comment..."
            value={contentComment}
            onChange={(e) => setContentComment(e.target.value)}
          />
          <BtnSend type="submit">
            <IconSend />
          </BtnSend>
        </Form>
      </NewComment>

      {comments?.length === 0 ? (
        <NoComments>There are not comments on this video</NoComments>
      ) : (
        comments.map((comment) => (
          <Comment key={comment?._id} comment={comment} />
        ))
      )}
    </Container>
  );
};

export default Comments;
