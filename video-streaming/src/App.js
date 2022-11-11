import './App.css';
import Movies from './components/Movies';

function App() {
  const movies = [
    {
      _id: '5b21ca3eeb7f6fbccd471815',
      title: 'Top Gun: Maverick',
      genre: { _id: '5b21ca3eeb7f6fbccd471818', name: 'Action' },
      numberInStock: 6,
      stars: 4.5,
      publishDate: '2018-01-03T19:04:28.809Z',
    },
    {
      _id: '5b21ca3eeb7f6fbccd471816',
      title: 'The Batman',
      genre: { _id: '5b21ca3eeb7f6fbccd471818', name: 'Action' },
      numberInStock: 5,
      stars: 2.5,
    },
    {
      _id: '5b21ca3eeb7f6fbccd471817',
      title: 'Prey',
      genre: { _id: '5b21ca3eeb7f6fbccd471820', name: 'Thriller' },
      numberInStock: 8,
      stars: 3.5,
    },
    {
      _id: '5b21ca3eeb7f6fbccd471819',
      title: 'Trip to Italy',
      genre: { _id: '5b21ca3eeb7f6fbccd471814', name: 'Comedy' },
      numberInStock: 7,
      stars: 3.5,
    },
    {
      _id: '5b21ca3eeb7f6fbccd47181a',
      title: 'The unbearable weight of massive talent',
      genre: { _id: '5b21ca3eeb7f6fbccd471814', name: 'Comedy' },
      numberInStock: 7,
      stars: 3.5,
    },
    {
      _id: '5b21ca3eeb7f6fbccd47181b',
      title: 'Emergency',
      genre: { _id: '5b21ca3eeb7f6fbccd471814', name: 'Comedy' },
      numberInStock: 7,
      stars: 3.5,
    },
    {
      _id: '5b21ca3eeb7f6fbccd47181e',
      title: 'The Innocents',
      genre: { _id: '5b21ca3eeb7f6fbccd471820', name: 'Thriller' },
      numberInStock: 7,
      stars: 4.5,
    },
    {
      _id: '5b21ca3eeb7f6fbccd47181f',
      title: 'JUJUTSU KAISEN 0: THE MOVIE',
      genre: { _id: '5b21ca3eeb7f6fbccd471820', name: 'Thriller' },
      numberInStock: 4,
      stars: 3.5,
    },
    {
      _id: '5b21ca3eeb7f6fbccd471821',
      title: 'The Avengers',
      genre: { _id: '5b21ca3eeb7f6fbccd471818', name: 'Action' },
      numberInStock: 7,
      stars: 3.5,
    },
  ];

  return (
    <main className="container">
      <Movies obj={movies} />
    </main>
  );
}

export default App;
