const ul = document.querySelector('ul')
// https://raw.githubusercontent.com/UserName/NameRepo/Branch/NameImg.png
function getApiGitHub() {
  fetch('https://api.github.com/users/Galaraz/repos')
    .then(async res => {

      if(!res.ok) {
        throw new Error(res.status)
      }

      var data = await res.json()

      data.map(item => {
        let li = document.createElement('li')

        li.innerHTML = `
        <strong>${item.name.toUpperCase()}</strong>
        <span>URL: ${item.url}</span>
        <span>Data Criação: 
          ${Intl.DateTimeFormat('pt-BR')
            .format(new Date(item.created_at))}
        </span>
      `
      ul.appendChild(li)

      })

    }).catch(e => console.log(e))
}

getApiGitHub()