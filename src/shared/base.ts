export const toStrings = (val: any) => {
  return val.toString();
};
// 返回项目路径
export function getNormalPath(p: string) {

  if (p.length === 0 || !p || p == 'undefined') {
    return p
  };
  console.log('getNormalPath',p)
  let res = p.replace('//', '/')

  if (res[res.length - 1] === '/') {
    return res.slice(0, res.length - 1)
  }

  return res;
}
