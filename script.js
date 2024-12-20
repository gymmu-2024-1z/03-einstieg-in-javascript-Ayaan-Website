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
  // Wir zählen, wie oft das Zeichen "e" vorkommt
  let count = 0

  // Wir gehen alle Zeichen in der Eingabe durch
  for (let i = 0; i < args.length; i++) {
    // Wenn das aktuelle Zeichen "e" ist, erhöhen wir den Zähler
    if (args[i] === "e") {
      count = count + 1
    }
  }

  // Am Ende geben wir die Anzahl zurück
  return count
}

// Die Funktion mit dem Klick-Handler verbinden
linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe04(args) {
  const input = args
  const result = []
  //Hier wollen wir die Eingabe so filtern, dass es nur Buchstaben und Leerzeichen am schluss sind.

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //ascii heisst American Standart Code und macht dass alle Zeichen nummeriert sind.
    const asciiElement = currentElement.charCodeAt(0)
    //CharCodeAt(=) gibt dem Wert ein Buchstaben an.
    if (ascii >= 65 && ascii >= 90) {
      //hier sollte z.B. der ascii code von A-Z gegeben werden (Grossbuchstaben).
      result.push(currentElement)
    } else if (ascii >= 97 && ascii >= 122) {
      //hier sollte z.B. der ascii code von a-z gegeben werden (Kleinbuchstaben).
      result.push(currentElement)
    } else if (currentElement === ".") {
      //und hier kommt Leerzeichen.
      result.push(currentElement)
    }
  }
  // Zum Schluss sollten wir noch mehrere Leerzeichen hintereinander haben, welche noch filtern müssen.
  const result2 = []

  for (let i = 0; i < result.length; i++) {
    const currentElement = result[i]
    const nextElement = result[i + 1]

    if (currentElement === " " && nextElement === " ") {
      //hier stehen zwei Lehrzeichen hintereinander, dabei beachten wir das erste einfach nicht
    } else {
      result2.push(currentElement)
    } //nun können wir die Leerzeichen zählen
    let count = 0
    for (let i = 0; i < result2.length; i++) {
      const currentElement = result2[i]
      if (currentElement === " ") {
        count++
      }
    }
    // Da es ein Wort mit mehr als Leerzeichen gibt, geben wir das Leerzeichen +1 zurück
    return count + 1
  }
}

linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)

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
  // Wir speichern die Eingabe in einer Variable
  const input = args

  // Variable, die sagt, ob ein Sonderzeichen gefunden wurde
  let istSonderzeichen = false

  // Wir gehen die Eingabe durch
  for (let i = 0; i < input.length; i++) {
    // Das aktuelle Zeichen wird gespeichert
    const aktuellesZeichen = input[i]

    // Wir wandeln das Zeichen einmal in Großbuchstaben und einmal in Kleinbuchstaben um
    const grossbuchstabe = aktuellesZeichen.toUpperCase()
    const kleinbuchstabe = aktuellesZeichen.toLowerCase()

    // Wenn das Zeichen gleich in Groß- und Kleinbuchstaben ist, ist es ein Sonderzeichen
    if (
      aktuellesZeichen === grossbuchstabe &&
      aktuellesZeichen === kleinbuchstabe
    ) {
      istSonderzeichen = true
      break // Wir können die Schleife abbrechen, wenn ein Sonderzeichen gefunden wurde
    }
  }

  // Das Ergebnis zurückgeben
  return istSonderzeichen
}

// Die Funktion mit dem Klick-Handler verbinden
linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe07(args) {
  // Wir speichern die Eingabe in einer Variable
  const input = args

  // Variable, die sagt, ob das Wort "und" gefunden wurde
  let istUnd = false

  // Wir gehen die Eingabe durch
  for (let i = 0; i < input.length; i++) {
    // Das aktuelle Zeichen wird gespeichert
    const aktuellesZeichen = input[i]

    // Prüfen, ob das aktuelle Zeichen ein "u" oder "U" ist
    if (aktuellesZeichen === "u" || aktuellesZeichen === "U") {
      // Das nächste Zeichen speichern
      const naechstesZeichen = input[i + 1]

      // Prüfen, ob das nächste Zeichen ein "n" ist
      if (naechstesZeichen === "n") {
        // Das letzte Zeichen speichern
        const letztesZeichen = input[i + 2]

        // Prüfen, ob das letzte Zeichen ein "d" ist
        if (letztesZeichen === "d") {
          istUnd = true
          break // Wenn "und" gefunden wurde, können wir abbrechen
        }
      }
    }
  }

  // Ergebnis zurückgeben
  return istUnd
}

