import React, { useState } from "react";
import Accordion from "../Accordion";
import Button from "../Button";
import FormBlock from "../FormBlock";
import Input from "../Input";
// import { AiFillPlusCircle } from "react-icons/ai";

function ThirdBlock({ hidden, setHidden, dataInputs, inputHandler }) {
  const [formList, setFormList] = useState([]);
  const onAddBtnClick = () => {
    setFormList(
      formList.concat(
        <FormBlock dataInputs={dataInputs} inputHandler={inputHandler} />
      )
    );
  };
  const onRemoveBtnClick = () => {
    if (formList.length > 0) {
      let newArray = [...formList]
      newArray.pop()
      setFormList(newArray);
    }
  };
  const next = () => {
    setHidden({
      ...hidden,
      first: true,
      second: true,
      third: true,
      fourth: false,
    });
  };
  const back = () => {
    setHidden({ ...hidden, first: false, second: false, third: true });
  };
  return (
    <div className="block">
      <Accordion
        header={"Ultimate Beneficial Owner(s)"}
        collapse={hidden.third}
        click={() => {
          let newState = { ...hidden };
          for (let key in newState) {
            newState[key] = true;
          }
          setHidden({ ...newState, third: false });
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
            label={"Full name*"}
            value={dataInputs["FullName"]}
            inputHandler={inputHandler}
          />
          <Input
            label={"Role*"}
            value={dataInputs["Role"]}
            inputHandler={inputHandler}
          />
          <Input
            label={"Address*"}
            value={dataInputs["OwnerAddress"]}
            inputHandler={inputHandler}
          />
          <Input
            label={"Apartment*"}
            value={dataInputs["OwnerApartment"]}
            inputHandler={inputHandler}
          />
          <Input
            label={"Postal code/zip*"}
            value={dataInputs["OwnerPostalCode"]}
            inputHandler={inputHandler}
          />
          <Input
            label={"City*"}
            value={dataInputs["OwnerCity"]}
            inputHandler={inputHandler}
          />
          <Input
            label={"Email*"}
            value={dataInputs["Email"]}
            inputHandler={inputHandler}
          />
          <Input
            label={"Upload Passport*"}
            // value={dataInputs["Passport"]}
            // inputHandler={inputHandler}
          />
          <Input
            label={"Upload Utility bill*"}
            value={dataInputs["Bill"]}
            inputHandler={inputHandler}
          />
        </div>
        {formList}
        <div className="AddButton" onClick={onAddBtnClick}>
          <p>Add form</p>
        </div>
        <div className="RemoveButton" onClick={onRemoveBtnClick}>
          <p>Remove last form</p>
        </div>
        <div className="button-container">
          <Button onClick={back} name={"Back"} />
          <Button onClick={next} name={"Next"} />
        </div>
      </Accordion>
    </div>
  );
}

export default ThirdBlock;
