import React from "react";
import { FaChevronRight } from "react-icons/fa";

function Input() {
  return (
    <div className="inputGroup">
      <input type="text" placeholder="Type a message..." />
      <button>
        <FaChevronRight />
      </button>
    </div>
  );
}

export default Input;
