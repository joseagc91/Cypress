class TodayTaskPage
{
    getAddTaskBtn()
    {
       return cy.get(".plus_add_button")
    }

    getTask()
    {
       return cy.get(".task_content")
    }

    getTaskMenu()
    {
       return cy.get("[data-testid='more_menu']")
    }

    getDeleteOption()
    {
       return cy.get("[id=':r7p:']")
    }

    getDeleteBtn()
    {
       return cy.contains("Eliminar")
    }

    getCancelBtn()
    {
       return cy.contains("Cancelar")
    }

}

export default TodayTaskPage