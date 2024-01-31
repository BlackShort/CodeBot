import { Stack } from "@mui/material";
import AppBar from "./AppBar";
import { Link } from "react-router-dom";
import img1 from '../assets/img2.svg';

const Welcome = () => {
  return (
    <Stack alignItems={"flex-start"} height={"100vh"} gap={"1em"}>
      <AppBar />
      <div className="landing">
        <div className="left">
          <h4>
            Unlock Infinite Possibilities with ThinkCraft, Your Ultimate A.I.
            Assistant!
          </h4>
          <p>
            Your personal A.I. assistant for coding challenges, programming insights, and tech exploration. Ask anything and let ThinkCraft guide you to a world of knowledge!
          </p>
          <Link to="/login"><button type="button" id="save">Start Asking</button></Link>
        </div>
        <div className="right">
          <img src={img1} alt="CAt" />
        </div>
      </div>
    </Stack>
  );
};

export default Welcome;
