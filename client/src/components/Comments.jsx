import React from "react";
import Comment from "./Comment";
import { Avatar, Input, NewComment, Container } from "../styles/commentsStyles";

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src="https://avatars.githubusercontent.com/u/74944181?s=400&u=e703ca9165d84a1db5007876497551be79f5f85a&v=4" />
        <Input placeholder="Add a comment..." />
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
};

export default Comments;
