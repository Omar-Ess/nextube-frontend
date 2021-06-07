import React from "react";
import PropTypes from "prop-types";

const TextField = React.forwardRef(({ className, error, helperText, ...otherProps }, ref) => {
  return (
    <>
      <input ref={ref} {...otherProps} className={`w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-sm text-gray-900 rounded-md focus:outline-none focus:ring-1 ${error ? "focus:ring-red-500" : "focus:ring-indigo-500  "} ${className}`} />
      {helperText && <span className={`text-xs ml-1 ${error && "text-red-600"}`}>{helperText}</span>}
    </>
  );
});

TextField.propTypes = {
  className: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.string,
};

export default TextField;
