// let num = 50;

// if (num < 49) {
//     console.log("Не верно");
// } else if (num > 100) {
//     console.log("Слишком много");
// } else {
//     console.log("Верно1");
// }

// num == 50 ? console.log("Верно2") : console.log("Не верно");

// switch (num) {
//     case num < 49:
//         console.log("Не верно!");
//         break;
//     case num > 100:
//         console.log("Слишком много");
//         break;
//     case 50:
//         console.log("Верно!3");
//         break;
// }

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// } while (num < 59);

// for (i = 1; num < 55; i++) {
//     console.log(num);
//     num++;
// }

//let a = [1, 2, 3];
//let b = [1, 2, 3];

//console.log(+Infinity);

let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = +prompt("Во сколько обойдется?", "");

    if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null &&
        a != "" && b != "" && a.length < 50) {
        console.log('done ' + i);
        appData.expenses[a] = b;
    } else {
        i = i - 1;
    }
}
// let i = 0;
// while(i<2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = +prompt("Во сколько обойдется?", "");
    
//     i++;

// if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null &&
//     a != "" && b != "" && a.length < 50) {
//     console.log('done ' + i);
//     appData.expenses[a] = b;
// } else {
//     i = i - 1;
// }

// }

appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Что-то пошло не так');
}