// Die Funktion mit dem Klick-Handler verbinden
linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)

export function aufgabe08(args) {
  // Wir speichern die Eingabe in einer Variable
  const input = args

  // Leere Liste, um das Ergebnis zu speichern
  const result = []

  // Wir gehen die Eingabe durch
  for (let i = 0; i < input.length; i++) {
    // Das aktuelle Zeichen wird gespeichert
    const aktuellesZeichen = input[i]

    // Wenn das Zeichen ein "e" oder "E" ist, ersetzen wir es durch "3"
    if (aktuellesZeichen === "e" || aktuellesZeichen === "E") {
      result.push("3")
    } else {
      // Wenn es kein "e" oder "E" ist, fügen wir das Originalzeichen hinzu
      result.push(aktuellesZeichen)
    }
  }

  // Wir geben das Ergebnis als zusammengefügten String zurück
  return result.join("")
}

// Die Funktion mit dem Klick-Handler verbinden
linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe09(args) {
  // Die Eingabe wird als 'input' gespeichert.
  const input = args

  // Es wird ein leeres Array für das Resultat erstellt.
  const result = []

  // Schleife durch jedes Element in der Eingabe
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Wenn das aktuelle Element ein "x" ist, überspringen wir es.
    if (currentElement === "x") {
      continue
    }

    // Wenn das aktuelle Element ein "X" ist, wird es hinzugefügt.
    if (currentElement === "X") {
      result.push(currentElement)
    } else {
      // Alle anderen Zeichen werden ebenfalls hinzugefügt.
      result.push(currentElement)
    }
  }

  // Das Resultat wird als String zurückgegeben.
  return result.join("")
}

// Die Funktion mit dem Klick-Handler verbinden
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
  // Wir speichern die Eingabe in einer Variable
  const input = args

  // Wir gehen die Eingabe durch
  for (let i = 0; i < input.length; i++) {
    // Suche die Position des ersten "e" oder "E" im Text
    if (input[i] === "e" || input[i] === "E") {
      return i // Gib die Position des ersten "e" oder "E" zurück
    }
  }

  // Wenn kein "e" oder "E" gefunden wurde, geben wir -1 zurück
  return -1
}

// Die Funktion mit dem Klick-Handler verbinden
linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe13(args) {
  // Wir speichern die Eingabe in einer Variable
  const input = args

  // Variable, um die Position des letzten "e" oder "E" zu speichern
  let letztePosition = -1

  // Wir gehen die Eingabe durch
  for (let i = 0; i < input.length; i++) {
    // Wenn das aktuelle Zeichen ein "e" oder "E" ist, speichern wir die Position
    if (input[i] === "e" || input[i] === "E") {
      letztePosition = i
    }
  }

  // Die Position des letzten "e" oder "-1", falls keines gefunden wurde, zurückgeben
  return letztePosition
}

// Die Funktion mit dem Klick-Handler verbinden
linkupExerciseHandler("[data-click=aufgabe13]", aufgabe13)

export function aufgabe14(args) {
  // Startwerte für die Position und den Zähler
  let pos = -1
  let eCount = 0

  // Wir durchlaufen die Eingabe
  for (let i = 0; i < args.length; i++) {
    const aktuellesZeichen = args[i]

    // Wenn das aktuelle Zeichen ein "e" oder "E" ist, zähle eins hoch
    if (aktuellesZeichen === "e" || aktuellesZeichen === "E") {
      eCount++

      // Wenn der Zähler genau 3 erreicht, speichern wir die Position
      if (eCount === 3) {
        pos = i
        break // Schleife beenden, da wir die Position gefunden haben
      }
    }
  }

  // Die Position des dritten "e" (oder -1, falls es kein drittes "e" gibt) zurückgeben
  return pos
}

