//The user will enter a cocktail. 
// Get a cocktail name,
// photo,
// and instructions and place them in the DOM

// homeworks
// should work with name that have spaces in it (without template litteral)
// create a carrousel of selection (like ask for another same drink)

// Nasa picture of the day

document.querySelector('button').addEventListener('click', getDrink)

function getDrink() {

    let drink = document.querySelector('input').value
    let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(drink)}`

    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data.drinks)
    
    // Display arrows if there is other variante of the Cocktail
        if(data.drinks.length > 1) {
            if(document.querySelector('.arrow').classList.contains('hidden')) {
                document.querySelectorAll('.arrow').forEach(e => e.classList.toggle('hidden'))

                
    // click left/rigth arrow will increase/decrease the counter
    // the counter is there to switch between image

            let i = 0
            let previous = document.querySelector('.previous')
            let next = document.querySelector('.next')
            previous.addEventListener('click', previousImage)
            next.addEventListener('click', nextImage)
        
            function previousImage() {
                if(i < data.drinks.length && i > 0) {
                    i--
                    document.querySelector('img').src = data.drinks[i].strDrinkThumb
                
                    if(next.classList.contains('hidden')) {
                        document.querySelector('.next').classList.toggle('hidden')
                    }
                } else {
                    if(i < data.drinks.length -1) {
                        document.querySelector('.previous').classList.toggle('hidden')
                    }
                }
            }
        
            function nextImage() {
                if(i < data.drinks.length -1) {
                    i++
                    document.querySelector('img').src = data.drinks[i].strDrinkThumb
                    if(i === data.drinks.length -1) {
                        document.querySelector('.next').classList.toggle('hidden')    
                    }
                    if(previous.classList.contains('hidden')) {
                        document.querySelector('.previous').classList.toggle('hidden')
                    }
                } else {
                    document.querySelector('.next').classList.toggle('hidden')
                }
            }
            }
            
        } 

        document.querySelector('h2').innerText = data.drinks[0].strDrink
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('#recipe').innerText = data.drinks[0].strInstructions
    })
    .catch(err => {
        console.log(`error: ${err}`)
    })    
}