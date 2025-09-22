local list = {"first", 2, false, function() print("Fourth") end}
print(list[1])
print(list[4]())

local t = {
	literal_key = "a string",
	["an expression"] = "another strng",
	[function () end] = true 
}

print(t.literal_key)
print(t["an expression"])
print(t[function ()
end]) -- not works since referential inequality 
