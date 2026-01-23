export type Challenge = {
  id: number
  word: string
  tip: string
}

export const WORDS: Challenge[] = [
  { id: 1, word: "NETFLIX", tip: "Serviço de Streaming que você provavelmente assinou" },
  { id: 2, word: "GOOGLE", tip: "Onde você faz suas pesquisas na internet" },
  { id: 3, word: "INSTAGRAM", tip: "Rede social em que você faz postagens e curti stories" },
  {
    id: 4,
    word: "CHATGPT",
    tip: "Inteligência artificial que te ajuda com muita coisa",
  },
  { id: 5, word: "YOUTUBE", tip: "É por aqui que você assiste vídeos e consome conteúdo" },
]
