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


### Steering Committee Charter
<div class="steering-committee">
<h4>Introduction</h4>
This document serves as the charter for the Symposium on Visualization for Cyber Security ("VizSec").

VizSec's goal is to provide a forum that brings together researchers and practitioners from academia, government, and industry to address the needs of the cyber security community through new and insightful visualization and analysis techniques. VizSec provides an excellent venue for fostering greater exchange and new collaborations on a broad range of security and privacy topics.

<h4>Steering Committee Purpose, Structure, and Operations</h4>
The Steering Committee oversees the long-term planning and success of current instances of VizSec, plans for future conferences in the series, evaluates how well each conference has achieved its objectives, and proposes and implements improvements to continuously meet these objectives.

The Steering Committee shall be responsible for the general oversight and long-term goals for the conference. The Steering Committee shall normally be responsible for making strategic decisions, including but not limited to: the appointment of the next General Chair(s) in coordination with the current General Chair(s) (including removal and reappointment if necessary); determining the major theme of the conference; creation or approval of any conference specific policies, including maintaining this charter; liasing with the broader visualization and cyber security communities; and enforcement of VizSec conference policies.

The Steering Committee shall be composed of the VizSec General Chairs from the previous five (5) years. Therefore, Steering Committee members shall serve terms of five (5) years. If a Steering Committee member resigns, the member can be replaced for the remainder of the term. Current members of the Steering Committee may nominate new or replacement Steering Committee candidates. Current Steering Committee members can vote on the replacement candidates using ranked-choice voting.

Members of the Steering Committee shall meet immediately after the annual VizSec event. The meeting shall be coordinated by the current VizSec General Chair(s). The General Chair(s) for the following year are encouraged to attend. Organizing Committee members of the current year may optionally attend. After the meeting, the exiting Steering Committee member(s) will end their term and the General Chair(s) of the just-ended VizSec will begin their term.

The current General Chair(s) is (are) encouraged to provide reports (typically 2-3) to the Steering Committee on the status and progress of organizing the upcoming VizSec event.

<h4>VizSec Organizing Committee Roles</h4>

Generally, we try to setup a chain of succession with these roles so that General Chairs have often served previously as Program Chair and/or Publication Chair. Any role may be shared by multiple co-chairs. New roles can be created by the General Chair or by agreement of the current Steering Committee members.
<p>
<b>General Chair:</b> The General Chair puts together the organizing committee, coordinates with the host event, identifies a keynote speaker, and sets a budget. The current General Chair is responsible for selecting a General Chair for the following VizSec event in consultation with the Steering Committee.
</p><p>
<b>Program Chair:</b> The Program Chair puts together the program committee, writes the call for papers, sets up the reviewing site, assigns reviewers, determines the accepted papers based on reviews, notifies authors of the decisions, determines the program schedule, and chairs the program onsite.
</p><p>
<b>Publication Chair:</b> The Publication Chair sets up publishing agreements, collects copyrights from authors of accepted papers, sends camera-ready instructions and collects camera-ready papers from authors, generates the front matter for the proceedings, and sends the papers to the publisher and whomever handles the print, USB, or online proceedings with the host conference. If possible, makes papers available prior or during the event for the greater VizSec community.
</p><p>
<b>Poster Chair:</b> The Poster Chair collects poster submissions, determines which posters will be accepted, notifies authors of the decisions, collects camera-ready poster abstracts and posts them on the website, sends authors instructions on the fast forward session and poster session, and is onsite to assist with the poster setup and fast forward session.
</p><p>
<b>Publicity Chair:</b> The Publicity Chair sends out the call for papers and call for participation to various mailing lists and publicizes the event on social media (@VizSec on Twitter, the VizSec Google Group, LinkedIn, etc.). See <a href="http://vizsec.org/publicity/">http://vizsec.org/publicity/</a> for a list of mailing lists and websites used for publicity.
</p><p>
<b>Sponsorship Chair:</b> The Sponsorship Chair works with the General Chair to create a sponsorship prospectus. See <a href="http://vizsec.org/sponsorship/">http://vizsec.org/sponsorship/</a> for the current version. The sponsorship chair also identifies and contacts potential sponsors for the event, and coordinates their activities with the host conference.
</p><p>
<b>Web Chair:</b> The Web Chair is responsible for keeping the website up to date, including posting the call for papers, program, keynote information, accepted papers and posters, and committees. After the event, the Web Chair must also add a link to the proceedings and update the <a href="http://vizsec.org/past">http://vizsec.org/past</a> page.
</p>

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
