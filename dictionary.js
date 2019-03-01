// build Dictionary

var dictionary = {

  computer: ["computer", "an electronic device capable of performing instructions to process data. The language of a computer is electronic signals represented using machine language."],

  data: ["data", "(syn. information) thoughts or representations of nature and society. Examples include numbers, text, images, and videos (e.g. 5 dining room tables; 1000 lions; my brother and sister)"],

  data_operations: ["data operations", "actions that can be performed on data. Examples include addition, subtraction, randomize, delete, store, send, etc."]
};

// alert("Computer\n" + dictionary.computer);
//console.log(dictionary[1]);

// ask user for word
var input = prompt("Please enter a word: ");
console.log(input);


// loop through all elements in dictionary
for (var x in dictionary)
{

  //console.log(dictionary[x][0]);
  //console.log(dictionary[x][1]);


  // check to see if word is in Dictionary
  var found = false;
  if (input == dictionary[x][0])
  {
    found = true;
    console.log(input + " is in the dictionary.");
    console.log("Definition of " + input + ": " + dictionary[x][1]);
    alert(input + "\n\n" + dictionary[x][1])
    break;
  }
  else {
    console.log(input + " is not in the dictionary.");
  }
}

if (found == false)
    alert(input + " is not in our programmer's dictionary.")
