<template>
  <a :href="conference.url">
    <div class="conference row">
      <div class="col-12">
        <div class="name">{{ conference.name }} <span class="goto-symbol">&raquo;</span></div>
      </div>
      <div class="col-12">
        <div class="location">{{conference.location.city }}, {{ conference.location.country}}</div>
      </div>
      <div class="col-5 col-md-6 mr-0 pr-0">
        <div class="date">
          <font-awesome-icon :icon="['far', 'calendar-alt']" :style="{ color: '#3f5167' }" class="mr-1"/>
          {{ conferenceDateRange(conference) }}
        </div>
      </div>
      <div class="col-3 col-md-3 weather">
        <div class="weather">
          <font-awesome-icon v-show="conference.temperature.celsius < 10" icon="snowflake" :style="{ color: '#3f5167' }"
                             class="mr-1"/>
          <font-awesome-icon v-show="conference.temperature.celsius >= 10 && conference.temperature.celsius < 20"
                             icon="cloud" :style="{ color: '#3f5167' }" class="mr-1"/>
          <font-awesome-icon v-show="conference.temperature.celsius >= 20" icon="umbrella-beach"
                             :style="{ color: '#3f5167' }" class="mr-1"/>
          {{ conference.temperature.celsius }}℃
        </div>
      </div>
      <div class="col-4 col-md-3 pl-0">
        <div class="cost float-right">
          <div v-show="conference.cost === 0">FREE</div>
          <div v-show="conference.cost === 1">
            &lt; $300 / DAY
          </div>
          <div v-show="conference.cost === 2">
            &lt; $600 / DAY
          </div>
          <div v-show="conference.cost === 3">
            > $600 / DAY
          </div>
          <div v-show="conference.cost === 'unknown'">
            <font-awesome-icon :icon="['far', 'question-circle']"/>
          </div>
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

        const confStartDay = confStartDate.getUTCDate();
        const confStartMonth = confStartDate.toLocaleString(locale, {month: "short"}).toUpperCase();
        const confStartYear = confStartDate.getFullYear();

        const confEndDay = confEndDate.getUTCDate();
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

  .goto-symbol {
    display: none;
  }

  .conference:hover .goto-symbol {
    display: inline;
  }

  .name {
    font-weight: 500;
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

  .weather {
    padding-right: 0;
    padding-left: 0;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: #333;
    display: block;
  }

  a:hover {
    text-decoration: none;
  }

  hr {
    margin-top: 2px;
    margin-bottom: 7px;
  }
</style>
