import { ArtistCard } from '../types/Card';

// Card-Komponente erhält alle Eigenschaften eines ArtistCard + zwei Funktionen für Aktionen
interface CardProps extends ArtistCard {
  onDelete: () => void; // Funktion zum Löschen der Karte
  onEdit: () => void; // Funktion zum Bearbeiten der Karte
}

// Funktions-Komponente Card
function Card({
  name,
  alter,
  genre,
  alben,
  besterSong,
  herkunftsland,
  plattenlabel,
  bildUrl,
  onDelete,
  onEdit,
}: CardProps) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${bildUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Inhalt der Karte */}
      <div className="card-content">
        <h2>{name}</h2>
        <p>
          {herkunftsland} – {plattenlabel}
        </p>
        <p>Alter: {alter}</p>
        <p>Genre: {genre}</p>
        <p>Alben: {alben}</p>
        <p>Hit: {besterSong}</p>

        {/* Buttons zum Bearbeiten und Löschen */}
        <div className="card-buttons">
          <button onClick={onEdit}>Bearbeiten</button>
          <button onClick={onDelete}>Löschen</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
