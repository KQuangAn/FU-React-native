// DishDetail.test.js
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import DishDetail from "../../screens/restaurant/DishDetail";

describe("DishDetail screen", () => {
  const dish = {
    title: "Test Dish",
    price: 10,
    image: require("client/assets/images/pizza.png"), // Replace with the actual image path
    description: "Test description",
    optional: [],
  };

  test("renders the dish title", () => {
    const { getByText } = render(<DishDetail route={{ params: { dish } }} />);
    const titleElement = getByText("Test Dish");
    expect(titleElement).toBeDefined();
  });

  test("toggles the image viewer when the image is pressed", () => {
    const { getByTestId, queryByTestId } = render(
      <DishDetail route={{ params: { dish } }} />
    );

    const imageElement = getByTestId("dish-image");
    fireEvent.press(imageElement);

    const imageViewerElement = queryByTestId("image-viewer");
    expect(imageViewerElement).toBeDefined();
  });

  test('toggles the full description when the "See More" button is pressed', () => {
    const { getByText } = render(<DishDetail route={{ params: { dish } }} />);

    const seeMoreButton = getByText("See More");
    fireEvent.press(seeMoreButton);

    const fullDescriptionElement = getByText("Test description");
    expect(fullDescriptionElement).toBeDefined();

    const seeLessButton = getByText("See Less");
    fireEvent.press(seeLessButton);

    const truncatedDescriptionElement = getByText("Test description", {
      exact: false,
    });
    expect(truncatedDescriptionElement).toBeDefined();
  });

  // Add more tests for other functionality as needed...
});
