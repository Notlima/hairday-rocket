import { scheduleCancel } from "../../services/schedule-cancel.js"
import { schedulesDay } from "./load.js"

const periods = document.querySelectorAll(".period")


//Gera evento click para cada lista (manhã , tarde, noite)
periods.forEach((period) => {
  //Captura o evento de clique na lista.
  period.addEventListener("click", async(event) =>{
    if(event.target.classList.contains("cancel-icon")){
      //Obtém a li pai do elemento clicado.
      const item = event.target.closest("li")

      //Pega o id do agendamento para remover
      const { id } = item.dataset

      //Confirma que o id foi selecionado
      if(id){
        //Confirma que o usuário quer cancelar
        const isConfirm = confirm("Deseja cancelar o agendamento?")

        if(isConfirm){
          //Faz a requisição na API para cancelar
          await scheduleCancel({ id })

          //Recarrega os agendamentos
          schedulesDay()
        }
      }
    }
  } )
})