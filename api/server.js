const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("./auth/auth-router.js");
const userRouter = require("./users/user-router.js");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api", authRouter);
server.use("/api/users", userRouter);

module.exports = server;
