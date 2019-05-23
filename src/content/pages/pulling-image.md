---
path: /pulling-image
order: 10
title: Working with image - pull image
description: The commands to work with images
domain: 1
topic: Dev and Ops
---

Jones, Software Engineer, will be working on the project to migrate the legacy projects using the docker. One of the projects is legacy.Net MVC application. He decides to try to lift and shift the application to the container. First thing, he wants to get the base image from docker hub. The command will be

### Explanation


```
   docker pull mcr.microsoft.com/dotnet/framework/runtime:4.7.2-windowsservercore-ltsc2016
```

This will download the image contains the .NET Framework runtimes and libraries and is optimized for running .NET Framework apps in production.

<!--end-->