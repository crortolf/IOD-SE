"use strict";
let Models = require("../models");

const getUsers = (res) => {
  Models.User.findAll({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
const createUser = (data, res) => {
  console.log(data);
  Models.User.create(data)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
const updateUser = (req, res) => {
  console.log(req.body);
  Models.User.update(req.body, { where: { id: req.params.id } })
    .then(() => Models.User.findByPk(req.params.id))
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
const deleteUser = (req, res) => {
  Models.User.destroy({ where: { id: req.params.id } })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
module.exports = { getUsers, createUser, updateUser, deleteUser };
