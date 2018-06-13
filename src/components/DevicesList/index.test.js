import React from "react";
import { shallow } from "enzyme";
import { Device } from "../index";
import DevicesList from "./";

describe("DevicesList", () => {
  let wrapper;
  const devices = [
    {
      name: "rotation_rate_alpha",
      unit: "deg/s",
      value: 0,
      timestamp: 1528878066606,
      active: false
    },
    {
      name: "rotation_rate_gamma",
      unit: "deg/s",
      value: 0,
      timestamp: 1528878066506,
      active: true
    }
  ];

  beforeEach(() => {
    wrapper = shallow(<DevicesList devices={devices} searchTerm="" />);
  });

  it("renders", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("renders correctly", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("render only items that match the search term", () => {
    wrapper = shallow(<DevicesList devices={devices} searchTerm="alpha" />);
    expect(wrapper.find(Device)).toHaveLength(1);
  });
});
