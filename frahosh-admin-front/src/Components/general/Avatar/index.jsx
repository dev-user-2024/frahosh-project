import React from 'react'
import * as Styled from "./styled";

const Avatar = ({size = "medium", ...props}) => {
  return <Styled.Avatar size={size} {...props} />;
}

export default Avatar