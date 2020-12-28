import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { store } from "store";
import { setLoggedIn } from "slices";
import { Authorization } from "./Authorization";

test("Login button is displayed while user is not logged in", () => {
  store.dispatch(setLoggedIn(false));

  const { container } = render(
    <Provider store={store}>
      <Authorization />
    </Provider>
  );

  expect(container.firstChild.firstChild).toHaveTextContent(
    "LOG IN WITH SPOTIFY"
  );
});

test("Logout button is displayed while user is logged in", () => {
  store.dispatch(setLoggedIn(true));

  const { container } = render(
    <Provider store={store}>
      <Authorization />
    </Provider>
  );

  expect(container.firstChild.firstChild).toHaveTextContent("LOG OUT");
});
