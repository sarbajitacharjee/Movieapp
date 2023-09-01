let api="https://www.omdbapi.com/?apikey=f6b87695&t="

let title=document.getElementById('title');
let Date=document.getElementById('Date');
let  language = document.getElementById('Language');
let  actors = document.getElementById('Actors');
let  awards = document.getElementById('Awards');
let  country = document.getElementById('Country');
let runtime = document.getElementById('Runtime');
let  genre = document.getElementById('Genre');
let plot=document.getElementById('plot');
let ratings=document.getElementById('ratings');
let image=document.getElementById('image');


function findmovie()
{
    let display=document.getElementById('container').style.display='flex';
    let moviename=document.getElementById('moviename');

    let query=api+moviename.value;

    fetch(query).then((data)=>
{
    return data.json();
}).then((data)=>
{
    title.innerText=data.Title
    language.innerText = data.Language;
    Date.innerText = data.Released;
        actors.innerText = data.Actors;
        awards.innerText = data.Awards;
        country.innerText = data.Country;
        runtime.innerText = data.Runtime;
        genre.innerText = data.Genre;
        plot.innerText = data.Plot;
        ratings.innerText='IMDB : '+data.imdbRating;
        image.src=data.Poster;
        console.log(data);
})
}
