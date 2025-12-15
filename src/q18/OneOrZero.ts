for (let i = 1; i <= Number(process.argv[2]); i++) {
    if (i % 2 === 0) {
        console.log("0".repeat(Number(process.argv[2])));
    } else {
        console.log("1".repeat(Number(process.argv[2])));
    }
}