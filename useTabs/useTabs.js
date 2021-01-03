import React, { useState } from "react";

export const useTabs = (inintialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(inintialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};
