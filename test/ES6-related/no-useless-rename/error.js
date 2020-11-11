/**
 * 禁止在 import 和 export 和解构赋值时将引用的变量名重命名为相同的名字
 */

/*eslint no-useless-rename: "error"*/

// import { foo as foo } from "bar";