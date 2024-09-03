

const codingLanguages: string[] = [
    "HTML",
    "CSS",
    "JavaScript"
];

let sentence: string = "";

codingLanguages.forEach(function (language, index) {
    if (index === codingLanguages.length - 1) {
        sentence += language;
    } else if (index === codingLanguages.length - 2) {
        sentence += language + "" + " and ";
    } else {
        sentence += language + ', ';
    }
})

let sentence2 = `This website has been created with: ${sentence}`;

const codingElement = document.getElementById("coding")
if (codingElement) {
    codingElement.innerHTML = sentence2;
}
