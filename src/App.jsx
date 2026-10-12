
import { useState } from "react";

import Counter from "./components/Counter";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";
import Navbar from "./components/Navbar";
import LoadingData from "./components/LoadingData";

function App() {

  const pokemon = [
    {
      id: 1,
      name: "Bulbasaur",
      type: ["Erba"],
      description: "Fin dalla nascita porta sulla schiena un seme che cresce e si sviluppa insieme a lui.",
      image: "/images/bulbasaur.jpeg",
      moves: [
        {
          name: "Azione",
          description: "Attacca il nemico caricandolo con tutto il corpo."
        },
        {
          name: "Ruggito",
          description: "Riduce la forza d'attacco dell'avversario."
        },
        {
          name: "Frustata",
          description: "Colpisce il nemico con sottili liane."
        },
        {
          name: "Foglielama",
          description: "Attacca l'avversario lanciando foglie affilate."
        }
      ],
      evolutions: [
        {
          id: 2,
          name: "Ivysaur",
          description: "Il bocciolo sulla sua schiena cresce e diventa più pesante man mano che si prepara a sbocciare.",
          image: "/images/ivysaur.jpeg",
        },
        {
          id: 3,
          name: "Venusaur",
          description: "Il grande fiore sulla sua schiena assorbe energia solare e sprigiona un intenso profumo.",
          image: "/images/venusaur.jpeg",
        }
      ]
    },
    {
      id: 4,
      name: "Charmander",
      type: ["Fuoco"],
      description: "La fiamma sulla punta della sua coda indica la sua forza vitale. Quando è debole, la fiamma diventa fioca.",
      image: "/images/charmander.jpeg",
      moves: [
        {
          name: "Graffio",
          description: "Attacca il nemico graffiandolo con artigli affilati."
        },
        {
          name: "Ruggito",
          description: "Riduce la forza d'attacco dell'avversario."
        },
        {
          name: "Braciere",
          description: "Attacca il nemico con piccole fiammate."
        },
        {
          name: "Lanciafiamme",
          description: "Sferra un potente attacco lanciando un getto di fuoco."
        }
      ],
      evolutions: [
        {
          id: 5,
          name: "Charmeleon",
          description: "Ha un carattere aggressivo e usa la coda infuocata per attaccare i nemici.",
          image: "/images/charmeleon.jpeg"
        },
        {
          id: 6,
          name: "Charizard",
          description: "Vola in cielo e sputa fiamme roventi. È capace di sciogliere quasi ogni cosa.",
          image: "/images/charizard.jpeg"
        }
      ]
    },
    {
      id: 7,
      name: "Squirtle",
      type: ["Acqua"],
      description: "Dopo la nascita, il suo dorso si gonfia e si indurisce formando un guscio resistente. Spara schiuma dalla bocca.",
      image: "/images/squirtle.jpeg",
      moves: [
        {
          name: "Azione",
          description: "Attacca il nemico caricandolo con tutto il corpo."
        },
        {
          name: "Colpocoda",
          description: "Colpisce il nemico con la coda e ne riduce la difesa."
        },
        {
          name: "Pistolacqua",
          description: "Attacca il nemico sparando un getto d'acqua."
        },
        {
          name: "Morso",
          description: "Morde l'avversario con denti affilati."
        }
      ],
      evolutions: [
        {
          id: 8,
          name: "Wartortle",
          description: "È un nuotatore abile e usa la coda pelosa per mantenere l'equilibrio nell'acqua.",
          image: "/images/wartortle.jpeg",
        },
        {
          id: 9,
          name: "Blastoise",
          description: "Spara potenti getti d'acqua dai cannoni che sporgono dal suo guscio.",
          image: "/images/blastoise.jpeg",
        }
      ]
    }
  ];

  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const showEvolutions = (pokemon) => {
    if (selectedPokemon !== null && selectedPokemon.id === pokemon.id) {
      setSelectedPokemon(null);
    } else {
      setSelectedPokemon(pokemon);
    }
  }

  let evolutionCards = null;

  if (selectedPokemon !== null) {
    evolutionCards = (
      <div className="row justify-content-center g-4 mt-3">
        {selectedPokemon.evolutions.map((evolution) => {
          return (
            <List.EvolutionCard
              key={evolution.id}
              evolution={evolution}
            />
          );
        })}
      </div>
    );
  }

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [isShowed, setIsShowed] = useState(false);

  const handleName = (onChange) => {
    setName(onChange.target.value);
  }

  const handleMail = (onChange) => {
    setMail(onChange.target.value);
  }

  const showData = (onSubmit) => {
    onSubmit.preventDefault();
    setIsShowed(true);
  }

  const hiddenData = () => {
    setIsShowed(false);
  }

  let userCard = null;

  if (isShowed === true) {
    userCard = (
      <Form.UserCard
        name={name}
        mail={mail}
        onclick={hiddenData}
      />
    );
  }

  return (
    <>
      <Navbar />
      <Header />

      <List>
        {pokemon.map((item) => {
          return (
            <List.Card
              key={item.id}
              pokemon={item}
              onclick={() => showEvolutions(item)}
            />
          );
        })}
      </List>

      <div className="container mb-5">
        {evolutionCards}
      </div>

      <Counter />

      <Form onsubmit={showData}>

        <Form.Input
          id="name"
          type="text"
          label="Nome Utente"
          placeholder="Inserisci il tuo nome"
          onchange={handleName}
        />

        <Form.Input
          id="email"
          type="email"
          label="Email"
          placeholder="Inserisci la tua email"
          onchange={handleMail}
        />

        <Form.Button type="submit">
          Invia
        </Form.Button>

      </Form>

      <div className="container mb-5">
        {userCard}
      </div>

      <LoadingData />
    </>
  );
}

export default App;
