async function getGeneralJokes() {
    const value = await fetch('https://official-joke-api.appspot.com/random_joke', {
        method: "GET"
    }).then((response) => response.json())

    return value
}

async function getProgrammingJokes() {
    const value = await fetch('https://official-joke-api.appspot.com/jokes/programming/random', {
        method: "GET"
    }).then((response) => response.json())

    return value[0]
}

export {
    getGeneralJokes, getProgrammingJokes
}