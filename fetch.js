fetch ('http://localhost:5000/products')

.then(function (response) {
        return response.json();
    })
    .then(function (information) {
        console.log( information);
    let items= document.getElementById('products');
    information.forEach (grocery => {
        let i = document.createElement('li')
        i.innerText = `${grocery.name}`
        items.appendChild(i)
    })
    })
    .catch(function (error) {

        console.log('error', error);
    });

    fetch ('http://localhost:5000/products/fruits')

    .then(function (response) {

        return response.json();
    })
    .then(function (information) {

        console.log( information);
    let items = document.getElementById('fruList');
    information.forEach (grocery => {

        let i = document.createElement('li')
        i.innerText = `${grocery.name}`
        items.appendChild(i)
    })
    })
    .catch(function (error) {

        console.log('error', error);
    });

    fetch ('http://localhost:5000/products/vegetables')


    .then(function (response) {

        return response.json();
    })
    .then(function (information) {
        console.log( information);
    let items = document.getElementById('vegList');
    information.forEach (grocery => {
        let i = document.createElement('li')
        i.innerText = `${grocery.name}`
        items.appendChild(i)
    })
    })
    .catch(function (error) {

        console.log('error', error);
    });



