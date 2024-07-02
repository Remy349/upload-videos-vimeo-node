import axios from "axios";
import { Router, Request as ExRequest, Response as ExResponse } from "express";
import multer from "multer";

const videoRouter = Router();

const storage = multer.memoryStorage();

const upload = multer({ storage });

videoRouter.post(
  "/upload",
  upload.single("file"),
  async (req: ExRequest, res: ExResponse) => {
    try {
      const VIMEO_ACCESS_TOKEN = process.env.VIMEO_ACCESS_TOKEN;

      const file = req.file;

      if (!file) {
        return res.status(400).json({ message: "File not uploaded" });
      }

      const response = await axios.post(
        "https://api.vimeo.com/me/videos",
        {
          upload: {
            approach: "tus",
            size: `${file.size}`,
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

      const uploadLink: string = response.data.upload.upload_link;

      await axios.patch(uploadLink, file.buffer, {
        headers: {
          "Content-Type": "application/offset+octet-stream",
          "Upload-Offset": "0",
          "Tus-Resumable": "1.0.0",
        },
      });

      res.status(201).json({ message: "Video successfully uploaded" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
);

export default videoRouter;
