import React from 'react'
import Input from './Input';

const FormBlock= ({dataInputs, inputHandler})=> {
  return (
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
  );
}

export default FormBlock