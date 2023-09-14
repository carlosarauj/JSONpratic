fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())

      .then((data) => {
        list(data)
      })

function list(data){
      let listaContainer = document.querySelector('#listaContainer')
      let ul = document.createElement('ul')
      data.forEach(item => {
            let li = document.createElement('li')
            li.textContent = item.name
            ul.appendChild(li)      
      });

      listaContainer.appendChild(ul)
}