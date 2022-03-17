import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { changeTerm } from "../actions";

const SearchBar = ({ changeTerm }) => {
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      changeTerm(term);
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  return (
    <div>
      <label htmlFor="">
        <p>Искать контакт</p>
        <input onChange={handleChange} className="input" type="text" />
      </label>
    </div>
  );
};

export default connect(null, { changeTerm })(SearchBar);
