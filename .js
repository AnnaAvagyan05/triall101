const { useState } = React;

const gamesData = [
  { id:1, name:"Adventure Quest", description:"Embark on a thrilling adventure in a fantasy world.", image:"https://via.placeholder.com/200x120", download:"#"},
  { id:2, name:"Space Invaders", description:"Defend the galaxy from waves of alien invaders.", image:"https://via.placeholder.com/200x120", download:"#"},
  { id:3, name:"Puzzle Master", description:"Solve challenging puzzles to become the ultimate master.", image:"https://via.placeholder.com/200x120", download:"#"}
];

function SearchBar({query, setQuery}) {
  return React.createElement("input", {
    type:"text",
    placeholder:"Search games...",
    value: query,
    onChange: e => setQuery(e.target.value),
    className: "search-bar"
  });
}

function GameCard({game}) {
  return React.createElement("div", {className:"game-card"}, 
    React.createElement("img",{src:game.image, alt:game.name}),
    React.createElement("h2", null, game.name),
    React.createElement("p", null, game.description),
    React.createElement("a",{href:game.download, className:"download-button"}, "Download")
  );
}

function App() {
  const [query, setQuery] = useState("");
  const filteredGames = gamesData.filter(game => game.name.toLowerCase().includes(query.toLowerCase()));
  
  return React.createElement("div",{className:"app-container"},
    React.createElement("h1", null, "Game Search Platform"),
    React.createElement(SearchBar,{query,setQuery}),
    React.createElement("div",{className:"games-grid"},
      filteredGames.map(game => React.createElement(GameCard,{key:game.id, game}))
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));