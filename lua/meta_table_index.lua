local fib_mt = {
	__index = function(self, key)
		if key < 2 then return 1 end
	-- update the table, to save the intermediate results 
		self[key] = self[key-2] + self[key -1]
	-- Return the result 
		return self[key]
	end
}

local fib = setmetatable({}, fib_mt)
print(fib[5])
print(fib[1000])
