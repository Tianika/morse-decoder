const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
}

function decode(expr) {
  let result = []

  for (let i = 0; i < expr.length; i = i + 10) {
    let st = expr.substring(i, i + 10)

    if (st === '**********') {
      result.push(' ')
    } else {
      let substr = ''

      for (let j = 0; j < 10; j = j + 2) {
        let x = st.substring(j, j + 2)

        if (x === '10') {
          substr = substr + '.'
        } else if (x === '11') {
          substr = substr + '-'
        }
      }
      result.push(MORSE_TABLE[substr])
    }
  }
  return result.join('')
}

module.exports = {
  decode,
}
