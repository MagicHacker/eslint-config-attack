/**
 * 禁止自身相比较
 */
/*eslint no-self-compare: "error"*/

let x = 10;
if (x === x) {
    x = 20;
}