---
# This is a full listing of available Frontmatter options, available for any content (.md) file.
title: # empty for home page
layout: home
excerpt: # used for page excerpts and META (will be overwritten if SEO used below)
eleventyNavigation: # Required if want to display in Main Nav Bar
  key: main # "main" is required
  title: # as it will appear in the nav
  order: 1 # order to display in the nav (index = 1)
seo: # SEO values are used for OG and will overwrite 'title' and 'excerpt' above
  title:
  description:
  image: # used for OG:image and Twitter:image. Overrides default set in _data/meta.siteImage
hero: fixed # options: carousel, graphic, video, split (text & image)
heroSettings:
  height:
    mobile: flex-auto # options = h-1/1 (default = full screen), h-1/2, h-1/3, h-3/4, h-9/10, h-48 (12rem, 192px), h-56 (14rem, 224px), h-64 (16rem, 256px)
    desktop: h-3/4 # leave blank to inherit "mobile" height (default = full screen)
  bg:
    color: # default bg-black
    image: home/IMG_2095.jpeg # relative to /assets/images/
    imagePosition: # options = bg-center (default), bg-left, bg-right
    video: pixabay-john-macdougall.mp4 # local relative /assets/video/, or full https://... if remote?
    opacityMobile: opacity-50 # options opacity-n, 5, 10, 15, 20, 25, 50, 75, 100 (default)
    opacityDesktop: opacity-50 # Leave blank to inherit opacityMobile, use same options as opacityMobile
  typerText:
    words:
      - Product Manager
      - UX Designer
  headingText:
  headingTextColor: # default = text-white (can use any TailwindCSS text-[color]-[xxx])
  headingTextCase: # default = as typed - options: uppercase, lowercase, capitalize
  subheadingText: Hey! I'm Philip.
  subheadingTextColor: # Leave empty to inherit headingTextColor or default (text-white) or use any text-[color]-[xxx]
  subheadingFirst: true
  buttonText: Contact Me # no button generated if left blank
  buttonURL: /contact/ # full url required. Example: https://thisdomain.com/somepage/
  buttonTextColor: text-white # leave blank to inherit from /src/_data/colors.buttonCustom or buttonDefault
  buttonBgColor: bg-red-700 # leave blank to inherit from /src/_data/colors.buttonCustom.bg or buttonDefault.bg
  buttonBgHover: # leave blank to inherit from /src/_data/colors.buttonCustom.bgHover or buttonDefault.bgHover
  buttonBorder: border-red-900 # leave blank to inherit from /src/_data/colors.buttonCustom.border or buttonDefault.border
---
