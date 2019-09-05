import { LightningElement, track } from 'lwc';

export default class UiActions extends LightningElement {
    @track showModal = false;
    @track showSpinner = false;

    showForm() { this.showModal = true; }
    hideForm() { this.showModal = false; }

    showSpinnerJS() {
        var spinnerOpenFor = 1500;
        this.showSpinner = true;
        
        //You need to close it via some action. LWC restricts use of async actions like setTimeout (I think. It didn't work)
    }
}