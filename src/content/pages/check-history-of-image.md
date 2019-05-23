---
path: /check-image-history
order: 11
title: Working with image
description: The commands to work with images
domain: 1
topic: Dev and Ops
---

How the image is constructed and any relationship between the commands and layers. What is the command Jones needs to use


### Explanation


```
   docker image history mcr.microsoft.com/dotnet/framework/runtime:4.7.2-windowsservercore-ltsc2016
```

Jones notices that there are six instructions to generate this image. The first one (bottom one) is the base image and then applying the updates onto the base image. These six instructions have a non-zero size, which corresponds to the six layers when he inspects image metadata.

![history command](../images/cmd-layer.png)

<!--end-->