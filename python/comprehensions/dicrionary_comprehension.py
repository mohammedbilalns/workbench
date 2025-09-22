# keys = ['a','b','c']
# values = [1,2,3]
# my_dict = {k:v for (k,v) in zip(keys,values)}
# print(my_dict)

original_dict = {"fsdf":32,"sfdsf":23,"dfsf":43}
age_group = {x:('old' if v>40 else 'young') for (x,v) in original_dict.items()}
print(age_group)