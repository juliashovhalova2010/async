export default function read(data) {
  if (!data) {
    throw new Error('Invalid data');
  }

  return new Promise((resolve) => ((input) => {
    const buffer = new ArrayBuffer(input.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    resolve(buffer);
  })(data));
}
