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
                    message1="Thank you for being supportive in all our decisions. You're the best dad one can ask for, and we pray that you recover soon. Happy Father's Day!"
                    meesage2="Happy mother day, thanks for being there! I love you! May God bless you!"
                    image={Edy}
                    name="Edgard"
                    left
                />
                <ImageCard
                    message1="Thank you for being supportive in all our decisions. You're the best dad one can ask for, and we pray that you recover soon. Happy Father's Day! "
                    meesage2="Happy mothers day. all we are today is thanks to you and we will always do our best to make you proud and happy."
                    image={Ange}
                    name="Ange"
                    left={false}
                />
                <ImageCard
                    message1="Happy Father's Day, Dad! Your unwavering support and love mean the world to me. I hope you have a wonderful day and a speedy recovery. Love you always."
                    meesage2="Happy mother's, thank you for being God's blessing upon us and for your unconditional love and support."
                    image={Oreste}
                    name="Oreste"
                    left
                />
                <ImageCard
                    message1="Happy Father's Day to the best dad in the world! Thank you for all the love and support you give us every day. Love you so much and get well soon."
                    meesage2="Happy Mother's Day to the best mom in the world! Always Thank you for all the love and support you give us every day. Love you so much"
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
