---
path: /attach-to-container
order: 15
title: attach to a running container
description: 
domain: 1
topic: Dev and Ops
---

Robert is developing a container that host a web application using IIS process. He would like to investiage the configuration settings. How would he interact with a running container?

### Explanation

The command is useful is

```
   docker exec -it dotnet powershell.exe
```

This command will run the **powershell.exe** inside container and attach your terminal to the running container with **-it** flag. With the access to the powershell, Robert should be able to inspect the configuration of his web application

<!--end-->