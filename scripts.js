function rotateString(theString) {
  // The string length will be used to iterate the loop.
  var stringLength = theString.length;
  // Split the string into an Array.
  var stringArray = theString.split("");

  // Clear the Results area if there are results.
  var results = document.getElementById("results");
  // This loop removes first child element until none left.
  while (results.hasChildNodes()) {
      results.removeChild(results.childNodes[0]);
  }

  // This loop creates the new strings.
  for (a = 0;a < stringLength;a++) {
    // Pull the first letter out of the Array.
    firstLetter = stringArray.shift();
    // Add the first letter to the end of the old array.
    stringArray = stringArray.concat(firstLetter);
    // Create a paragraph to add our new strings to.
    var p = document.createElement('p');
    // Turn the arrays into strings ready to be added.
    var resultText = document.createTextNode(stringArray.join(""));
    // Put the strings into their paragraph tags.
    p.appendChild(resultText);
    // Locate the results area.
    var results = document.getElementById("results");
    // Add the ne paragraph.
    results.appendChild(p);

  } // End for() loop

} // End function getString()
