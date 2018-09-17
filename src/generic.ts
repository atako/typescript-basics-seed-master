interface Lengtwise {
  length: number;
}

function loggingIdentity<T extends Lengtwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

loggingIdentity({ length: 10, value: 3 });