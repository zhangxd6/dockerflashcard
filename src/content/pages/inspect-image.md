---
path: /inspect-image
order: 11
title: Working with image -inspect image
description: The commands to work with images
domain: 1
topic: Dev and Ops
---

After the image is downloaded, Jones want to understand how the image constructed. The command to inspect the image is

### Explanation


```
   docker image inspect mcr.microsoft.com/dotnet/framework/runtime:4.7.2-windowsservercore-ltsc2016
```

This command will display metadata of image, like id, archtecture, size 

![image metadata](../images/image-metadata.PNG)

and *layers*

![image layers](../images/imagelayers.PNG)

<!--end-->