

// Donation Box---1
document.getElementById('Donate-btn-1')
       .addEventListener('click',function(){

        const addmoney = getInputFiledValueById('addmoney-1');

        if( isNaN(addmoney) ){
            alert('Wronge Money!')
            return;
        }
       
        if( typeof addmoney === 'number' && addmoney >= "0"){
            const balance = getTextFiledValueById('balance-1')
            const mainBalance = getTextFiledValueById('main-balance')

            if(addmoney < mainBalance){
                // const balance = getTextFiledValueById('balance-1');
                const newBalance = balance + addmoney;
                
                document.getElementById('balance-1').innerText = newBalance;
                const newMainBalance = mainBalance - addmoney;
                document.getElementById('main-balance').innerText = newMainBalance;
                
                
                
                
                // history

                const p = document.createElement('p')
                p.innerText =` ${addmoney} Taka is Donated for Donate for Flood at Noakhali,Bangladesh

                 `;
                
                p.style.border = "2px solid black"
                p.style.width ="970px"
                p.style.marginLeft ="140px"
                p.style.padding = "20px"
                p.style.borderRadius = "8px"
                p.style.marginBottom ="10px"
                p.style.marginTop = "30px"
                document.getElementById('History-container').appendChild(p);
                const div = document.createElement('div');
                const currentDate = new Date().toLocaleString();
                // historyItems.innerHTML = `<p class="text-sm text-gray-500">Date: ${currentDate}</p>`;
                 div.innerText = `Date : ${currentDate}`;
                 div.style.paddingLeft = "170px"
                 div.style.marginTop = "-50px"
                document.getElementById('History-container').appendChild(div);
                // historyConteiner.insertBefore(historyConteiner.lastChild);
                document.getElementById('my_modal_1').showModal()
                        
               

                
  
                

            
            }

            else if(addmoney > mainBalance){
                alert('Invalid Money!')
                 return;
            }

            }
            else{
                alert('Invalid Donate Amount')
            }
        
       })
    //    Donation Box --------2


document.getElementById('Donate-btn-2')
       .addEventListener('click',function(){

        const addmoney = getInputFiledValueById('addmoney-2');
        

        

        if( isNaN(addmoney) ){
            alert('Wronge Money!')
            return;
        }
       
        if( typeof addmoney === 'number' && addmoney >= "0"){
            const balance = getTextFiledValueById('balance-2')
            const mainBalance = getTextFiledValueById('main-balance')

            if(addmoney < mainBalance){
                // const balance = getTextFiledValueById('balance-1');
                const newBalance = balance + addmoney;
                
                document.getElementById('balance-2').innerText = newBalance;
                const newMainBalance = mainBalance - addmoney;
                document.getElementById('main-balance').innerText = newMainBalance;

                 // history

                 const p = document.createElement('p')
                 p.innerText =` ${addmoney} Taka is Donated for Donate for Flood Relief in Feni,Bangladesh 
                 
                 `;
                 p.style.border = "2px solid black"
                 p.style.width ="970px"
                 p.style.marginLeft ="140px"
                 p.style.padding = "20px"
                 p.style.borderRadius = "8px"
                 p.style.marginBottom ="10px"
                 p.style.marginTop = "30px"
                 document.getElementById('History-container').appendChild(p);

                 const div = document.createElement('div');
                 const currentDate = new Date().toLocaleString();
    
                  div.innerText = `Date : ${currentDate}`;
                  div.style.paddingLeft = "170px"
                  div.style.marginTop = "-50px"
                 document.getElementById('History-container').appendChild(div);
                 document.getElementById('my_modal_1').showModal()
                 
            }

            else if(addmoney > mainBalance){
                alert('Invalid Money!')
                 return;
            }

            }
            else{
                alert('Invalid Donate Amount')
            }
        
       })


        //    Donation Box --------3

document.getElementById('Donate-btn-3')
       .addEventListener('click',function(){

        const addmoney = getInputFiledValueById('addmoney-3');
        

        

        if( isNaN(addmoney) ){
            alert('Wronge Money!')
            return;
        }
       
        if( typeof addmoney === 'number' && addmoney >= "0"){
            const balance = getTextFiledValueById('balance-3')
            const mainBalance = getTextFiledValueById('main-balance')

            if(addmoney < mainBalance){
                // const balance = getTextFiledValueById('balance-1');
                const newBalance = balance + addmoney;
                
                document.getElementById('balance-3').innerText = newBalance;
                const newMainBalance = mainBalance - addmoney;
                document.getElementById('main-balance').innerText = newMainBalance;

                 // history

                 const p = document.createElement('p')
                 p.innerText =` ${addmoney} Taka is Donated for Donate Aid for Injured in the Quota Movement,Bangladesh
                 
                 `;
                 
                 p.style.border = "2px solid black"
                 p.style.width ="970px"
                 p.style.marginLeft ="140px"
                 p.style.padding = "20px"
                 p.style.borderRadius = "8px"
                 p.style.marginBottom ="20px"
                 p.style.marginTop = "30px"
                 document.getElementById('History-container').appendChild(p);

                 const div = document.createElement('div');
                 const currentDate = new Date().toLocaleString();
                 // historyItems.innerHTML = `<p class="text-sm text-gray-500">Date: ${currentDate}</p>`;
                  div.innerText = `Date : ${currentDate}`;
                  div.style.paddingLeft = "170px"
                  div.style.marginTop = "-50px"
                 document.getElementById('History-container').appendChild(div);
                 // historyConteiner.insertBefore(historyConteiner.lastChild);
                 document.getElementById('my_modal_1').showModal()
            }

            else if(addmoney > mainBalance){
                alert('Invalid Money!')
                 return;
            }

            }
            else{
                alert('Invalid Donate Amount')
            }
        
       })


    