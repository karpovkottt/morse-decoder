const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    toSymbols = '';
      for (let i = 0; i < expr.length; i += 10) {
        if (i === 0) {toSymbols = `${expr.slice([i], [i + 10])}`
        } else {
          toSymbols = `${toSymbols} ${expr.slice([i], [i + 10])}`
      }}
      symbolsArr = toSymbols.split(' ');
      codeArr = symbolsArr.map((el) => {
        let x = '';
        for (let i = 0; i < el.length; i += 2) {
          if (el[i] === '0') {continue};
          if (el[i] === '*') {return el = ''};
          if (el[i + 1] === '0') {x = x + '.'} else {x = x + '-'};
        } return x
      })  
      result = codeArr.map(elem => {
        for (let key in MORSE_TABLE) {
          if (elem === key) {
            return Object.values(MORSE_TABLE[key])
          }
          if (elem === '') {return ' '}
        }
      })
      return result.join('');
    }

module.exports = {
    decode
}