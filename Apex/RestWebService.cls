@RestResource(urlMapping='/Accounts/*/contacts')
global with sharing class AccountManager {
    
    //There's a really good trailhead on writing custom rest services at 
    //https://trailhead.salesforce.com/en/content/learn/modules/apex_integration_services/apex_integration_webservices
    //Use that for examples.
    
    //Gets the Account name and Id and the name and Id of related Contacts
    /*@httpGet
    global static Account getAccount() {
        RestRequest req = RestContext.request;
        String reqUrl = req.requestURI;
        if(String.isBlank(reqUrl)) return null;
        
        Id accountId = parseURL(reqUrl);
        if(String.isBlank(accountId)) return null;

        List<Account> acctShield = new List<Account>();
        acctShield = [SELECT Id, Name, (SELECT Id, Name FROM Contacts) FROM Account WHERE Id = :accountId];
        if(acctShield.size() == 0) return null;

        return acctShield[0];        
    }

    //Pull AccountId from the request URL
    private static Id parseURL(String reqUrl) {
        Integer initialPart = reqUrl.indexOf('Accounts/') + 9;
        Integer endPart = reqUrl.indexOf('/contacts');
        String acctId = reqUrl.substring(initialPart,endPart);
        if(String.isBlank(acctId)) return null;
        try {
            return (Id)acctId;
        }
        catch(Exception e) {
            return null;
        }
    }*/

    //Shitty version with no error handling
    @httpGet
    global static Account getAccount() {
        RestRequest req = RestContext.request;
        String reqUrl = req.requestURI;      
        Id accountId = shittyparseURL(reqUrl);
        return [SELECT Id, Name, (SELECT Id, Name FROM Contacts) FROM Account WHERE Id = :accountId];     
    }

    //Pull AccountId from the request URL. Shitty version with no error handling
    private static Id shittyparseURL(String reqUrl) {
        Integer initialPart = reqUrl.indexOf('Accounts/') + 9;
        Integer endPart = reqUrl.indexOf('/contacts');
        String acctId = reqUrl.substring(initialPart,endPart);
        return (Id)acctId;
    }
}
