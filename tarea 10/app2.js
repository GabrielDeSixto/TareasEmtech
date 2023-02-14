const lista = document.querySelector('#listado')
fetch('./almacenamiento.json')
    .then((res) => res.json())
    .then((data)=>{
        data.forEach((producto)=>{
            const li = document.createElement('li');
            li.innerHTML =`
                <h4>${producto.name}</h4>
                <p>${producto.username}</p>
                <p>${producto.email}</p>
                <hr>
            `

            lista.append(li);
        })
    })