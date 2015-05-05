#!/bin/sh

./node_modules/.bin/grunt all
mv deploy/* ..
rmdir deploy