

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        let divid1 = document.getElementById('id1')
        for (let user of value) {
            let userdiv = document.createElement('div')
            let detaillink = document.createElement('a')
            userdiv.innerText = user.name
            detaillink.innerText = 'Get info'

            detaillink.href =`user-d.html?user=${JSON.stringify(user)}`

            divid1.appendChild(userdiv)
            userdiv.appendChild(detaillink)
        }
    });











