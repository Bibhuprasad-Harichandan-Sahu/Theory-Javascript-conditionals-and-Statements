// program using switch statement
let a = 2;

switch (a) {

    case 1:
        a = 'one';
        break;
    case 2:
        a = 'two';
        break;
    default:
        a = 'not found';
        break;
}
console.log(`The value is ${a}`);
//output-The value is two


// program using switch statement
let z = 1;

switch (z) {
    case "1":
        z = 1;
        break;
    case 1:
        z = 'one';
        break;
    case 2:
        z = 'two';
        break;

    default:
        z = 'not found';
        break;
}
console.log(`The value is ${z}`);
//output-The value is one