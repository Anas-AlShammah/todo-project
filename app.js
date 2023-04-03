let name1= prompt ("input Your Name");
name1=name1.trim();
let start =true;
while(name1 ==''){
    name1= prompt ("input Your Name");
    name1=name1.trim();
    }
while(start){
    for (let i=0;i<name1.length;i++){
        if (name1[i]-'0' >0 || name1[i]-'0'<=0 )
        {
            alert("how your name have number ^-^");
            name1= prompt ("input Your Name");
        }
 
   }
   if (name1[0] !='')start =false;
}

let gender = prompt ("input Your gender");
let age = prompt ("input Your age");
gender=gender.toLowerCase().trim();
while (age<=0){
    alert (`how your age is ${age}`);
    age = prompt ("Could you please enter a valid age");
    if (age>0){alert("thanks")}
}

let agree = confirm ("Do you want to skip the welcoming message?");
if (!agree){
    if (gender=="female"){
alert(`Welcome Ms ${name1} in TodoGenius`);
    }
    else if (gender=="male") {
        alert(`Welcome Mr ${name1} in TodoGenius`);
    }else{
        alert(`Welcome ${name1} in TodoGenius`); 
    }   
}


