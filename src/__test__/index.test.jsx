import React from "react";
import { hasMounted } from "../index";
import { shallow, mount } from "enzyme";

const SimpleComponent = ({ hasMounted }) => (
  <div>Has mounted: {hasMounted ? "true" : "false"}</div>
);

describe("hasMounted", () => {
  it("should return function", () => {
    expect(typeof hasMounted()).toBe("function");
  });

  it("Should return hasMounted false", () => {
    const SimpleComponentWithHOC = hasMounted()(SimpleComponent);
    const wrapper = shallow(<SimpleComponentWithHOC />, {
      disableLifecycleMethods: true
    });

    expect(wrapper.props().hasMounted).toBeFalsy();
  });

  it("Should return hasMounted true", () => {
    const SimpleComponentWithHOC = hasMounted()(SimpleComponent);
    const wrapper = shallow(<SimpleComponentWithHOC />);

    expect(wrapper.props().hasMounted).toBeTruthy();
  });
});
