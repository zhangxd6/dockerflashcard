---
path: /run-container
order: 13
title: running the first container
description: 
domain: 1
topic: Dev and Ops
---

The container is a runtime instance of image. If you are familar with object orient programming, the image is similar to the class and the container is an instance of class.

The easiest way to run a container is to use the **docker run** command.

### Explanation


```
   docker run -it --rm -name dotnet mcr.microsoft.com/dotnet/framework/runtime:4.7.2-windowsservercore-ltsc2016 powershell.exe
```

This command will initiate a container named *dotnet* based on the dotnet Framework runtime images, execute the **powershell.exe** as its main process and provide the interactive tty to the user.


<!--end-->