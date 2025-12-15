let isEight = process.argv[2].length >= 8;
let hasUpper = process.argv[2].match(/[A-Z]/) !== null;
let hasNumber = process.argv[2].match(/[0-9]/) !== null;
let hasLower = process.argv[2].match(/[a-z]/) !== null;

if (isEight && hasUpper && hasNumber && hasLower) {
    console.log("Valid");
} else {
    console.log("Invalid");
}