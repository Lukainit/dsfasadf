function myFirstApp(name, age){
    alert(`Hello, my name is ${name} and this is my first app`);
    
    function showskills() {
        let skills = ['html','css','js'];
        let i;
        for (i=0; i<skills.length; i++){
            console.log("i got " + skills[i]);
            

        }

    }
    showskills();

    function checkAge(){
        let age = prompt("How ald am i?", "");
        if (age>18){
            console.log ("You are un old man");
           
        } else {
           console.log ("You are a child")
           
        }


    }
    checkAge();

    function calcPow(num){
        return (num*num);
    }
    console.log(calcPow(4));
    }

    myFirstApp('Nazar',16);