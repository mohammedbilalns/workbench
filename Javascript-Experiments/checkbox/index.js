const myCheckbox = document.getElementById("myCheckbox")
const visaBtn = document.getElementById("visaBtn")
const masterBtn = document.getElementById("masterBtn")
const rupayBtn = document.getElementById("rupayBtn")
const submitBtn = document.getElementById("submitBtn")
const subResult = document.getElementById("subResult")
const paymentResult = document.getElementById("paymentResult")
const paymentdelay = document.getElementById("sdfkjhasd ")
submitBtn.onclick = function(){
	if(myCheckbox.checked){
		subResult.textContent = `You are subscribed`;
		if(visaBtn.checked){
			paymentResult.textContent = "you are paying with visa"
		}else if(masterBtn.checked) {
			paymentResult.textContent = "You are paying with mastercard"

		}else if (rupayBtn.checked) {
			paymentResult.textContent = "You are paying with rupay "
		}else{
			paymentResult.textContent = "You must select a payment type"
		}
	}else{
		subResult.textContent = `You are not subscribed`;
		paymentResult.textContent = ""
	}
}
