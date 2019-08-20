VizSec web site
===============

![](screenshot.jpg?raw=true)

All source files are in the root directory to comply with [Github Pages](https://pages.github.com). The VizSec website uses [Jekyll](http://jekyllrb.com) to generate the raw html and resources.

# Using Docker

Check the [version of jekyll on github pages](https://pages.github.com/versions/) and use that below:

Then to start a jekyll server:

	export JEKYLL_VERSION=3.8.5
	docker run --rm --volume="$PWD:/srv/jekyll" -p 4000:4000 -it jekyll/jekyll:$JEKYLL_VERSION jekyll serve

Or, to build a static site:

	export JEKYLL_VERSION=3.8.5
	docker run --rm --volume="$PWD:/srv/jekyll" -it jekyll/jekyll:$JEKYLL_VERSION jekyll build

Then you can use a web server to serve the pages in `_site`. To use [armor](https://armor.labstack.com/) `armor --root ./_site` or `docker run --rm --volume "$PWD/_site:/srv" -p 4000:2015 -it abiosoft/caddy:1.0.0`

And open a browser to http://localhost:4000


# Using Ruby

## Install

- [Ruby](https://www.ruby-lang.org/en/) - Required by Jekyll; OSX already has Ruby, Linux and Windows don't. On Linux at least you'll need `apt-get instal ruby-dev` too for the headers
- [Bundler](http://bundler.io/#getting-started) `gem install bundler`
- [Jekyll](http://jekyllrb.com) - `gem install jekyll`

## Setup

	bundle install

# Deploying to a Github Pages setup

Everything is now managed by Jekyll. Running: 

	jekyll build

...will build the site into `_site`, as per Jekyll defaults. `jekyll serve` for local testing. 

Pushing the whole repository to a Github Pages-compliant repository will host the site there. 

