module.exports = function toReadable (number) {
    let arr1 = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
        "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let arr2 = ["","","twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let num = number.toString();
    if (number < 20) {
        return arr1[number];
    }

    if (num.length == 2 && num[1] == 0 ) {
        return arr2[num[0]];
    }
    else if (num.length == 2) {
        return arr2[num[0]] + " " + arr1[num[1]];
    }
    if (num.length == 3 && num[1]==0 && num[2]==0) {
        return arr1[num[0]] +" "+ "hundred";
    }
    else if (num.length == 3 && num[1] == 0) {
        return arr1[num[0]] + " " + "hundred" + " "+ arr1[num[2]];
    }
    else if (num.length == 3 ) {
        return arr1[num[0]] +" " + "hundred"+" " + toReadable(num[1]+num[2]);
    }
}
