import React, { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div>
      <div className='navbar navbar-expand-lg'>
        <div className='logo'>
          <img src="/public/logo.png" alt="Logo" />
        </div>

        <div className='right d-flex align-items-center'>
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} className="me-3">
            <DropdownToggle caret className="btn button1 btn-secondary">
              {selectedLanguage}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => handleLanguageChange("English")}>English</DropdownItem>
              <DropdownItem onClick={() => handleLanguageChange("Hindi")}>Hindi</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <button className='button'>Sign Out</button>
        </div>
      </div>
    </div>
  );
}
