---
title: DevOps Conferences 2018
layout: homepage
---

<div id="conferences">
    <div class="row">
        <div class="col-md-12">
    <table class="table table-hover">
        <thead class="thead-dark">
            <tr>
                <th scope="col" class="sort" data-sort="name">Conference <i class="fa fa-sort" aria-hidden="true"></i></th>
                <th scope="col" class="sort" data-sort="country">Location <i class="fa fa-sort" aria-hidden="true"></i></th>
                <th scope="col" class="sort" data-sort="date">Date <i class="fa fa-sort" aria-hidden="true"></i></th>
                <th scope="col" class="sort" data-sort="cost">Cost <i class="fa fa-sort" aria-hidden="true"></i></th>
            </tr>
        </thead>
        <tbody class="list">
        {% for conference in site.data.conferences %}
            <tr>
                <td class="name" data-name="{{ conference.name }}"><a href="{{ conference.url }}">{{ conference.name }}</a></td>
                <td class="location"><span class="city">{{ conference.location.city }}</span>, <span class="country">{{ conference.location.country }}</span></td>
                <td class="date" data-start-date="{{ conference.start-date }}">{{ conference.date }}</td>
                <td class="cost">
                {% case conference.cost %}
                    {% when "unknown" %}
                        <i class="fa fa-question"></i>
                    {% when "free" %}
                        <span>FREE</span>
                    {% when 1 %}
                        <i class="fa fa-usd"></i>
                    {% when 2 %}
                        <i class="fa fa-usd"></i><i class="fa fa-usd"></i>
                    {% when 3 %}
                        <i class="fa fa-usd"></i><i class="fa fa-usd"></i><i class="fa fa-usd"></i>
                {% endcase %}
                </td>
            </tr>
        {% endfor %}
        </tbody>
    </table>
    </div>
    </div>
</div>
