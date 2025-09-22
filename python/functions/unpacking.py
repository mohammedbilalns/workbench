def func(a,b,c):
    print(a,b,c)

args = [1,43,34]
func(*args)


kwargs = {"a":1,"b":2,"c":3}
func(**kwargs)