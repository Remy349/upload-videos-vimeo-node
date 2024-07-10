# Upload videos to Vimeo using NodeJS, ExpressJS and TypeScript

Small project with the objective to show how to upload a video to vimeo using its api.

It was developed using:

- NodeJS
- ExpressJS
- TypeScript
- Axios

**How to execute the project?**

Clone the project, move into, install the necessary packages and run the command to start the server.

```Shell
$ git clone https://github.com/Remy349/upload-videos-vimeo-node.git

$ cd upload-videos-vimeo-node/

$ npm i

$ npm run dev

> upload-videos-vimeo-node@1.0.0 dev
> nodemon src/app.ts

[nodemon] 3.1.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: ts,json
[nodemon] starting `ts-node src/app.ts`

Server is running at http://localhost:3000
```

After you have done this you can try uploading videos to vimeo through the following api path:

| Method    | Route                | Description                                                               |
| --------- | -------------------- | ------------------------------------------------------------------------- |
| `post`    | `/api/videos/upload` | Upload a file(video) to the server path to be processed and sent to vimeo |

For the server to work smoothly you must create a vimeo account in order to get an access token which is used to interact with the vimeo api and be able to upload videos to their platform. Once the token is obtained create a `.env` file in the root of the project and put inside the access token of your vimeo account:

```Shell
VIMEO_ACCESS_TOKEN=your_access_token_here
```

**Reference links**

- [Vimeo platform](https://vimeo.com)
- [Upload videos to Vimeo using NodeJS, ExpressJS and TypeScript](https://dev.to/remy349/upload-videos-to-vimeo-using-nodejs-expressjs-and-typescript-3oip)
