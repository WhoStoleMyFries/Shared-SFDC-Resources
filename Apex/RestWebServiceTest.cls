@isTest
public with sharing class AccountManagerTest {
    
    //Create test Account
    private static Account newAcct() {
        Account a = new Account(name='I Dont Give a fuck');
        insert a;
        return a;
    }

    //Create test contacts
    private static List<Contact> newContacts(Integer numConts, Id acctId) {
        List<Contact> toInsert = new List<Contact>();
        for(Integer i = 0; i < numConts; i++) {
            Contact c = new Contact(LastName = 'gandolf #'+String.valueOf(i), FirstName = 'Grey', AccountId = acctId);
            toInsert.add(c);
        }
        insert toInsert;
        return toInsert;
    }

    //Creates rest request
    private static RestRequest createRequest(String acctId) {
        RestRequest request = new RestRequest();
            request.requestUri = 'https://alltrailheads-dev-ed.salesforce.com/services/apexrest/Accounts/'+acctId+'/contacts';
            request.httpMethod = 'GET';
        return request;
    }

    @isTest
    private static void testMyClass() {
        Account a = newAcct();
        newContacts(2,a.Id);
        RestContext.request = createRequest((String)a.Id);
        Test.startTest();
            Account retA = AccountManager.getAccount();
        Test.stopTest();
    }
}
