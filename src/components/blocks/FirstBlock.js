import React from "react";
import Accordion from "../Accordion";
import Button from "../Button";

function FirstBlock({ hidden, setHidden }) {
  const next = () => {
    setHidden({ ...hidden, first: true, second: false });
  };
  return (
    <div className="block">
      <Accordion
        header={"Welcome"}
        collapse={hidden.first}
        click={() => {
          let newState = { ...hidden };
          for (let key in newState) {
            newState[key] = true;
          }
          setHidden({ ...newState, first: false });
        }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores,
          placeat! Alias, saepe! Ullam at tempore suscipit a illo, rem
          consequatur perferendis quidem, neque molestias animi necessitatibus
          sunt eaque quis iste!
        </p>
        <div className="button-container">
          <Button onClick={next} name={"Start"} />
        </div>
      </Accordion>
    </div>
  );
}

export default FirstBlock;
