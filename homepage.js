
const renderEvents = function (arrayOfEvents) {
 
  const row = document.getElementById('events-row')

  arrayOfEvents.forEach((event) => {
  
    const newCol = document.createElement('div')
    newCol.classList.add('col', 'col-12', 'col-sm-6', 'col-md-3')
    
    newCol.innerHTML = `
    <div class="card">
        <img src="https://m.media-amazon.com/images/I/81KorNCn0QL.jpg" class="card-img-top" alt="generic concert picture">
        <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text">${event.description}</p>
            <p class="card-text">${event.brand}</p>
            <p class="card-text">${event.imagUrl}</p>
            <p class="card-text">${event.price}</p>
            <a href="./detail.html?eventId=${
              event._id
            }" class="btn btn-primary">DETTAGLI</a>
        </div>
    </div>
    `
    row.appendChild(newCol)
  })
}


const getEvents = function () {
  
           fetch("https://striveschool-api.herokuapp.com/api/product/", {
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI5MDNmNzEzOWM0MzAwMTg4MTQ1YzciLCJpYXQiOjE2OTcxODY4MDcsImV4cCI6MTY5ODM5NjQwN30.PCkAshq2HmfQZU3teqwC6BsgcnDNvgJxRGluZPOibXI"
}
})

    .then((res) => {
      

      console.log('Response ottenuta dalla GET', res)
      if (res.ok) {
      
        return res.json()
      } else {
        throw new Error('Errore nel contattare il server')
      }
    })
    .then((events) => {
      console.log('EVENTS', events)
    
      
      renderEvents(events)
    })
    .catch((err) => {
      hideSpinner()
      console.log('Si è verificato un errore:', err)
    })
}

getEvents()
