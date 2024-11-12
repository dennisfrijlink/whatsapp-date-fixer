<p align="center" width="100%">
    <img width="150px" alt="whatsapp-date-fixer" src="./public/icon.png"> 
</p>

# whatsapp-date-fixer
Tiny script to restore the dates in photos shared using Whatsapp. Built using Typescript and the Javascript Runtime [Bun](https://bun.sh/)

## Packages used
- [Day.js](https://day.js.org/) - Fast 2kB alternative to Moment.js with the same modern API
- [exiftool-vendored](https://github.com/photostructure/exiftool-vendored.js) - Fast, cross-platform Node.js access to ExifTool.


To install dependencies:

```bash
bun install
```

Set path to scan for images:
```env
# .env

SCAN_ROOT=path/to/scan
```

Run using:

```bash
bun start
```

## Note:
Whatsapp images only contain the day, month and year. **NOT** the time. That's why the DateTimeOriginal is set on 12:00 (12 PM);
