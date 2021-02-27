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

## youtube-dl

To download mp3 directly without converting using other tools (such as ffmpeg)

```shell
youtube-dl --extract-audio --audio-format mp3 <video URL>
```

## linux

To clear old headers and images, in order to free up some space in root drive (answer by homebrand [here](https://askubuntu.com/questions/57994/root-drive-is-running-out-of-disk-space-how-can-i-free-up-space)):

Step 1: Check what old headers and images the main command will delete:

```shell
dpkg -l 'linux-*' | sed '/^ii/!d;/'"$(uname -r | sed "s/\(.*\)-\([^0-9]\+\)/\1/")"'/d;s/^[^ ]* [^ ]* \([^ ]*\).*/\1/;/[0-9]/!d'
```

Step 2: Check what your currently installed kernel is:

```shell
uname -r
```

Step 3: If the kernel in the output of Step 2 is not inside the files in the list in Step 1, then you should be safe to run this command to delete all the files listed in Step 1:

```shell
dpkg -l 'linux-*' | sed '/^ii/!d;/'"$(uname -r | sed "s/\(.*\)-\([^0-9]\+\)/\1/")"'/d;s/^[^ ]* [^ ]* \([^ ]*\).*/\1/;/[0-9]/!d' | xargs sudo apt-get -y purge
```