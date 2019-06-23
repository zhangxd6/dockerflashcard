---
path: /restart-policies
order: 17
title: container restart policies
description: 
domain: 1
topic: Dev and Ops
---

There are 3 restart policies

*  **always**

   It will always restart a stopped container unless it is explicityly stopped. When the daemon is started, the containers with this policy will be started automatically.

*  **unless-stopped**

   It is similar to the **always** policy. The difference is that containers won't start when the daemon is restarted.

* **on-failed**
    
   It will restart the container if the container exits with non-zero code. It also start the container when the daemon is started.

How to apply the restart policy to a container?

### Explanation

The command is

```
   docker run -d --name nginx --restart alway nginx
```

<!--end-->