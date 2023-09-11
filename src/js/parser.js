export default function json(data) {
  return new Promise((resolve) => {
    resolve(String.fromCharCode.apply(null, new Uint16Array(data)));
  });
}
