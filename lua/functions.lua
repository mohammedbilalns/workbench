
local function hello(name)
	print("Hello world")
end 

local greet = function(name)
	print("Greetings" .. name .. "!")
end

local higher_order = function(value)
	return function(another)
		return value+ another
	end 
end 

local add_one = higher_order(10)
print("add_one(2) ->", add_one(2))
