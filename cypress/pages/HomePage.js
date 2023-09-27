class HomePage {

    getProfilePicture() {
        cy.get('alt="profile picture"');
    }

    clickAdmin() {
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
    }

    clickUserManagement() {
        cy.get('div.oxd-layout div.oxd-layout-navigation header.oxd-topbar div.oxd-topbar-body nav.oxd-topbar-body-nav ul:nth-child(1) li.oxd-topbar-body-nav-tab.--parent.--visited:nth-child(1) > span.oxd-topbar-body-nav-tab-item').click();
        cy.get('[role="menuitem"]').click();
    }

    fillFilterUsernameField(value1) {
        const field = cy.get('div.oxd-layout div.oxd-layout-container div.oxd-layout-context div.orangehrm-background-container div.oxd-table-filter:nth-child(1) div.oxd-table-filter-area form.oxd-form div.oxd-form-row div.oxd-grid-4.orangehrm-full-width-grid div.oxd-grid-item.oxd-grid-item--gutters:nth-child(1) div.oxd-input-group.oxd-input-field-bottom-space div:nth-child(2) > input.oxd-input.oxd-input--active');
        field.clear();
        field.type(value1);
    }

    selectUserRole(userrole) {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
        //dropdown.click();
        if (userrole=='Admin') {
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').type('Admin');
        }else if(userrole=='ESS'){
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').type('ESS');
        }
    }

    fillEmployeeName(value2) {
        const field = cy.get('.oxd-autocomplete-text-input--active');
        field.clear();
        field.type(value2);
    }

    selectStatus(status) {
        const dropdown2 = cy.get('div.oxd-layout div.oxd-layout-container div.oxd-layout-context div.orangehrm-background-container div.oxd-table-filter:nth-child(1) div.oxd-table-filter-area form.oxd-form div.oxd-form-row div.oxd-grid-4.orangehrm-full-width-grid div.oxd-grid-item.oxd-grid-item--gutters:nth-child(2) div.oxd-input-group.oxd-input-field-bottom-space div:nth-child(2) div.oxd-select-wrapper div.oxd-select-text.oxd-select-text--active > div.oxd-select-text-input');
        dropdown2.click();
        if (status=='Enable') {
            dropdown2.type('Enable');
        }else if(status=='Disable'){
            dropdown2.type('Disable');
        }
    }

    clickUserSearch() {
        cy.get('.oxd-form-actions > .oxd-button--secondary').click();
    }

    clickRest() {
        cy.get('.oxd-button--ghost').click();
    }

    clickLogout() {
        cy.get('.oxd-userdropdown-icon').click();
        cy.get('[href="/web/index.php/auth/logout"]').click();
    }

}

export default HomePage;