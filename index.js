let count = 0;

document.getElementById('submit').addEventListener('click',(event)=>{
    event.preventDefault();
   
    document.getElementById('tname').innerHTML = document.getElementById('name').value.toUpperCase();
    document.getElementById('temail').innerHTML = document.getElementById('email').value;
    document.getElementById('tphone').innerHTML = document.getElementById('phone').value;
    document.getElementById('tadhar').innerHTML = document.getElementById('adhar').value;
    document.getElementById('taddress').innerHTML = document.getElementById('address').value.toUpperCase();
    // document.getElementsByClassName('card')[0].style.display = "grid";
    document.getElementById('next').style.display = "block";

})

document.getElementById('next').addEventListener('click',()=>{

    let elements = document.getElementsByClassName('inp')
    let inputs = document.getElementsByTagName('input');
    console.log(elements)

    
    for(let i of elements){
        i.innerHTML = ""
    }
    for(let i of inputs){
        i.value = ""
    }
    
})