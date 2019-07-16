---
path: /choose-storage
order: 20
title: Docker Storage Use Case
description: 
domain: 1
topic: Dev and Ops
---

1. **volumes**

    Volumes are the preferred way to persist data in Docker containers and services. Some use cases for volumes include:

    * Sharing data among multiple running containers. If you don’t explicitly create it, a volume is created the first time it is mounted into a container. When that container stops or is removed, the volume still exists. Multiple containers can mount the same volume simultaneously, either read-write or read-only. Volumes are only removed when you explicitly remove them.

    * When the Docker host is not guaranteed to have a given directory or file structure. Volumes help you decouple the configuration of the Docker host from the container runtime.

    * When you want to store your container’s data on a remote host or a cloud provider, rather than locally.

    * When you need to back up, restore, or migrate data from one Docker host to another, volumes are a better choice. You can stop containers using the volume, then back up the volume’s directory (such as /var/lib/docker/volumes/<volume-name>).

2.  **Bind**

    In general, you should use volumes where possible. Bind mounts are appropriate for the following types of use case:

    * Sharing configuration files from the host machine to containers. This is how Docker provides DNS resolution to containers by default, by mounting /etc/resolv.conf from the host machine into each container.

    * Sharing source code or build artifacts between a development environment on the Docker host and a container. For instance, you may mount a Maven target/ directory into a container, and each time you build the Maven project on the Docker host, the container gets access to the rebuilt artifacts.

    * If you use Docker for development this way, your production Dockerfile would copy the production-ready artifacts directly into the image, rather than relying on a bind mount.

    * When the file or directory structure of the Docker host is guaranteed to be consistent with the bind mounts the containers require.

3.  **tmpfs** 

    * tmpfs mounts are best used for cases when you do not want the data to persist either on the host machine or within the container. This may be for security reasons or to protect the performance of the container when your application needs to write a large volume of non-persistent state data.


[1]: [Manage Application Data ](https://docs.docker.com/storage/bind-mounts/)