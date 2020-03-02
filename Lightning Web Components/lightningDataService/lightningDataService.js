import { LightningElement, api} from 'lwc';

export default class LightningDataService extends LightningElement {
    @api recordId = null; //If you wanted to get the Id from an existing page, having @api in front will do it.
                          // Unless its a community, in which case you need to add a recordId parameter to the XML
                          //See basicSetup for an example.
    
    connectedCallback() { //This runs on init
        var objKey = '003'; //This is the first 3 chars of the object
        var pageURL = window.location.href;
        if(pageURL && pageURL.indexOf(objKey) != -1) {
            var theId = pageURL.substring(pageURL.indexOf(objKey),pageURL.indexOf(objKey)+18);
            if(theId) this.recordId = theId;
        } 
    }
    
    //handleSubmit() {} //This overrides the default submit action if the component had an onsubmit tag. See onsuccess
    //You can also handle errors and load events I believe

    handleSuccess(event) {
        console.log('onsuccess: ' + event.detail.id);
     }
}