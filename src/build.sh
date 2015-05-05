#!/bin/sh

./node_modules/.bin/grunt all
cd deploy && tar cf - ./ | ( cd ../..; tar xf -) && cd ..
rm -rf ./deploy