---
path: /stop-container
order: 14
title: stop a running container
description: 
domain: 1
topic: Dev and Ops
---

What is the command to stop a running container, the one started in previous card?

### Explanation


```
   docker stop dotnet 
```

This command will stop the running container to put it in the Exited state by issuing a SIGTERM to the main process. It will give the container default 10 seconds to stop and clean up. If the time is up, a SIGKILL will force the container stop.

What about 

```
  docker kill dotnet
```

This command will also stop the container from running. It sends KILL  signal to the container :( .
<!--end-->