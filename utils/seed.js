const connection = require("../config/connection");
const { User, Thought } = require("../models");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");
  await Thought.deleteMany({});
  await User.deleteMany({});

  const users = [
    {
      username: "Lead8",
      email: "lead8@gmail.com",
    },
    {
      username: "Converting99",
      email: "converting99@gmail.com",
    },
    {
      username: "Problematic8",
      email: "problematic8@gmail.com",
    },
    {
      username: "Whopping95",
      email: "whopping95@gmail.com",
    },
    {
      username: "Seamstress95",
      email: "seamstress95@gmail.com",
    },
  ];
  const thoughts = [
    {
      thoughtText: "In order to fall asleep, you have to pretend to be asleep.",
      username: "Lead8",
    },
    {
      thoughtText:
        "There is one day every year, where we unknowingly pass the anniversary of the day the dinosaurs were wiped out by an asteroid.",
      username: "Converting99",
    },
    {
      thoughtText:
        "Accidentally liking someone's post while snooping through their profile is the digital equivalent of stepping on a twig while sneaking through the forest.",
      username: "Problematic8",
    },
    {
      thoughtText:
        "The first person who inhaled helium must have been so relieved when the effects wore off.",
      username: "Whopping95",
    },
    {
      thoughtText:
        "Somewhere out there, there is a bottle of caesar salad dressing with an expiration date of march 15th.",
      username: "Seamstress95",
    },
  ];

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  // loop through the saved thoughts, for each thought we need to generate a thought response and insert the thought responses
  console.table(users);
  console.table(applications);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
