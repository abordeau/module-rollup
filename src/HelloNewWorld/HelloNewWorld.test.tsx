// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import HelloNewWorld from "./HelloNewWorld";
import { HelloNewWorldProps } from "./HelloNewWorld.types";

describe("Test Component", () => {
  let props: HelloNewWorldProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<HelloNewWorld {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("HelloNewWorld");

    expect(component).toHaveTextContent("harvey was here");
  });
});
