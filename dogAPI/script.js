const container = document.getElementById('demo')

async function getDog(breed) {
    try{
        const resposta = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        console.log(resposta)
        const dados = await resposta.json()
        const doguinhoImagem = document.createElement('img')

        doguinhoImagem.setAttribute('src', dados.message)
        container.appendChild(doguinhoImagem)
    }
    catch(err){
        console.error("HTTP Error", err)
    }
}

getDog(`vizsla`)