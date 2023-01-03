function elipsis(text = "", numOfCharacters = 50) {
  let arrayFromStr = [];
  let newStr = "";
  for (let i = 0; i < numOfCharacters; i++) {
    arrayFromStr[i] = text[i];
  }

  for (let element of arrayFromStr) {
    newStr = newStr + element;
  }

  if (text.length < numOfCharacters) {
    
    newStr = text;

    return newStr;
  }

  return newStr + " ...";
}

export default elipsis;
