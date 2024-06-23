import "./App.css";
import ImageCard from "./components/ImageCard";
import Oreste from './img/Oreste.jpg'
import Edy from './img/Edy.jpg'
import Pams from './img/Pams.jpg'
import Ange from './img/Ange.jpg'


function App() {
    return (
        <div className="App">
            <div class="container">
                <ImageCard
                    message="Thank you for being supportive in all our decisions. You're the best dad one can ask for, and we pray that you recover soon. Happy Father's Day!"
                    image={Edy}
                    name="Edgard"
                    left
                />
                <ImageCard
                    message="Thank you for being supportive in all our decisions. You're the best dad one can ask for, and we pray that you recover soon. Happy Father's Day! "
                    image={Ange}
                    name="Ange"
                    left={false}
                />
                <ImageCard
                    message="Happy Father's Day, Dad! Your unwavering support and love mean the world to me. I hope you have a wonderful day and a speedy recovery. Love you always."
                    image={Oreste}
                    name="Oreste"
                    left
                />
                <ImageCard
                    message="Happy Father's Day to the best dad in the world! Thank you for all the love and support you give us every day. Love you so much and get well soon."
                    image={Pams}
                    name="Pamela"
                    left={false}
                />
            </div>
            <div>
                <iframe width="300" title="Player" height="60" src="https://vocaroo.com/embed/1eeZANkFaew9?autoplay=1" frameBorder="0"
                        allow="autoplay"></iframe>
                <br/><a href="https://voca.ro/1eeZANkFaew9" title="Vocaroo Voice Recorder" target="_blank" rel="noreferrer">View on
                Vocaroo &gt;&gt;</a></div>
        </div>
    );
}


export default App;
