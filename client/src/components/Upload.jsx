import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase/firebase";
import clientAxios from "../utils/clientAxios";
import { uid } from "../utils/uid";
import {
  Container,
  Wrapper,
  Close,
  Title,
  Input,
  Desc,
  Button,
  Label,
  Form,
} from "../styles/uploadStyles";

const Upload = ({ setOpenModal }) => {
  const navigate = useNavigate();
  const [video, setVideo] = useState(null);
  const [img, setImg] = useState(null);
  const [imgPerc, setImgPerc] = useState(0);
  const [videoPerc, setVideoPerc] = useState(0);
  const [tags, setTags] = useState([]);
  const [inputs, setInputs] = useState({
    title: "",
    desc: "",
    videoUrl: "",
    imgUrl: "",
  });

  useEffect(() => {
    video && uploadFile(video, "videoUrl");
  }, [video]);

  useEffect(() => {
    img && uploadFile(img, "imgUrl");
  }, [img]);

  const uploadFile = (file, urlType) => {
    const storage = getStorage(app);
    const fileName = file.name + uid();
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        urlType === "imgUrl"
          ? setImgPerc(Math.round(progress))
          : setVideoPerc(Math.round(progress));
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case "storage/unauthorized":
            console.log(error.code);
            break;
          case "storage/canceled":
            console.log(error.code);
            break;
          case "storage/unknown":
            console.log(error.code);
            break;
        }
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setInputs({ ...inputs, [urlType]: downloadURL });
        });
      }
    );
  };

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const handleTags = (e) => {
    //*crea un array con cada tags separado por coma
    setTags(e.target.value.split(","));
  };
  const handleUpload = async (e) => {
    e.preventDefault();

    if (
      [inputs.desc, inputs.imgUrl, inputs.videoUrl, inputs.title].includes("")
    )
      return;
    try {
      const { data } = await clientAxios.post(`/videos`, {
        title: inputs.title,
        desc: inputs.desc,
        imgUrl: inputs.imgUrl,
        videoUrl: inputs.videoUrl,
        tags,
      });
      if (data.success) {
        console.log(data.video);
        setOpenModal(false);
        navigate(`/video/${data.video._id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Close onClick={() => setOpenModal(false)}>X</Close>
        <Title>Upload a New Video</Title>
        <Form onSubmit={handleUpload}>
          <Label>Video:</Label>
          {videoPerc > 0 ? (
            `Uploading: ${videoPerc} %`
          ) : (
            <Input
              type="file"
              accept="video/*"
              onChange={(e) => setVideo(e.target.files[0])}
            />
          )}
          <Input
            type="text"
            placeholder="Title"
            name="title"
            value={inputs.title}
            onChange={handleChange}
          />
          <Desc
            placeholder="Description"
            name="desc"
            rows={8}
            value={inputs.desc}
            onChange={handleChange}
          />
          <Input
            type="text"
            placeholder="Separate the tags with commas."
            onChange={handleTags}
          />
          <Label>Image:</Label>
          {imgPerc > 0 ? (
            `Uploading: ${imgPerc} %`
          ) : (
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => setImg(e.target.files[0])}
            />
          )}
          <Button type="submit">Upload</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Upload;
