/// <reference types="Cypress" />
import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from '../../../../support/pageObjects/LoginPage';
import AddTaskModal from '../../../../support/pageObjects/AddTaskModal';
import TodayPage from '../../../../support/pageObjects/TodayPage';
import { faker } from '@faker-js/faker';

const loginPage = new LoginPage();
const addTaskModal = new AddTaskModal();
const todayPage = new TodayPage();
var taskName;
var taskDescription;

Given('A User is logged into Todoist', () => 
{
    cy.visit(Cypress.env('url')+"/auth/login")
    cy.login(Cypress.env('email'), Cypress.env('password'));
    cy.url().should('include', '/app/today');
});

When('The User add random task', () => 
{
    taskName = faker.lorem.words(3);
    taskDescription = faker.lorem.words(3);
    todayPage.getAddTaskBtn().click();
    todayPage.getTaskModal().should('be.visible');
    addTaskModal.getTaskName().type(taskName);
    addTaskModal.getTaskDescription().type(taskDescription);
    addTaskModal.getSubmitBtn().click();
  });
  
  Then('The User should see the task in the task list', () => 
{
    cy.contains(taskName).should('be.visible');
});
  
  When('The User delete the task', () => 
{
    cy.get('.task_list_item__body').find('.task_list_item__content').each(($el, index, $list) => {

        const textTask=$el.find('task_content').text()
        if(textTask.includes(taskName))
        {
            
        cy.wrap($el).find(addTaskModal.getActionMenu()).click()
        .find(addTaskModal.getDeleteBtn()).click()

        }
        })

});
  
  Then('the task should not be in the task list', () => 
{
    cy.contains(taskName).should('not.exist');
});