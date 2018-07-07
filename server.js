import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import logger from "morgan";
import { auth, message, user } from "./app/routers";
import passport from "./app/passport";
import Message from "./schema/Message";

//run db connect
import "./app/core/connect";
import Messsage from "./app/schema/Message";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(logger("dev"));

app.use("/auth", auth);
app.use("/user", passport.authenticate("jwt", { session: false }), user);
app.use("/message", passport.authenticate("jwt", { session: false }), message);
app.get("/", (req, res) => {
  return res.json({
    title: "Welcome",
    message: "Your Server is running well",
    author: "Bundit Nuntates",
    version: "0.1-beta"
  });
});

app.get("/message", async (req, res) =>{
  let message = await Message.find({});
  res:json(message);
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is running on port ${port}!`));
