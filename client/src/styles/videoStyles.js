import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 2.4rem;
  padding: 2rem;
`;

const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div`
  padding: 1rem;
`;

const VideoFrame = styled.video`
  max-height: 50rem;
  width: 100%;
  object-fit: cover;
`;
const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 400;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
  padding: 0 1.5rem;
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
`;
const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
  display: flex;
  gap: 2rem;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const Recommendation = styled.div`
  flex: 2;
`;

const Hr = styled.hr`
  margin: 1.5rem 0;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 2rem;
`;

const Image = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.textSoft};
  font-size: 1.2rem;
`;

const Description = styled.p`
  font-size: 1.4rem;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 1rem 2rem;
  cursor: pointer;
`;

export {
  Container,
  Content,
  Recommendation,
  VideoWrapper,
  VideoFrame,
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
};
