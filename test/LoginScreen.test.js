// LoginScreen.test.js
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import LoginScreen from "../screens/LoginScreen";

describe("LoginScreen", () => {
  it("renders correctly", () => {
    render(<LoginScreen />);
  });

  it("navigates to SignUp screen when 'sign me up!' is pressed", () => {
    const { getByText, navigation } = render(<LoginScreen />);
    const signUpLink = getByText("sign me up!");

    fireEvent.press(signUpLink);

    expect(navigation.navigate).toHaveBeenCalledWith("SignUp");
  });

  it("handles user login successfully", async () => {
    const { getByPlaceholderText, getByText, navigation } = render(
      <LoginScreen />
    );

    const emailInput = getByPlaceholderText("Email");
    const passwordInput = getByPlaceholderText("Password");
    const loginButton = getByText("LOG IN");

    fireEvent.changeText(emailInput, "test@example.com");
    fireEvent.changeText(passwordInput, "testpassword");

    // Mocking the signInWithEmailAndPassword function
    const signInWithEmailAndPasswordMock = jest.fn(() => Promise.resolve({}));
    jest.mock("firebase/auth", () => ({
      signInWithEmailAndPassword: signInWithEmailAndPasswordMock,
    }));

    fireEvent.press(loginButton);

    expect(signInWithEmailAndPasswordMock).toHaveBeenCalledWith(
      expect.anything(),
      "test@example.com",
      "testpassword"
    );
    expect(navigation.navigate).toHaveBeenCalledWith("Chat");
  });

  it("handles failed login", async () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <LoginScreen />
    );

    const emailInput = getByPlaceholderText("Email");
    const passwordInput = getByPlaceholderText("Password");
    const loginButton = getByText("LOG IN");

    fireEvent.changeText(emailInput, "test@example.com");
    fireEvent.changeText(passwordInput, "wrongpassword");

    // Mocking the signInWithEmailAndPassword function to throw an error
    const signInWithEmailAndPasswordMock = jest.fn(() =>
      Promise.reject(new Error("Invalid credentials"))
    );
    jest.mock("firebase/auth", () => ({
      signInWithEmailAndPassword: signInWithEmailAndPasswordMock,
    }));

    fireEvent.press(loginButton);

    const errorText = await waitFor(() => getByTestId("error-message"));

    expect(signInWithEmailAndPasswordMock).toHaveBeenCalledWith(
      expect.anything(),
      "test@example.com",
      "wrongpassword"
    );
    expect(errorText).toHaveTextContent(
      "sign in failed at Invalid credentials"
    );
  });
});
