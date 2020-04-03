@isTest
private class restCalloutTest {
    
    @isTest
    private static void test1() {
        Test.setMock(HttpCalloutMock.class, new mockResponse());
        
        Test.startTest(); //Start and stop test are essential!
            //Call callout class
        Test.stopTest();

        //Asserts
    }

    @isTest
    private static void test2() {
        Test.setMock(HttpCalloutMock.class, new mockResponse());
        
        Test.startTest(); //Start and stop test are essential!
            //Call callout class
        Test.stopTest();

        //Asserts
    }

    private class mockResponse implements HttpCalloutMock {
        
        //Calls one of the below 
        public HTTPResponse respond(HTTPRequest req) {
            HttpResponse resp = new HttpResponse();
            mockResponse mr = new mockResponse();
            if(req.getEndpoint().contains('value1')) resp = mr.response1();
            else if(req.getEndpoint().contains('value2')) resp = mr.response2();
            //else resp = mr.createbiGetFileResponse(); 
            return resp;
        }

        private HttpResponse response1() {
            HttpResponse resp = new HttpResponse();
                resp.setHeader('Content-Type', 'application/json');
                resp.setBody('I have a body');
                resp.setStatusCode(200);
            return resp;
        }

        private HttpResponse response2() {
            HttpResponse resp = new HttpResponse();
                resp.setHeader('Content-Type', 'application/json');
                resp.setBody('I have a longer, somewhat different body');
                resp.setStatusCode(200);
            return resp;
        }
    }
}
