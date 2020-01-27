---
title: About VizSec
layout: default
---

VizSec started in 2004 as the [Workshop on Visualization and Data Mining for Computer Security](http://www.cs.fit.edu/~pkc/vizdmsec04/) at [ACM CCS](http://www.sigsac.org/ccs/CCS2004/workshops.html). After that first event, the event got bigger and bigger each year as it rotated between a visualization-focused conference and a security-focused conference.

VizSec is independently run and we are always looking for people to help out, on the organizing and program committees, with sponsorship and publicizing, and with writing high-quality papers.

See [the official charter](/charter/) for information about the structure and operations of VizSec.

Places that we have publicized in the past is documented on [the publicity page](/publicity/).

### Steering Committee

<div class="steering-committee">
	<ul >
	{% for member in site.data.steering_committee %}
		<li>
			<span class="committee name">
				{% if member.url %}
					<a href="{{ member.url }}">{{ member.name }}</a>
				{% else %}
					{{ member.name }}
				{% endif %}
			</span><br>
			<span class="committee affiliation">{{ member.affiliation }}</span>
		</li>
	{% endfor %}
	</ul>
</div>


#### Former Steering Committee Members

<div class="steering-committee">
	<ul >
	{% for member in site.data.former_steering_committee %}
		<li>
			<span class="committee name">
				{% if member.url %}
					<a href="{{ member.url }}">{{ member.name }}</a>
				{% else %}
					{{ member.name }}
				{% endif %}
			</span><br>
			<span class="committee affiliation">{{ member.affiliation }}</span>
		</li>
	{% endfor %}
	</ul>
</div>
