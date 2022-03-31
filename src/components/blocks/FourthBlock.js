import React from "react";
import Accordion from "../Accordion";
import Button from "../Button";
import Input from "../Input";

function FourthBlock({ hidden, setHidden, dataInputs, inputHandler }) {
  const next = () => {
    setHidden({
      ...hidden,
      first: true,
      second: true,
      third: true,
      fourth: true,
      fifth: false,
    });
  };
  const back = () => {
    setHidden({
      ...hidden,
      first: true,
      second: true,
      third: false,
      fourth: true,
    });
  };
  return (
    <div className="block">
      <Accordion
        header={"Nature of business"}
        collapse={hidden.fourth}
        click={() => {
          let newState = { ...hidden };
          for (let key in newState) {
            newState[key] = true;
          }
          setHidden({ ...newState, fourth: false });
        }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores,
          placeat! Alias, saepe! Ullam at tempore suscipit a illo, rem
          consequatur perferendis quidem, neque molestias animi necessitatibus
          sunt eaque quis iste!
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="grid">
          <Input
            label={"Company"}
            // value={dataInputs["Company"]}
            // inputHandler={inputHandler}
          />
          <Input
            label={"Country"}
            // value={dataInputs["Country"]}
            // inputHandler={inputHandler}
          />
          <Input
            label={"Address"}
            // value={dataInputs["Address"]}
            // inputHandler={inputHandler}
          />
          <Input
            label={"Apartment"}
            // value={dataInputs["Apartment"]}
            // inputHandler={inputHandler}
          />
          <Input
            label={"Postal code/zip"}
            // value={dataInputs["PostalCode"]}
            // inputHandler={inputHandler}
          />
          <Input
            label={"City"}
            // value={dataInputs["City"]}
            // inputHandler={inputHandler}
          />
          <Input
            label={"Website"}
            // value={dataInputs["Website"]}
            // inputHandler={inputHandler}
          />
          <Input
            label={"Company registration from official register"}
            // value={dataInputs["CompanyReg"]}
            // inputHandler={inputHandler}
          />
          <Input
            label={"Company registration from official register"}
            // value={dataInputs["CompanyReg"]}
            // inputHandler={inputHandler}
          />
        </div>
        <div className="button-container">
          <Button onClick={back} name={"Back"} />
          <Button onClick={next} name={"Next"} />
        </div>
      </Accordion>
    </div>
  );
}

export default FourthBlock;
