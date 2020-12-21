/*
{
  name: "Winner",
  options: {
    "1": "Home", "X": "Draw", "2": "Road"
  },
  oddes: {
    out: "1","1": 100, "X": 0, "2": 0
  }
}
*/

const calculate = (event, out, value) => {

  if (!event.oddses.out) return event

  const selectedOut = event.oddses["out"]

  // IF HOME IS EDITED ---
  if (out === '1') {
    if (selectedOut === '1') {
      if (value === 1) {
        if (event.oddses['1'] < 100) {
          event.oddses['1']++
          if (event.oddses['X'] === event.oddses['2']) {
            event.oddses['2']--
          }
          else if (event.oddses['X'] > event.oddses['2']) {
            event.oddses['X']--
          }
          else if (event.oddses['X'] < event.oddses['2']) {
            event.oddses['2']--
          }
        }
      }
      if (value === -1) {
        if (event.oddses['X'] === event.oddses['2']) {
          if (event.oddses['X']+1 <= event.oddses['1']-1) {
            event.oddses['1']--
            event.oddses['X']++
          }
        }
        else if (event.oddses['X'] > event.oddses['2']) {
          event.oddses['1']--
          event.oddses['2']++
        }
        else if (event.oddses['X'] < event.oddses['2']) {
          event.oddses['1']--
          event.oddses['X']++
        }
      }
    }
    if (selectedOut === 'X') {
      if (value === 1) {
        if (event.oddses['1'] < event.oddses['X']) {
          if (event.oddses['2'] > 0) {
            event.oddses['1']++
            event.oddses['2']--
          }
        }
      }
      if (value === -1) {
        if (event.oddses['2'] < event.oddses['X']) {
          if (event.oddses['1'] > 0) {
            event.oddses['1']--
            event.oddses['2']++
          }
        }
      }
    }
    if (selectedOut === '2') {
      if (value === 1) {
        if (event.oddses['1'] < event.oddses['2']) {
          if (event.oddses['X'] > 0) {
            event.oddses['1']++
            event.oddses['X']--
          }
        }
      }
      if (value === -1) {
        if (event.oddses['X'] < event.oddses['2']) {
          if (event.oddses['1'] > 0) {
            event.oddses['1']--
            event.oddses['X']++
          }
        }
      }
    }
  }
  // IF HOME IS EDITED ---

  // IF DRAW IS EDITED ---
  if (out === 'X') {
    if (selectedOut === 'X') {
      if (value === 1) {
        if (event.oddses['X'] < 100) {
          event.oddses['X']++
          if (event.oddses['1'] === event.oddses['2']) {
            event.oddses['2']--
          }
          else if (event.oddses['1'] > event.oddses['2']) {
            event.oddses['1']--
          }
          else if (event.oddses['1'] < event.oddses['2']) {
            event.oddses['2']--
          }
        }
      }
      if (value === -1) {
        if (event.oddses['1'] === event.oddses['2']) {
          if (event.oddses['1']+1 <= event.oddses['X']-1) {
            event.oddses['X']--
            event.oddses['1']++
          }
        }
        else if (event.oddses['1'] > event.oddses['2']) {
          event.oddses['X']--
          event.oddses['2']++
        }
        else if (event.oddses['1'] < event.oddses['2']) {
          event.oddses['X']--
          event.oddses['1']++
        }
      }
    }
    if (selectedOut === '1') {
      if (value === 1) {
        if (event.oddses['X'] < event.oddses['1']) {
          if (event.oddses['2'] > 0) {
            event.oddses['X']++
            event.oddses['2']--
          }
        }
      }
      if (value === -1) {
        if (event.oddses['2'] < event.oddses['1']) {
          if (event.oddses['1'] > 0) {
            event.oddses['X']--
            event.oddses['2']++
          }
        }
      }
    }
    if (selectedOut === '2') {
      if (value === 1) {
        if (event.oddses['X'] < event.oddses['2']) {
          if (event.oddses['1'] > 0) {
            event.oddses['X']++
            event.oddses['1']--
          }
        }
      }
      if (value === -1) {
        if (event.oddses['1'] < event.oddses['2']) {
          if (event.oddses['X'] > 0) {
            event.oddses['X']--
            event.oddses['1']++
          }
        }
      }
    }
  }
  // IF DRAW IS EDITED ---

  // IF AWAY IS EDITED ---
  if (out === '2') {
    if (selectedOut === '2') {
      if (value === 1) {
        if (event.oddses['2'] < 100) {
          event.oddses['2']++
          if (event.oddses['1'] === event.oddses['X']) {
            event.oddses['X']--
          }
          else if (event.oddses['1'] > event.oddses['X']) {
            event.oddses['1']--
          }
          else if (event.oddses['1'] < event.oddses['X']) {
            event.oddses['X']--
          }
        }
      }
      if (value === -1) {
        if (event.oddses['1'] === event.oddses['X']) {
          if (event.oddses['1']+1 <= event.oddses['2']-1) {
            event.oddses['2']--
            event.oddses['1']++
          }
        }
        else if (event.oddses['1'] > event.oddses['2']) {
          event.oddses['2']--
          event.oddses['X']++
        }
        else if (event.oddses['1'] < event.oddses['2']) {
          event.oddses['2']--
          event.oddses['1']++
        }
      }
    }
    if (selectedOut === '1') {
      if (value === 1) {
        if (event.oddses['2'] < event.oddses['1']) {
          if (event.oddses['X'] > 0) {
            event.oddses['2']++
            event.oddses['X']--
          }
        }
      }
      if (value === -1) {
        if (event.oddses['X'] < event.oddses['1']) {
          if (event.oddses['2'] > 0) {
            event.oddses['2']--
            event.oddses['X']++
          }
        }
      }
    }
    if (selectedOut === 'X') {
      if (value === 1) {
        if (event.oddses['2'] < event.oddses['X']) {
          if (event.oddses['1'] > 0) {
            event.oddses['2']++
            event.oddses['1']--
          }
        }
      }
      if (value === -1) {
        if (event.oddses['1'] < event.oddses['X']) {
          if (event.oddses['2'] > 0) {
            event.oddses['2']--
            event.oddses['1']++
          }
        }
      }
    }
  }
  // IF AWAY IS EDITED ---

  return event
}
