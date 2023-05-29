import React from "react";
import Ellipse from "../../assets/Ellipse.svg";

interface QuestionsProps {
  number: string;
  title: string;
  text: string;
}

function Questions({ number, title, text }: QuestionsProps) {
  return (
    <div>
      <div className="container m-auto">
        <div className="bg-rosa-200 w-[60px] h-[60px] rounded-[90px] relative left-[30px] top-[30px] ">
          <p className="text-[40px] text-bege-100 font-semibold flex justify-center">
            {number}
          </p>
        </div>

        <div className="bg-[#FFFF] rounded-[10px] px-[25px] py-[30px]">
          <p className="text-[20px] font-semibold py-2">{title}</p>
          <p className="text-p3">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Questions;
