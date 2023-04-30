import { useState } from "react";
import { Level3Modal } from "./Level3Modal";
import { Level3Output } from "./Level3Output";
import classes from "./Level3.module.css";
import { NavigationTitle } from "../Components/NavigationTitle";
import { LevelInput } from "../Components/LevelInput";
import { ImCross, ImCheckmark } from "react-icons/im";

export const Level3 = () => {
  const [isModalShown, setIsModalShown] = useState(true);

  const hideModalHandler = () => {
    setIsModalShown(false);
  };
  
  const [code, setCode] = useState("");

  const handleEditorChange = (value) => {
    setCode(value);
  };

  return (
    <>
      <NavigationTitle
        level="3"
        right_arrow_dest="/level-4"
        left_arrow_dest="/level-2"
      />
      {isModalShown && <Level3Modal hideModal={hideModalHandler} />}
      <div className={classes.level_1}>
        <span className={classes.wrong}>
          <ImCross />
        </span>
        <span className={classes.correct}>
          <ImCheckmark />
        </span>

      <LevelInput handleEditorChange={handleEditorChange} />
      <Level3Output />
      </div>
        <pre>{code}</pre>
    </>
  );
};
