import Image from "next/image";
import React, { useRef } from "react";

const CitySelector = React.forwardRef(({ cities = [] }, ref) => (
  <select
    className="flex-1 bg-white p-2 mr-2 rounded-sm"
    defaultValue=""
    ref={ref}
  >
    <option value="" hidden readOnly disabled>
      Choose
    </option>

    {cities.map((c, index) => (
      <option value={c.city} key={index}>
        {c.city}
      </option>
    ))}
  </select>
));

function CompareBox({ cities }) {
  const selectA = useRef();
  const selectB = useRef();

  const processCompare = () => {
    console.log(selectA.current.value, selectB.current.value);

    if (selectA.current.value === "" || selectB.current.value === "") {
      alert("You must select two cities to compare!");
      return;
    }

    if (selectA.current.value === selectB.current.value) {
      alert("You can't select same country twice!");
      return;
    }
  };

  return (
    <div className="bg-primary-light p-5 mt-5 rounded-md">
      <div className="flex justify-between items-center mb-3 font-bold">
        <div className="text-sm">Compare Cities</div>
        <Image
          src="/assets/images/compare.png"
          width="25"
          height="25"
          className="cursor-pointer"
          onClick={processCompare}
        />
      </div>

      <div className="flex">
        <CitySelector cities={cities} ref={selectA} />

        <CitySelector cities={cities} ref={selectB} />
      </div>
    </div>
  );
}

export default CompareBox;
