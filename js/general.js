/******* SORT TABLE ********/
var options = {
    valueNames: [ { name: 'name', attr: 'data-name' }, 'city', 'country', { name: 'date', attr: 'data-start-date' }, 'cost' ]
};

var mobileOptions = {
    valueNames: [ { name: 'name', attr: 'data-name' }, { name: 'date', attr: 'data-start-date' }, 'cost' ]
};

var conferenceList = new List('conferences', options);
var conferenceListMobile = new List('conferences-mobile', mobileOptions);
