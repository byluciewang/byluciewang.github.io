# byluciewang.github.io
Lucie Wangs website

### Todo
1. reduce size of images, dynamically load images, to reduce loadtime
2. turn into web components to reduce loading time and simplify - single page application in vanilla
3. fix links page
4. fix up the resume, and topbar - top bar will be fixed wiht componentizition

### Compoent plan
1. mainpage = 404.html
2. nabvar and links component
   1. hamburger menu component
3. Gallery Page
   1. gallery component
4. Links Page
   1. Email me form
5. Resume Page

### Planned dir
- images
  - ...
- components
  - utilities
  - pages
- index.html
- 404.html
- README.md
- reduce images size script
- devscriptwith auto reload?

### Testing locally
```bash
python3 -m http.server 8000
ssh -R 80:localhost:8000 nokey@localhost.run
```

### References
- [Great tool for name animations](https://akashraj9828.github.io/svg-text-animation-generator/)
- [Inpsiration for this website](https://www.jomei.com)
- [hamburger css](https://jonsuh.com/hamburgers/)/[github code](https://github.com/jonsuh/hamburgers)
- [Optioanl email me form service](https://formspree.io/plans), free up to 50/month