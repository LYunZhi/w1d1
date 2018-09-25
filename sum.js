var args = process.argv;

function sum (args) {
    return Number(args[2]) + Number(args[3]);
}

console.log(sum(args))

