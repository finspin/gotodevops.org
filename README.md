[![Build Status](https://travis-ci.org/finspin/gotodevops.org.svg?branch=master)](https://travis-ci.org/finspin/gotodevops.org)

# What is this repo?

This is the source code for the website [gotodevops.org](http://www.gotodevops.org).

# How can I contribute?

To add a new conference, modify the [conferences.yml](https://github.com/finspin/gotodevops.org/blob/master/src/conferences.yml) file and submit a pull request.

## Data format

```
- name: name of the conference
  url: URL of the conference site
  location:
    city: city where the conference takes place
    country: country where the conference takes place
    continent: continent where the conference takes place [ North America, South America, Europe, Asia, Africa, Australia, Antarctica]
  date:
    start: start date of the conference, e.g. 2019-10-22
    end: end date of the conference, e.g. 2019-10-25
  temperature:
    celsius: average temperature in the city during the conference in Celsius, e.g. 18
    fahrenheit: average temperature in the city during the conference in Fahrenheit, e.g. 65
  cost: [free, 1, 2, 3] under $300/day = 1, under $600/day = 2, over $600/day = 3
```
