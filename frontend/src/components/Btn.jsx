import React from 'react'

const Btn = ({text}) => {
  return (
    <button className="bg-green-600 text-white hover:bg-green-700  px-3 py-2 rounded-sm">
      {text}
    </button>
  );
}

export default Btn