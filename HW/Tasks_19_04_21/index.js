// Task 1: "COUNT IP ADDRESSES"

const firstIP = "20.0.0.10";
const lastIP = "20.0.1.0";

function countAddresses(firstIP, lastIP) {
  let integer1 = firstIP.split('.');
  let sumFirstIP = 0;
  for (let i = 0; i < 4; i++) {
    let firstVal = Number(integer1[i]);
    sumFirstIP = (sumFirstIP << 8) + firstVal;
  };
  
  let integer2 = lastIP.split('.');
  let sumSecondIP = 0;
  for (let i = 0; i < 4; i++) {
    let secondVal = Number(integer2[i]);
    sumSecondIP = (sumSecondIP << 8) + secondVal;
  };
  
  const valueBetween = (sumSecondIP - sumFirstIP);
  
  return valueBetween;
};

let resultCount = countAddresses(firstIP, lastIP);
console.log(resultCount, 'resultCount');


// Task 2: "MORSE CODE DECODER"

const encodedString = '.... --- ..- ... - --- -. --..-- ....... .-- . ....... .... .- ...- . ....... .- ....... .--. .-. --- -... .-.. . -- .-.-.-';
const alphabet = {  
    "-----":"0",
    ".----":"1",
    "..---":"2",
    "...--":"3",
    "....-":"4",
    ".....":"5",
    "-....":"6",
    "--...":"7",
    "---..":"8",
    "----.":"9",
    ".-":"a",
    "-...":"b",
    "-.-.":"c",
    "-..":"d",
    ".":"e",
    "..-.":"f",
    "--.":"g",
    "....":"h",
    "..":"i",
    ".---":"j",
    "-.-":"k",
    ".-..":"l",
    "--":"m",
    "-.":"n",
    "---":"o",
    ".--.":"p",
    "--.-":"q",
    ".-.":"r",
    "...":"s",
    "-":"t",
    "..-":"u",
    "...-":"v",
    ".--":"w",
    "-..-":"x",
    "-.--":"y",
    "--..":"z",
    "-.-.--":"!",
    ".-.-.-":".",
    "--..--":","
}; 
function codeDecoder(morseCode) {
  let readableStr = morseCode.split()
    .map(a => a.split(' ')
        .map(b => alphabet[b]).join('')
    ).join(' ');
  return readableStr;
};

const resultdecoder = codeDecoder(encodedString);
console.log(resultdecoder, 'resultdecoder');