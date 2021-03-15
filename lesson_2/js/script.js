let num = 50;

if (num < 49) {
    console.log("Не верно");
} else if (num > 100) {
    console.log("Слишком много");
} else {
    console.log("Верно1");
}

num == 50 ? console.log("Верно2") : console.log("Не верно");

switch (num) {
    case num < 49:
        console.log("Не верно!");
        break;
    case num > 100:
        console.log("Слишком много");
        break;
    case 50:
        console.log("Верно!3");
        break;
}
