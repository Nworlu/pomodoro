import React, { useState } from "react";
import Tag from "./Tag";
import TagContainer from "./TagContainer";
import useApContext from "../../useApp";

const Tags = () => {
  const { setActiveTag } = useApContext();

  return (
    <TagContainer>
      {["Pomodoro", "Short Break", "Long Break"].map((tag, i) => (
        <Tag index={i} onClick={() => setActiveTag(i)} key={i}>
          {tag}
        </Tag>
      ))}
    </TagContainer>
  );
};

export default Tags;
