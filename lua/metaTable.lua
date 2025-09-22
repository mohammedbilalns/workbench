local vector_mt = {}
vector_mt.__add = function(left, right)
	return setmetatable({
		left[1] + right[1],
		left[2] + right[2],
		left[3] + right[3]
	}, vector_mt)
end

local v1 = setmetatable({3,1,5}, vector_mt)
local v2 = setmetatable({-3, 2,2}, vector_mt)
local v3 = v1 + v2
print(v3[1], v3[2], v3[3])
print(v3 + v3)
