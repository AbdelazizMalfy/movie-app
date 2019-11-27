const MOVIE_DATA = [
    {
      id: '1',
      name: 'The Shawshank Redemption',
      releaseYear: 1994,
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      rating: 4.6,
      genre: 'drama',
      storyline: "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red. Written by J-S-Golden",
      image: 'https://m.media-amazon.com/images/M/MV5BNjQ2NDA3MDcxMF5BMl5BanBnXkFtZTgwMjE5NTU0NzE@._V1_CR0,60,640,360_AL_UX477_CR0,0,477,268_AL_.jpg'
    },
    {
      id: '2',
      name: 'The Dark Knight',
      releaseYear: 2008,
      description: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      rating: 4.8,
      storyline: "Set within a year after the events of Batman Begins (2005), Batman, Lieutenant James Gordon, and new District Attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City, until a mysterious and sadistic criminal mastermind known only as 'The Joker' appears in Gotham, creating a new wave of chaos. Batman's struggle against The Joker becomes deeply personal, forcing him to 'confront everything he believes' and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent, and Rachel Dawes. Written by Leon Lombardi",
      genre: 'action, crime, drama',
      image: 'https://img.cinemablend.com/filter:scale/quill/c/3/8/0/f/4/c380f4f12cfeec19f0c40c6f57db188f2f98cca8.jpg?mw=600'
    },
    {
      id: '3',
      name: 'Lord of the Rings',
      releaseYear: 2004,
      description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
      rating: 4.9,
      storyline:"An ancient Ring thought lost for centuries has been found, and through a strange twist of fate has been given to a small Hobbit named Frodo. When Gandalf discovers the Ring is in fact the One Ring of the Dark Lord Sauron, Frodo must make an epic quest to the Cracks of Doom in order to destroy it. However, he does not go alone. He is joined by Gandalf, Legolas the elf, Gimli the Dwarf, Aragorn, Boromir, and his three Hobbit friends Merry, Pippin, and Samwise. Through mountains, snow, darkness, forests, rivers and plains, facing evil and danger at every corner the Fellowship of the Ring must go. Their quest to destroy the One Ring is the only hope for the end of the Dark Lords reign. Written by Paul Twomey <toomsp@hotmail.com>",
      genre: 'adventure, drama, fantasy',
      image: 'https://img.cinemablend.com/filter:scale/quill/0/f/5/2/a/6/0f52a6843a25c1a5c1f9a0c00548cad9e1d912e2.jpg?mw=600'
    }
]

export const getMovies = () => {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(MOVIE_DATA)
      }, 50);
    })


}

export const getMovieById = (id) => {

  return new Promise((resolve,reject) => {
    const foundMovie = MOVIE_DATA.find(movie => movie.id === id )

    console.log(foundMovie)

    setTimeout(() => {
      resolve(foundMovie);
    }, 50);
  })

}
   