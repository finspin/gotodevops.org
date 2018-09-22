<template>
  <a :href="conference.url">
    <div class="conference row">
      <div class="col-12">
        <div class="name">{{ conference.name }}</div>
      </div>
      <div class="col-12">
        <div class="location">{{conference.location.city }}, {{ conference.location.country}}</div>
      </div>
      <div class="col-7">
        <div class="date">
          <!--<i class="far fa-calendar-alt"></i> &lt;!&ndash;{{ conference.date.start }} - {{ conference.date.end }}&ndash;&gt;-->
          <i class="far fa-calendar-alt"></i> {{ conferenceDateRange(conference) }}
        </div>
      </div>
      <div class="col-3 weather">
        <div class="weather">
          <span v-if="conference.temperature.celsius < 10"><i class="far fa-snowflake"></i>️️</span>
          <span v-if="conference.temperature.celsius >= 10 && conference.temperature.celsius < 20"><i
            class="wi wi-day-cloudy"></i></span>
          <span v-if="conference.temperature.celsius >= 20"><i class="fas fa-umbrella-beach"></i>️</span> {{
          conference.temperature.celsius
          }}℃
        </div>
      </div>
      <div class="col-2">
        <div class="cost float-right">
          <div v-if="conference.cost === 0">FREE</div>
          <div v-if="conference.cost === 1">
            <i class="fas fa-dollar-sign"></i>
          </div>
          <div v-if="conference.cost === 2">
            <i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i>
          </div>
          <div v-if="conference.cost === 3">
            <i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i><i
            class="fas fa-dollar-sign"></i>
          </div>
          <div v-if="conference.cost === 'unknown'"><i class="far fa-question-circle"></i></div>
        </div>
      </div>
    </div>
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
    border-bottom: 1px solid #ececec;
    padding-top: 20px;
    padding-bottom: 10px;
  }

  .name {
    font-weight: bold;
    font-size: 18px;
    line-height: 1.4;
  }

  .location {
    color: grey;
    margin-bottom: 10px;
    font-size: 16px;
  }

  .date, .weather, .cost {
    color: #888;
    margin-bottom: 7px;
    font-size: 15px;
  }

  .weather {
    padding-right: 0;
    padding-left: 0;
    text-align: center;
  }

  /*Make cloud icon slightly lighter color*/
  .fa-cloud {
    color: #777;
  }

  a {
    text-decoration: none;
    text-underline: none;
    color: #333;
    display: block;
  }

</style>
