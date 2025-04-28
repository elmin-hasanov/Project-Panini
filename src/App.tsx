import { useState } from 'react';
import './App.css';
import { ArtistCard } from './types/Card';
import Card from './components/Card';

function App() {
  const [cards, setCards] = useState<ArtistCard[]>([]);
  const [formData, setFormData] = useState<ArtistCard>({
    name: '',
    alter: 0,
    genre: '',
    alben: 0,
    besterSong: '',
    herkunftsland: '',
    plattenlabel: '',
    bildUrl: '',
  });
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'alter' || name === 'alben' ? Number(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editIndex !== null) {
      // Bearbeiten
      const updatedCards = [...cards];
      updatedCards[editIndex] = formData;
      setCards(updatedCards);
      setEditIndex(null);
    } else {
      // Neu hinzufügen
      setCards([...cards, formData]);
    }
    resetForm();
  };

  const handleDelete = (index: number) => {
    const updatedCards = cards.filter((_, i) => i !== index);
    setCards(updatedCards);
  };

  const handleEdit = (index: number) => {
    setFormData(cards[index]);
    setEditIndex(index);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      alter: 0,
      genre: '',
      alben: 0,
      besterSong: '',
      herkunftsland: '',
      plattenlabel: '',
      bildUrl: '',
    });
  };

  const handleSaveToLocalStorage = () => {
    localStorage.setItem('artistCards', JSON.stringify(cards));
    alert('Karten gespeichert!');
  };

  const handleLoadFromLocalStorage = () => {
    const savedCards = localStorage.getItem('artistCards');
    if (savedCards) {
      setCards(JSON.parse(savedCards));
      alert('Karten geladen!');
    } else {
      alert('Keine gespeicherten Karten gefunden.');
    }
  };

  return (
    <div className="App">
      <h1>🎵 Artists-Sammelkarten</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          name="alter"
          type="number"
          placeholder="Alter"
          value={formData.alter}
          onChange={handleChange}
        />
        <input
          name="genre"
          placeholder="Genre"
          value={formData.genre}
          onChange={handleChange}
        />
        <input
          name="alben"
          type="number"
          placeholder="Anzahl Alben"
          value={formData.alben}
          onChange={handleChange}
        />
        <input
          name="besterSong"
          placeholder="Bester Song"
          value={formData.besterSong}
          onChange={handleChange}
        />
        <input
          name="herkunftsland"
          placeholder="Herkunftsland"
          value={formData.herkunftsland}
          onChange={handleChange}
        />
        <input
          name="plattenlabel"
          placeholder="Plattenlabel"
          value={formData.plattenlabel}
          onChange={handleChange}
        />
        <input
          name="bildUrl"
          placeholder="Bild-URL"
          value={formData.bildUrl}
          onChange={handleChange}
        />

        <button type="submit">
          {editIndex !== null ? 'Speichern' : 'Karte hinzufügen'}
        </button>
      </form>

      <div className="card-grid">
        {cards.map((card, index) => (
          <Card
            key={index}
            {...card}
            onDelete={() => handleDelete(index)}
            onEdit={() => handleEdit(index)}
          />
        ))}
      </div>
      <div className="storage-buttons">
        <button type="button" onClick={handleSaveToLocalStorage}>
          Save all Cards
        </button>
        <button type="button" onClick={handleLoadFromLocalStorage}>
          Load Cards
        </button>
      </div>
    </div>
  );
}

export default App;
