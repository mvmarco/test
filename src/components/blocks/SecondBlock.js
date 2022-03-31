import React from "react";
import Accordion from "../Accordion";
import Button from "../Button";
import Input from "../Input";
import Select from "../Select";

function SecondBlock({ hidden, setHidden, dataInputs, inputHandler }) {
  const options = ["Denmark", "Ukraine", "Sweden"];
  const next = () => {
    setHidden({ ...hidden, first: true, second: true, third: false });
  };
  const back = () => {
    setHidden({ ...hidden, first: false, second: true });
  };
  return (
    <div className="block">
      <Accordion
        header={"Company Details"}
        collapse={hidden.second}
        click={() => {
          let newState = { ...hidden };
          for (let key in newState) {
            newState[key] = true;
          }
          setHidden({ ...newState, second: false });
        }}
      >
        <div className="grid">
          <Input
            label={"Company *"}
            value={dataInputs["Company"]}
            inputHandler={inputHandler}
          />
          <Select
            label={"Country *"}
            options={options}
            inputHandler={inputHandler}
          >
            <option value=""></option>
            {options.map((country) => (
              <option value={country}>{country}</option>
            ))}
          </Select>
          <Input
            label={"Address *"}
            value={dataInputs["Address"]}
            inputHandler={inputHandler}
          />
          <Input
            label={"Apartment"}
            value={dataInputs["Apartment"]}
            inputHandler={inputHandler}
          />
          <Input
            label={"Postal code/zip *"}
            value={dataInputs["PostalCode"]}
            inputHandler={inputHandler}
          />
          <Input
            label={"City *"}
            value={dataInputs["City"]}
            inputHandler={inputHandler}
          />
          <Input
            label={"Website"}
            value={dataInputs["Website"]}
            inputHandler={inputHandler}
          />
          <Input
            label={"Official registration company*"}
            value={dataInputs["CompanyReg"]}
            inputHandler={inputHandler}
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

export default SecondBlock;
