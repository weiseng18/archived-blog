---
title: Cheat Sheet
---

This is a non-exhaustive list of useful commands on the terminal for personal reference. Depending on your familiarity with these tools, you might or might not find these commands helpful.

## Jekyll

To serve a Jekyll project locally:

```shell
bundle exec jekyll serve
```

To show information for a gem (includes summary, homepage, local path)

```shell
bundle info <gem-name>

# or if you need the local path only
bundle info <gem-name> | grep Path | cut -d' ' -f 2
```
