const users = [
    {
      id: 1,
      name: "Marie Curie",
      slug: "Scientist",
      email: "marie.curie@email.com"
    },
    {
      id: 2,
      name: "Wonder Woman",
      slug: "Superhero",
      email: "wonder.woman@email.com"
    },
    {
      id: 3,
      name: "Katherine Johnson",
      slug: "Mathemitician",
      email: "katherine.johnson@email.com"
    },
    {
      id: 4,
      name: "Jane Goodall",
      slug: "Zoologist",
      email: "jane.goodall@email.com"
    },
    {
      id: 5,
      name: "Faith Ringold",
      slug: "Artist",
      email: "faith.ringold@email.com"
    },
    {
      id: 6,
      name: "Simone Biles",
      slug: "Gymnast",
      email: "simone.biles@email.com"
    }
  ];
  
  const registeredUsers = [
    { id: 1, name: "Marie Curie" },
    { id: 2, name: "Wonder Woman" },
    { id: 3, name: "Katherine Johnson" }
  ];
  
  const newPostings = [
  {
    id: 1,
    title: "Extra Beakers",
    description: "Three test beakers available",
    city: "Philadelphia",
    state: "PA",
    neighorhood: "West Philadelphia",
    contactName: "Marie C.",
    // userId: 1
  },
  {
    id: 2,
    title: "Cape Giveaway",
    description: "I have an extra cape that I have never worn",
    city: "Philadelphia",
    state: "PA",
    neighorhood: "Center City",
    contactName: "Wonder W.",
    // userId: 2
  },
  {
    id: 3,
    title: "Paintbrushes available",
    description: "I have a set of slightly used paintbrushes",
    city: "Philadelphia",
    state: "PA",
    neighorhood: "South Philadelphia",
    contactName: "Faith R.",
    // userId: 5
  }
];
  
  // Using CommonJS style export so we can consume via Node (without using Babel-node)
  module.exports = {
    users,
    registeredUsers,
    newPostings
  };
  