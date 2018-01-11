/******* SORT TABLE ********/
var options = {
    valueNames: [ { name: 'name', attr: 'data-name' }, 'city', 'country', { name: 'date', attr: 'data-start-date' }, 'cost' ]
};

var conferenceList = new List('conferences', options);
