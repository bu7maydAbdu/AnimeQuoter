
const reloadQuote = document.querySelector("button")

fetch("https://animechan.vercel.app/api/random")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector("h1").innerText = data.character
      document.querySelector("h2").innerText = data.quote
      
    })
    .catch(err => {
        console.log(`error ${err}`)
    });


reloadQuote.addEventListener("click", newQuote)


function newQuote(){

fetch("https://animechan.vercel.app/api/random") 
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector("h1").innerText = data.character
      document.querySelector("h2").innerText = data.quote
      
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

  }




    fetch("https://api.waifu.im/random/")
    .then(res => res.json()) // parse response as JSON
    .then(gif => {
      console.log(gif)
      document.querySelector("img").src = gif.images[0].url
      
    })
    .catch(err => {
        console.log(`error ${err}`)
    });