const codingLanguages = ["HTML", "CSS", "JavaScript"];

let sentence = [""];

codingLanguages.forEach(function (language, index) {
  if (index === codingLanguages.length - 1) {
    sentence += language;
  } else if (index === codingLanguages.length - 2) {
    sentence += language + "" + " and ";
  } else {
    sentence += language + ", ";
  }
});

let sentence2 = `This website has been created with: ${sentence}`;

document.getElementById("coding").innerHTML = sentence2;
