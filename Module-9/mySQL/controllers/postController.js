"use strict";
let Models = require("../models");

const getPosts = (res) => {
  Models.Post.findAll({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
const createPost = (data, res) => {
  console.log(data);
  Models.Post.create(data)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
const updatePost = (req, res) => {
  console.log(req.body);
  Models.Post.update(req.body, { where: { id: req.params.id } })
    .then(() => Models.Post.findByPk(req.params.id))
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
const deletePost = (req, res) => {
  Models.Post.destroy({ where: { id: req.params.id } })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
module.exports = { getPosts, createPost, updatePost, deletePost };
