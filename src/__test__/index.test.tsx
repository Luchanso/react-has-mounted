import * as React from "react";
import { shallow, mount } from "enzyme";
import { withCheckMount, WithCheckMountProps } from "../index";

const SimpleComponent = ({ hasMounted }: WithCheckMountProps) => (
  <div>Has mounted: {hasMounted ? "true" : "false"}</div>
);

describe("Testing HOC", () => {
  it("should return function", () => {
    expect(typeof withCheckMount(SimpleComponent)).toBe("function");
  });

  it("Should return withCheckMount false", () => {
    const SimpleComponentWithHOC = withCheckMount(SimpleComponent);
    const wrapper = shallow(<SimpleComponentWithHOC />, {
      disableLifecycleMethods: true
    });

    expect(wrapper.props().withCheckMount).toBeFalsy();
  });

  it("Should return withCheckMount true", () => {
    const SimpleComponentWithHOC = withCheckMount(SimpleComponent);
    const wrapper = shallow(<SimpleComponentWithHOC />);

    expect(wrapper.props().hasMounted).toBeTruthy();
  });
});
