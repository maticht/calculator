let Calc = (value, firstnum, lastnum) => {
    const Err = "Error";
let a
    value === 'sum' ? a = firstnum + lastnum :
        value === 'minus' ?  a = firstnum - lastnum :
            value === 'multi' ? a = firstnum * lastnum :
                value === 'division' ? a = firstnum / lastnum :
    console.log(Err);
    isNaN(a) === true ? console.log(Err) : console.log(a);

}
Calc('division', 55, 44);
















//
// function Calc (value, firstnum, lastnum){
//
// let result =
//
// }
//
//
//
//
// Calc('sum', 1, 2);
// console.log();
