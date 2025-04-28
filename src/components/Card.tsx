import { ArtistCard } from '../types/Card';

interface CardProps extends ArtistCard {
  onDelete: () => void;
  onEdit: () => void;
}

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
      <div className="card-content">
        <h2>{name}</h2>
        <p>
          {herkunftsland} – {plattenlabel}
        </p>
        <p>Alter: {alter}</p>
        <p>Genre: {genre}</p>
        <p>Alben: {alben}</p>
        <p>Hit: {besterSong}</p>
        <div className="card-buttons">
          <button onClick={onEdit}>Bearbeiten</button>
          <button onClick={onDelete}>Löschen</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
