import axios from "axios";
import Story from "./story";
import Author from "./author";
import Item from "./item";

const api = axios.create({
  baseURL: process.env.API_URL,
  timeout: 1000,
  headers: {
    accept: "application/json",
  },
});

const services = {
  story: new Story({ api }),
  author: new Author({ api }),
  item: new Item({ api }),
};

export default services;
