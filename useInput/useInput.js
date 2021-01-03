import { useState } from "react";

export const useInput = (inintialValue, validator) => {
  const [value, setValue] = useState(inintialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { props: { value, onChange }, utils: { setValue } };
};