// Die Funktion mit dem Klick-Handler verbinden
linkupExerciseHandler("[data-click=aufgabe14]", aufgabe14)

export function aufgabe15(args) {
  // Startwert für die Position
  let pos = -1

  // Wir durchlaufen die Eingabe
  for (let i = 0; i < args.length; i++) {
    const aktuellesZeichen = args[i]

    // Wenn ein Leerzeichen gefunden wird, speichern wir die Position
    if (aktuellesZeichen === " ") {
      pos = i
      break // Die Schleife wird beendet
    }
  }

  // Die Position des ersten Leerzeichens (oder -1, falls keines gefunden wurde) zurückgeben
  return pos
}

// Die Funktion mit dem Klick-Handler verbinden
linkupExerciseHandler("[data-click=aufgabe15]", aufgabe15)

export function aufgabe16(args) {
  const input = args

  // Erstellt zwei leere Listen für die beiden Teile
  let firstPart = []
  let secondPart = []
  let dollarfound = false

  // Durchlaufe die Eingabezeichenkette
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Wenn noch kein Dollarzeichen gefunden wurde, füge das Zeichen der ersten Liste hinzu
    if (!dollarfound) {
      firstPart.push(currentElement)
    } else {
      // Wenn Dollarzeichen gefunden, füge das Zeichen der zweiten Liste hinzu
      secondPart.push(currentElement)
    }

    // Wenn ein Dollarzeichen gefunden wird, setze dollarfound auf true
    if (currentElement === "$") {
      dollarfound = true
    }
  }

  // Gib das Ergebnis als zwei Teile zurück, die durch das Dollarzeichen geteilt wurden
  return [firstPart.join(""), secondPart.join("")]
}

// Die Funktion mit dem Klick-Handler verbinden
linkupExerciseHandler("[data-click=aufgabe16]", aufgabe16)

export function aufgabe17(args) {
  const input = args
  const totalList = []
  const currentList = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Wenn wir nun auf ein Leerzeichen drücken, schreiben wir alles was wir bis jetzt haben, in die totalList.

    if (currentElement === " ") {
      totalList.push(currentList.join(""))
      currentList.length = 0
    } else {
      currentList.push(currentElement)
    }
  }
  //Wir schreiben alles was wir noch bis zu dem Ende gelesen haben, in die Liste
  totalList.push(currentList.join(""))
  return totalList
}
linkupExerciseHandler("[data-click=aufgabe17]", aufgabe17)

export function aufgabe18(args) {
  const input = args
  // Für diese Aufgabe benötigen wir Aufgabe 17 damit wir eine Liste bekommen.
  const nameAge = aufgabe17(input)
  // Hier wird unsere Aufgabenliste generiert.
  const result = []
  //Hier werden ganze Wörter in die Liste geschrieben, das ist auch möglich.
  result.push("Sie heissen")
  // Die Liste wird so zusammengesetzt, dass der Name und das Alter an der richtigen Stelle eingefügt werden.
  result.push(nameAge[0])
  result.push("und sind")
  result.push(nameAge[1])
  result.push("Jahre alt.")
  //das Resultat wird immer als Text zurück gegeben
  return.result.join(".")
}

linkupExerciseHandler("[data-click=aufgabe18]", aufgabe18)

} export function aufgabe19(args) {
  const input = args
  const result = []

  // Schleife durch alle Zeichen der Eingabe
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Prüfen, ob das aktuelle Zeichen ein Kleinbuchstabe ist
    if (currentElement >= "a" && currentElement <= "z") {
      // Kleinbuchstaben verdoppeln
      result.push(currentElement + currentElement)
    } else {
      // Alle anderen Zeichen unverändert hinzufügen
      result.push(currentElement)
    }
  }

  // Ergebnis zurückgeben
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)

export function aufgabe20(args) {
  const input = args

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Prüfen, ob das aktuelle Zeichen ein Punkt ist
    if (currentElement === ".") {
      const nextElement = input[i + 1]

      // Prüfen, ob danach ein Leerzeichen kommt
      if (nextElement !== " ") {
        return false
      }
    }
  }

  // Wenn alle Punkte korrekt gefolgt werden, zurückgeben
  return true
}

linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)

