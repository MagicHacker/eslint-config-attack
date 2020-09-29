/**
 * 禁止不必要的{}代码块
 */

/*eslint no-lone-blocks: "error"*/
{}
const foo = 0
function baz() {}
if (foo) {
    {
        baz();
    }
}