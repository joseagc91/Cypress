class AddTaskModal
{
    getTaskModal()
    {
       return cy.get("[data-testid='task_list_editor_wrapper']")
    }

    getTaskName()
    {
       return cy.get("[aria-label='Nombre de la tarea']")
    }

    getTaskDescription()
    {
       return cy.get("[aria-label='Descripción']")
    }

    getActionMenu()
    {
       return cy.get("[aria-controls='more-actions-menu']")
    }

    getPriorityBtn()
    {
       return cy.get("[id=':r1l:']")
    }

    getLabelsOptions()
    {
       return cy.get("#dropdown-select-5-popup")
    }

    getCancelBtn()
    {
       return cy.get("[aria-label='Cancelar']")
    }

    getSubmitBtn()
    {
       return cy.get("[aria-label='Añadir tarea']")
    }



}

export default AddTaskModal