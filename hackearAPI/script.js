let getwelcome = async () =>{
    try{
        const response = await fetch('https://teste-api-lilit.herokuapp.com/')
        const welcomeJson = await response.json()
        console.log(welcomeJson)
    }
catch(err){
    console.error(err)
    }
}

getwelcome()


/*
fetch('https://teste-api-lilit.herokuapp.com/')
.then((response) => response.json())
.then((welcomeJson) => console.log(welcomeJson))
.catch((err) => console.error(err))

*/

