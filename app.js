'use strict';

// let name1= prompt ("input Your Name");
// name1=name1.trim();
// let start =true;
// while(name1 ==''){
//     name1= prompt ("input Your Name");
//     name1=name1.trim();
//     }
// while(start){
//     for (let i=0;i<name1.length;i++){
//         if (name1[i]-'0' >0 || name1[i]-'0'<=0 )
//         {
//             alert("how your name have number ^-^");
//             name1= prompt ("input Your Name");
//         }

//    }
//    if (name1[0] !='')start =false;
// }

// let gender = prompt ("input Your gender");
// let age = prompt ("input Your age");
// gender=gender.toLowerCase().trim();
// while (age<=0){
//     alert (`how your age is ${age}`);
//     age = prompt ("Could you please enter a valid age");
//     if (age>0){alert("thanks")}
// }

// let agree = confirm ("Do you want to skip the welcoming message?");
// if (!agree){
//     if (gender=="female"){
// alert(`Welcome Ms ${name1} in TodoGenius`);
//     }
//     else if (gender=="male") {
//         alert(`Welcome Mr ${name1} in TodoGenius`);
//     }else{
//         alert(`Welcome ${name1} in TodoGenius`); 
//     }   
// }

// function questions ()
// {
//     var arrayQuestions=["Do you enjoy reading books?","Have you ever been to a music festival?","Have you ever tried a food from a different culture that you didn't like?"]

//     return arrayQuestions;
// }

// function ans (arrayQuestions){
//     let arrAns=[];
//     for (let i=0;i<arrayQuestions.length;i++){
//         let answer=prompt(arrayQuestions[i]);
//         answer=answer.toLowerCase();
//            if (answer=="yes")
//        {arrAns.push("yes");}
//        else if(answer=="no") 
//        {arrAns.push("no");}
//        else {
//        {arrAns.push('an "invalid" string');}
//        }
//                                        }
//         return arrAns;
// }
// function print (arrayQuestions,arrAns){
// if (arrayQuestions.length != arrAns.length) console.log("ERRor");
// for (let i=0;i<arrAns.length;i++)
// {
// console.log(`Question ${i+1}:`,arrayQuestions[i]);
// console.log(`Answer:`,arrAns[i]);
// }
// }

// function call () {
// let question= questions();
// let answer= ans(question);
// print(question,answer);
// }
// call();
let count = 0;
const statTd = document.getElementById('table');
const btn = document.getElementById('btn');
const tableBady = document.querySelector('tbody');
console.log();
let adding=false;
btn.addEventListener('click', (event) => {
    
    if (adding == false) {
       
        adding = true;
        let form = document.createElement('form');
        document.querySelector('main').appendChild(form);
        let input = document.createElement('input');
        input.type = 'text';
        input.name = 'todo';

        
        form.appendChild(input);
        let inputsubmit = document.createElement('input');
        inputsubmit.type = 'submit';
        inputsubmit.value = 'let`s Do';
        form.appendChild(inputsubmit);
        let main1 = document.querySelector('.main1');
        main1.remove();
        btn.classList.add('disabled');
        
        
        
        form.addEventListener('submit', (e) => {
            if (adding==true && input.value !=''){
                adding = false;
                e.preventDefault();
                let textinput=input.value;
                input.value='';
                let tr = document.createElement('tr');
                tableBady.appendChild(tr);
                let td1 = document.createElement('td');
                td1.innerText = textinput;
                tr.appendChild(td1);
                let td2 = document.createElement('td');
                tr.appendChild(td2);
                let div = document.createElement('div');
                div.className = 'uncop';
                td2.appendChild(div);
              
              
                 }
        });
      

    }
   
});
statTd.addEventListener('click', (e) => {
    if (e.target.className == 'uncop') {
        e.target.className = 'cop';
    } else if (e.target.className == 'cop') {
        e.target.className = 'uncop';
    }

});