import { LightningElement, track, api } from 'lwc';

export default class EventsChildComponent extends LightningElement {
    @track value = 0;
    @api parentvalue; //This must be all lowercase for the parent to connect to it

    @api 
    incrementValue() {
        console.log('In increment value (child)');
        this.value++;
    }

    handleClick(event) {
        console.log('In handle click (child)');
        event.preventDefault(); // Prevents the anchor element from navigating to a URL.
        var selectedEvent = new CustomEvent('selected', { detail: this.value });
        this.dispatchEvent(selectedEvent);
    }    
}