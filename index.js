const input = document.getElementById("NoOfWords");
const container = document.querySelector(".container")
const container1 = document.querySelector(".paras")

// const getData = () => {
//     console.log(input.value)
// }

// function getData() {
//     console.log(input.value)
// }

// input.addEventListener("click", () => {
//     container1.style.backgroundColor = "red";
// })
input.addEventListener("click", () => {
    // container1.setAttribute("id", "p1");
    container1.classList
})

container.addEventListener("contextmenu", (e) => {
    e.preventDefault();
})





input.addEventListener("")
const wordGenerator = (n) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let text=""
    for (let i = 0; i < n; i++) {
        const random = (Math.random() * (letters.length - 1)).toFixed(0);
        text += letters[random];
    }
    return text;

}



let NoOfWords;
const getData = () => {
    NoOfWords = Number(input.value);

    const para = document.createElement("p");
    para.setAttribute("class", "paras");
    let pg = "";
    for (let i = 0; i < NoOfWords; i++) {
        const lenOfWords = (Math.random() * 15).toFixed(0);
        let word = wordGenerator(lenOfWords);
        pg += word+" "
    }

    para.innerText = pg

    container.append(para)

}


