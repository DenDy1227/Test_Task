let cod = document.getElementById('test')
const calc = function () {
    let divisible = 0
    let indivisible = 0
    let indivisibleArr = []
    let isGrovTrue = []
    let result
    let kazino = function (arr) {

        for (let i = 0; i <= 8; i++) {
            console.log(i, divisible, indivisible);
            if (arr[i] % 2 === 0) {
                divisible += arr[i]
            } else {
                indivisible += arr[i]
                if (arr[i + 1] % 2 > 0) {
                    isGrovTrue.push(+arr[i] - +arr[(i + 1)] < 0)
                    indivisibleArr.push(myFunc(arr.slice(i, 2).join('')))
                }
            }
        }
        if (indivisibleArr.length === 2) {
            if (isGrovTrue[0] === isGrovTrue[1]) {
                result = ('2000 UAN!!!Luky!!!');
            } else {
                result = (' 1000 UAN !!!');
            }
        }
        else if (+divisible - +indivisible > 0) {
            result = '100 UAN';
        } else { result = 'try again' }
        resultToViev.innerText = result
    }
    let resultToViev = document.getElementById('result')
    let myFunc = num => Number(num)
    let arrMoney = Array.from(String(cod.value), myFunc)
    kazino(arrMoney);
}
const random = function () {
    cod.value = Math.round(Math.random() * Math.pow(10, 8));
    calc()
}