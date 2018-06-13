import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;
const Active = styled.span`
  color: #1cc51c;
  margin: 0 10px;
`;
const Inactive = styled.span`
  color: red;
  margin: 0 10px;
`;

const Panel = ({ devices, handleSearch }) => {
  const numOfActiveDevices = devices.filter(d => d.active).length;
  return (
    <Wrapper>
      <div>
        Active devices:
        <Active>{numOfActiveDevices}</Active>
        {"/"}
        <Inactive>{devices.length - numOfActiveDevices}</Inactive>
      </div>
      <div>
        Search: <input type="text" onChange={handleSearch} />
      </div>
    </Wrapper>
  );
};

export default Panel;
