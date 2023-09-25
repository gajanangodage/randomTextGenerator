const n= document.querySelector('h1');
const f =document.querySelector('button');
f.addEventListener('click',()=>
{
    fetch('https://type.fit/api/quotes')
    .then(response=>response.json())

    .then(data=>{
        const randomnumber = 
        Math.floor(Math.random()*data.length);
        n.innerText = data[randomnumber].text;
    })
})