import React from "react";
import { shallow } from "enzyme";
import Panel, { Active, Inactive } from "./";

describe("Panel", () => {
  let wrapper;
  const devices = [
    {
      name: "rotation_rate_gamma",
      unit: "deg/s",
      value: 0,
      timestamp: 1528878066506,
      active: true
    }
  ];

  beforeEach(() => {
    wrapper = shallow(<Panel devices={devices} />);
  });

  it("renders", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("renders correctly", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("render the number of active an inactive devices", () => {
    expect(
      wrapper
        .find(Active)
        .dive()
        .text()
    ).toBe("1");

    expect(
      wrapper
        .find(Inactive)
        .dive()
        .text()
    ).toBe("0");
  });
});
