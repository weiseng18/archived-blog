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

# or if you need the local path only (e.g. for scripting)
bundle info <gem-name> | grep Path | cut -d' ' -f 2
```

## ffmpeg

To crop a video:

```shell
# crop={width}:{height}:{x-value of top left}:{y-value of top left}
# can refer to input height/width as in_h/in_w
ffmpeg -i input.mp4 -filter:v "crop=in_w:in_h-105:0:105" -c:a copy cropped.mp4
```

To convert a video to GIF:

```shell
# -r {value} specifies the framerate
ffmpeg -i input.mp4 -r 15 -vf "split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" output.gif
```