<template>
    <a :href="conference.url">
        <div class="conference row">
            <div class="col-12">
                <div class="name">{{ conference.name }}</div>
            </div>
            <div class="col-12">
                <div class="location">{{conference.location.city }}, {{ conference.location.country}}</div>
            </div>
            <div class="col-5">
                <div class="date">
                    <i class="far fa-calendar-alt"></i> {{ conference.date }} &nbsp;&nbsp;&nbsp;
                </div>
            </div>
            <div class="col-4 weather">
                <div class="weather">
                    <span v-if="conference.temperature < 10"><i class="far fa-snowflake"></i>️️</span>
                    <span v-if="conference.temperature >= 10 && conference.temperature < 20"><i
                        class="fas fa-cloud"></i></span>
                    <span v-if="conference.temperature >= 20"><i class="fas fa-umbrella-beach"></i>️</span> {{
                    conference.temperature
                    }}℃
                </div>
            </div>
            <div class="col-3">
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
        name: "conference",
        props: {
            conference: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>
    .conference {
        border-bottom: 1px solid #ccc;
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
