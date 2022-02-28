const  inputBtn = () =>{
   inSpinner('block')
    const inputInner = document.getElementById('input_inner')
    const inputValue = inputInner.value
    document.getElementById('container_div').innerHTML = ''
    if( inputValue == ""){
      errorMsg('block')
      inSpinner('none')
      searchResult('none')
      
    }
    else{
       errorMsg('none')
       const url = `https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=${inputValue}`
       fetch(url)
       .then( res => res.json())
       .then ( data => displayInfo(data.teams))
    }
    inputInner.value = ""
 }
 
 const displayInfo = (teams) =>{
    const containerDiv = document.getElementById('container_div')
    containerDiv.innerHTML = ""

    if( teams == null){
      searchResult('block')
       inSpinner('none')
    }
    else{
      teams?.forEach( team => {
         const div = document.createElement('div')
         div.classList.add('col')
         div.innerHTML = `
         <div class="card">
               <img src="${team.strStadiumThumb}" class="card-img-top" alt="...">
               <div class="card-body">
                  <h5 class="card-title"> Team Name: ${team.strTeam}</h5>
                  <p class="card-title"> Team Short Name: ${team.strTeamShort}</p>
                  <p class="card-title"> Alternate Team Name: ${team.strAlternate}</p>
                  <p class="card-text"> League: ${team.strLeague}</div>
                  <ul class="list-group list-group-flush border-0">
                    <li class="list-group-item border-0"> Keywords: ${team.strKeywords}</li>
                    <li class="list-group-item border-0"> Stadium: ${team.strStadium}</li>
                    <li class="list-group-item border-0"> Stadium Location: ${team.strStadiumLocation}</li>
                  </ul>
                  <div class="card-footer">
                  <small class="text-muted"> Design By: ${'Ahsahn Habib'}</small>
                  </div>
                </div> 
         `
         containerDiv.appendChild(div)
         inSpinner('none')
         searchResult('none')
      })
    }


 }


function errorMsg(style){
   const errorMsg = document.getElementById('erro_msg')
     errorMsg.style.display = style
}

function inSpinner(condition){
   const loading = document.getElementById('inSpinner')
   loading.style.display = condition
 }

 function searchResult(con) {
    const searchResult = document.getElementById('searchResult')
    searchResult.style.display = con
 }