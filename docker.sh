#!/bin/bash

docker run -it -v $PWD:/var/lib/grafana/plugins/harperdb -p 3333:3000 --name grafana.docker grafana/grafana