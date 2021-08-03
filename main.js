

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

            divid1.style.display = 'flex'
            divid1.style.flexWrap = 'wrap'
            divid1.style.textAlign = 'center'
            divid1.style.paddingTop = '40px'
            divid1.style.columnGap = '40px'
            divid1.style.paddingLeft = '98px'
            detaillink.style.display = 'flex'
            detaillink.style.width = '58px'
            detaillink.style.marginLeft = '240px'
            detaillink.style.marginTop = '19px'
            detaillink.style.background = 'SkyBlue'
            detaillink.style.borderRadius ='3px'
            detaillink.style.textDecoration = 'none'
            userdiv.style.background = 'MediumSpringGreen'
            userdiv.style.borderRadius = '10px'
            userdiv.style.width = '45%'
            userdiv.style.marginBottom = '40px'
            userdiv.style.height = '70px'
            userdiv.style.paddingTop = '10px'



        }
    });











