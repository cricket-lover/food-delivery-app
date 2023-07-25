// import { v4 as generateRandomId } from "uuid";
const { v4: generateRandomId } = require("uuid");

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const defaultRestaurants = [
  {
    name: "Subway",
    id: generateRandomId(),
    image:
      "https://images.unsplash.com/photo-1525980978611-a89001322e01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=280&q=80",
    rating: 4.1,
  },
  {
    name: "Pizza Hut",
    id: generateRandomId(),
    image:
      "https://plus.unsplash.com/premium_photo-1675103908581-521860726818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=280&q=80",
    rating: 4.5,
  },
  {
    name: "Dominos",
    id: generateRandomId(),
    image:
      "https://images.moneycontrol.com/static-mcnews/2022/11/Dominos-Pizza-653x435.jpg",
    rating: 4.2,
  },
  {
    name: "McDonalds",
    id: generateRandomId(),
    image:
      "https://images.unsplash.com/photo-1623156346149-d5cec8b29818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=280&q=80",
    rating: 4.0,
  },
  {
    name: "KFC",
    id: generateRandomId(),
    image:
      "https://images.unsplash.com/photo-1621114957135-7f88c8447439?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=280&q=80",
    rating: 3.9,
  },
  {
    name: "Subway",
    id: generateRandomId(),
    image:
      "https://images.unsplash.com/photo-1525980978611-a89001322e01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=280&q=80",
    rating: 4.1,
  },
  {
    name: "Pizza Hut",
    id: generateRandomId(),
    image:
      "https://plus.unsplash.com/premium_photo-1675103908581-521860726818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=280&q=80",
    rating: 4.5,
  },
  {
    name: "Dominos",
    id: generateRandomId(),
    image:
      "https://images.moneycontrol.com/static-mcnews/2022/11/Dominos-Pizza-653x435.jpg",
    rating: 4.2,
  },
  {
    name: "McDonalds",
    id: generateRandomId(),
    image:
      "https://images.unsplash.com/photo-1623156346149-d5cec8b29818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=280&q=80",
    rating: 4.0,
  },
  {
    name: "KFC",
    id: generateRandomId(),
    image:
      "https://images.unsplash.com/photo-1621114957135-7f88c8447439?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=280&q=80",
    rating: 3.9,
  },
  {
    name: "Subway",
    id: generateRandomId(),
    image:
      "https://images.unsplash.com/photo-1525980978611-a89001322e01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=280&q=80",
    rating: 4.1,
  },
  {
    name: "Pizza Hut",
    id: generateRandomId(),
    image:
      "https://plus.unsplash.com/premium_photo-1675103908581-521860726818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=280&q=80",
    rating: 4.5,
  },
  {
    name: "Dominos",
    id: generateRandomId(),
    image:
      "https://images.moneycontrol.com/static-mcnews/2022/11/Dominos-Pizza-653x435.jpg",
    rating: 4.2,
  },
  {
    name: "McDonalds",
    id: generateRandomId(),
    image:
      "https://images.unsplash.com/photo-1623156346149-d5cec8b29818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=280&q=80",
    rating: 4.0,
  },
  {
    name: "KFC",
    id: generateRandomId(),
    image:
      "https://images.unsplash.com/photo-1621114957135-7f88c8447439?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=280&q=80",
    rating: 3.9,
  },
  {
    name: "Subway",
    id: generateRandomId(),
    image:
      "https://images.unsplash.com/photo-1525980978611-a89001322e01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=280&q=80",
    rating: 4.1,
  },
  {
    name: "Pizza Hut",
    id: generateRandomId(),
    image:
      "https://plus.unsplash.com/premium_photo-1675103908581-521860726818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=280&q=80",
    rating: 4.5,
  },
  {
    name: "Dominos",
    id: generateRandomId(),
    image:
      "https://images.moneycontrol.com/static-mcnews/2022/11/Dominos-Pizza-653x435.jpg",
    rating: 4.2,
  },
  {
    name: "McDonalds",
    id: generateRandomId(),
    image:
      "https://images.unsplash.com/photo-1623156346149-d5cec8b29818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=280&q=80",
    rating: 4.0,
  },
  {
    name: "KFC",
    id: generateRandomId(),
    image:
      "https://images.unsplash.com/photo-1621114957135-7f88c8447439?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=280&q=80",
    rating: 3.9,
  },
  {
    name: "Subway",
    id: generateRandomId(),
    image:
      "https://images.unsplash.com/photo-1525980978611-a89001322e01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=280&q=80",
    rating: 4.1,
  },
  {
    name: "Pizza Hut",
    id: generateRandomId(),
    image:
      "https://plus.unsplash.com/premium_photo-1675103908581-521860726818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=280&q=80",
    rating: 4.5,
  },
  {
    name: "Dominos",
    id: generateRandomId(),
    image:
      "https://images.moneycontrol.com/static-mcnews/2022/11/Dominos-Pizza-653x435.jpg",
    rating: 4.2,
  },
  {
    name: "McDonalds",
    id: generateRandomId(),
    image:
      "https://images.unsplash.com/photo-1623156346149-d5cec8b29818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=280&q=80",
    rating: 4.0,
  },
  {
    name: "KFC",
    id: generateRandomId(),
    image:
      "https://images.unsplash.com/photo-1621114957135-7f88c8447439?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=280&q=80",
    rating: 3.9,
  },
  {
    name: "Subway",
    id: generateRandomId(),
    image:
      "https://images.unsplash.com/photo-1525980978611-a89001322e01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=280&q=80",
    rating: 4.1,
  },
  {
    name: "Pizza Hut",
    id: generateRandomId(),
    image:
      "https://plus.unsplash.com/premium_photo-1675103908581-521860726818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=280&q=80",
    rating: 4.5,
  },
  {
    name: "Dominos",
    id: generateRandomId(),
    image:
      "https://images.moneycontrol.com/static-mcnews/2022/11/Dominos-Pizza-653x435.jpg",
    rating: 4.2,
  },
  {
    name: "McDonalds",
    id: generateRandomId(),
    image:
      "https://images.unsplash.com/photo-1623156346149-d5cec8b29818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=280&q=80",
    rating: 4.0,
  },
  {
    name: "KFC",
    id: generateRandomId(),
    image:
      "https://images.unsplash.com/photo-1621114957135-7f88c8447439?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=280&q=80",
    rating: 3.9,
  },
];

const restaurants = shuffle(defaultRestaurants);

module.exports = { restaurants };
