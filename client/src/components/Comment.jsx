import React from "react";
import {
  Text,
  Date,
  Name,
  Details,
  Avatar,
  Container,
} from "../styles/commentStyles";

const Comment = () => {
  return (
    <Container>
      <Avatar src="https://avatars.githubusercontent.com/u/74944181?s=400&u=e703ca9165d84a1db5007876497551be79f5f85a&v=4" />
      <Details>
        <Name>
          John Puppy <Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, ex
          laboriosam ipsam aliquam voluptatem perferendis provident modi, sequi
          tempore reiciendis quod, optio ullam cumque? Quidem numquam sint
          mollitia totam reiciendis?
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
