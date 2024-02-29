async function main() {

  let data = await getNotices()
  let dataFiltered = getElementRandomByList(data, 6)
  const noticesWrapped = document.querySelectorAll('.notice')

  for (let i = 0; i < noticesWrapped.length; i++) {

    const title = document.createElement('h3')
    const paragraph = document.createElement('p')
    const image = document.createElement('img')

    title.innerText = dataFiltered[i].titulo
    paragraph.innerText = dataFiltered[i].resumen
    image.setAttribute('src', dataFiltered[i].imagen)

    noticesWrapped[i].appendChild(title)
    noticesWrapped[i].appendChild(paragraph)
    noticesWrapped[i].appendChild(image)
  }

}

function getNotices() {
  return fetch("https://deperu.com/api/rest/noticias.json")
    .then(res => res.json())
    .then(data => data)
}

function getElementRandomByList(array, n) {
  const tempArray = array
  const elements = []
  for (let i = 0; i < n; i++) {
    const indexRandom = Math.floor(Math.random() * tempArray.length);
    elements.push(tempArray.splice(indexRandom, 1)[0]);
  }
  return elements
}

main()