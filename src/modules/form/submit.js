import dayjs from "dayjs"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

//Data atual para formatar o input 
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual e a define como data minima
selectedDate.value = inputToday
selectedDate.min = inputToday


form.onsubmit = (event) => {
  //previne carregamento padrão da pagina 
  event.preventDefault()

  try {
    //Recuperando o nome do cliente
    const name = clientName.value.trim()

    if(!name){
      return alert("Informe o nome do cliente!")
    }

    //Recupera o horario selecionado
    const hourSelected = document.querySelector(".hour-selected")

    if(!hourSelected){
      return alert("Selecione um horario!")
    }

    //Recupera somente a hora
    const [hour] = hourSelected.innerText.split(":")

    //insere a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour")

    //Gera um ID
    const id = new Date().getTime()

    
    
    
  } catch (error) {
    alert("Não foi possivel realizar o agendamento")
    console.log(error)
  }
}