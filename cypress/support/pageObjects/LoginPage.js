class LoginPage
{
    getUsernameInput()
    {
       return cy.get('#user-name')
    }

    getPasswordInput()
    {
       return cy.get('#password')
    }

    getLoginBtn()
    {
       return cy.get("#login-button")
    }

    getErrorMsg()
    {
       return cy.get('[data-test="error"]')
    }

}

export default LoginPage