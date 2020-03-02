import { LightningElement, track, wire } from 'lwc';
import doAThing from '@salesforce/apex/lwcApexCommunicationController.doAThing'; //Apex class called lwcApexCommunication. Public @AuraEnabled method called doAThing
import useWire from '@salesforce/apex/lwcApexCommunicationController.useWire';

export default class LwcApexCommunication extends LightningElement {

    //this is how you use wire. It is the preferred method for data retrieval but can't be used for any database saves
    @wire(useWire, {name : 'DoesntMatter'}) accounts;
    
    @track output;
    @track error;

    handleClick() {
        doAThing( {
            input: 'Im a text input', 
            otherInput: 123
        } )
        .then(result => {
            this.output = result;
            this.doSomethingWithResponse();
        })
        .catch(error => {
            this.error = error; 
            console.log('I failed: '+this.error);
        })
    }

    doSomethingWithResponse() {
        console.log('I got a response: '+this.output);
    }


}