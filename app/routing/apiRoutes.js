var friends = require("../data/friends");

module.exports = function(app){
  app.get("/api/friends", function(req, res) {

  var random= friends[Math.floor(Math.random()*friends.length)];
  var selected = {
    name: random.name,
    photo: random.photo
  }
  res.json(selected);
});

app.get("/all", function(req, res){
  res.json(friends);
});

app.post("/api/friends", function(req, res){
  var newcharacter= req.body;
  newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  friends.push(newcharacter);

  res.json(newcharacter);

  console.log(friends);
});
}
