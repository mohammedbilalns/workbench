local variable_arguments = function(...)
	local arguments = {...}
	for i, v in ipairs({...}) do print(i,v) end 
	return table.unpack(arguments)
end
print("=================")
print("1:", variable_arguments("hello", "world", "!"))
print("2", variable_arguments("hello", "world", "!"), "<lost>")
