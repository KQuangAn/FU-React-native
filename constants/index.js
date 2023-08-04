const users = [
  {
    name: "brynn",
    avatar: "https://uifaces.co/our-content/donated/1H_7AxP0.jpg",
  },
  {
    name: "thot leader",
    avatar:
      "https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb",
  },
  {
    name: "jsa",
    avatar: "https://uifaces.co/our-content/donated/bUkmHPKs.jpg",
  },
  {
    name: "talhaconcepts",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "andy vitale",
    avatar: "https://uifaces.co/our-content/donated/NY9hnAbp.jpg",
  },
  {
    name: "katy friedson",
    avatar:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg",
  },
];

export const categories = [
  {
    id: 1,
    name: "Pizza",
    image: require("../assets/images/pizzaIcon.png"),
  },
  {
    id: 2,
    name: "Burger",
    image: require("../assets/images/pizzaIcon.png"),
  },
  {
    id: 3,
    name: "Italian",
    image: require("../assets/images/pizzaIcon.png"),
  },
  {
    id: 4,
    name: "Chinese",
    image: require("../assets/images/pizzaIcon.png"),
  },
  {
    id: 5,
    name: "Noodles",
    image: require("../assets/images/pizzaIcon.png"),
  },
  {
    id: 6,
    name: "Sweets",
    image: require("../assets/images/pizzaIcon.png"),
  },
];

export const featured = {
  id: 1,
  title: "Hot and Spicy",
  description: "soft and tender fried chicken",
  restaurants: [
    {
      id: 1,
      title: "Papa Johns",
      image: require("../assets/adaptive-icon.png"),
      description: "Hot and spicy pizzas",
      lng: -85.5324269,
      lat: 38.2145602,
      address: "434 second street",
      stars: 4,
      reviews: "4.4k",
      category: "Fast Food",
      dishes: [
        {
          id: 1,
          title: "Pepperoni Pizzaaa few fqf wergfw ergwergerf",
          description:
            "1 1/2 cups (355 ml) warm water (105°F-115°F) 1 package (2 1/4 teaspoons) active dry yeast 3 3/4 cups (490g) bread flour 2 tablespoons extra virgin olive oil (omit if cooking pizza in a wood-fired pizza oven) 2 teaspoons kosher salt 1 teaspoon sugar",
          price: 10000000,
          image: require("../assets/images/pizzaDish.png"),
          optional: [{ "Soy milk": "10.000", milo: "10.000" }],
        },
        {
          id: 2,
          title: "fish",
          description: "fishyfish",
          price: 69,
          image: require("../assets/images/pizzaDish.png"),
        },
        {
          id: 3,
          title: "spahetti",
          description: "a spaghetti",
          price: 888,
          image: require("../assets/images/pizzaDish.png"),
        },
      ],
    },
    {
      id: 2,
      title: "pizzarea",
      image: require("../assets/images/pizza.png"),
      description: "Hot and spicy pizzas",
      lng: -85.5324269,
      lat: 38.2145602,
      address: "1 main street",
      stars: 4,
      reviews: "1.2k",
      category: "Fast Food",
      dishes: [
        {
          id: 1,
          title: "pizza1",
          description: "cheezy garlic pizza",
          price: 10,
          image: require("../assets/images/pizzaDish.png"),
        },
        {
          id: 2,
          title: "pizza",
          description: "cheezy garlic pizza",
          price: 10,
          image: require("../assets/images/pizzaDish.png"),
        },
        {
          id: 3,
          title: "pizza",
          description: "cheezy garlic pizza",
          price: 10,
          image: require("../assets/images/pizzaDish.png"),
        },
      ],
    },
    {
      id: 3,
      title: "Papa Johns",
      image: require("../assets/images/pizza.png"),
      description: "Hot and spicy pizzas",
      lng: -85.5324269,
      lat: 38.2145602,
      address: "434 second street",
      stars: 4,
      reviews: "4.4k",
      category: "Fast Food",
      dishes: [
        {
          id: 1,
          title: "pizza",
          description: "cheezy garlic pizza",
          price: 10,
          image: require("../assets/images/pizzaDish.png"),
        },
        {
          id: 2,
          title: "pizza",
          description: "cheezy garlic pizza",
          price: 10,
          image: require("../assets/images/pizzaDish.png"),
        },
        {
          id: 3,
          title: "pizza",
          description: "cheezy garlic pizza",
          price: 10,
          image: require("../assets/images/pizzaDish.png"),
        },
      ],
    },
  ],
};
