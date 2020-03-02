//remove attributes (track, api, wire) not needed
import { LightningElement, track, api } from 'lwc';

export default class BasicSetup extends LightningElement {
    @track greeting = 'World';
    changeHandler(event) {
        this.greeting = event.target.value;
    }
    @api title = 'default component value'; //Can be edited by parent application or parameters (set in XML)
    @api getParamPicklist;
    @api recordId;
    @api doAThing() {
        //Does thing that can be called from a parent component
    }
	
	//Both @track and @api make the component re-render based on a variable change.
    //@api makes the var public and editable from other components. @track makes it private to this component

    //connectedCallback() //This runs on init
    
}