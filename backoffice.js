 
const addressBarContent = new URLSearchParams(location.search)
const eventId = addressBarContent.get("eventId")
console.log("eventId") 

  const formReference = document.getElementById("form")
formReference.addEventListener("submit", function (e) {
  e.preventDefault() 
  console.log("invio i dati")

       const nameInput = document.getElementById("name")
      const descriptionInput = document.getElementById("description")
      const brandInput = document.getElementById("brand")
      const imageUrlInput = document.getElementById("imageUrl")
       const priceInput = document.getElementById("price")

     

      const newEvent = {
      name:nameInput.value,
      description:descriptionInput.value,
      brand : brandInput.value,
      imageUrl : imageUrlInput,
       price : priceInput, }
       console.log("ecco cosa mando",newEvent)

       fetch("https://striveschool-api.herokuapp.com/api/product/", {
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI5MDNmNzEzOWM0MzAwMTg4MTQ1YzciLCJpYXQiOjE2OTcxODY4MDcsImV4cCI6MTY5ODM5NjQwN30.PCkAshq2HmfQZU3teqwC6BsgcnDNvgJxRGluZPOibXI",
"Content-Type" :"application/json",
},
})

.then((res) =>{
  if(res.ok){
    alert("salvato!")
  }else{
    alert("ERRORE ERRORE")
    throw new Error("errore nel post")
    
  }
})
.catch((err) => {
  console.log("si è verificato un errore",err)
})
})
let methodToUse = "POST"
  if (eventId) {
    methodToUse = "PUT"
  }
let urlToUse = "https://striveschool-api.herokuapp.com/api/product/"
  if (eventId) {
    urlToUse = "https://striveschool-api.herokuapp.com/api/product/" + eventId
  }
  fetch (urlToUse, {
    method: methodToUse,
    body: JSON.stringify("newEvent"), 
    headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI5MDNmNzEzOWM0MzAwMTg4MTQ1YzciLCJpYXQiOjE2OTcxODY4MDcsImV4cCI6MTY5ODM5NjQwN30.PCkAshq2HmfQZU3teqwC6BsgcnDNvgJxRGluZPOibXI",

      'Content-Type': 'application/json', 
      
    },
  })
    .then((res) => {
      console.log('OGGETTO RESPONSE DELLA NOSTRA CHIAMATA POST', res)
      if (res.ok) {
        
        alert('EVENTO SALVATO CORRETTAMENTE!')
      } else {
       
        alert("ERRORE NEL SALVATAGGIO DELL'EVENTO")
        throw new Error('Errore nella POST')
      }
    })
    .catch((err) => {
      console.log('Si è verificato un errore:', err)
    })



    

  