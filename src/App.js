import React, { useState } from "react";
import Accordion from "./components/Accordion";
import FirstBlock from "./components/blocks/FirstBlock";
import SecondBlock from "./components/blocks/SecondBlock";
import ThirdBlock from "./components/blocks/ThirdBlock";
import FourthBlock from "./components/blocks/FourthBlock";
import FifthBlock from "./components/blocks/FifthBlock";
import SixthBlock from "./components/blocks/SixthBlock";
import inpaylogo from "./img/inpaylogo.jpeg";
import "./Style.css";
import FaqBlock from "./components/faq/FaqBlock";

export default function App() {
  const [hidden, setHidden] = useState({
    first: false,
    second: true,
    third: true,
    fourth: true,
    fifth: true,
    sixth: true,
  });



  const [dataInputs, setDataInputs] = useState({
    Company: "",
    Country: "",
    Address: "",
    Apartment: "",
    PostalCode: "",
    City: "",
    Website: "",
    CompanyReg: "",
    FullName: "",
    Role: "",
    OwnerAddress: "",
    OwnerApartment: "",
    OwnerPostalCode: "",
    OwnerCity: "",
    Email: "",
    Passport: "",
    Bill: "",
    TypeOfBusiness: "",
    MonthlyVolume: "",



  });

  function inputHandler(e) {
    let { name, value } = e.target;
    setDataInputs({ ...dataInputs, [name]: value });
  }

  return (
    <div className="mainPage">
      <div className="imgBlock">
        <img src={inpaylogo} alt="inpay logo" />
      </div>
      <div className="container">
        <div className="title">
          <p> KYC & DUE DILIGENCE</p>
          <h1>Add new customer</h1>
          <p>
            Estimated time: <span> 10 min</span>
          </p>
        </div>
        <FirstBlock hidden={hidden} setHidden={setHidden} />
        <SecondBlock
          hidden={hidden}
          setHidden={setHidden}
          dataInputs={dataInputs}
          setDataInputs={inputHandler}
        />
        <ThirdBlock
          hidden={hidden}
          setHidden={setHidden}
          dataInputs={dataInputs}
          setDataInputs={inputHandler}
        />
        <FourthBlock
          hidden={hidden}
          setHidden={setHidden}
          dataInputs={dataInputs}
          setDataInputs={inputHandler}
        />
        <FifthBlock
          hidden={hidden}
          setHidden={setHidden}
          dataInputs={dataInputs}
          setDataInputs={inputHandler}
        />
        <SixthBlock hidden={hidden} setHidden={setHidden} />
      </div>
      <div className="faqContainer">
        <FaqBlock />
      </div>
    </div>
  );
}
