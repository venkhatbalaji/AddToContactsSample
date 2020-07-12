import React from 'react';
import NavigationBar from "./Container/NavBar/navigationBar";
import SideBar from "./Container/NavBar/sideBar";
import ContactPage from "./Container/Components/contactsPage";
import "./App.css";

function App() {

  return (
    <div>
      <NavigationBar />
      <div className="contact-page">
        <ContactPage />
      </div>
      <SideBar />
    </div>
  );
}

export default App;
