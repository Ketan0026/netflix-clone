import "./FaqPage.css";
import React, { useState } from "react";
import QaBox from "./QaBox";

function FaqPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const questions = [
    "What is Netflix?",
    "How much does Netflix cost?",
    "Where can I watch?",
    "How do I cancel?",
    "What can I watch on Netflix?",
    "Is Netflix good for kids?",
  ];

  const answers = [
    `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.`,

    `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.`,

    `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.`,

    `Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,

    `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,

    `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.`,
  ];

  const ans_pt2 = [
    `You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`,
    `You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
    `Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
  ];
  return (
    <div className="faq-wrapper">
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="qa-container">
          <QaBox
            title={questions[0]}
            content={answers[0]}
            content_pt2={ans_pt2[0]}
            isOpen={openIndex === 0}
            onItemClick={() => handleItemClick(0)}
          />
          <QaBox
            title={questions[1]}
            content={answers[1]}
            isOpen={openIndex === 1}
            onItemClick={() => handleItemClick(1)}
          />
          <QaBox
            title={questions[2]}
            content={answers[2]}
            content_pt2={ans_pt2[1]}
            isOpen={openIndex === 2}
            onItemClick={() => handleItemClick(2)}
          />
          <QaBox
            title={questions[3]}
            content={answers[3]}
            isOpen={openIndex === 3}
            onItemClick={() => handleItemClick(3)}
          />
          <QaBox
            title={questions[4]}
            content={answers[4]}
            isOpen={openIndex === 4}
            onItemClick={() => handleItemClick(4)}
          />
          <QaBox
            title={questions[5]}
            content={answers[5]}
            content_pt2={ans_pt2[2]}
            isOpen={openIndex === 5}
            onItemClick={() => handleItemClick(5)}
          />
        </div>
      </div>
    </div>
  );
}

export default FaqPage;
