
local reading_scores = {fsdfd =10 , fsdnjfds = "fsdf"}
for index=1, #reading_scores do -- not goint to do anything because cannot find the length of th table if it is a map 
	print(reading_scores[index])
end


for key, value in pairs(reading_scores) do
	print(key , value)
end
