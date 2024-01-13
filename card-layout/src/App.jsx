import { useState } from 'react'
import './App.css'

function App() {
  const [cards] = useState([
    {
      title: "Bugs Bunny",
      tagline: "Warner",
      image: "card-layout/src/images/Bugs_Bunny.png",
      description:
        "Bugs Bunny is an animated cartoon character, created in the late 1930s by Leon Schlesinger Productions and voiced originally by Mel Blanc. Bugs is best known for his starring roles in the Looney Tunes and Merrie Melodies series of animated short films, produced by Warner Bros.",
    },
    {
      title: "Jerry",
      tagline: "MGM",
      image: "card-layout/src/images/Jerry.png",
      description:
        "Bugs Bunny is an animated cartoon character, created in the late 1930s by Leon Schlesinger Productions and voiced originally by Mel Blanc. Bugs is best known for his starring roles in the Looney Tunes and Merrie Melodies series of animated short films, produced by Warner Bros.",
    },
    {
      title: "Pink Panther",
      tagline: "Warner",
      image: "card-layout/src/images/PinkPanther.png",
      description:
        "Bugs Bunny is an animated cartoon character, created in the late 1930s by Leon Schlesinger Productions and voiced originally by Mel Blanc. Bugs is best known for his starring roles in the Looney Tunes and Merrie Melodies series of animated short films, produced by Warner Bros.",
    },
    {
      title: "Woody Woodpecker",
      tagline: "Warner",
      image: "card-layout/src/images/WoodyWoodpecker.png",
      description:
        "Bugs Bunny is an animated cartoon character, created in the late 1930s by Leon Schlesinger Productions and voiced originally by Mel Blanc. Bugs is best known for his starring roles in the Looney Tunes and Merrie Melodies series of animated short films, produced by Warner Bros.",
    },
  ]);

  return (
    <div>
      <section>
        <div className="container">
          <h1>Responsive Cards Layout</h1>
          <div className="cards">
            {
            cards.map((card, i) => (
              <div key={i} className="card">
                <img src={card.image} alt={card.title} />
                <h3>{card.title}</h3>
                <p>{card.tagline}</p>
                <p>{card.description}</p>
                <button className="btn">Know More</button>
              </div>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  );
}

export default App
