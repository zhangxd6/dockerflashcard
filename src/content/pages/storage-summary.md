---
path: /storage-summary
order: 18
title: Docker Storage Driver
description: 
domain: 1
topic: Dev and Ops
---

Each layers of docker containers/images will need to be stored in the filesystem of host machine. The storage driver enables the creation of data in the writable layer of container.

There are a few storage drivers for linux and windows

* Linux
  
   - autofs
   - overlay2
   - devicemapper [1]
   - others

* Windows
   - windowsfilter
   - lcow (linux container on windows)

[1]: [DeviceMapper Configuration at Chapter 3 ](https://www.amazon.com/Docker-Deep-Dive-Nigel-Poulton-ebook/dp/B01LXWQUFF/ref=sr_1_3?crid=2Z2C8V03PNXCY&keywords=docker+deep+dive&qid=1563308512&s=gateway&sprefix=docker+de%2Caps%2C153&sr=8-3)
<!--end-->