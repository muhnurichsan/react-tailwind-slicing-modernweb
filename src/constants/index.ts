import {
  antfire,
  card1,
  card2,
  card3,
  card4,
  houseBlue,
  person1,
  person2,
  person3,
  person4,
  wallet,
} from "../assets";

const houses = [
  {
    id: "1",
    name: "Roseland House",
    price: "35.000.000",
    image: card1,
    badge: {
      name: "Popular",
      color: "text-red-500",
      background: "bg-reddy",
      icon: antfire,
    },
    owner: {
      name: "Dianne Russell",
      image: person1,
      place: "Manchester, Kentucky",
    },
  },
  {
    id: "2",
    name: "Woodlandside",
    price: "20.000.000",
    image: card2,
    badge: {
      name: "New House",
      color: "text-blue-700",
      background: "bg-blue-400",
      icon: houseBlue,
    },
    owner: {
      name: "Robet Fox",
      image: person2,
      place: "Dr. San Jose, South Dakota",
    },
  },
  {
    id: "3",
    name: "The Old Lighthouse",
    price: "44.000.000",
    image: card3,
    badge: {
      name: "Best Deals",
      color: "text-primary",
      background: "bg-greeny",
      icon: wallet,
    },
    owner: {
      name: "Ronald Richards",

      image: person3,
      place: "Santa Ana, Illinois",
    },
  },
  {
    id: "4",
    name: "Cosmo's House",
    price: "22.000.000",
    image: card4,
    badge: {
      name: "Popular",
      color: "text-red-500",
      background: "bg-reddy",
      icon: antfire,
    },
    owner: {
      name: "Jenny Wilson",
      image: person4,
      place: "Preston Rd. Inglewood, Maine 98380",
    },
  },
];

export { houses };
