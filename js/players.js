const  inputBtn = () =>{
   inSpinner('block')
    const inputInner = document.getElementById('input_inner')
    const inputValue = inputInner.value
   document.getElementById('container_div').innerHTML = ''
    if( inputValue == ""){
      errorMsg('block')
      inSpinner('none')
    }
    else{
       errorMsg('none')
       const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputValue}`
       console.log(inputValue)
       fetch(url)
       .then( res => res.json())
       .then ( data => displayInfo(data.player))
    }
    inputInner.value = ""
 }
 
 const displayInfo = (data) =>{
    const containerDiv = document.getElementById('container_div')
    containerDiv.innerHTML = " "
    if( data == null ){
       searchResult('block')
       inSpinner('none')
    }
    else{
      data?.forEach( datas => {
         const div = document.createElement('div')
         div.classList.add('col')
         div.innerHTML = `
         <div class="card">
               <img src="${datas.strThumb}" class="card-img-top" alt="...">
               <div class="card-body">
                  <h5 class="card-title">${datas.strPlayer}</h5>
                  <p class="card-text">${datas.strDescriptionEN.slice(0, 200)}</div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item"> Nationality: ${datas.strNationality}</li>
                    <li class="list-group-item">Team: ${datas.strTeam}</li>
                    <li class="list-group-item">Position: ${datas.strPosition}</li>
                    <li class="list-group-item"> Height: ${datas.strHeight}</li>
                    <li class="list-group-item"> Weight: ${datas.strWeight}</li>
                  </ul>
                  <div class="card-footer">
                  <small class="text-muted"> Birth Location: ${datas.strBirthLocation}</small>
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