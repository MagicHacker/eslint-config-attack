/**
 * 禁止没必要的转义
 * 具体规则：https://cn.eslint.org/docs/rules/no-useless-escape
 */

/*eslint no-useless-escape: "error"*/

"\'";
'\"';
"\#";
"\e";
`\"`;
`\#{foo}`;
/\!/;
/\@/;