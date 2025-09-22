local single_string = function(s)
	return s .. "- Wow"
end

local x = single_string("hi")
local y = single_string "hi"
print(x, y)
