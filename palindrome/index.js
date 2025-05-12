const inputText = document.getElementById("text-input")
const checkButton = document.getElementById("check-btn")
const result = document.getElementById("result")



checkButton.addEventListener("click", ()=>{
    const text = inputText.value.trim()
   
    if (text=== ""){
        alert("Please enter the value");
        return;
    }

    const cleanText =  text.toLowerCase().replace(/[^a-z0-9]/g, "")
    const reverseText = cleanText.split("").reverse().join("");

    if(cleanText === reverseText){
        result.textContent = `"${text}" is a palindrome`
    }
    else{
        result.textContent = `"${text}" is not a plaindrome`
    }

    
})