---
path: /why-container
order: 3
title: Why is choose container?
description: Isolation vs. Density
domain: 0
topic: Overview
---

Let's see how many ways an application is deployed to service the customer.

In very early days, the application was deployed onto dedicated hardware. It does provide an excellent isolation from other applications. However, the deployment process is slow, and the cost is huge. It is difficult to scale, hard to migrate.

To overcome these downsides, The Virtual Machine technology, hypervisor, is born. It has better resource pooling (a physical machine can be divided into multiples), easy to scale, however, each VM requires CPU, memory, storage, and OS. A full guest OS does waste resources.

Now, the containers take advantage of the namespace, cgroups, etc. to share the same hardware and OS kernel but provide levels of isolation at the same time.
