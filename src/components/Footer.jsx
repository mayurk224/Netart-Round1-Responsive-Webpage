import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content">
        {[
          {
            id: 1,
            icon: "https://img.icons8.com/ios-filled/50/000000/apple-phone.png",
            title: "Toll Free",
            text: "1800 200 1234",
          },
          {
            id: 2,
            icon: "https://img.icons8.com/ios-filled/50/000000/facebook-new.png",
            title: "",
            text: "www.facebook.com/cripumps",
          },
          {
            id: 3,
            icon: "https://img.icons8.com/ios/50/000000/globe--v1.png",
            title: "",
            text: "www.crigroups.com",
          },
        ].map((item, index) => (
          <div className="ctc" key={index}>
            <div className="icon">
              <img src={item.icon} alt="" />
            </div>
            <label>{item.title}</label>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
