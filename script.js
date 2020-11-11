const quotesList = [];

quotes = document.querySelectorAll('p');

for (let i=0; i<quotes.length;i++){
    quotesList.push(quotes[i].textContent);
}

const myFunction = () => {
    let word = document.getElementById("word").value;
    var word2 = new RegExp(word, "i");
    console.log(word2)
    for (let x=0;x<quotesList.length;x++){
        console.log(quotesList[x])
        if (quotesList[x].test(word2)){
            console.log("yes");
        }
        else{
            return "no";
        }
    }
}

var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);