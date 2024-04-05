import { useState } from "react";

function CategoryCard({ title, openPosition, icon: Icon }) {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <div
        className="border hover:border-cyan-500 w-full p-10 flex gap-6 rounded-lg shadow-sm hover:shadow-cyan-500/50 "
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className={`p-6 rounded-lg ${hovered ? "bg-cyan-500" : "bg-cyan-100"}`}
        >
          <Icon
            className={`text-2xl ${hovered ? "text-white" : "text-cyan-500"}`}
          />
        </div>
        <div>
          <h4
            className={`font-bold ${hovered ? "text-cyan-500" : "text-black"}`}
          >
            {title}
          </h4>
          <p className="font-[200] text-sm text-gray-400">
            {openPosition} open position
          </p>
        </div>
      </div>
    </>
  );
}

export default CategoryCard;
