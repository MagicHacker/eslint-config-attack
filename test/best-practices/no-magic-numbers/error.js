/**
 * 禁止在代码中使用没有明确含义的数字
 */

/*eslint no-magic-numbers: "error"*/

const dutyFreePrice = 100,
finalPrice = dutyFreePrice + (dutyFreePrice * 0.25)
console.log(finalPrice)