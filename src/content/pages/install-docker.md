---
path: /install-docker
order: 5
title: Install Docker
description: How to install docker
domain: 1
topic: Dev and Ops
---

There are mulitple ways to install docker。

## Desktop installation

Docker provides installation packages for Windows and Mac to streamline the installation of docker onto the host. The user will need head to [DockerHub](https://hub.docker.com) and search for *Docker Desktop for Windows* or *Docker Desktop for Mac*.

## Server Installation

1. Linux
 
  ```bash
    wget -qO- https://get.docker.com |sh
  ```

2. Windows (window server 2016)

```powershell
   Install-Module DockerMsftProvider -Force
   Install-Package Docker -ProviderName DockerMsftProvider -Force
```

### Explanation

 1. Docker Desktop for Windows will require to enable *HyperV* and *Container* window features.
 
 2. Window Server 2019 has Docker preinstalled.