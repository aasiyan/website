import React, { useEffect, useState } from "react";
import LoadingSpinner from "../Loading/Loading";
import "./ContactForm.css";

const ContactForm = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate a data fetch
    setTimeout(() => {
      setLoading(false);
      setData();
    }, 1500); // simulate a 2-second loading time
  }, []);
  const sendAlert = () => {
    alert("Message sent successfully");
  };

  const [result, setResult] = React.useState("Send Message");

  const sendMessage = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6ebd226c-bb6e-4f6c-ac4e-cc0fe117027a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <div className="auth-container">
        <div className="App">
          {loading ? <LoadingSpinner loading={loading} /> : <div>{data}</div>}
        </div>
        <form onSubmit={sendMessage}>
          <div className="auth-card con-card">
            <h2 className="auth-head">Contact</h2>
            <div>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Enter the name"
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email id"
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Message <br />
                <textarea
                  name="message"
                  className="contact-message"
                  placeholder="Enter Message"
                ></textarea>
              </label>
            </div>
            <button type="submit" onClick={sendAlert}>
              {result}
            </button>
          </div>
        </form>
        ;
      </div>
    </>
  );
};

export default ContactForm;
