 
   const donationTab=document.getElementById('Donation-btn');
   donationTab.addEventListener('click',function(){
      donationTab.classList.add('bg-yellow-300');
      // historyTab.classList.add('border-2');
       document.getElementById('History-bnt').classList.remove('bg-yellow-300')
      //  document.getElementById('Donation-btn').classList.add('bg-gray-100')
      //  document.getElementById("History-bnt").classList.remove('bg-gray-100')

   })

   const historyTab=document.getElementById('History-bnt');
   historyTab.addEventListener('click',function(){
      historyTab.classList.add('bg-yellow-300');
      // donationTab.classList.add('border-2');
       document.getElementById('Donation-btn').classList.remove('bg-yellow-300')
      //  document.getElementById("History-bnt").classList.add('bg-gray-100')
      //  document.getElementById('Donation-btn').classList.remove('bg-gray-100')

   })


 
 
 
 
 // page donation change or history
 document.getElementById('Donation-btn').addEventListener('click',function(){
    document.getElementById('Donate-section').classList.remove('hidden')
   //  document.getElementById('History-section').classList.add('hidden')
    document.getElementById('History Section').classList.add('hidden')
    document.getElementById('blog-section').classList.add('hidden')

 })

document.getElementById('History-bnt').addEventListener('click',function(){
 document.getElementById('Donate-section').classList.add('hidden');
//  document.getElementById('History-section').classList.remove('hidden')
 document.getElementById('History Section').classList.remove('hidden')
 document.getElementById('blog-section').classList.add('hidden')

})
document.getElementById('blog-btn').addEventListener('click',function(){
   document.getElementById('Donate-section').classList.add('hidden')
   document.getElementById('History Section').classList.add('hidden')
   document.getElementById('blog-section').classList.remove('hidden')
   document.getElementById('home-page').classList.add('hidden')
   document.getElementById('button').classList.add('hidden')
})
document.getElementById('Home-btn').addEventListener('click',function(){
   document.getElementById('Donate-section').classList.remove('hidden')
   document.getElementById('History Section').classList.add('hidden')
   document.getElementById('blog-section').classList.add('hidden')
   document.getElementById('home-page').classList.remove('hidden')
   document.getElementById('button').classList.remove('hidden')
})





// function showSectionById(id){
//  document.getElementById('Donate-section').classList.add('hidden');
//  document.getElementById('History Section').classList.add('hidden');
//  document.getElementById('History-container').classList.add('hidden');
//  document.getElementById(id).classList.remove('hidden');
// }
