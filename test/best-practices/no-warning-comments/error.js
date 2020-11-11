/**
 * 禁止注释中出现 TODO 和 FIXME等单词
 */

/*eslint no-warning-comments: "error"*/

function callback(err, results) {
  if (err) {
    console.error(err);
    return;
  }
  // TODO
}
callback()