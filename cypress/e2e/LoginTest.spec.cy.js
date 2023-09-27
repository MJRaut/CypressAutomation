import SignIn from '../pages/SignInPage'
import Home from '../pages/HomePage'

const home = new Home();
const login = new SignIn();

describe('Login Test Suite', () => {
    
    
    
    /*beforeEach(() => {
        login.visit();
    })*/

    

    it('Login Test with valid credentials', () => {
        login.visit();
        login.fillUsername('Admin');
        login.fillPassword('admin123');
        login.clickLogin();

        home.clickAdmin();
        home.clickUserManagement();
        home.fillFilterUsernameField('Alice.Duval');
        //home.selectUserRole('ESS');
        home.fillEmployeeName('Alice Duval');
        //home.selectStatus('Enable');
        //home.clickUserSearch();
        home.clickRest();
        //assert whether profile picture is displayed
    })

    

    /*it('Login Test with invalid credentials', () => {
        login.performLogin('Admin', 'admin1234');
        //assert whether error is displayed or not
    })*/

    afterEach(() => {
        //destroy db connection
    })
    


})