import { useState } from "react";
import { Level3Modal } from "./Level3Modal";
import { Level3Input } from "./Level3Input";
import { Level3Output } from "./Level3Output";
import "./Level3.module.css";
import { NavigationTitle } from "../Components/NavigationTitle";

export const Level3 = () => {
  const [isModalShown, setIsModalShown] = useState(true);

  const hideModalHandler = () => {
    setIsModalShown(false);
  };
  return (
    <>
      <NavigationTitle
        level="3"
        right_arrow_dest="/level-4"
        left_arrow_dest="/level-2"
      />
      {isModalShown && <Level3Modal hideModal={hideModalHandler} />}
      <Level3Input />
      <Level3Output />
    </>
  );
};