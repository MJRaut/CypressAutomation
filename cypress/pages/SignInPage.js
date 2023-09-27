


class SignInPage {
    visit() {
        cy.visit('/auth/login');
    }

    fillUsername(value) {
        const field = cy.get('[name=username]');
        field.clear();
        field.type(value);
    }


    fillPassword(value) {
        const field = cy.get("[name=password]");
        field.clear();
        field.type(value);
    }

    clickLogin() {
        cy.get('.orangehrm-login-button').click();
    }

    getLogo() {
        cy.get('.orangehrm-login-branding > img');
    }

    performLogin(username, password) {

        const field1 = cy.get("[name=username]");
        field1.clear();
        field1.type(username);
        const field2 = cy.get("[name=password]");
        field2.clear();
        field2.type(password);
        cy.get(".orangehrm-login-button").click();

    }

    getErrorMessage() {
        return cy.get('.oxd-alert-content-text');
    }

    clickForgotPasswordLink() {
        cy.get('.orangehrm-login-forgot-header').click();
    }

}
export default SignInPage;