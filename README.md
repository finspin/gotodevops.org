[![Build Status](https://travis-ci.org/finspin/gotodevops.org.svg?branch=master)](https://travis-ci.org/finspin/gotodevops.org)

# What is this repository?

This is the source code for the website [gotodevops.org](http://www.gotodevops.org).

# How can I contribute?

To add a new conference, send an email with the conference website URL to _hello@gotodevops.org_ or [fork](https://guides.github.com/activities/forking/) this repository, modify the [conferences.json](https://github.com/finspin/gotodevops.org/blob/master/static/conferences.json) file and submit a pull request.

## Data format

If you submit a pull request with the conference details, please follow the format of this example:

```
{
    "name": "QCon New York",
    "url": "https://qconnewyork.com/",
    "location": {
      "city": "New York City",
      "country": "USA",
      "continent": "North America"
    },
    "date": {
      "start": "2019-06-24T00:00:00.000Z",
      "end": "2019-06-28T00:00:00.000Z"
    },
    "temperature": {
      "celsius": 80,
      "fahrenheit": 26
    },
    "cost": 3
}
```

* **name**: Name of the conference

* **url**: URL of the conference website

* **location**:
  * **city**: City where the conference takes place
  * **country**: Country where the conference takes place
  * **continent**: Continent where the conference takes place. Enter one of the following: _North America_, _South America_, _Europe_, _Asia_, _Africa_, _Australia_, _Antarctica_
* **date**:
  * **start**: Start date of the conference, e.g. `2019-06-24T00:00:00.000Z`
  * **end**: End date of the conference, e.g. `2019-06-26T00:00:00.000Z`
* **temperature**:
  * **celsius**: Average temperature in the city during the conference in Celsius, e.g. 18. To find out the temperature, google e.g. _weather new york february_ and switch to Celsius.
  * **fahrenheit**: Average temperature in the city during the conference in Fahrenheit, e.g. 65. To find out the temperature, google e.g. _weather new york february_ and switch to Fahrenheit.
* **cost**: Cost of the conference ticket. Estimate the average price per day based on the total ticket cost and the number of days. Enter one of the following values: _unknown_, _0_, _1_, _2_ or _3_. Use the following cost mapping: 
  * free = 0
  * less than $300/day = 1
  * less than $600/day = 2
  * more than $600/day = 3
