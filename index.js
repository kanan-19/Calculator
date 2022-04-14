let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click' , (e)=>{
        buttonText = e.target.innerText;
        console.log('button text is' , buttonText);
        if(buttonText == 'X'){   // logic of *
            buttonText = '*';
            screenValue += buttonText ;
            screen.value = screenValue;
        }
        else if(buttonText == 'C'){      // logic to clean the screen
            screenValue = '';   
            screen.value = screenValue;
        }
        else if(buttonText == '='){     // logic to evaluate
            screen.value = eval(screenValue);
        }
        else if(buttonText == '%'){        // logic to find modulus
            buttonText = '%';
            screenValue += buttonText ;
            screen.value = screenValue;
        }
        else{
            screenValue += buttonText ;
            screen.value = screenValue;
        }
    })
}