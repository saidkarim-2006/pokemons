const newDiv = document.querySelector(".row")



for (let pokemon of pokemons){
    const cardDiv = document.createElement("div")
    const pokemonsName = document.createElement("h4")
    const pokemonsType = document.createElement("p")
    const pokemonsImg = document.createElement("img")
    const pHeight = document.createElement("h5")
    const pWeight = document.createElement("h5")
    const heartImg = document.createElement("img")
    const newHr = document.createElement("hr")
    const bottomDiv = document.createElement("div")





    cardDiv.setAttribute("class", "card col-3")
    pokemonsImg.setAttribute("src", pokemon.img)
    pokemonsName.setAttribute("class", "fw-bold")
    pokemonsType.setAttribute("class", "fw-bold p-type")
    pHeight.setAttribute("class", "fw-bold d-inline")
    pWeight.setAttribute("class", "fw-bold d-inline")
    heartImg.setAttribute("src", "Icon/Outline/heart.png")
    heartImg.setAttribute("class", "rasm")
    bottomDiv.setAttribute("class", "p-4")
    


    

    pokemonsName.textContent = pokemon.name
    pokemonsType.textContent = pokemon.type
    pHeight.textContent = pokemon.height
    pWeight.textContent = pokemon.weight

    

    newDiv.appendChild(cardDiv)
    cardDiv.appendChild(pokemonsImg)
    cardDiv.appendChild(newHr)
    cardDiv.appendChild(bottomDiv)
    bottomDiv.appendChild(pokemonsName)
    bottomDiv.appendChild(pokemonsType)
    bottomDiv.appendChild(heartImg)
    bottomDiv.appendChild(pHeight)
    bottomDiv.appendChild(pWeight)
}