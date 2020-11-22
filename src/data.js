let movies = [
  {
    id: 1,
    title: 'Doctor Strange',
    time: 115,
    genres: ['Action', 'Adventure', 'Fantasy'],
    metascore: 74
  },
  {
    id: 2,
    title: 'Trolls',
    time: 92,
    genres: ['Animation', 'Adventure', 'Comedy', 'Family', 'Fantasy']
  },
  {
    id: 3,
    title: 'Jack Reacher: Never Go Back',
    time: 118,
    genres: ['Action', 'Adventure', 'Crime', 'Mystery', 'Thriller']
  }
]

let actors = [
  {
    id: 5,
    name: 'Benedict Cumberbatch',
    movies: ['Doctor Strange', 'The Imitation Game', 'Black Mass']
  },
  {
    id: 6,
    name: 'Justin Timberlake',
    movies: ['Trolls', 'Friends with Benefits', 'The Social Network']
  },
  {
    id: 7,
    name: 'Anna Kendrick',
    movies: ['Trolls', 'Pitch Perfect', 'Into The Wood']
  },
  {
    id: 8,
    name: 'Tom Cruise',
    movies: ['Jack Reacher: Never Go Back', 'Mission Impossible 4', 'War of the Worlds']
  }
]

let directors = [
  {
    id: 9,
    name: 'Scott Derrickson',
    movies: ['Doctor Strange', 'Sinister', 'The Exorcism of Emily Rose']
  },
  {
    id: 10,
    name: 'Mike Mitchell',
    movies: ['Trolls', 'Alvin and the Chipmunks: Chipwrecked', 'Sky High']
  },
  {
    id: 11,
    name: 'Edward Zwick',
    movies: ['Jack Reacher: Never Go Back', 'Blood Diamon', 'The Siege']
  }
]

module.exports = {
  movies,
  actors,
  directors
}
