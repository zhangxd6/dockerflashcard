---
path: /anatomy-of-image
order: 9
title: Anatomy of an image
description: what are inside an image
domain: 1
topic: Dev and Ops
---

An image is consist of many layers. Each layer is composed of filesystem changes and associated metadata (checksum, date, etc.). Docker uses a storage driver to stack layers and unify them as a single filesystem.[1]



[1]: [Image and layers](https://docs.docker.com/v17.09/engine/userguide/storagedriver/imagesandcontainers/#images-and-layers)
<!--end-->