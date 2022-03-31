import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function FaqBlock() {
  const [faqHidden, setFaqHidden] = useState({
    first: true,
    second: true,
    third: true,
  });
  // const handleFaqBlock = (block) => {
  //   let newState = { ...faqHidden };
  //   for (let key in newState) {
  //     newState[key] = true;
  //   }
  //   setFaqHidden({ ...newState, block: false });
  // }
  return (
    <div>
      <h1>FAQ</h1>
      <div className="faqInfo">
        <h2>Get help with the KYC and Due Diligence</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla maxime,
        ratione eos. Lorem ipsum dolor sit amet.
        <div
          className="faqBox"
          onClick={() => {
            let newState = { ...faqHidden };
            for (let key in newState) {
              newState[key] = true;
            }
            setFaqHidden({ ...newState, first: false });
          }}
          // onClick={()=>{handleFaqBlock(faqHidden.first)}}
        >
          <div className="faqBoxHeader">
            <p>
              What customer information do i need before I can add a new
              customer?
            </p>
            {faqHidden.first ? (
              <IoIosArrowDown className="arrowIcon" />
            ) : (
              <IoIosArrowUp className="arrowIcon" />
            )}
          </div>
          {!faqHidden.first && (
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum,
              maxime, numquam ab nulla quos recusandae eveniet ipsum hic
              obcaecati voluptas odit, ad deserunt dolores. Animi magni
              consequuntur minima minus necessitatibus reprehenderit molestiae
              quos, corporis illo cupidi?
            </div>
          )}
        </div>
        <div
          className="faqBox"
          onClick={() => {
            let newState = { ...faqHidden };
            for (let key in newState) {
              newState[key] = true;
            }
            setFaqHidden({ ...newState, second: false });
          }}
        >
          <div className="faqBoxHeader">
            <p>How long does the workflow take?</p>
            {faqHidden.second ? (
              <IoIosArrowDown className="arrowIcon" />
            ) : (
              <IoIosArrowUp className="arrowIcon" />
            )}
          </div>
          {!faqHidden.second && (
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum,
              maxime, numquam ab nulla quos recusandae eveniet ipsum hic
              obcaecati voluptas odit, ad deserunt dolores. Animi magni
              consequuntur minima minus necessitatibus reprehenderit molestiae
              quos, corporis illo cupidi?
            </div>
          )}
        </div>
        <div
          className="faqBox"
          onClick={() => {
            let newState = { ...faqHidden };
            for (let key in newState) {
              newState[key] = true;
            }
            setFaqHidden({ ...newState, third: false });
          }}
        >
          <div className="faqBoxHeader">
            <p>Can I come back later?</p>
            {faqHidden.first ? (
              <IoIosArrowDown className="arrowIcon" />
            ) : (
              <IoIosArrowUp className="arrowIcon" />
            )}
          </div>
          {!faqHidden.third && (
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum,
              maxime, numquam ab nulla quos recusandae eveniet ipsum hic
              obcaecati voluptas odit, ad deserunt dolores. Animi magni
              consequuntur minima minus necessitatibus reprehenderit molestiae
              quos, corporis illo cupidi?
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FaqBlock;
