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
    //now we don't want an elipsis even if there's no need since the text is not as long as the number of characters we want before an elipsis:
    newStr = text;

    return newStr;
  }

  return newStr + " ...";
}

export default elipsis;
