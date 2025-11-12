console.log('hi world')

let url =
  'https://api.genratr.com/?length=16&uppercase&lowercase&special&numbers'

const inputPasswordEl = document.querySelector('#password')
const copyBtn = document.querySelector('#copyBtn')
const GenerateBtn = document.querySelector('#genrateBtn')

async function fetchData() {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      console.log('something is wrong')
      return
    }
    return await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

GenerateBtn.addEventListener('click', async () => {
  const data = await fetchData()
  const { password } = data
  inputPasswordEl.value = password
})

copyBtn.addEventListener('click', () => {
  navigator.clipboard
    .writeText(inputPasswordEl.value)
    .then(() => {
      alert('Copied to clipboard!')
    })
    .catch((err) => {
      console.error('Failed to copy:', err)
    })
})
