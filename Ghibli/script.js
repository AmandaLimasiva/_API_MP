const container = document.getElementById('demo')


async function getFilms() {
    try {
        const response = await fetch('https://ghibliapi.herokuapp.com/films')
    const film = await response.json()
        //console.log(cards.data)
        const oursFilms = film.data.slice(1, 10) //Escolho o Array
        //console.log(oursCards)

        oursFilms.map((film) => {
            const section = document.createElement('div')
            section.setAttribute('class', 'card')

            const title = document.createElement('h1')
            title.setAttribute('class', 'title')
            title.innerText = film.name

            const type =  document.createElement('p')
            type.setAttribute('class', 'type')
            type.innerText = film.type

            const description = document.createElement('p')
            description.setAttribute('class', 'desc')
            description.innerText = film.desc


            const image = document.createElement('img')
            image.setAttribute('class', 'image')
            image.setAttribute('src', card.card_images[0].image_url)

            container.appendChild(section)
            section.appendChild(image)
            section.appendChild(title)
            section.appendChild(title)
            section.appendChild(description)
            


        })
    }
    catch(err){
        console.error("HTTP Error", err)
    }
}

getFilms()