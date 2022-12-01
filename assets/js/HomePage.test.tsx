import * as React from "react";
import renderer from "react-test-renderer";
import MainButton from "../../assets/js/components/shared/Buttons/MainButton";

it("changes the class when hovered", () => {
  const component = renderer.create(
    <MainButton page="http://www.facebook.com">Facebook</MainButton>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseEnter();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseLeave();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
