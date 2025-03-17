import axios from "axios";

export const api = axios.create({
  baseURL:
    "https://soxwyv6jkobuhtt6iyepsa7uzi0suyrv.lambda-url.sa-east-1.on.aws/v1",
  withCredentials: true,
});
