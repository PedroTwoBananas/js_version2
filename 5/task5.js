// const _pipe = (a, b) => (arg) => b(a(arg));
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((res, fn) => fn(res), x);

const fullUser = pipe(
  (user) => ({ ...user, lastName: "Pass" }),
  (user) => ({ ...user, age: 29 }),
  (user) => ({ ...user, city: "Boston" })
);

console.log(fullUser());
