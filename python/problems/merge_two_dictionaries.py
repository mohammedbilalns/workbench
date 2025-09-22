dic1 = {"a":1,"b":2}
dic2 = {"c":3,"d":4}
# newDic = dic1 | dic2 
# print(newDic)
newDic = {**dic1,**dic2}
print(newDic)