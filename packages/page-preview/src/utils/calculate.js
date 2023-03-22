export function accAdd(arg1, arg2) {
  let r1, r2, m, n;
  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  n = r1 >= r2 ? r1 : r2;
  return +((arg1 * m + arg2 * m) / m).toFixed(n);
}
export function accSub(arg1, arg2) {
  let r1, r2, m, n;
  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  n = r1 >= r2 ? r1 : r2;
  return +((arg1 * m - arg2 * m) / m).toFixed(n);
}
export function accMul(arg1, arg2) {
  let r1 = arg1.toString();
  let r2 = arg2.toString();
  let m = 0;
  try {
    m += arg1.toString().split(".")[1].length;
  } catch (e) {
    e;
  }
  try {
    m += arg2.toString().split(".")[1].length;
  } catch (e) {
    e;
  }
  return (
    (Number(r1.replace(".", "")) * Number(r2.replace(".", ""))) /
    Math.pow(10, m)
  );
}
