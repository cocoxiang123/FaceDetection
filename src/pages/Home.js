import React, { useState } from "react";
import ImageLinkForm from "../components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "../components/FaceRecognition/FaceRecognition";
import Clarifai from "clarifai";
import errImg from "../components/FaceRecognition/err404.png";
import Rank from "../components/Rank/Rank";

function Home({ logIn }) {
  const app = new Clarifai.App({
    apiKey: "d9b8ed414e8d4ab9844e4d68d4ca4bc8",
  });

  const [input, setInput] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [box, setBox] = useState({});
  const [err, setErr] = useState("");

  const calculateFaceLocation = (data) => {
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    const output = data.outputs[0].data.regions;
    const outputs = output.map((x) => {
      const age = x.data.concepts[0].name;
      const possibility = x.data.concepts[0].value;
      const clarifaiFace = x.region_info.bounding_box;
      return {
        age,
        possibility,
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - clarifaiFace.right_col * width,
        bottomRow: height - clarifaiFace.bottom_row * height,
      };
    });
    return outputs;
  };
  const onChangeInput = (e) => {
    setInput(e.target.value);
  };
  const onSubmit = () => {
    setBox({});
    setImgURL(input);
    setErr("");
    console.log(input);
    app.models
      .predict("a403429f2ddf4b49b307e318f00e528b", input)
      .then((response) => {
        setBox(calculateFaceLocation(response));
      })
      .catch((err) => {
        setErr("Sorry, the url is not valid. Please try another one.");
        setImgURL(errImg);
      });
  };
  return (
    <div>
      {logIn && <Rank />}
      <ImageLinkForm
        input={input}
        onChangeInput={onChangeInput}
        onSubmit={onSubmit}
        err={err}
      />
      <FaceRecognition imgURL={imgURL} box={box} />
    </div>
  );
}

export default Home;
