import { linkupExerciseHandler } from "./utils"

/**
 * Wir erstellen hier eine Funktion für die Aufgabe 1. Funktionen sind praktisch
 * um den Code innerhalb, vom rest zu trennen. Dadurch können wir Variablen mit
 * gleichem Namen auch in anderen Funktionen verwenden, ohne das deren Wert
 * überschrieben wird.
 * Funktionen können auch verwendet werden, um an anderer Stelle wieder
 * verwendet zu werden. Wir machen das in diesem Projekt eigentlich nicht, aber
 * wenn Sie des Resultat von einer Funktion nochmals brauchen, können Sie das
 * wie folgt machen:
 *    `const withoutE = aufgabe01("Hier ist ein Text mit einigen e's")`
 * Damit wird der Code in aufgabe01 ausgeführt, der sollte alle e's entfernen,
 * und das Resultate wird in der Variable `withoutE` gespeichert, und kann dann
 * weiter verwendet werden.
 */
export function aufgabe01(args) {
  // Wir speichern hier den Wert von args in der Variable `input` ab. Damit soll für uns klarer werden, womit wir arbeiten.
  const input = args

  // Wir erzeugen hier eine leere Liste, in der wir das Resultat Stück für Stück anhängen.
  const result = []

  // Mit dieser Schlaufe nummerieren wir jedes Zeichen in `input` durch. Das
  // machen wir um jedes Zeichen einzeln anzuschauen.
  for (let i = 0; i < input.length; i++) {
    // Hier speichern wir das Zeichen an der Stelle `i` in der Variable
    // `currentElement`, damit es explizit ist womit wir arbeiten, aber auch
    // damit wir nicht so viele Klammern schreiben müssen.
    const currentElement = input[i]

    if (currentElement === "e") {
      // do nothing
    } else if (currentElement === "E") {
      // Hier wird das aktuelle Zeichen ans Ende der Resultat-Liste angehängt.
    } else {
      result.push(currentElement)
    }
  }

  // Hier geben wir das Resultat zurück, und machen einen Text daraus.
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe01]", aufgabe01)

export function aufgabe02(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentLetter = input[i]
    const currentUpperCaseLetter = currentLetter.toUpperCase()
    result.push(currentUpperCaseLetter)
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)

export function aufgabe03(args) {
  const input = args
  const result = []

  let count = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      count = count + 1
    }
  }
  return count
}
linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe05(args) {
  const input = args
  const result = []

  let hasUpperCaseLetter = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const upperCaseLetter = currentElement.toUpperCase()
    if (currentElement === " ") {
    } else if (currentElement === ".") {
    } else if (currentElement === upperCaseLetter) {
      hasUpperCaseLetter = true
    }
  }
  return hasUpperCaseLetter
}
linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe06(args) {
  const input = args
  const result = []

  let istSonderzeichen = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const upperCaseLetter = currentElement.toUpperCase()

    const lowerCase = currentElement.toUpperCase()

    if (lowerCase === upperCaseLetter) {
      istSonderzeichen = true
    }
  }
  return istSonderzeichen
}
linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe07(args) {
  const input = args
  const result = []

  let istund = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "u" || currentElement === "U") {
      const nextElement = input[i + 1]
      if (nextElement === "n") {
        const lastElement = input[i + 2]
        if (lastElement === "d") {
          istund = true
        }
      }
    }
  }
}
linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)

export function aufgabe08(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Wenn du ein e entdeckst dann schreib eine 3
    if (currentElement === "e" || currentElement === "E") {
      result.push("3")
    } else {
      result.push(currentElement)
    }
  }

  // schreibe eine funktion, die alle e's in input ersetzt durch 3
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe09(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // teste ob eine eingabe genau 6 zeichen lang ist
    if (input.length === 6) {
      return true
    } else {
      return false
    }
  }
}
linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)
