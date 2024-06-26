class LoginPage
{
    getEmailInput()
    {
       return cy.get('#element-0')
    }

    getPasswordInput()
    {
       return cy.get('#element-3')
    }

    getLoginBtn()
    {
       return cy.get("[data-gtm-id='start-email-login']")
    }

}

export default LoginPage