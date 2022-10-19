const button = document.querySelector('button')

const baseURL = "https://swapi.dev/api/"

const body = document.querySelector('body')

function swapiCall() {
    axios.get("https://swapi.dev/api/planets/2/")
    .then((results) => {
        console.log('hello')
        let {residents} = results.data
        for (let i = 0; i < residents.length; i++){
            let ul = document.createElement('ul')
            let li = document.createElement('li')

            axios.get(residents[i])

            .then((res) => {
                let {name} = res.data
                li.textContent = name
            }).catch((err) => {
                console.log(err)
            })

            ul.appendChild(li)
            body.appendChild(ul)
        }
    })
    .catch((error) => {
        console.log(error)
    })
}


button.addEventListener('click', swapiCall)