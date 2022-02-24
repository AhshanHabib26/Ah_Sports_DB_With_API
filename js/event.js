const  inputBtn = () =>{
    const inputInner = document.getElementById('input_inner')
    const inputValue = inputInner.value
    if( inputValue == ""){
      const errorMsg = document.getElementById('erro_msg')
      errorMsg.style.display = 'block'
      
    }
    else{
       const url = `https://www.thesportsdb.com/api/v1/json/2/searchevents.php?e=${inputValue}`
       fetch(url)
       .then( res => res.json())
       .then ( data => displayInfo(data.event))
    }
    inputInner.value = ""
 }
 
 const displayInfo = (event) =>{
    const containerDiv = document.getElementById('container_div')
    event.forEach( events => {
       const div = document.createElement('div')
       div.classList.add('col')
       div.innerHTML = `
       <div class="card">
             <img src="${events.strThumb}" class="card-img-top" alt="...">
             <div class="card-body">
                <h5 class="card-title"> Event Name: ${events.strEvent}</h5>
                <p class="card-title"> Alternate Event: ${events.strEventAlternate}</p>
                <p class="card-text">${events.strFilename}</div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">League: ${events.strLeague}</li>
                  <li class="list-group-item">Season: ${events.strSeason}</li>
                  <li class="list-group-item">Venue: ${events.strVenue}</li>
                  <li class="list-group-item">Country: ${events.strCountry}</li>
                  <li class="list-group-item">Status: ${events.strStatus}</li>
                </ul>
                <div class="card-footer">
                <small class="text-muted"> Event Date: ${events.dateEvent}</small>
                </div>
              </div> 
       `
       containerDiv.appendChild(div)
    })
 
 
 }