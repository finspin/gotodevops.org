[![Build Status](https://travis-ci.org/finspin/gotodevops.org.svg?branch=master)](https://travis-ci.org/finspin/gotodevops.org)

# What is this repo?

This is a source code for the website [gotodevops.org](http://www.gotodevops.org).

# How can I contribute?

To add a new conference, modify the [conferences.yml](https://github.com/finspin/gotodevops.org/blob/master/_data/conferences.yml) file and submit a pull request. To get the epoch timestamp for the `start-date` field you can use [https://www.epochconverter.com/](https://www.epochconverter.com/).

## Data format

```
- name: name of the conference
  url: URL of the conference
  location:
     city: e.g. New York
     country: e.g. USA
  date: e.g. January 18 - 19, 2018
  start-date: epoch timestamp, e.g. 1516276800 (use [https://www.epochconverter.com/](https://www.epochconverter.com/) to generate)
  cost: [free, 1, 2, 3] under $400/day: 1, under $800/day: 2, over $800/day: 3
```
