

document.querySelector('button').addEventListener('click', getResults)

function getJoke(){
    fetch(`https://v2.jokeapi.dev/joke/Any?type=single`)
    .then(res => res.json()) //parse response as JSON
    .then(data => {
        document.querySelector('h2').innerText = data.category
        document.querySelector('h3').innerText = data.joke
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}



function getPuppy(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json()) //parse response as JSON
    .then(data => {
        document.querySelector('img').src = data.message
        console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

function getResults(){
getJoke() 
getPuppy()

}


// document.querySelector('button').addEventListener('click', getJoke)

// function getJoke(){
//     // let drink = document.querySelector('input').value

//     fetch(`https://v2.jokeapi.dev/joke/Any?type=single`)
//     .then(res => res.json()) //parse response as JSON
//     .then(data => {
//         document.querySelector('h2').innerText = data.category

//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     })
// }