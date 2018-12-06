<template>
  <a :href="conference.url">
    <div class="conference row">
      <div class="col-12">
        <div class="name">{{ conference.name }}</div>
      </div>
      <div class="col-12">
        <div class="location">{{conference.location.city }}, {{ conference.location.country}}</div>
      </div>
      <div class="col-6">
        <div class="date">
          <i class="far fa-calendar-alt mr-1"></i> {{ conferenceDateRange(conference) }}
        </div>
      </div>
      <div class="col-2 col-md-3 weather">
        <div class="weather">
          <span v-if="conference.temperature.celsius < 10"><i class="far fa-snowflake mr-1"></i>️️</span><span
          v-if="conference.temperature.celsius >= 10 && conference.temperature.celsius < 20"><i
          class="fa fa-cloud mr-1"></i></span><span v-if="conference.temperature.celsius >= 20"><i
          class="fas fa-umbrella-beach mr-1"></i>️</span>{{
          conference.temperature.celsius }}℃
        </div>
      </div>
      <div class="col-4 col-md-3 pl-0">
        <div class="cost float-right">
          <div v-if="conference.cost === 0">FREE</div>
          <div v-if="conference.cost === 1">
            < $300 / DAY
          </div>
          <div v-if="conference.cost === 2">
            < $600 / DAY
          </div>
          <div v-if="conference.cost === 3">
            > $600 / DAY
          </div>
          <div v-if="conference.cost === 'unknown'"><i class="far fa-question-circle"></i></div>
        </div>
      </div>
    </div>
    <hr>
  </a>
</template>

<script>
  export default {
    name: "Conference",
    props: {
      conference: {
        type: Object,
        required: true
      }
    },
    methods: {
      conferenceDateRange: (conference) => {
        const locale = 'en-us';
        const confStartDate = new Date(conference.date.start);
        const confEndDate = new Date(conference.date.end);

        const confStartDay = confStartDate.getDate();
        const confStartMonth = confStartDate.toLocaleString(locale, {month: "short"}).toUpperCase();
        const confStartYear = confStartDate.getFullYear();

        const confEndDay = confEndDate.getDate();
        const confEndMonth = confEndDate.toLocaleString(locale, {month: "short"}).toUpperCase();
        const confEndYear = confEndDate.getFullYear();

        let confDateRange;

        if (confStartDay === confEndDay && confStartMonth === confEndMonth) {
          confDateRange = confStartDay + ' ' + confStartMonth + ' ' + confStartYear
        } else if (confStartMonth === confEndMonth && confStartYear === confEndYear) {
          confDateRange = confStartDay + ' - ' + confEndDay + ' ' + confStartMonth + ' ' + confStartYear
        } else {
          confDateRange = confStartDay + ' ' + confStartMonth + ' - ' + confEndDay + ' ' + confEndMonth + ' ' + confStartYear
        }

        return confDateRange
      }
    }
  }
</script>

<style scoped>
  .conference {
    padding-top: 20px;
    padding-bottom: 10px;
  }

  .name {
    font-weight: 600;
    font-size: 19px;
    line-height: 1.4;
    color: #12263D;
  }

  .location {
    color: #8C9197;
    margin-bottom: 20px;
    font-size: 16px;
  }

  .date, .weather, .cost {
    color: #3f5167;
    font-size: 14px;
  }

  .date i, .weather i, .cost i {
    color: #576f87;
  }

  .weather {
    padding-right: 0;
    padding-left: 0;
    text-align: center;
  }

  /*Make cloud icon slightly lighter color*/
  .fa-cloud {
    color: #555;
  }

  a {
    text-decoration: none;
    text-underline: none;
    color: #333;
    display: block;
  }

  hr {
    margin-top: 2px;
    margin-bottom: 7px;
  }

</style>
