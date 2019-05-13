---
path: /update-docker-installation
order: 7
title: update docker installation
description: How to update installation
domain: 1
topic: Dev and Ops
---

What is the high-level process to update docker engine

1. Stop the docker daemon
2. Remove the old version
3. Install the new version
4. start the daemon (configure it auto start)
5. Ensure containers have restarted

### Explanation

1. Linux

```bash
   sudo apt-get update
   sudo apt-get remove docker docker-engine docker-ce docker.io -y
   wget -q0 https://get.docker.com |sh
   systemctl enable docker
```

2. Windows

```powershell
  uninstall-module DockerMsftProvider -Force
  install-module DockerMsftProvider -Force
  install-package docker -providername dockermsftprovider -Update -force
```