import "./App.css";
import { myGames } from "./types/games";

function App() {
  const grouped = myGames.reduce<Record<string, typeof myGames>>(
    (acc, game) => {
      (acc[game.author] ??= []).push(game);
      return acc;
    },
    {},
  );

  const authors = Object.keys(grouped).sort((a, b) => {
    if (a === "Me") return -1;
    if (b === "Me") return 1;
    return a.localeCompare(b);
  });

  return (
    <div className="container">
      <div className="text">
        <h1 className="title">Captn's Games</h1>
        <h2 className="subheading">
          web games made by me and occasionally some friends
        </h2>
      </div>

      <div className="games">
        {authors.map((author) => (
          <div key={author} className="author-section">
            <h3 className="games-author">
              {author === "Me" && "My Games"}
              {author !== "Me" && `${author}'s Games`}
            </h3>
            {grouped[author].map((game) => (
              <a key={game.url} href={game.url} className="game-card">
                <img src={game.image} alt={game.title} />
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
