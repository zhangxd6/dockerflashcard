---
path: /mange-data
order: 19
title: Docker data storage
description: 
domain: 1
topic: Dev and Ops
---

By default, all files created inside a container are stored on a writable container layer.

Docker has two options for containers to store files in the host machine, so that the files are persisted even after the container stops: **volumes**, and **bind** mounts. If you’re running Docker on Linux you can also use a **tmpfs** mount.


#Type

* **Volumes** are stored in a part of the host filesystem which is managed by Docker (/var/lib/docker/volumes/ on Linux). Non-Docker processes should not modify this part of the filesystem. Volumes are the best way to persist data in Docker.

* **Bind** mounts may be stored anywhere on the host system. They may even be important system files or directories. Non-Docker processes on the Docker host or a Docker container can modify them at any time.

* **tmpfs** mounts are stored in the host system’s memory only, and are never written to the host system’s filesystem.

<!--end-->