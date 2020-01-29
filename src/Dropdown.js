import React, { useEffect, useState, useRef } from "react";

const Dropdown = ({ value, options, placeholder = "Select", onChange }) => {
  const node = useRef();

  const [open, setOpen] = useState(false);

  const handleClickOutside = e => {
    // console.log("clicking anywhere e.targe:", e.target, node.current);
    console.log("node", node)
    console.log("node.current", node.current)
    console.log("e.target", e.target);
    if (node.current.contains(e.target)) {
      // inside click
      console.log("inside inside-click")
      return;
    }
    // outside click
    console.log("inside OUTside-click")
    setOpen(false);
  };

  const handleChange = selectedValue => {
    onChange(selectedValue);
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div ref={node} className="dropdown">
      <button className="dropdown-toggler" onClick={e => setOpen(!open)}>
        {value || placeholder}
      </button>
      {open && (
        <ul className="dropdown-menu">
          {options.map((opt, i) => (
            <li 
              className = "dropdown-menu-item" 
              onClick   = { e => handleChange(opt)}
              key       = { opt } >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
