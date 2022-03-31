import React from "react";
import Accordion from "../Accordion";
import Button from "../Button";

function SixthBlock({ hidden, setHidden, dataInputs, inputHandler }) {
    const closeForm = () => {
      setHidden({
        ...hidden,
        first: false,
        second: true,
        third: true,
        fourth: true,
        fifth: true,
        sixth: true,
      });
    };
  return (
    <div className="block">
      <Accordion
        header={"Customer approval"}
        collapse={hidden.sixth}
        click={() => {
          let newState = { ...hidden };
          for (let key in newState) {
            newState[key] = true;
          }
          setHidden({ ...newState, sixth: false });
        }}
      >
        <p>Your customer is now approved</p>
        <div className="button-container">
          <Button onClick={closeForm} name={"Close"} />
        </div>
      </Accordion>
    </div>
  );
}

export default SixthBlock;
