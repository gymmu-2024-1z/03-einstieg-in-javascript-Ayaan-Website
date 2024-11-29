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
  //Wir speichern hier den Wert von args in der Variable `input` ab.
  const input = args

  //Wir machen hier die leere Liste
  const result = []

  //Hier wird die Schlaufe hinzugefügt
  for (let i = 0; i < input.length; i++) {
    //jetzt wird das Zeichen an der Stelle "i" gespeichert
    const currentLetter = input[i]

    const currentUpperCaseLetter = currentLetter.toUpperCase()
    //wir wandeln das Zeichen in Großbuchstaben um

    result.push(currentUpperCaseLetter)
    //die funktion wird gepushed
  }
  //wir geben das resultat aus
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)

export function aufgabe03(args) {
  //wir speichern den Wert von args in der Variable "input" ein
  const input = args

  //wir machen hier die leere Liste
  const result = []

  //wir machen hier die Schlaufe
  let count = 0
  for (let i = 0; i < input.length; i++) {
    //jetzt wird das zeichen an der stelle "i" gespeichert fürs weniger schlaufen erstellen
    const currentElement = input[i]

    //wir zeigen das input der funktion an
    if (currentElement === "e") {
      //Die funktion wird eingesetzt bzw eingetippt und gezählt
      count = count + 1
    }
  }
  return count
  //Und noch das Resultat ausgeben
}
linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe05(args) {
  //wir speichern den Wert von args in der Variable "input" ein
  const input = args

  //wir machen hier die leere Liste
  const result = []

  //Jetzt kommt die Schlaufe hiin
  let hasUpperCaseLetter = false

  //Wir zeigen das input der funktion an
  for (let i = 0; i < input.length; i++) {
    //jetzt wird das zeichen an der stelle "i" gespeichert
    const currentElement = input[i]

    //wir zeigen das input der funktion an, dass es die Zeichen als Grossbuchstaben erkennt
    const upperCaseLetter = currentElement.toUpperCase()

    if (currentElement === " ") {
      //Wenn jetzt das Zeichen ein Leerzeichen ist, dann wird die Schlaufe beendet
    } else if (currentElement === ".") {
      //Wenn es ein Punkt ist wirds auch beendet.
    } else if (currentElement === upperCaseLetter) {
      hasUpperCaseLetter = true
      //wir geben das Resultat aus, wenn es Grossbuchstaben erkennt ist es richtig
    }
  }
  return hasUpperCaseLetter
  //Und noch das Resultat ausgeben
}
linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe06(args) {
  //wir speichern den Wert von args in der Variable "input" ein

  const input = args
  //wir machen die leere Liste

  const result = []
  //Jetzt kommt die Schlaufe hier hin

  let istSonderzeichen = false
  //Wir zeigen das input der funktion an, wenn es ein Sonderzeichen erkennt

  for (let i = 0; i < input.length; i++) {
    //das Zeichen an der Stelle "i" wird gespeichert für das wir nachher sehen

    const currentElement = input[i]
    //wir zeigen das input der funktion an

    const upperCaseLetter = currentElement.toUpperCase()
    //Jetzt bestimmen wir wann es die Zeichen als Sonderzeichen erkennt.

    const lowerCase = currentElement.toUpperCase()
    //Hier soll es die Buchstaben erkennt werden wenn sind etc

    if (lowerCase === upperCaseLetter) {
      //Jetzt zeigen das input der funktion an

      istSonderzeichen = true
      //Das Resultat wird ausgegeben, dass wenn es ein Sonderzeichen erkennt, es richtig ist.
    }
  }
  return istSonderzeichen
  //Hier wird noch das Resultat ausgeben
}
linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe07(args) {
  //wir speichern den Wert von args in der Variable "input" ein

  const input = args
  //Wir erstellen die leere Liste
  const result = []
  //Jetzt kommt die Schlaufe hier hin

  let istund = false
  //Das Input der Funktion wird gezeigt, das "und" erkennt werden soll.

  for (let i = 0; i < input.length; i++) {
    //Wir zeigen das input der funktion an, das wir machen wollen

    const currentElement = input[i]
    //Hier wird das Zeichen an der Stelle "i" gespeichert

    if (currentElement === "u" || currentElement === "U") {
      //die einzelnen Buchstaben werden erkennt, hier jetzt zuerst "u"

      const nextElement = input[i + 1]
      //Wir fügen noch ein Input dazu als "nextElement" also "i + 1"

      if (nextElement === "n") {
        //das nächste Element wird erkennt als "n" angegeben

        const lastElement = input[i + 2]
        //Wir fügen nochmals einen input hinzu als letztes Element der Funktion damit das Wort "und" erkennt wird

        if (lastElement === "d") {
          //Das Input als "lastElement" (letztes Element) ist der Buchstabe "d".

          istund = true
          //Die vollständige Funktion wird als Korrekt abgeschlossen.
        }
      }
    }
  }
}
linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)

