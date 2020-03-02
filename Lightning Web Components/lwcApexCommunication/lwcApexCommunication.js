import { LightningElement, track, wire } from 'lwc';
import useWire from '@salesforce/apex/lwcApexCommunicationController.useWire';

export default class LwcApexCommunication extends LightningElement {

    //this is how you use wire. It is the preferred method for data retrieval but can't be used for any database saves
    @wire(useWire, {name : 'DoesntMatter'}) accounts;
    
    @track output;
    @track error;

    handleClick() {
        .then(result => {
            this.output = result;
            this.doSomethingWithResponse();
        })
    }

    doSomethingWithResponse() {
        console.log('I got a response: '+this.output);
    }


}