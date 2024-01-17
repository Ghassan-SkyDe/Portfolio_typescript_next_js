"use client";
import { CloseBtnProps } from "@/types/allTypes";
import { FC } from "react";

const CloseBtn: FC<CloseBtnProps> = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="apply__closeBtn px-4 py-2 my-1 rounded-full absolute left-[50%] translate-x-[-50%] top-4"
    >
      X
    </button>
  );
};

export default CloseBtn;
