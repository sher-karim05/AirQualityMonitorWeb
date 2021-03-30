import React from "react";

function CompareBox() {
  return (
    <div className="bg-primary p-5 mt-5 rounded-md">
      <div className="text-sm text-center text-white mb-3">Compare Cities</div>

      <div className="flex">
        <select className="flex-1 bg-white p-2 mr-2 rounded-sm">
          <option value="" hidden readonly selected disabled>
            Choose
          </option>
        </select>
        <select className="flex-1 bg-white p-2 ml-2 rounded-sm">
          <option value="" hidden readonly selected disabled>
            Choose
          </option>
        </select>
      </div>
    </div>
  );
}

export default CompareBox;
