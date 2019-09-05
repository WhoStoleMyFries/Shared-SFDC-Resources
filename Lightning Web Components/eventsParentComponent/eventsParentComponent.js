import { LightningElement, track } from 'lwc';

export default class EventsParentComponent extends LightningElement {
    receivedVal = 0;
    passThisDown = 'Hi'; 
    
    doSelectedAction(event) {
        console.log('Received value of: '+event.detail);
        this.receivedVal = event.detail;
        this.template.querySelector('c-events-child-component').incrementValue(); //This calls the @api function
    }
}