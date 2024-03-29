//  ________________________________________________________________________
// /                                                                        \
// | This AA was created by @kawarimidoll. Thanks!                          |
// | LINK: https://github.com/kawarimidoll/deno-cli-tools/tree/main/denosay |
// \                                                                        /
//  ------------------------------------------------------------------------
//     \
//      \  _
//        ( ･ヽ
//          \ \
//           ⎞ \
//           |  ｀ヽ
//           ⎩      ﾄ､
//            u¯u︶u

const head = `
 _
( ･ヽ
`;

const neck = "  \\ \\";

const body = String.raw`
$I  ⎞ \
$I  |  ｀ヽ
$I  ⎩      ﾄ､
$I   u¯u︶u
`;

/**
 * Denoくんを生成
 * @param {number} length 首の長さ
 * @returns looooooong deno
 */
export function longdeno(length) {
  const necks = [];

  for (let i = 0; i < length; i++) {
    necks.push(" ".repeat(i) + neck);
  }

  return head + necks.join("\n") + body.replaceAll("$I", " ".repeat(length));
}
