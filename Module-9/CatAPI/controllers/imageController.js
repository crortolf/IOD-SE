"use strict";
const { catFetch, buildQuery } = require("../catApi");

// GET /images/search - random or filtered images
const searchImages = (req, res) => {
  const query = buildQuery(req.query, [
    "limit", "page", "order", "size", "mime_types",
    "format", "has_breeds", "breed_ids", "category_ids", "sub_id",
  ]);
  catFetch(`/images/search${query}`)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
// GET /images/:id - one image by id
const getImage = (req, res) => {
  catFetch(`/images/${encodeURIComponent(req.params.id)}`)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = { searchImages, getImage };
