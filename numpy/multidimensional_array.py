import numpy as np 

array  = np.array([
    ['A','B','C'],
    ['G', 'H', 'I'],
    ['J','K','L']
]) # It should be in homogenous shape 
print(array.ndim) # print the number of dimensions 

print(array.shape) # layers rows columns 

print(array[0][0]) # chain indexing 

# Multidimentional indexing ( faster than chain indexing)
print(array[0,0])


