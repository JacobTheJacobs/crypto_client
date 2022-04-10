import React from "react";

function ButtonFields() {
  return (
    <div className="flex flex-row justify-center">
      <div style={{ marginRight: "25px" }}>
        <button
          type="button"
          className="w-full border-l 
          border-t border-b
           text-base 
           font-medium 
           rounded-l-md 
           text-black bg-white 
           hover:bg-gray-100 px-4 py-2"
        >
          Left
        </button>
      </div>

      <div>
        <button
          type="button"
          className="w-full border-l
           border-t border-b 
           text-base font-medium
            rounded-l-md text-black 
            bg-white hover:bg-gray-100
             px-4 py-2"
        >
          Left
        </button>
      </div>
      <div>
        <button
          type="button"
          className="w-full border-l 
          border-t border-b text-base
           font-medium rounded-l-md 
           text-black bg-white hover:bg-gray-100
            px-4 py-2"
        >
          Left
        </button>
      </div>
    </div>
  );
}

export default ButtonFields;
