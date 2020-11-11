/**
 * 要求使用扩展运算符而非 .apply()
 * 三方库可能在使用apply
 */

/*eslint prefer-spread: "error"*/

foo.apply(undefined, args);
foo.apply(null, args);