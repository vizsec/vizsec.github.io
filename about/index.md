---
title: About VizSec
layout: default
---

VizSec started in 2004 as the <a href="http://www.cs.fit.edu/~pkc/vizdmsec04/">Workshop on Visualization and Data Mining for Computer Security</a> at <a href="http://www.sigsac.org/ccs/CCS2004/workshops.html">ACM CCS</a>. After that first event, the event got bigger and bigger each year as it rotated between a visualization-focused conference and a security-focused conference. After several different publishers for the proceedings, VizSec in 2010 began to publish proceedings with <a href="https://dl.acm.org/icps.cfm">ACM ICPS</a>. The VizSec ICPS page is available at: <a href="http://dl.acm.org/event.cfm?id=RE500">http://dl.acm.org/event.cfm?id=RE500</a>.

### Organizing VizSec
VizSec is independently run and we are always looking for people to help out, on the organizing and program committees, with sponsorship and publicizing, and with writing high-quality papers. Contact <a href="http://jgoodall.me/">John Goodall</a>.

The roles and responsibilities of the organizing committee is documented on the <a href="/roles">Committee Roles page</a>.

Places that we have publicized in the past is documented on the <a href="/publicity">Publicity page</a>.


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
