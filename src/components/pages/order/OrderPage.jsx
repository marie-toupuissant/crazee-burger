import { Link, useParams } from "react-router-dom";

export default function OrderPage() {
  // State(état/données)
  const { username } = useParams();

  // Comportements

  // Affichage(render)
  return (
    <div>
      <h1>Bonjour {username}</h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </div>
  );
}
