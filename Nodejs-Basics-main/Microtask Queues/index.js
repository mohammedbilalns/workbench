setTimeout(()=> console.log("This is settimeout 1 "), 0 )
setTimeout(()=> {
    console.log("This is settimeout 2")
    process.nextTick(()=>{
        console.log("this is the nexttick inside the second timer ")
    })
}, 0 )
setTimeout(()=> console.log("This is settimeout 3 "), 0 )



process.nextTick(() => console.log("This is proces.nextTick 1"));
process.nextTick(() => {
  console.log("This is process.nextTick 2");
  process.nextTick(() => {
    console.log("This is the inner next tick inside second next tick ");
  });
});
process.nextTick(() => {
  console.log("this is process.nextTick 3");
  Promise.resolve().then(() => {
    console.log("This is the promise inside the third nexttick ");
  });
});
process.nextTick(() => console.log("this is process.nextTick 4"));



Promise.resolve().then(() => console.log("This is promise.resolve 1"));
Promise.resolve().then(() => {
  console.log("This is Promise.resolve 2 ");
  process.nextTick(() => {
    console.log(
      "This is the inner next tick inside second promise then block "
    );
  });
});
Promise.resolve().then(() => {
  console.log("This is te Promise.resolve 3 ");
  Promise.resolve().then(() => {
    console.log("This is the promise resolve inside 3rd promise resolve ");
  });
});
Promise.resolve().then(() => console.log("This is Promise.resolve 4 "));