export function aufgabe22(args) {
  const input = args
  let result = []
  let kFound = false

  // Durchlaufe die Eingabezeichenkette
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (!kFound) {
      if (currentElement === "k") {
        // Wenn das erste 'k' gefunden wird, füge es hinzu
        kFound = true
        result.push(currentElement)
      } else {
        // Ersetze alle Zeichen vor dem 'k' mit '_'
        result.push("_")
      }
    } else {
      // Alle Zeichen nach dem ersten 'k' unverändert hinzufügen
      result.push(currentElement)
    }
  }

  // Gib das Ergebnis zurück
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe22]", aufgabe22)

export function aufgabe24(args) {
  const input = args

  // Wenn die Eingabe weniger als 2 Zeichen hat, bleibt sie unverändert
  if (input.length < 2) {
    return input
  }

  // Erster und letzter Buchstabe tauschen
  const firstChar = input[0]
  const lastChar = input[input.length - 1]

  // Das Ergebnis zusammensetzen: letzter Buchstabe + mittlere Zeichen + erster Buchstabe
  const result = lastChar + input.slice(1, input.length - 1) + firstChar

  return result
}

// Die Funktion mit dem Klick-Handler verbinden
linkupExerciseHandler("[data-click=aufgabe24]", aufgabe24)

export function aufgabe27(args) {
  const input = args

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // ASCII-Wert prüfen, ob das Zeichen eine Zahl ist (0-9)
    const ascii = currentElement.charCodeAt(0)
    if (ascii < 48 || ascii > 57) {
      return false // Wenn ein Nicht-Zahlen-Zeichen gefunden wird
    }
  }

  return true // Alle Zeichen sind Zahlen
}

linkupExerciseHandler("[data-click=aufgabe27]", aufgabe27)

export function karlosso(args) {
  const input = "Hausaufgaben"
  const result1 = []
  const result2 = []

  const middleIndex = Math.floor(input.length / 2)

  for (let i = 0; i < input.length; i++) {
    // Wenn vor dem zeichen der Hälfte des Wortes
    const currentElement = input[i]
    //dabei der Input des result 1 kleiner ist
    if (i < middleIndex) {
      // trenne es in die zwei Hälften.
      result1.push(currentElement)
    } else {
      result2.push(currentElement)
    }
  }
  //gib noch das resultat zurück.
  return [result1.join(""), result2.join("")]
}

linkupExerciseHandler("[data-click=karlosso]", karlosso)

export function vanilleCupcake(args) {
  // Zerlege die Eingabe in einzelne Wörter
  const words = args.split(" ")

  // Verdopple jedes Wort und mache das zweite Wort rückwärts
  const doubledWords = words.map((word, index) => {
    if (index === 0) {
      return word + " " + word // Erstes Wort normal verdoppeln
    } else {
      return word + " " + word.split("").reverse().join("") // Zweites Wort rückwärts
    }
  })

  // Gib das verdoppelte Ergebnis als String zurück
  return doubledWords.join(" ")
}

linkupExerciseHandler("[data-click=vanilleCupcake]", vanilleCupcake)

export function mangos(args) {
  // Zerlege das Wort in einzelne Buchstaben
  const letters = args.split("")

  // Sortiere die Buchstaben alphabetisch
  const sortedLetters = letters.sort((a, b) => a.localeCompare(b))

  // Füge die sortierten Buchstaben wieder zu einem Wort zusammen
  return sortedLetters.join("")
}

linkupExerciseHandler("[data-click=mangos]", mangos)

export function bubblesortalgorithmus(args) {
  const text = args
  const list = text.split("") // Damit wandeln wir den Text in eine Liste um, das brauchen wir wenn wir Elemente vertauschen möchten.
  for (let i = 0; i < list.length - 1; i++) {
    const currentElement = list[i]
    const nextElement = list[i + 1]
    if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
      // Reihenfolge stimmt nicht, Elemente müssen getauscht werden.
      const tmp = list[i + 1]
      list[i + 1] = list[i]
      list[i] = tmp
      i = -1 // starte von vorne wenn etwas vertauscht wurde.
    }
  }
  const result = list.join("")
  return result
}
linkupExerciseHandler(
  "[data-click=bubblesortalgorithmus]",
  bubblesortalgorithmus,
)
