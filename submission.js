const findSum = function(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
  };
  
const findFrequency = function(array) {
    let frequencies = {};
    let mostCommon = array[0], highestFrequency = 1;

    for (let i = 0; i < array.length; i++) {
        var curr = array[i];
        if (frequencies[curr] == null)
            frequencies[curr] = 1;
            else 
            frequencies[curr]++;
        
        if (frequencies[curr] > highestFrequency) {
            mostCommon = curr;
            highestFrequency = frequencies[curr];
        }
    }

    let leastCommon = Object.keys(frequencies).reduce((leastCommon, v) => frequencies[v] < frequencies[leastCommon] ? v : leastCommon);

    return { most: mostCommon, least: leastCommon };
};
  
const isPalindrome = function(str) {
    str = str.toLowerCase();
    let reverseStr = str.split("").reverse().join("");
    for (let i = 0; i < str.length; i++) {
        if (str[i] != reverseStr[i]) {
            return false;
        }
    }
    return true;
};
  
const largestPair = function(array) {
    if (array.length > 1) {
        let largestProduct = array[0] * array[1];
        for (let i = 1; i < array.length; i++) {
            if (i != array.length - 1) {
                const currPair = array[i] * array[i + 1];
                if (currPair > largestProduct) {
                    largestProduct = currPair;
                }
            } 
        }
        return largestProduct;
    }
    return null;
};

const removeParenth = function(str) {
    const noParenth = str.replace(/ *\([^)]*\) */g, "");
    return noParenth;
  };
  
  const scoreScrabble = function(str) {
    let scoreOne = ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'];
    let scoreTwo = ['d', 'g'];
    let scoreThree = ['b', 'c', 'm', 'p'];
    let scoreFour = ['f', 'h', 'v', 'w', 'y'];
    let scoreFive = ['k'];
    let scoreEight = ['j', 'x']; 
    let score = 0;

    for (let i = 0; i < str.length; i++) {
        if (scoreOne.includes(str[i])) {
            score++;
        } else if (scoreTwo.includes(str[i])) {
            score += 2;
        } else if (scoreThree.includes(str[i])) {
            score += 3;
        } else if (scoreFour.includes(str[i])) {
            score += 4;
        } else if (scoreFive.includes(str[i])) {
            score += 5;
        } else if (scoreEight.includes[str[i]]) {
            score += 8;
        } else {
            score += 10;
        }
    }

    return score;
};
