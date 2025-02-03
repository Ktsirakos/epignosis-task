async function getGeneralJokes() {
    const value = await fetch('https://official-joke-api.appspot.com/random_joke', {
        method: "GET"
    }).then((response) => response.json()).catch((err) => {
        alert("Something went wrong!\n\n" + err)
    })

    return value
}

async function getProgrammingJokes() {
    const value = await fetch('https://official-joke-api.appspot.com/jokes/programming/random', {
        method: "GET"
    }).then((response) => response.json()).catch((err) => {
        alert("Something went wrong!\n\n" + err)
    })

    return value[0]
}

export {
    getGeneralJokes, getProgrammingJokes
}