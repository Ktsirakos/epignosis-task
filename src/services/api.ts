async function getJokes() {
    const value = await fetch('https://official-joke-api.appspot.com/random_joke', {
        method: "GET"
    }).then((response) => response.json())

    return value
}

export {
    getJokes
}