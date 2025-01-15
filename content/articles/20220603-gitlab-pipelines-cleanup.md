---
title: Gitlab Pipeline Cleaning Up
description: Clean Up Pipelines
img: /blog/images/20220603-gitlab-pipelines-cleanup/gitLab_logo.png
alt: Clean Up Pipelines
author: nam-truong-1990
---

## Remove All Gitlab Pipelines Except A Specific Number of Recently-Run Ones

```shell
#!/bin/bash

PROJ_ID=$1
DELETE_START_AT_PID=$2
GITLAB_HOSTNAME=$3
GITLAB_ACCESS_TOKEN=$4

DELETE="deleting"


command_line() {

        curl --header "PRIVATE-TOKEN: $GITLAB_ACCESS_TOKEN" "https://$GITLAB_HOSTNAME/api/v4/projects/$PROJ_ID/pipelines" | jq .[$DELETE_START_AT_PID:] | jq .[].id |  while read -r id; do echo "$DELETE pipeline#$id..."; curl --request "DELETE" --header "PRIVATE-TOKEN: $GITLAB_ACCESS_TOKEN" "https://$GITLAB_HOSTNAME/api/v4/projects/$PROJ_ID/pipelines/$id";done

}

RUN_API_LOG="**Executing Pipeline API***"

echo "$RUN_API_LOG"
cmd_output=$(command_line)

while [[ $cmd_output == *$DELETE* ]] 
do
        echo "$RUN_API_LOG"
        cmd_output=$(command_line)
done
```

## How to execute the script

Suppose that the script is saved as _cleanup_pipelines.sh_, by executing it as below, we will delete all pipelines of project with id of **10**, except **3** recently-run ones:

`./cleanup_pipelines.sh 10 3 gitlab.example.com DEK328ICX3235CW$@090`


<info-box placeholder=''>
  <template #info-box >
   
  </template>
</info-box>