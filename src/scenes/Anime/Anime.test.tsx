import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { store } from "store";
import { setIsLoading } from "slices";
import { Anime } from "./Anime";

test("Loading spinner is not displayed while loading is off", () => {
  store.dispatch(setIsLoading(false));

  const { container } = render(
    <Provider store={store}>
      <Anime />
    </Provider>
  );

  expect(
    ((container as HTMLElement).firstChild as HTMLElement).children.item(1)?.id
  ).not.toEqual("loading");
});

test("Loading spinner is displayed while loading is on", () => {
  store.dispatch(setIsLoading(true));

  const { container } = render(
    <Provider store={store}>
      <Anime />
    </Provider>
  );

  expect(
    ((container as HTMLElement).firstChild as HTMLElement).children.item(1)?.id
  ).toEqual("loading");
});
