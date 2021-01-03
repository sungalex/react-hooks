import React, { useState, useEffect } from "react";

const useTitle = (inintialTitle) => {
  const [title, setTitle] = useState(inintialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};
