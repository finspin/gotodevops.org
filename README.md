[![Build Status](https://travis-ci.org/finspin/gotodevops.org.svg?branch=master)](https://travis-ci.org/finspin/gotodevops.org)

# What is this repository?

This is the source code for the website [gotodevops.org](http://www.gotodevops.org).

# How can I contribute?

To add a new conference, send an email with the conference website URL to _hello@gotodevops.org_ or clone this repository, modify the [conferences.yml](https://github.com/finspin/gotodevops.org/blob/master/src/conferences.yml) file and submit a pull request.

## Data format

If you submit a pull request with the conference details, please follow this format:

```
- name:
  url: 
  location:
    city:
    country:
    continent:
  date:
    start:
    end:
  temperature:
    celsius:
    fahrenheit:
  cost:
```

* **name**: Name of the conference

* **url**: URL of the conference website

* **location**:
  * **city**: City where the conference takes place
  * **country**: Country where the conference takes place
  * **continent**: Continent where the conference takes place. Enter one of the following: _North America_, _South America_, _Europe_, _Asia_, _Africa_, _Australia_, _Antarctica_
* **date**:
  * **start**: Start date of the conference in the format YYYY-MM-DD, e.g. 2019-10-22
  * **end**: End date of the conference in the format YYYY-MM-DD, e.g. 2019-10-25
* **temperature**:
  * **celsius**: Average temperature in the city during the conference in Celsius, e.g. 18. To find out the temperature, google e.g. _average weather new york february_ and switch to Celsius.
  * **fahrenheit**: Average temperature in the city during the conference in Fahrenheit, e.g. 65. To find out the temperature, google e.g. _average weather new york february_ and switch to Fahrenheit.
* **cost**: Cost of the conference ticket. Estimate the average price per day based on the total ticket cost and the number of days. Enter one of the following values: _free_, _1_, _2_ or _3_. Use the following mapping for the cost: < $300/day = 1, under $600/day = 2, over $600/day = 3