export function aufgabe08(args) {
  //wir speichern den Wert von args in der Variable "input" ein.

  const input = args
  //Die leere Liste wird nun erstellt.

  const result = []
  //Die Schlaufe wird erstellt um die Funktion angeben zu können.

  for (let i = 0; i < input.length; i++) {
    //Das Input wird erstellt

    const currentElement = input[i]
    //Hier wird das Zeichen an der Stelle "i" gespeichert

    if (currentElement === "e" || input === "E") {
      //es soll erkennen dass wenn es ein "e" entdeckt, soll es eine "3" draus machen
      return i
      //Als "i" wird die Funktion ersetzt mit den Elementen in der Schlaufe.
    } else {
      return -1
      //Wir geben als Resultat -1 zurück.
    }
  }

  //Das resultat wird noch ausgegeben.
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe09(args) {
  //wir speichern den Wert von args in der Variable "input" ein

  const input = args
  //Jetzt erstellen wir die leere Liste.

  const result = []
  //Die Funktion in der Schlaufe wird gemacht.

  for (let i = 0; i < input.length; i++) {
    //Wir zeigen das jetzt Input der Funktion an

    const currentElement = input[i]
    //Hier wird das Zeichen an der Stelle "i" gespeichert

    if (input.length === 6) {
      // Wir sagen das es testen soll ob eine eingabe genau 6 zeichen lang ist

      return true
      //Die Funktion wird als korrekt abgeschlossen, dass die Eingabe genau 6 Zeichen lang ist udn dies erkennt werden soll.
    } else {
      return false
    }
  }
}
linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)

export function aufgabe10(args) {
  //wir speichern den Wert von args in der Variable "input" ein

  const input = args

  const result = []

  for (let i = 0; i < input.length; i++) {
    // Teste ob die Eingabe ein korrekter RGB Hexcode ist
    if (input[i] === "#") {
      return true
    } else {
      return false
    }
  }
}
linkupExerciseHandler("[data-click=aufgabe10]", aufgabe10)

export function aufgabe12(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    // Suche die Position des ersten es in einem Text.
    if (input[i] === "e" || input[i] === "E") {
      return i
    } else {
      return -1
    }
  }
}
linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe13(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    // Suche die Position des letzten es in einem Text.
    if (input[i] === "e") {
      return i
    } else {
      return -1
    }
    if (input[i] === "e" || input[i] === "E") {
      return i
    } else {
      return -1
    }
  }
}
linkupExerciseHandler("[data-click=aufgabe13]", aufgabe13)

export function aufgabe14(args) {
  let pos = -1
  let eCount = 0

  for (let i = 0; i < args.length; i++) {
    const currentElement = input[i]

    // Wenn du ein e siehst dann zähle eins hoch.
    if (currentElement === "e") {
      eCount = eCount + 1
    }

    // Wenn eCount genau gleich 3 ist, dann speichere die Position.
    if (eCount === 3) {
      pos = i
    }
  }

  return pos
}
linkupExerciseHandler("[data-click=aufgabe14]", aufgabe14)

export function aufgabe15(args) {
  let pos = -1
  let eCount = 0

  for (let i = 0; i < args.length; i++) {
    const currentElement = input[i]

    // Lese die Eingabe nur bis zum ersten Leerzeichen ein.
    if (currentElement === " ") {
      break // Die Schleife wird beendet.
    }
  }
  return pos
}
linkupExerciseHandler("[data-click=aufgabe15]", aufgabe15)

export function aufgabe16(args) {
  const input = args
  const result = []

  // erstelle eine Variable um zwei Teile einer Liste zu speichern.
  let firstPart = []
  let secondPart = []
  let dollarfound = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Wenn kein Dollarzeichen gefunden wurde, dann hänge an de ersten Teil an
    if (!dollarfound === false) {
      firstPart.push(currentElement)
    } else {
      secondPart.push(currentElement)
    }

    //Wenn du ein Dollarzeichen findest
    if (currentElement === "$") {
      // setze dollarfound auf true
      dollarfound = true
    }
  }
  // Gib das Resultat zurück.
  return [firstPart.join(""), secondPart.join("")]
}
linkupExerciseHandler("[data-click=aufgabe16]", aufgabe16)

export function aufgabe19(args) {
  const input = args
  const result = []
  //wenn du ein Zeichen findest
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //wenn du ein Buchstaben findest
    if (currentElement >= "a" && currentElement <= "z") {
    } //dann verdopple es
    result.push(currentElement + currentElement)
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)

export function aufgabe20(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    //wenn du ein Punkt findest
    const currentElement = input[i]
    if (currentElement === ".") {
      //dann teste ob du ein Lehrschlag dahinter findest
      const nextElement = input[i]
      if (nextElement === " ") {
        //dann gebe ich true zurueck
      } else {
        //wenn nicht gebe false zurueck
        return false
      }
    }
  }
  return true
}
linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)

export function aufgabe21(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    //kehre die ganze Eingabe um.
    const currentElement = input[i]
    result.push(currentElement)
  }
  return result.reverse().join("")
}

linkupExerciseHandler("[data-click=aufgabe21]", aufgabe21)

export function aufgabe27(args) {}
