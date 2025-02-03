import type { Joke } from "@/interfaces/joke"

export const transformJokeToSearchableString = (joke: Joke) => {
    return (
      joke.setup.replace(" ", "").toLowerCase() +
      joke.punchline.replace(" ", "").toLowerCase()
    )
  }