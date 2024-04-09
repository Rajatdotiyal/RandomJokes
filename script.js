const URL = "https://official-joke-api.appspot.com/random_joke";

const jokeSetup = document.querySelector("#setup");
const jokePline = document.querySelector("#punchline");
const btn = document.querySelector("#btn");



const randomJoke = async () =>{
    let response = await fetch(URL);//data is in json format
    let data  = await response.json();

    jokeSetup.innerHTML = data.setup;
    jokePline.innerHTML = data.punchline;

}

btn.addEventListener("click", randomJoke);
