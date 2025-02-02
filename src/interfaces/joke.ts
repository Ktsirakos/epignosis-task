export interface Joke {
    type: "general" | "programming",
    id: number,
    setup: string,
    punchline: string
}