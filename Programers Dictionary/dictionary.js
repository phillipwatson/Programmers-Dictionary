// build Dictionary
// array of javascript objects
var dictionary = [
  {
    word: "computer",
    definition: "an electronic device capable of performing instructions to process digital data. The language of a computer is electronic signals represented using machine language."
  },

  {
    word: "data",
    definition: "(syn. information) thoughts or representations of nature and society. Examples include numbers, text, images, and videos (e.g. 5 dining room tables; 1000 lions; my brother and sister)"
  },

  {
    word: "data_operations",
    definition: "actions that can be performed on data. Examples include addition, subtraction, randomize, delete, store, send, etc."
  }
];



// alert("Computer\n" + dictionary.computer);
// console.log(dictionary[0]);
// console.log(dictionary[1]);
// console.log(dictionary[2]);
//console.log(dictionary.length);

// ask user for word
var input = prompt("Please enter a word: ");
console.log(input);


// loop through all elements in dictionary

for (var i=0; i < dictionary.length; i++)
{

  //console.log(dictionary[x][0]);
  //console.log(dictionary[x][1]);


  // check to see if word is in Dictionary
  var found = false;
  if (input == dictionary[i].word)
  {
    found = true;
    console.log(input + " is in the dictionary.");
    console.log("Definition of " + input + ": " + dictionary[i].definition);
    alert(input + "\n\n" + dictionary[i].definition)
    break;
  }
}

if (found == false)
    alert(input + " is not in our programmer's dictionary.")
