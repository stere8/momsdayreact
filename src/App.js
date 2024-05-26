import logo from "./logo.svg";
import FC from "react";
import "./App.css";
import ImageCard from "./components/ImageCard";

function App() {
  return (
    <div className="App">
      <div class="container">
        <ImageCard
          message="Happy mother day, thanks for being there! I love you! May God bless you!"
          image="https://i.imghippo.com/files/WhYze1716745094.jpg"
          name="Edgard"
          left
        />
        <ImageCard
          message="Happy mothers day. all we are today is thanks to you and we will always do our best to make you proud and happy. "
          image="https://i.imghippo.com/files/RTJNe1716710417.jpg"
          name="Ange"
          left={false}
        />
        <ImageCard
          message="Happy mother's, thank you for being God's blessing upon us and for your unconditional love and support."
          image="https://i.imghippo.com/files/MxjFL1716745600.jpg"
          name="Oreste"
          left
        />
        <ImageCard
          message="Happy Mother's Day to the best mom in the world! Thank you for all the love and support you give us every day. Love you so much"
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
