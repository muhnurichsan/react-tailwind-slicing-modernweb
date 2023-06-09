import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Article } from "../Container";

test("should have text", () => {
  render(<Article />);
  const message = screen.queryByText(
    /See tips and trick from our partnership/i
  );
  expect(message).toBeVisible();
});

test("should render component and match snapshot", () => {
  const component = renderer.create(<Article />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
