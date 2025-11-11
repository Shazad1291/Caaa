let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            try {
                // گۆڕینی × بۆ * و ÷ بۆ / بۆ حیسابکردن
                let expression = string.replace(/×/g, '*').replace(/÷/g, '/');
                string = eval(expression).toString();
                input.value = string;
            } catch (error) {
                input.value = "Error";
                string = "";
            }
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            // گۆڕینی نیشانەکان بۆ نیشانەی ماتماتیکی دروست
            let value = e.target.innerHTML;
            if(value == '÷') value = '÷';
            if(value == '×') value = '×';
            
            string += value;
            input.value = string;
        }
    })
})