---
path: /storage-command
order: 21
title: Docker Storage Command
description: 
domain: 1
topic: Dev and Ops
---

What is the command to bind current directory to /app insider container?

### Explanation

```bash
   docker run -it --rm --name bining -v $(pwd):/app ubuntu
```