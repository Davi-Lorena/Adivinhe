import { Letter } from "../Letter"
import styles from "./styles.module.css"

export function LettersUsed() {
    return (
        <div className={styles.lettersUsed}>
            <h5>Letras utilizadas</h5>

            <div>
                <Letter value="Y" size="small" color="wrong"/>
                 <Letter value="Y" size="small" color="correct"/>
                  <Letter value="Z" size="small"/>
            </div>
        </div>
    )
}