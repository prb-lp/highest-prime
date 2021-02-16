var findHighestPrime = function (min, max) {

    let prime = [];
    let occurence = new Array(10).fill(0);
    let highestNumber = 0;


    for (let i = 0; i <= max; i++) {
        prime.push(true);
    }

    //finding all prime numbers btw the limit
    for (let i = 2; i * i <= max; i++) {
        if (prime[i] == true) {
            for (let j = i * i; j <= max; j += i) {
                prime[j] = false;
            }
        }
    }


    //occurence of each digit
    for (let i = min; i <= max; i++) {
        if (prime[i]) {
            console.log(i);
            let primeNumber = i;
            while (primeNumber > 0) {
                occurence[Math.trunc(primeNumber % 10)]++;
                primeNumber = Math.trunc(primeNumber / 10);
            }
        }
    }

    //finding the highest digit occurence
    let tmp = occurence[min];
    for (let i = min; i < 10; i++) {
        if (tmp <= occurence[i]) {
            tmp = occurence[i];
            highestNumber = i;
        }
    }
    console.log(highestNumber)
    return highestNumber


};

let min = process.argv[2];
let max = process.argv[3];


findHighestPrime(min, max)