const express = require("express");
const router = express.Router();
const friends = require("../models/friends");

// TODO - #1: Add support to the 'filter' endpoint for a new query parameter 'letter' which filters friends by starting letter

// TODO - #2: Modify the 'info' route to only return the user-agent, content-type and accept header data

// TODO - #3: Modify the dynamic GET route to return a single friend object matching the dynamic 'id' request parameter

// TODO - #4: Complete the PUT route which will update data for an existing friend

// default endpoint, gets all friends
router.get("/", (req, res) => {
  res.json(friends);
});

// filter endpoint, gets friends matching the gender from 'gender' query parameter ie. /friends/filter?gender=male
// 1. Add support to also filter by a starting 'letter' query parameter ie. /friends/filter?letter=R
router.get("/filter", (req, res) => {
  console.log(req.query);
  let filterGender = req.query.gender;
  let filterLetter = req.query.letter;
  let matchingFriends = [...friends];

  if (filterGender) {
    matchingFriends = matchingFriends.filter(
      (friend) => friend.gender == filterGender,
    );
  }

  if (filterLetter) {
    matchingFriends = matchingFriends.filter(
      (letter) => friend.name[0] === filterLetter,
    );
  }

  if (matchingFriends.length > 0) {
    // return valid data when the gender matches
    res.status(200).json(matchingFriends);
  } else {
    // and an error response when there are no matches
    res
      .status(404)
      .json({ error: "No friends matching gender " + filterGender });
  }
});

// 2. Get information about this request from the headers
router.get("/info", (req, res) => {
  console.log(req);

  // Modify this response to just return info on the user-agent, content-type and accept headers
  res.json({
    "user-agent": req.headers["user-agent"],
    "content-type": req.headers["content-type"],
    "accept-headers": req.headers["accept-headers"],
  });
});

// 3. Dynamic request param endpoint - get the friend matching the specific ID ie. /friends/3
router.get("/:id", (req, res) => {
  let friendId = req.params.id; // 'id' here will be a value matching anything after the / in the request path

  // Modify this function to find and return the friend matching the given ID, or a 404 if not found
  const friend = findFriend(req.params.id);
  if (friend === null) {
    res
      .status(404)
      .json({ error: "Friend with id " + req.params.id + " not found" });
  } else {
    res.json({ result: "Friend found: " + JSON.stringify(friend) });
  }
  // Modify this response with the matched friend, or a 404 if not found
});

const findFriend = (id) => {
  for (const friend of friends) {
    if (friend.id === Number.parseInt(id)) return friend;
  }
  return null;
};

// a POST request with data sent in the body of the request, representing a new friend to add to our list
router.post("/", (req, res) => {
  let newFriend = req.body; // FIRST add this line to index.js: app.use(express.json());
  console.log(newFriend); // 'body' will now be an object containing data sent via the request body

  // we can add some validation here to make sure the new friend object matches the right pattern
  if (!newFriend.name || !newFriend.gender) {
    res
      .status(500)
      .json({ error: "Friend object must contain a name and gender" });
    return;
  } else if (!newFriend.id) {
    newFriend.id = friends.length + 1; // generate an ID if one is not present
  }

  // if the new friend is valid, add them to the list and return the successfully added object
  friends.push(newFriend);
  res.status(200).json(newFriend);
});

// 4. Complete this new route for a PUT request which will update data for an existing friend
router.put("/:id", (req, res) => {
  let friendId = req.params.id;
  let updatedFriend = req.body;

  // Replace the old friend data for friendId with the new data from updatedFriend
  const oldFriend = findFriend(req.params.id);

  if (oldFriend === null) {
    res.status(404).json("Friend with id " + req.params.id + " not found");
  } else {
    oldFriend.name = updatedFriend.name;
    oldFriend.gender = updatedFriend.gender;
    res.json({
      result: "Updated friend with ID " + friendId,
      data: updatedFriend,
    });
  }

  console.log(friends);

  // Modify this response with the updated friend, or a 404 if not found
});

module.exports = router;
