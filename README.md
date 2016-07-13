VizSec web site
===============

![](screenshot.jpg?raw=true)

All source files are in the root directory to comply with [Github Pages](https://pages.github.com). The VizSec website uses [Jekyll](http://jekyllrb.com) to generate the raw html and resources.

# Prerequisites (if you don't have Jekyll)

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

