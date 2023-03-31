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
  ready1,
  review1,
  review2,
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
      place: "Preston Rd. Inglewood",
    },
  },
  {
    id: "5",
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
      place: "Preston Rd. Inglewood",
    },
  },
];
const reviews = [
  {
    id: "1",
    title: "Best! I got the house I wanted through Hounter",
    content:
      "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
    image: review1,
    rating: "4.0",
    user: {
      name: "Dianne Russell",
      image: person1,
      job: "Manager Director",
    },
  },
  {
    id: "2",
    title: "Best! I got the house I wanted through Hounter",
    content:
      "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
    image: review2,
    rating: "4.5",
    user: {
      name: "Robert Fox",
      image: person2,
      job: "IT Consultant",
    },
  },
  {
    id: "3",
    title: "Best! I got the house I wanted through Hounter",
    content:
      "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
    image: ready1,
    rating: "4.5",
    user: {
      name: "Ronald Richards",
      image: person3,
      job: "Dancer",
    },
  },
  {
    id: "4",
    title: "Best! I got the house I wanted through Hounter",
    content:
      "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
    image: review2,
    rating: "4.5",
    user: {
      name: "Robert Fox",
      image: person2,
      job: "IT Consultant",
    },
  },
  {
    id: "5",
    title: "Best! I got the house I wanted through Hounter",
    content:
      "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
    image: ready1,
    rating: "4.5",
    user: {
      name: "Ronald Richards",
      image: person3,
      job: "Dancer",
    },
  },
];

export { houses, reviews };
