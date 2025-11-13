import { useState, useRef, useEffect } from "react";

export default function MultiSelect({ options }) {
  const [selected, setSelected] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleOption = (option) => {
    if (selected.includes(option)) {
      setSelected(selected.filter((o) => o !== option));
    } else {
      setSelected([...selected, option]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto text-left relative">
      <label className="font-semibold text-gray-700">Lý do</label>

      <div
        className="border rounded-md px-2 py-1 flex flex-wrap gap-2 mt-1 cursor-text min-h-[40px]"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {selected.map((item) => (
          <span
            key={item}
            className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm flex items-center gap-1"
          >
            {item}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelected(selected.filter((o) => o !== item));
              }}
              className="text-blue-600 hover:text-red-500"
            >
              ✕
            </button>
          </span>
        ))}
      </div>

      {showDropdown && (
        <div
          ref={dropdownRef}
          className="border rounded-md mt-1 bg-white shadow absolute z-10 w-full max-h-60 overflow-y-auto"
        >
          {options.map((option) => (
            <div
              key={option}
              onClick={() => toggleOption(option)}
              className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                selected.includes(option) ? "bg-blue-50" : ""
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
