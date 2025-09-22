function* generateEvens() {
  for (let i = 0; i <= 100; i += 2) {
    yield i;
  }
}

const iter = generateEvens();
console.log(iter);
for (let elem of iter) {
  console.log(elem);
}
