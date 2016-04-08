# JBS Bottle Rocket Demo #
---
**Please note, While i've tried to construct this in the safest way possible, I am not an electrical engineer. By cloning and working with this guide, you assume `all` risks associated with this project**

Inspired by the JBS Brown bag lunch and learn?  Don't know what any of that is but still want to launch bottle rockets over Bluetooth LE via your iphone?  You're in the right spot! Lets do some pyro-techinc-science!!

The goal of this project is not to show off clever code (quite the oppsite actually) or elegant design.  It's inteded to be a demonstration of whats possible with a little bit of simple code and some imagination.  The code is intentionally simple, avoiding many deeper concepts.  In some places I sacrifice performance for the sake of readibilty.  Please feel free to modify this code to _your_ liking and submit a pull request.  New and better branches are always welcome!!

---
## Hardware

A complete hardware breakdown with Amazon/Ebay links is included in the source but the quick and dirty version is...
* An Arduino, Teensy or ATTiny
* a 5v relay breakout board
* A 2s lipo battery or equivilent, we're after the max current rating mainly.
* A voltage regulator capable of 1 amp per relay you want to be silmitainously active (EG, 8amps if you want to launch 8 bottle rockets at the same time)
* Missle Switch (Protected toggle switch)
* 34ga Nichrome wire
    * Alternativly, you can blow up some resistors,  you'll need 2 per rocket @ around 4.7 ohms
* Something to launch the rockets from.

---
* The SKP file is a [sketchup](http://www.sketchup.com/) file containing the model for the launcher.
* The node directory contains a simple serial testing application with references to Express to ease web development

---
## Software Setup

### Node

```
    cd node
    npm install
```

### Arduino

    Open "JBS_Bottle_Rocket.ino" file from the Arduino IDE and Upload the file as normal
 
### Cordova
> More on this to come.