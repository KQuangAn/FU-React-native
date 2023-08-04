// SignUpScreen.test.js
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import SignUpScreen from "../screens/SignUpScreen";
describe("SignUpScreen", () => {
  it("renders correctly", () => {
    render(<SignUpScreen />);
  });

  it("navigates to Login screen when 'Already sign in ?' is pressed", () => {
    const { getByText, navigation } = render(<SignUpScreen />);
    const signInLink = getByText("Already sign in ?");

    fireEvent.press(signInLink);

    expect(navigation.navigate).toHaveBeenCalledWith("Login");
  });

  it("handles user registration successfully", async () => {
    const { getByPlaceholderText, getByText, navigation } = render(
      <SignUpScreen />
    );

    const usernameInput = getByPlaceholderText("Username");
    const emailInput = getByPlaceholderText("Email");
    const passwordInput = getByPlaceholderText("Password");
    const repeatPasswordInput = getByPlaceholderText("Repeat Password");
    const signUpButton = getByText("Sign Up");

    fireEvent.changeText(usernameInput, "testuser");
    fireEvent.changeText(emailInput, "test@example.com");
    fireEvent.changeText(passwordInput, "testpassword");
    fireEvent.changeText(repeatPasswordInput, "testpassword");

    // Mocking the createUserWithEmailAndPassword function
    const createUserWithEmailAndPasswordMock = jest.fn(() =>
      Promise.resolve({})
    );
    jest.mock("firebase/auth", () => ({
      createUserWithEmailAndPassword: createUserWithEmailAndPasswordMock,
    }));

    fireEvent.press(signUpButton);

    expect(createUserWithEmailAndPasswordMock).toHaveBeenCalledWith(
      expect.anything(),
      "test@example.com",
      "testpassword"
    );
    expect(navigation.navigate).toHaveBeenCalledWith("Login");
  });

  it("handles failed user registration", async () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <SignUpScreen />
    );

    const usernameInput = getByPlaceholderText("Username");
    const emailInput = getByPlaceholderText("Email");
    const passwordInput = getByPlaceholderText("Password");
    const repeatPasswordInput = getByPlaceholderText("Repeat Password");
    const signUpButton = getByText("Sign Up");

    fireEvent.changeText(usernameInput, "testuser");
    fireEvent.changeText(emailInput, "test@example.com");
    fireEvent.changeText(passwordInput, "testpassword");
    fireEvent.changeText(repeatPasswordInput, "wrongpassword");

    // Mocking the createUserWithEmailAndPassword function to throw an error
    const createUserWithEmailAndPasswordMock = jest.fn(() =>
      Promise.reject(new Error("Invalid credentials"))
    );
    jest.mock("firebase/auth", () => ({
      createUserWithEmailAndPassword: createUserWithEmailAndPasswordMock,
    }));

    fireEvent.press(signUpButton);

    const errorText = await waitFor(() => getByTestId("error-message"));

    expect(createUserWithEmailAndPasswordMock).toHaveBeenCalledWith(
      expect.anything(),
      "test@example.com",
      "wrongpassword"
    );
    expect(errorText).toHaveTextContent(
      "sign up failed at Invalid credentials"
    );
  });
});
