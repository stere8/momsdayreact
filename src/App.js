import logo from "./logo.svg";
import FC from "react";
import "./App.css";
import ImageCard from "./components/ImageCard";
import AngeImage from "./src/img/Ange.jpg";


function App() {
  return (
    <div className="App">
      <div class="container">
        <ImageCard
          message="Mom, as I reflect on my life, I realize the countless ways you've shaped me. Your unwavering support through thick and thin, your gentle guidance during tough decisions, and your infectious laughter during joyful moments – all have woven a tapestry of who I
        am today. Thank you for being the constant in my ever-changing world. "
          image="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          name="asd"
          left
        />
        <ImageCard
          message="Happy mothers day. all we are today is thanks to you and we will always do our best to make you proud and happy. "
          image={AngeImage}
          name="~Ange"
          left={false}
        />
        <ImageCard
          message="Mom, as I reflect on my life, I realize the countless ways you've shaped me. Your unwavering support through thick and thin, your gentle guidance during tough decisions, and your infectious laughter during joyful moments – all have woven a tapestry of who I
        am today. Thank you for being the constant in my ever-changing world. "
          image="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          name="asd"
          left
        />
        <ImageCard
          message="Mom, as I reflect on my life, I realize the countless ways you've shaped me. Your unwavering support through thick and thin, your gentle guidance during tough decisions, and your infectious laughter during joyful moments – all have woven a tapestry of who I
        am today. Thank you for being the constant in my ever-changing world. "
          image="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          name="asd"
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
          title="Mama Mwiza"
          target="_blank"
        >
          View on Vocaroo &gt;&gt;
        </a>
      </div>
    </div>
  );
}

export default App;
