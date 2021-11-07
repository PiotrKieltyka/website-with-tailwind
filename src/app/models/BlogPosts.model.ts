import { BlogPostInterface } from './BlogPost.interface';

export const BlogPostsModel: Array<BlogPostInterface> = [
  {
    _id: '6161b94050e9400008ad2500',
    title: 'What’s new with DevTools: Cross-Browser Edition.',
    date: 'October 9, 2021',
    link: 'https://www.smashingmagazine.com/2021/09/devtools-cross-browser-edition/',
    content:
      'Learn what’s new with developer tools in Firefox, Edge, Chrome and Safari. Discover new and powerful features that will help you be more comfortable and productive when testing and debugging across browsers.',
  },
  {
    _id: '6161b8f450e9400008ad24fd',
    title: 'Design patterns in JavaScript.',
    date: 'October 5, 2021',
    link: 'https://dev.to/zeeshanhshaheen/design-patterns-in-javascript-1pgm',
    content: '20+ Design Patterns explanation in JavaScript.',
  },
  {
    _id: '6161b84650e9400008ad24f9',
    title: 'Designing beautiful shadows in CSS.',
    date: 'October 1, 2021',
    link: 'https://www.joshwcomeau.com/css/designing-shadows/',
    content: 'Click below if you want to know how to make prettier shadows.',
  },
  {
    _id: '612dc18a9e4c330009ac8bb5',
    title: 'What’s new in TypeScript 4.4?',
    date: 'August 27, 2021',
    link: 'https://devblogs.microsoft.com/typescript/announcing-typescript-4-4/',
    content:
      'Definitely, This release will primarily be focused on its core and improving some existing features. <ul class="list-inside list-disc"><li>Control flow analysis of aliased conditional expressions</li> <li>Index signatures for symbols and template literal strings</li> <li>Defaulting to the unknown Type in Catch Variables</li> <li>Exact Optional Property Types</li> <li>Performance Improvements</li></ul>',
  },
  {
    _id: '61138234b47c5b00098a2df3',
    title: 'Angular CLI 12.2.0 is out.',
    date: 'August 5, 2021',
    link: 'https://blog.ninja-squad.com/2021/08/04/angular-cli-12.2/',
    content:
      'The CLI now optimizes the code in two phases:<ul class="list-inside list-disc"><li>first, it runs esbuild (to remove useless code, and shorten identifiers)</li><li>then, it runs terser on the optimized code from esbuild (hence on a smaller input size, and with less optimizations to do)</li></ul>',
  },
  {
    _id: '6113818fb47c5b00098a2df0',
    title: 'JavaScript .at()',
    date: 'July 18, 2021',
    link: 'https://v8.dev/features/at-method',
    content:
      'With the release of V8 engine 9.2 (that thing that Chrome browsers use to read your JavaScript), you can now use the .at() method on array types. It brings in a new functionality that many Python programmers already enjoyed: the -1 index!',
  },
  {
    _id: '611380a9b47c5b00098a2dea',
    title: "It's time to run deno upgrade again! Deno 1.12 is out!",
    date: 'July 13, 2021',
    link: 'https://deno.com/blog/v1.12',
    content:
      'Deno 1.12 has been tagged and released with the following features and changes: <ul class="list-inside list-disc"><li>Support generateKey, sign, and verify web crypto APIs</li><li>Websocket support in native HTTP server</li><li>TypeScript support in the REPL</li><li>Support for MessagePort and MessageChannel</li><li>Support for WASM threading now available</li></ul>',
  },
  {
    _id: '61137e75b47c5b00098a2de6',
    title: 'GitHub Copilot.',
    date: 'July 4, 2021',
    link: 'https://github.blog/2021-06-29-introducing-github-copilot-ai-pair-programmer/',
    content:
      'With GitHub Copilot, get suggestions for whole lines or entire functions right inside your editor.',
  },
  {
    _id: '61137dc5b47c5b00098a2de4',
    title: 'The Memory Inspector has landed in Chrome 91.',
    date: 'June 31, 2021',
    link: 'https://developer.chrome.com/blog/memory-inspector/',
    content:
      'The Memory Inspector has landed in Chrome 91. It allows you to inspect your ArrayBuffer, TypedArray, DataView, and Wasm Memory.',
  },
  {
    _id: '61137a0fb47c5b00098a2de0',
    title: 'New features in ES2021.',
    date: 'June 27, 2021',
    link: 'https://h3manth.com/ES2021/',
    content:
      'On 22 June, ES2021 was officially approved as a new standard and the following five features were added. Browsers also support and all ES2021 features are available in modern browsers (Chrome/Firefox/Edge/Safari). Want to know what features being added to the JavaScript spec for this year?',
  },
  {
    _id: '609cccc10334bd00092108f8',
    title: 'Angular v12!',
    date: 'May 13, 2021',
    link: 'https://blog.angular.io/angular-v12-is-now-available-32ed51fbfd49',
    content:
      'ng update to see: <ul class="list-inside list-disc"><li>Ivy-first library distribution</li><li>Prod mode & strict mode by default</li><li>Production Webpack 5 support</li><li>Inline Sass</li></ul>',
  },
  {
    _id: '607a71829e2c89000c81f8ff',
    title: 'Node.js 10.x End-of-Life.',
    date: 'April 16, 2021',
    link: '',
    content:
      "If U're running Nodejs 10.x anywhere, it will be end-of-life after this month, so the time to update to 14.x is now!",
  },
  {
    _id: '60766cb911c0800008d0f884',
    title: 'Deno 1.9.0 is out!',
    date: 'April 13, 2021',
    link: 'https://deno.com/blog/v1.9',
    content:
      '<ul class="list-inside list-disc"><li>Native HTTP/2 web server: a fast, correct, fully featured HTTP server</li><li>Faster calls into Rust with serde_v8: 98% improvement</li><li>Blob URL support & improvements to fetch: new web compatibility features</li><li>Interactive permission prompt: interactively prompt for permissions on use instead of declaring them up front</li></ul>',
  },
  {
    _id: '60684d04413adc001d13ec4a',
    title: 'Your e-mail validation logic is wrong.',
    date: 'April 3, 2021',
    link: 'https://www.netmeister.org/blog/email.html',
    content:
      "I'm sorry. I know U thought that validating an email address is simple, but I'm afraid that U're wrong here. It's a bit more complicated than U think. Quite a bit, actually.",
  },
  {
    _id: '605ce8e65d7464000466f492',
    title: 'Angular version 12.',
    date: 'March 21, 2021',
    link: 'https://blog.angular.io/with-best-practices-from-the-start-d64881a16de8',
    content:
      'One of the highest priorities for Angular is to enable best practices from the start - strict mode by default for all new projects.',
  },
  {
    _id: '603fb701e36521002c04b96b',
    title: "Don't use functions as callbacks unless they're designed for it.",
    date: 'March 3, 2021',
    link: 'https://jakearchibald.com/2021/function-callback-risks/',
    content:
      "A simple message in this one - Don't use functions as callbacks unless they're designed for it. Jake always has great articles and this one does not disappoint.",
  },
  {
    _id: '603e869fc7eafd002abec68f',
    title: "JavaScript's memory management explained.",
    date: 'March 2, 2021',
    link: 'https://felixgerschau.com/javascript-memory-management/',
    content:
      "Most of the time, you can probably get by fine not knowing anything about memory management as a JavaScript developer. After all, the JavaScript engine handles this for you. At one point or another, though, you'll encounter problems, like memory leaks, that you can only solve if you know how memory allocation works.",
  },
  {
    _id: '6035ef2a62f6290030097899',
    title: 'The Internals of Deno.',
    date: 'February 24, 2021',
    link: 'https://choubey.gitbook.io/internals-of-deno',
    content:
      'This book covers the internal architecture, threading model, and how Deno loads and executes programs. The book is freely available.',
  },
  {
    _id: '6035ebfd62f6290030097898',
    title: 'TypeScript 4.2 is now out with',
    date: 'February 23, 2021',
    link: 'https://devblogs.microsoft.com/typescript/announcing-typescript-4-2',
    content:
      '✔ Smarter Type Aliases<br>✔ Non-Trailing [...rest]s in Tuple Types<br>✔ Stricter Checks<br>✔ The "Declare Missing Function" Quick Fix<br> and more!',
  },
  {
    _id: '6028213c0b4a970029914c5b',
    title: 'The Linux Command Handbook.',
    date: 'February 13, 2021',
    link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook',
    content:
      "This Linux Command Handbook will cover 60 core Bash commands U will need as a developer. This Handbook follows the 80/20 rule: U'll learn 80% of a topic in around 20% of the time U spend studying it.",
  },
  {
    _id: '60258a507bf3cb0030e97dda',
    title: 'Angular v11.2 is out now, and includes native TailwindCSS support!',
    date: 'February 11, 2021',
    link: '',
    content:
      'To enable TailwindCSS, ng update then: 1. Install with `npm install -D tailwindcss/yarn add -D tailwindcss` 2. Create a TailwindCSS configuration file in the workspace or project root.',
  },
  {
    _id: '602380f315d89f002aeb6231',
    title: 'Interactive Guide to CSS Transitions.',
    date: 'February 9, 2021',
    link: 'https://www.joshwcomeau.com/animation/css-transitions',
    content:
      "CSS transitions are fundamental, but that doesn't mean they're easy. There's a surprising amount of depth to them.",
  },
  {
    _id: '6018ee6f6397da003128c891',
    title: 'Angular Debugging Guides.',
    date: 'January 27, 2021',
    link: 'https://blog.angular.io/angular-debugging-guides-dfe0ef915036',
    content:
      'The best part of coding is when something works on the first try. The next best thing is knowing how to debug errors when things don’t work the first time.',
  },
  {
    _id: '600a85a18d36e2002c2f581a',
    title: 'Angular v11.1 is out now!',
    date: 'January 21, 2021',
    link: 'https://github.com/angular/angular/blob/master/CHANGELOG.md',
    content:
      'Run #ngUpdate to get: Improved error messages, Preview of Ivy library distribution, Experimental native Ivy support in the language service, Trusted type support, Support for TypeScript 4.1.',
  },
  {
    _id: '6007ccdfdd71880029368111',
    title: 'New declarative router for Angular.',
    date: 'January 19, 2021',
    link: 'https://github.com/angular-component/router',
    content:
      'Template-based routing. Observable at all levels. Supports lazy loading of components and modules. Small footprint.',
  },
  {
    _id: '5ff2b226376f910031900cf8',
    title: '50+ Top Angular Interview Questions and Answers.',
    date: 'December 28, 2020',
    link: 'https://dzone.com/articles/50-top-angular-interview-questions-amp-answers',
    content:
      'This set of Angular interview questions will certainly be helpful for your interview, and also a recap of Angular.',
  },
  {
    _id: '5fe590969679050030927057',
    title: 'Testing Angular Services: a walk-through with examples.',
    date: 'December 20, 2020',
    link: 'https://www.testim.io/blog/testing-angular-services',
    content:
      'In this blog post, let’s show U how to take advantage of all of Angular’s built-in paths for testing out an Angular service to make sure U deliver the highest-quality code consistency.',
  },
  {
    _id: '5fe20345e6ab4b003061b774',
    title: 'Bulletproof Angular. Angular strict mode explained.',
    date: 'December 15, 2020',
    link: 'https://indepth.dev/posts/1402/bulletproof-angular',
    content:
      'In this article U can read about the strict mode in Angular and how exactly it will help U build more robust Angular applications with: <ul class="list-inside list-disc"><li>TypeScript strict mode</li><li>Avoid usage of any</li><li>No fallthrough cases in Switch blocks</li><li>Angular strict mode</li></ul>',
  },
  {
    _id: '5fe20072e6ab4b003061b773',
    title: 'Debugging memory leaks in Angular.',
    date: 'December 13, 2020',
    link: 'https://blog.bitsrc.io/debugging-memory-leaks-in-angular-4bc7b3eab569',
    content:
      'The situations where memory leaks are most likely to happen, and how U can deal with them.',
  },
  {
    _id: '5fde7815121ebc001e78f77c',
    title: 'GitHub Universe 2020 On-Demand.',
    date: 'December 11, 2020',
    link: 'https://githubuniverse.com/on-demand',
    content:
      'Missed the live action? Enjoy everything Universe 2020 has to offer anytime, anywhere.',
  },
  {
    _id: '5fcb371e75b4c7000471fa3c',
    title: '🥳 JavaScript turns 25 🎉',
    date: 'December 4, 2020',
    link: 'https://www.jetbrains.com/lp/javascript-25',
    content: 'JavaScript Timeline. Notable events of JavaScript history.',
  },
  {
    _id: '5fcb368775b4c7000471fa3b',
    title: 'Tailwind CSS v2.0.',
    date: 'November 25, 2020',
    link: 'https://blog.tailwindcss.com/tailwindcss-v2',
    content:
      'Tailwind CSS v2.0 is the first major update ever, including: All-new color palette, Dark mode support, Extra wide 2XL breakpoint, New outline ring utilities, Utility-friendly form styles, Extended spacing, typography, and opacity scales, for fine-tuning things at the micro level, and many more.',
  },
  {
    _id: '5fbc0970e6184800041bebae',
    title:
      "Node and Deno, it's time for you to meet the new entrant in the arena: Elsa.",
    date: 'November 23, 2020',
    link: 'https://github.com/elsaland/elsa',
    content:
      "Elsa is a minimal, fast and secure runtime for JavaScript and TypeScript written in Go (and doesn't use the v8 engine like the others). Deno, is written in Rust and Node in C++. Let's see where the future goes.",
  },
  {
    _id: '5fbb580bd801e60004474b94',
    title:
      'Prettier 2.2: new JavaScript parsers, TypeScript 4.1 and ESM standalone bundles.',
    date: 'November 21, 2020',
    link: 'https://prettier.io/blog/2020/11/20/2.2.0.html',
    content:
      'This release supports new JavaScript parsers espree and meriyah, supports TypeScript 4.1, ships ESM standalone bundles for modern browsers, and includes many bug fixes and improvements.',
  },
  {
    _id: '5fb76d48aab6640004aeb511',
    title: 'TypeScript 4.1 arrived!',
    date: 'November 19, 2020',
    link: 'https://devblogs.microsoft.com/typescript/announcing-typescript-4-1',
    content:
      'Template literal types, recursive conditionals, stronger checks, and more!',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4eda',
    title: 'Why U should start contributing to open source software right now.',
    date: 'November 14, 2020',
    link: 'https://dev.to/mhatvan/why-you-should-start-contributing-to-open-source-software-right-now-3mp0',
    content:
      'U might not be aware of it, but U use some form of open source software every single day. The open source movement is growing quickly and U should become a part of it too.',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4ed9',
    title: 'JavaScript Algorithms and Data Structures.',
    date: 'November 13, 2020',
    link: 'https://github.com/trekhleb/javascript-algorithms',
    content:
      'JavaScript Algorithms (59,500 stars) contains a tremendous amount of JavaScript-based examples of popular and less popular algorithms and data structures. The structure is really nice because the examples are labeled either beginner or advanced. So whether U are interested in cryptography, sorting, graphs or even machine learning (and much more), there will be something for U.',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4ed8',
    title: 'Angular 11 is here!',
    date: 'November 12, 2020',
    link: 'https://blog.angular.io/version-11-of-angular-now-available-74721b7952f7',
    content:
      'Big news - Angular Version 11.0.0 is released. This major release has updates across the platform including the framework, the CLI and components.',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4ed7',
    title: 'Operator Lookup - a search engine for JavaScript operators.',
    date: 'November 10, 2020',
    link: 'https://joshwcomeau.com/operator-lookup',
    content:
      '<a href="https://twitter.com/joshwcomeau">@JoshWComeau</a> made this great site called Operator Lookup that explains how JavaScript operators work. There are some code examples to explain what they do as well, which is pretty handy.',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4ed6',
    title: 'Explore stars in the universe.',
    date: 'November 8, 2020',
    link: 'https://stars.chromeexperiments.com',
    content:
      '100.000 Stars is an interactive visualization of the stellar neighborhood. It shows the location of 119.617 nearby stars derived from multiple sources, including the 1989 Hipparcos mission. Zooming in reveals 87 individually identified stars and our solar system.',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4ed5',
    title: 'Awesome.',
    date: 'November 5, 2020',
    link: 'https://github.com/sindresorhus/awesome',
    content:
      'Awesome is, without a doubt, the most popular repo that curates all topics from software development to hardware to business. It has more than 123,000 stars on Github at this moment, and one could spend days (nights) browsing it.',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4ed4',
    title: 'An Angular implementation of the IBM Carbon Design System.',
    date: 'November 2, 2020',
    link: 'https://angular.carbondesignsystem.com',
    content:
      'Carbon is an open-source design system built by IBM. With the IBM Design Language as its foundation, the system consists of working code, design tools and resources, human interface guidelines, and a vibrant community of contributors.',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4ed3',
    title: 'NPM public roadmap.',
    date: 'October 22, 2020',
    link: 'https://github.blog/2020-10-22-introducing-the-npm-public-roadmap-and-a-new-feedback-process',
    content:
      'NPM Team announced a new npm public roadmap + feedback process! U can now see what is coming and get involved.',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4ed2',
    title: 'Node.js v15.0.0 is here!',
    date: 'October 21, 2020',
    link: 'https://nodejs.medium.com/node-js-v15-0-0-is-here-deb00750f278',
    content:
      'NPM Team is excited to announce that Node.js 15 was released today. Node.js 15 replaces Node.js 14 as our ‘current’ release line, with Node.js 14 being promoted to LTS (long-term support) later this month.',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4ed1',
    title: '7.0.0 of the npm CLI.',
    date: 'October 13, 2020',
    link: 'https://github.blog/2020-10-13-presenting-v7-0-0-of-the-npm-cli',
    content:
      'NPM Team is excited to announce the release of npm v7.0.0, which will be shipping with Node.js 15.0.0 next week. npm 7 comes with some long-awaited and requested features including: workspaces, automatically installing peer dependencies, package-lock v2 and support for yarn.lock.',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4ed0',
    title: 'Webpack 5.0.0 is here.',
    date: 'October 10, 2020',
    link: 'https://webpack.js.org/blog/2020-10-10-webpack-5-release',
    content:
      'Webpack major release with faster builds, smaller builds, federated modules (faster scaled builds), better stats, better module types, asset modules, top level await and other spec support.',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4ecf',
    title: 'Tailwind Play.',
    date: 'October 8, 2020',
    link: 'https://play.tailwindcss.com',
    content:
      'Tailwind Play, the official Tailwind CSS online playground! It gives U access to all of Tailwind"s build-time only features directly in the browser.',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4ece',
    title: 'Try something .new',
    date: 'October 3, 2020',
    link: 'https://whats.new/shortcuts',
    content:
      'Whether U"re working on a school project or starting a creative endeavor, there"s a <b>.new</b> link that can help U get things done faster.',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4ecd',
    title: 'GitHub code scanning is available in public repositories.',
    date: 'September 31, 2020',
    link: 'https://github.blog/2020-09-30-code-scanning-is-now-available',
    content:
      'GitHub code scanning is a developer-first, GitHub-native approach to easily find security vulnerabilities before they reach production. Code scanning is powered by CodeQL — the world’s most powerful code analysis engine.',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4ecc',
    title: 'Node 14.13.0',
    date: 'September 29, 2020',
    link: 'https://nodejs.org/en/blog/release/v14.13.0',
    content:
      'This minor release of Node includes named exports for CommonJS modules via static analysis to ease interoperability.',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4ecb',
    title: 'date-fns - JavaScript Date Library.',
    date: 'September 22, 2020',
    link: 'https://www.sitepoint.com/date-fns-javascript-date-library',
    content:
      'The Moment.js team has announced the project is now consider in maintenance mode. This means that the working group behind the project will not be adding any new features or capabilities. This makes date-fns one of the best alternatives to Moment.js out there.',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4eca',
    title: '5 SOLID principles with JavaScript.',
    date: 'September 19, 2020',
    link: 'https://dev.to/denisveleaev/5-solid-principles-with-javascript-how-to-make-your-code-solid-1kl5',
    content:
      'SOLID principles are strictly related to design patterns. It"s important to know design patterns because it"s a hot topic for an interview.',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4ec9',
    title: 'GitHub CLI 1.0 is now available.',
    date: 'September 17, 2020',
    link: 'https://github.blog/2020-09-17-github-cli-1-0-is-now-available',
    content:
      'GitHub CLI brings GitHub to your terminal. It reduces context switching, helps U focus, and enables U to more easily script and create your own workflows.',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4ec8',
    title: 'Do U know RxJS?',
    date: 'September 10, 2020',
    link: 'https://www.rxjs-fruits.com',
    content:
      'There"s a game to help U learn RxJS! Written by <a href="https://twitter.com/bfreakout">@BFreakout</a>! It"s open source, and he is taking PullRequests to add new levels.',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4ec7',
    title: 'Type <Challenge[]>',
    date: 'September 8, 2020',
    link: 'https://github.com/type-challenges/type-challenges',
    content:
      'Collection of TypeScript type challenges. This project is aim to help U better understand how the type system works, writing your own utilities, or just having fun with the challenges.',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4ec6',
    title: 'Will it CORS?',
    date: 'September 4, 2020',
    link: 'https://httptoolkit.tech/will-it-cors/',
    content: 'Do U fully understand how CORS works? This web page will help U.',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4ec5',
    title: 'ESLint soon in Angular.',
    date: 'September 3, 2020',
    link: 'https://github.com/angular/angular-cli/pull/18677',
    content:
      'With this change they add a new builder for ESLint. Check link below!',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4ec4',
    title: 'v7.8.0, a minor release upgrade of ESLint.',
    date: 'August 31, 2020',
    link: 'https://eslint.org/blog/2020/08/eslint-v7.8.0-released',
    content:
      'This release adds some new features like support for logical assignment operators and numeric separators for example.',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4ec3',
    title: 'GitHub is renaming the default branch from master to main.',
    date: 'August 27, 2020',
    link: 'https://github.blog/changelog/2020-08-26-set-the-default-branch-for-newly-created-repositories',
    content:
      'You can now set the default branch name for newly-created repositories under your username. On October 1, 2020, if U haven"t changed the default branch for new repositories it will automatically change from master to main.',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4ec2',
    title: 'Electron 10 has been released.',
    date: 'August 26, 2020',
    link: 'https://www.electronjs.org/blog/electron-10-0',
    content:
      'The Electron team is excited to announce the release of Electron 10.0.0. It includes upgrades to Chromium 85, V8 8.5 and Node 12.16. They"ve added several new API integrations and improvements.',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4ec1',
    title: 'TypeScript 4.0 released!',
    date: 'August 20, 2020',
    link: 'https://devblogs.microsoft.com/typescript/announcing-typescript-4-0',
    content:
      'Today Microsoft announced the availability of TypeScript 4.0! This version of the language represents next generation of TypeScript releases and comes with a variety of new features.',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4ec0',
    title: 'A collective list of APIs.',
    date: 'August 16, 2020',
    link: 'https://apilist.fun',
    content: 'A public list of free APIs for programmers.',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4ebf',
    title: 'Removing sensitive data from GitHub history',
    date: 'August 11, 2020',
    link: 'https://dev.to/edmondso006/removing-sensitive-data-from-git-history-5g63',
    content:
      'I would like to think that we have all be there: accidentally pushing a secret (access token, password, connection string, etc) to your remote git server and immediately proceed to start to freak out. Or maybe its just me.',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4ebe',
    title: 'Coding Games',
    date: 'August 13, 2020',
    link: 'https://x-team.com/blog/coding-games',
    content:
      'Coding games are an oft-overlooked way of learning a new programming language or improving your knowledge of an existing one.',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4ebd',
    title: 'Microsoft FAST Design',
    date: 'August 9, 2020',
    link: 'https://www.fast.design',
    content:
      'FAST is a collection of JavaScript packages centered around web standards, designed to help U efficiently tackle some of the most common challenges in website and application design and development.',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4ebc',
    title: 'A GitHub public roadmap',
    date: 'August 7, 2020',
    link: 'https://github.blog/2020-07-28-announcing-the-github-public-roadmap',
    content:
      'The public roadmap is designed to give your team more information about what features and functionality U can expect from GitHub over the coming quarters.',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4ebb',
    title: 'A Roadmap for Angular',
    date: 'August 6, 2020',
    link: 'https://angular.io/guide/roadmap',
    content:
      'This is the first time when Angular Team published a formal roadmap. U can find all the projects from Angular backlog that are already in-progress, or that they will be working on soon.',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4eba',
    title: 'Exercism.',
    date: 'August 1, 2020',
    link: 'https://exercism.io',
    content:
      'Exercism aims to provide opportunity for people of all backgrounds by helping them develop their programming skills through practice and mentorship.',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4eb9',
    title: 'Bundle Phobia',
    date: 'July 31, 2020',
    link: 'https://bundlephobia.com',
    content:
      'With Bundlephobia U can find the cost of adding a npm package to your bundle.',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4eb8',
    title: 'Oh Shit, Git!?!',
    date: 'July 30, 2020',
    link: 'https://ohshitgit.com',
    content:
      'If U find Git confusing, don"t worry! U"re not alone. People who"ve been using it every day for years still make mistakes. So there U can find some bad situations and how to get out of them in plain english.',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4eb7',
    title: 'free-for.dev',
    date: 'July 29, 2020',
    link: 'https://free-for.dev',
    content:
      'A list of software (SaaS, PaaS, IaaS, etc.) and other offerings that have free tiers for developers.',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4eb6',
    title: 'whatthefuck.is/?',
    date: 'July 28, 2020',
    link: 'https://whatthefuck.is',
    content:
      'An opinionated glossary of computer science terms for front-end developers. Written by Dan Abramov.',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4eb5',
    title: 'JavaScript Questions',
    date: 'July 27, 2020',
    link: 'https://github.com/lydiahallie/javascript-questions',
    content:
      'R U bored during the lockdown? Test out Ur boredom by trying to complete as many questions in this JavaScript questions series.',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4eb4',
    title: 'Github Profile Secret',
    date: 'July 26, 2020',
    link: 'https://kevsoft.net/2020/07/04/github-special-repository-the-public-profile-readme.html',
    content:
      'A new feature arrived on GitHub recently. U can finally add a README to your GitHub profile.',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4eb3',
    title: 'TypeOfNaN JavaScript Quizzes',
    date: 'July 25, 2020',
    link: 'https://quiz.typeofnan.dev',
    content:
      'How much do U know about JavaScript? Learn JS fundamentals through fun and challenging quizzes.',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4eb2',
    title: 'Single LOC JavaScript',
    date: 'May 9, 2020',
    link: 'https://github.com/phuoc-ng/1loc',
    content:
      'A great collection of single-line utilities. What"s your fav JavaScript single LOC (line of code)?',
  },
  {
    _id: '5fb4e0cec7f37b1df5ad4eb1',
    title: 'Version 10 of Angular Now Available',
    date: 'June 25, 2020',
    link: 'https://blog.angular.io/version-10-of-angular-now-available-78960babd41',
    content:
      'Angular Version 10.0.0 is here! This is a major release that spans the entire platform, including the framework, Angular Material, and the CLI.',
  },
];
