#!/bin/bash

rsync -avz −−rsh="ssh" --rsync-path="/usr/local/bin/rsync" ./deploy/ ojg@www1:/home/http/ornl/sci/vizsec
