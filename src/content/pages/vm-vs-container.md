---
path: /VM-vs-container
order: 4
title: VM vs. Container
description: They are different but not mutually exclusive
domain: 0
topic: Overview
---
VMs are a full copy of an operating system with its dedicated resources.

Docker containers share the underlying resources of the Docker host.  It is just a process.

[So they are different, Can VMs and Containers coexist?] [1]

The answer is “yes.”

VMs (in all their forms) are an excellent place for Docker hosts to run. 

Another question that is often asked relates to whether or not Docker container-based services can interact with VM-based services. Again, the answer is absolute yes. Running your application in a set of Docker containers doesn’t preclude it from talking to the services running in a VM.

Another area where there can be synergy between VMs and Docker containers is in the field of capacity optimization. VMs gained early popularity because they enabled higher levels of server utilization. That’s still true today. A virtualization host, for instance, can host VMs that may house Docker hosts, but may also host any number of traditional monolithic VMs. By mixing and matching Docker hosts with “traditional” VMs, sysadmins can be assured they are getting the maximum utilization out of their physical hardware.

One of the most powerful things about Docker is the flexibility it affords IT organizations. The decision of where to run your applications can be based 100% on what’s right for your business. You’re not locked into any single infrastructure, and you can pick and choose and mix and match in whatever manner makes sense for your organization. Docker hosts on vSphere? Great. Azure? Sure. Physical servers? Absolutely. With Docker containers, you get this great combination of agility, portability, and control.

[1]: docker 101 slides