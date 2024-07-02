import { Router, Request as ExRequest, Response as ExResponse } from "express";
import axios from "axios";

const videoRouter = Router();

videoRouter.post("/upload", async (req: ExRequest, res: ExResponse) => {
  try {
    const VIMEO_ACCESS_TOKEN = process.env.VIMEO_ACCESS_TOKEN || "";

    const response = await axios.post(
      "https://api.vimeo.com/me/videos",
      {
        upload: {
          approach: "tus",
          size: "",
        },
      },
      {
        headers: {
          Authorization: `Bearer ${VIMEO_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
          Accept: "application/vnd.vimeo.*+json;version=3.4",
        },
      },
    );

    console.log(response);

    res.status(201).json({ message: "Video successfully uploaded" });
  } catch (error) {
    console.log(error);
  }
});

export default videoRouter;
