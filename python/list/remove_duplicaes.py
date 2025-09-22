
lst = [1,3,4,2,3,2,1,1,2]
unique = []
seen = set()
for item in lst:
    if item not in seen:
        seen.add(item)
        unique.append(item)

print(unique)