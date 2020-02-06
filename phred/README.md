# phred extension for Numi

## What is this extension for? :mag_right:

This extension allows you to convert between error probabilities and [Phred quality scores](https://en.wikipedia.org/wiki/Phred_quality_score).

## Installation :floppy_disk:

Simply download the .js file to your numi extensions directory.

## How to use it :wrench:

```
phred(0.99)  // 20

phred(0.98)  // 16.99

unphred(12)  // 0.94
```
