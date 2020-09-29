/**
 * 禁止在类之外的地方使用 this
 */

/*eslint no-invalid-this: "error"*/
/*eslint-env es6*/

"use strict";
function baz() {}
this.a = 0;
baz(() => this);
