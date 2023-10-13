const addressBarContent = new URLSearchParams(location.search)

const eventId = addressBarContent.get('eventId') 
console.log(eventId)


const deleteEvent = function () {
            fetch("https://striveschool-api.herokuapp.com/api/product/" + eventId) ,{
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI5MDNmNzEzOWM0MzAwMTg4MTQ1YzciLCJpYXQiOjE2OTcxODY4MDcsImV4cCI6MTY5ODM5NjQwN30.PCkAshq2HmfQZU3teqwC6BsgcnDNvgJxRGluZPOibXI",
}
}
    .then((res) => {
      if (res.ok) {

        alert('EVENTO ELIMINATO')
        location.assign('./index.html') 
      } else {
        alert("Problema")
        throw new Error('Errore nella DELETE')
      }
    })
    .catch((err) => {
      console.log('ERRORE!', err)
    })
}

const generateEventDetails = function (details) {

  const row = document.getElementById('event-details')
  row.innerHTML = `
        <div class="col col-12 col-lg-6">
            <h2 class="text-center">DETTAGLI DELL'EVENTO</h2>
            <img
              src="https://m.media-amazon.com/images/I/81KorNCn0QL.jpg"
              class="w-100"
              alt=""
            />
            <h3 class="text-center mt-4">${details.name}</h3>
            <p>
              ${details.description}
            </p>
            <p>Quando:${new Date(details.time).toLocaleDateString('it-IT')}</p>
            <p>Prezzo: ${details.price}€</p>
            <button class="btn btn-danger" onclick="deleteEvent()">ELIMINA</button>
            <a class="btn btn-warning" href="./backoffice.html?eventId=${
              details._id
            }">MODIFICA</a>
        </div>
    `
}

const getSingleEventDetails = function () {
            fetch("https://striveschool-api.herokuapp.com/api/product/" + eventId) ,{
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI5MDNmNzEzOWM0MzAwMTg4MTQ1YzciLCJpYXQiOjE2OTcxODY4MDcsImV4cCI6MTY5ODM5NjQwN30.PCkAshq2HmfQZU3teqwC6BsgcnDNvgJxRGluZPOibXI",
}
}
    .then((res) => {
      if (res.ok) {
        // abbiamo ottenuto i dettagli del singolo evento su cui abbiamo cliccato
        // recuperiamo il suo JSON
        return res.json()
      } else {
        throw new Error('Errore nel caricamento dei dettagli')
      }
    })
    .then((eventData) => {
      
      generateEventDetails(eventData)
    })
    .catch((err) => console.log('ERRORE', err))
}

getSingleEventDetails()
