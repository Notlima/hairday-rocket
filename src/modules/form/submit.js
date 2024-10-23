import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

//Data atual para input 
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual e a define como data minima
selectedDate.value = inputToday
selectedDate.min = inputToday


form.onsubmit = (event) => {
  //previne carregamento padrão da pagina 
  event.preventDefault()

  console.log("enviado")
}