var dayOfYear = function(date) {
    let dateArr = date.split('-').map(string=> parseInt(string))

   let monthMap = {
       1:31 ,
       2:28,
       3:31,
       4:30,
       5:31,
       6:30,
       7:31,
       8:31,
       9:30,
       10:31,
       11:30,
       12:31 
   }
   let daysCount = 0 
   for(let i=1;i<dateArr[1];i++){
       daysCount+= monthMap[i]
   }
   daysCount += dateArr[2]
   if((dateArr[0]%4==0 && dateArr[0]%100 !=0)|| dateArr[0]%400 ==0){
       if(dateArr[1]>2){
           return daysCount+1
       }
     
   }

   return daysCount
};


console.log(dayOfYear("2012-01-02"))