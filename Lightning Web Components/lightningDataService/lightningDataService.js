import { LightningElement} from 'lwc';

export default class LightningDataService extends LightningElement {
    recordId = null;        
    connectedCallback() { //This runs on init
        var objKey = '003'; //This is the first 3 chars of the object
        var pageURL = window.location.href;
        if(pageURL && pageURL.indexOf(objKey) != -1) {
            var theId = pageURL.substring(pageURL.indexOf(objKey),pageURL.indexOf(objKey)+18);
            if(theId) this.recordId = theId;
        } 
    }
    
    //handleSubmit() {} //This overrides the default submit action if the component had an onsubmit tag. See onsuccess

    handleSuccess(event) {
        console.log('onsuccess: ' + event.detail.id);
     }
}