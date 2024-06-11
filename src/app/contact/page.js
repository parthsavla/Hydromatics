"use client";
import React, { useState } from "react";

export default function Page() {
  const querys = [
    {
      id: 1,
      inquery: "RS SALES",
      image: "/images/mary.jpg",
      name: "Lavenda Harriet",
      email: "harriet@hydromaticsea.com",
      call: "710 373 962",
    },
    {
      id: 2,
      inquery: "FLUKE",
      image: "/images/mary.jpg",
      name: "Antony Kitaka",
      email: "antony@hydromaticsea.com",
      call: "710 368 604",
    },
    {
      id: 3,
      inquery: "SICK",
      image: "/images/mary.jpg",
      name: "John Doe",
      email: "john@hydromaticsea.com",
      call: "712 345 678",
    },
    {
      id: 4,
      inquery: "GENERAL",
      image: "/images/mary.jpg",
      name: "Sukhvinder Sagoo (Sukhi)",
      email: "sales@hydromaticsea.com",
      call: "735 990 050",
    },
  ];

  const [focus, setFocus] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const handleFocus = (field) => {
    setFocus({ ...focus, [field]: true });
  };

  const handleBlur = (field) => {
    setFocus({ ...focus, [field]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <div className="contact-cont">
      <div className="heading">
        <h2>CONTACT US</h2>
        <img src="/images/gears.svg" alt="gears icon" />
      </div>

      <main className="contact-main">
        <h2>FOR INQUERIES</h2>
        <h4>Get In Touch Today!</h4>
        <div className="team">
          <div className="wrapper">
            {querys.map((query) => (
              <div className="cards" key={query.id}>
                <div className="img">
                  <img src={query.image} />
                </div>
                <div className="content">
                  <ul>
                    <li>
                      <b>Inqueries for: {query.inquery}</b>
                    </li>
                    <li>
                      <b>{query.name}</b>
                    </li>
                    <li>
                      <b>{query.email}</b>
                    </li>

                    <li>
                      <b>+254 {query.call}</b>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form className="contact-form">
          <h2>WE REPLY FASTER ON EMAIL</h2>
          <div className={`form-group ${focus.name ? "focused" : ""}`}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onFocus={() => handleFocus("name")}
              onBlur={() => handleBlur("name")}
            />
          </div>
          <div className={`form-group ${focus.email ? "focused" : ""}`}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onFocus={() => handleFocus("email")}
              onBlur={() => handleBlur("email")}
            />
          </div>
          <div className={`form-group ${focus.subject ? "focused" : ""}`}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              onFocus={() => handleFocus("subject")}
              onBlur={() => handleBlur("subject")}
            />
          </div>
          <div className={`form-group ${focus.message ? "focused" : ""}`}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              onFocus={() => handleFocus("message")}
              onBlur={() => handleBlur("message")}
            ></textarea>
          </div>
          <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
        </form>
      </main>
    </div>
  );
}
