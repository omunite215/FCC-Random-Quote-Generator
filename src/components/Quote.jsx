import React from "react";
import whatsapp from "../assets/whatsapp.svg";
import tumblr from "../assets/tumblr.svg";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

export default function Quote({ color, toggleColor }) {
  const [quotes, setQuotes] = useState("Displaying Quotes...");

  //Logic to fetch API and show data
  const changeQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randomNumber = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNumber]);
      });
  };

  useEffect(() => {
    <Spinner />;
    changeQuote();
  }, []);

  function callTwo() {
    let button = document.getElementById("text");
    changeQuote();
    toggleColor();
    button.classList.add("text-focus-in");
    setTimeout(MyAnimation, 500);
    function MyAnimation() {
      button.classList.remove("text-focus-in");
    }
  }

  //Logic to copy text
  let text = quotes.text + " - " + quotes.author;
  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Content copied to clipboard");
    } catch (err) {
      alert("Failed to Copy" + err);
    }
  };

  const shareOnWhatsApp = (textToShare) => {
    textToShare = text;
    const encodedText = encodeURIComponent(textToShare);
    const whatsappUrl = `whatsapp://send?text=${encodedText}`;
    window.location.href = whatsappUrl;
  };
  const shareOnTumblr = (textToShare) => {
    textToShare = text;
    const encodedText = encodeURIComponent(textToShare);
    const tumblrUrl = `https://www.tumblr.com/widgets/share/tool?posttype=text&content=${encodedText}`;
    window.open(tumblrUrl, "_blank");
  };

  return (
    <div
      id="quote-box"
      className="card text-center w-75 position-absolute top-50 start-50 translate-middle"
    >
      <div className={`card-header fw-bold text-${color}`}>The "Quote" Machine</div>
      <div className="card-body">
        <h4 id="text" className="card-text" value={quotes.text}>
          "{quotes.text}"
        </h4>
        <h6 id="author" className="card-text">
          - {quotes.author}
        </h6>
        <div className="mt-4">
          <button
            id="change-quote"
            className={`btn btn-${color} mx-4`}
            onClick={callTwo}
          >
            Change Quote
          </button>
          <button
            className={`btn btn-${color} mt-sm-0 mt-4`}
            onClick={copyText}
          >
            CopyText
          </button>
        </div>
      </div>
      <div className="card-footer text-muted">
        <button className="btn" onClick={shareOnTumblr}>
          <img
            src={tumblr}
            alt="Logo"
            width="34"
            height="34"
            className="d-inline-block align-text-top"
          />{" "}
        </button>
        <button className="btn btn" onClick={shareOnWhatsApp}>
          <img
            src={whatsapp}
            alt="Logo"
            width="34"
            height="34"
            className="d-inline-block align-text-top"
          />
        </button>
      </div>
      <h5 className="mt-2">by Om Patel</h5>
    </div>
  );
}
