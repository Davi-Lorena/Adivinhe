import { Header } from "./components/Header"
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"
import { Input } from "./components/Input"

import styles from "./app.module.css"

export default function App() {

function handleRestartGame() {
  alert("Reiniciar o jogo")
}


return (
  <div className={styles.container}>
    <main>
    <Header current={5} max={10} onRestart={handleRestartGame} />
    <Tip tip="Uma das linguagem de programação dinâmica" />
    <div className={styles.word}>
      <Letter value="r"/>
      <Letter value="e"/>
    <Letter value="a"/>
    <Letter value="c"/>
    <Letter value="t"/>
    </div>

    <h4>Palpite</h4>
    <div>
<Input autoFocus maxLength={1} placeholder="?"/>
    </div>
    </main>
  </div>
)

}