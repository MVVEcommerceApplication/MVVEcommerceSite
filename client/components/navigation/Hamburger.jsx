import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import NavDropDown from './NavDropDown.jsx';

const Hamburger = (props) => {
  const [hamBurgerState, setHamburgerState] = useState(false);
  const [dropDownState, setDropDownState] = useState(null);

  const hamburgerToggle = () => {
    if (hamBurgerState === false) {
      setHamburgerState(true);
      setDropDownState(<NavDropDown />);
    } else {
      setHamburgerState(false);
      setDropDownState(null);
    }
  };


  return (
    <div>
      <button
        type="button"
        onClick={() => hamburgerToggle()}
      >
&#9776;

      </button>
      {dropDownState}
    </div>
  );
};

export default Hamburger;
