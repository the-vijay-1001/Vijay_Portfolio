import { type } from "os";
import React from "react";
type prop = {
  title: string;
  icon: string;
};
function CommonButton(props: prop) {
  return (
    <>
      <button className="border font-semibold  text-white rounded-full p-2 flex items-center bg-indigo-600 relative lg:px-5 hover:bg-white hover:text-indigo-600 hover:border hover:border-indigo-600">
        <i className={`${props.icon} me-2 fa-md`} aria-hidden="true"></i>
        {props.title}
      </button>
    </>
  );
}

export default CommonButton;
