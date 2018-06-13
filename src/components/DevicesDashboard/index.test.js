import React from "react";
import { shallow } from "enzyme";
import Dashboard from "./";

describe("Dashboard", () => {
  let wrapper;
  const response = {
    data: [
      {
        name: "rotation_rate_gamma",
        unit: "deg/s",
        value: 0,
        timestamp: 1528878066506,
        active: true
      }
    ]
  };
  beforeEach(() => {
    fetch.mockResponseOnce(JSON.stringify(response));
    wrapper = shallow(<Dashboard />);
  });

  it("renders", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("renders correctly", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
