import logo from "./logo.svg";
import FC from "react";
import "./App.css";
import ImageCard from "./components/ImageCard";

function App() {
  return (
    <div className="App">
      <div class="container">
        <ImageCard
          message="Thank you for being supportive in all our decisions. You're the best dad one can ask for, and we pray that you recover soon. Happy Father's Day!""
          image="https://i.imghippo.com/files/WhYze1716745094.jpg"
          name="Edgard"
          left
        />
        <ImageCard
          message="Thank you for being supportive in all our decisions. You're the best dad one can ask for, and we pray that you recover soon. Happy Father's Day! "
          image="https://i.imghippo.com/files/RTJNe1716710417.jpg"
          name="Ange"
          left={false}
        />
        <ImageCard
          message="Happy Father's Day, Dad! Your unwavering support and love mean the world to me. I hope you have a wonderful day and a speedy recovery. Love you always."
          image="https://i.imghippo.com/files/MxjFL1716745600.jpg"
          name="Oreste"
          left
        />
        <ImageCard
          message="Happy Father's Day to the best dad in the world! Thank you for all the love and support you give us every day. Love you so much and get well soon.""
          image="https://i.imghippo.com/files/bfCIW1716745324.jpg"
          name="Pamela"
          left={false}
        />
      </div>
      <div>
        <iframe
          width="300"
          height="60"
          src="https://vocaroo.com/embed/151i8tomI0XS?autoplay=1"
          frameborder="0"
          allow="autoplay"
        ></iframe>
        <a
          href="https://voca.ro/151i8tomI0XS"
          title="Vocaroo Voice Recorder"
          target="_blank"
        >
          View on Vocaroo &gt;&gt;
        </a>
      </div>
    </div>
  );
}

export default App;
