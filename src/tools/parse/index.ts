export function parse(obj: Record<string, any>, props: string): any {
  const args = props.split(".");
  let res = obj;
  while (args.length && res) {
    const prop = args.shift();
    res = res[prop];
  }
  return res;
}
