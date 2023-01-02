function getTopMargin(currentSelection) {
  let accurateSelection = currentSelection;
  if (currentSelection > 10 && currentSelection < 21) {
    accurateSelection = currentSelection - 10;
  }
  if (currentSelection > 20 && currentSelection < 31) {
    accurateSelection = currentSelection - 20;
  }
  if (currentSelection > 30 && currentSelection < 41) {
    accurateSelection = currentSelection - 30;
  }
  if (currentSelection > 40 && currentSelection < 51) {
    accurateSelection = currentSelection - 40;
  }
  if (currentSelection > 50 && currentSelection < 61) {
    accurateSelection = currentSelection - 50;
  }
  if (currentSelection > 60 && currentSelection < 71) {
    accurateSelection = currentSelection - 60;
  }
  if (currentSelection > 70 && currentSelection < 81) {
    accurateSelection = currentSelection - 70;
  }
  if (currentSelection > 80 && currentSelection < 91) {
    accurateSelection = currentSelection - 80;
  }
  if (currentSelection > 90 && currentSelection < 101) {
    accurateSelection = currentSelection - 90;
  }
  return accurateSelection;
}

export default getTopMargin;
