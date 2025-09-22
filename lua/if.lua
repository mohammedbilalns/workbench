local function action(loves_coffee)
	if loves_coffee then
		print("something happnes here ")
	else
	print("another thing happens here")
	end
end

action() -- falsy 
action(false)  -- falsy 

action(true)
action(0)
action({})
