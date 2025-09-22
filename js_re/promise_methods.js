const pr1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("resolved 1 ");
  }, 4000);
});

const pr2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("resolved 2");
  }, 3000);
});

const pr3 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("rejected 3");
  }, 3000);
});

Promise.any([pr1, pr2, pr3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
