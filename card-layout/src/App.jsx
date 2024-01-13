import { useState } from 'react'
import './App.css'
import BugsBunnyImage from './images/Bugs_Bunny.png'
import JerryImage from './images/Jerry.png'
import PinkPantherImage from './images/PinkPanther.png'
import WoodyWoodpeckerImage from './images/WoodyWoodpecker.png'

function App() {
  const [cards] = useState([
    {
      title: "Bugs Bunny",
      tagline: "Warner Invention",
      image: BugsBunnyImage,
      description:
        "Bugs Bunny is an animated cartoon character, created in the late 1930s by Leon Schlesinger Productions and voiced originally by Mel Blanc. Bugs is best known for his starring roles in the Looney Tunes and Merrie Melodies series of animated short films, produced by Warner Bros.",
    },
    {
      title: "Jerry",
      tagline: "Tom and Jerry",
      image: JerryImage,
      description:
        "Jerry is a celebrated and enduring animated character, created by William Hanna and Joseph Barbera. Jerry, along with his larger and dim-witted adversary, Tom, first appeared in the 1940 short 'Puss Gets the Boot' and has since become a cherished figure in the annals of animation history.",
    },
    {
      title: "Pink Panther",
      tagline: "Classic Comedy",
      image: PinkPantherImage,
      description:
        "The Pink Panther is a beloved and enduring animated character, created by Friz Freleng and David DePatie. The character first appeared in the 1964 animated short 'The Pink Phink' and has since gone on to become a global icon of comedy and wit.",
    },
    {
      title: "Woody Woodpecker",
      tagline: "Lantz Classics",
      image: WoodyWoodpeckerImage,
      description:
        "Woody Woodpecker is a beloved and enduring animated character, created by Walter Lantz. Woody, an energetic and mischievous red-headed woodpecker, first appeared in the 1940 short 'Knock Knock' and has since become a symbol of humor, creativity, and animation prowess.",
    },
  ]);

  return (
    <div>
      <section>
        <div className="container">
          <h1>Responsive Cards Layout</h1>
          <div className="cards">
            {cards.map((card, i) => (
              <div key={i} className="card">
                <img className="image" src={card.image} alt={card.title} />
                <h3 className="title">{card.title}</h3>
                <p className="tagline">{card.tagline}</p>
                <p className="description">{card.description}</p>
                <button className="btn">Know More</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App
