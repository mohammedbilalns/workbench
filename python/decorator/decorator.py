def decorator_fun(func):
    def wrapper(*args, **kwargs):
        print("Before function ")
        func(*args, **kwargs)
        print("After function")
    
    return wrapper 

@decorator_fun
def print_hello():
    print("Hello")


print_hello()