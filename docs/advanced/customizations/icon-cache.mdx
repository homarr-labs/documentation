---
title: 📦 Icon Cache
tags:
  - Configuration
  - Customization
  - Icons
---

Homarr automatically requests icons from an external repository, but if you don't have access to the internet at all time or want to reduce network traffic, you may want to use a local cache. A cache retrieves the pictures from the external source, stores them on your local disk and serves them from there. This way, you can use Homarr without internet access and reduce the amount of requests to the external repository.

:::info

Homarr currently doesn't have automatic caching. Instead you will need to manually cache the icons.

:::

## Caching Icons Manually

We recommend to use the following script to cache all icons. It will download all icons from the external repository and replace the URLs in the configuration file.

:::danger

Make a backup before running the script. The script will modify your configuration file. If you don't have a backup and something breaks, you will need to reconfigure Homarr.

:::

### Running the script


1. Open a terminal with access to the configuration. Usually, this is on your host machine or inside your Docker container.

2. Run the following script. Make sure to replace ``<your-path-to-homarr>`` with the path to your Homarr installation. If you're using Docker, this is usually ``/data/docker/homarr``.


```bash
pathToHomarr="<your-path-to-homarr>"

configFile="${pathToHomarr}/configs/default.json"; iconCacheDir="${pathToHomarr}/icons/cache"; mkdir -p $iconCacheDir;
cat $configFile | grep cdn.jsdelivr.net | cut -d'"' -f 4 | while read -r line; do echo "Processing $(basename $line)"; curl -o $iconCacheDir/$(basename $line) $line; done
sed -i ".`date +%F`.bak" "s%https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png%/icons/cache%g" $configFile
echo "Done! Relaunch Homarr to update the icons."
```
