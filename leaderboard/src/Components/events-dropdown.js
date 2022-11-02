import React, { Component } from 'react';

export class EventsDropdown extends Component {
    render() 
    {
        return (
        <select name="event-names" id="event-names">
        <option value="event1">1k</option>
        <option value="event2">2k</option>
        <option value="event3">3k</option>
        <option value="event4">4k</option>
        <option value="event5">5k</option>
        <option value="event6">6k</option>
        <option value="event7">7k</option>
        <option value="event8">8k</option>
        <option value="event8">9k</option>
        </select>
        )
    }
}