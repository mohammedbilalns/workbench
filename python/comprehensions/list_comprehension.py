nested = [[1,2],[3,4],[5,6]]
flat = [elem for sublist in nested for elem in sublist]
print(flat)