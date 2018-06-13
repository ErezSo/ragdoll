import React from "react";
import { shallow } from "enzyme";
import Device from "./";

describe("Device", () => {
  let wrapper;
  const props = {
    device: {
      name: "rotation_rate_gamma",
      unit: "deg/s",
      value: 0,
      timestamp: 1528878066506,
      active: true
    },
    toggleDevice: jest.fn(),
    disableButton: true
  };
  beforeEach(() => {
    wrapper = shallow(<Device {...props} />);
  });

  it("renders", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("renders correctly", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
