let promise = new Promise((resolve,reject)=>{
  
alert("desi balak gama ke hum")
  resolve(69);
})

document.body.appendChild(document.createElement("h3")).innerText = `aaj hum karege pt ${promise.value}`;

document.body.appendChild(document.createElement("h1")).innerText = `My name is shady`;

setTimeout(function() {
   document.body.appendChild(document.createElement("h2")).innerText = `ram ram bhai sareya ne`;
  
},1000)


 