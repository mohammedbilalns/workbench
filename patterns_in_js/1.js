let k = 50
for(let i=1; i<=4; i++){
  let row =""
  for(let j=1; j<=i;j++){
    row+= k +" "
    k-=5
  }
  console.log(row)
}
