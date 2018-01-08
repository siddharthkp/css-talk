const tweets = [
  {
    user: 'Author',
    handle: '@hidden',
    avatar: 'avatars/none.jpg',
    text: "This is a work in progress, please don't share it with anyone yet."
  },
  {
    user: 'Author',
    handle: '@hidden',
    avatar: 'avatars/none.jpg',
    reply: true,
    text:
      "These tweets are paraphrased, the people mentioned didn't actually say these words. <br/><br/> I will reach out to the folks I can and get their approval on the words I use, don't want to offend anyone :) <br/><br/> If I get something wrong, please tell me!"
  },
  {
    user: 'Author',
    handle: '@hidden',
    avatar: 'avatars/none.jpg',
    text: 'Have fun!',
    reply: true
  },
  {
    user: 'Tim Berners-Lee',
    handle: '@timberners_lee',
    avatar: 'https://pbs.twimg.com/profile_images/1325092609/94d9da15ab89e3e2b4a5b9a5174f5618_bigger.jpg',
    time: '1990',
    text:
      "Hi people, so you know how we keep complaining that it's difficult to share documents, well I made a thing (1/4)"
  },
  {
    user: 'Tim Berners-Lee',
    avatar: 'https://pbs.twimg.com/profile_images/1325092609/94d9da15ab89e3e2b4a5b9a5174f5618_bigger.jpg',
    handle: '@timberners_lee',
    time: '1990',
    text: "It's called The Internet, check it out (2/4)",
    image: 'the-internet.png',
    reply: true
  },
  {
    user: 'Tim Berners-Lee',
    avatar: 'https://pbs.twimg.com/profile_images/1325092609/94d9da15ab89e3e2b4a5b9a5174f5618_bigger.jpg',
    handle: '@timberners_lee',
    time: '1990',
    reply: true,
    text: 'It uses this language called HTML (3/4)'
  },
  {
    user: 'Tim Berners-Lee',
    avatar: 'https://pbs.twimg.com/profile_images/1325092609/94d9da15ab89e3e2b4a5b9a5174f5618_bigger.jpg',
    handle: '@timberners_lee',
    time: '1990',
    text: 'You can even style your documents with fonts and tables 😎',
    language: 'html',
    code: `
  <font face="Arial" color="#333">
    <h1>Hello</h1>
  </font>

  <table>
    <tr>
    <td width="50%"></td>
    <td width="50%"></td>
    </tr>
  </table>
    `,
    reply: true
  },
  {
    user: 'Robert Raisch',
    avatar: 'avatars/robert.jpg',
    time: '1993',
    text: 'Umm, programmers need a way to style their documents'
  },
  {
    user: 'Robert Raisch',
    avatar: 'avatars/robert.jpg',
    time: '1993',
    text: 'how about this?',
    language: 'html',
    reply: true,
    code: `
  <h1>Hello</h1>

  <style>
    @H1 fo(fa=he,si=18,we=bo)
  </style>
    `
  },
  {
    user: 'Håkon Wium Lie',
    avatar: 'https://pbs.twimg.com/profile_images/681825796802113536/nzEoQF1Y_bigger.jpg',
    handle: '@wiumlie',
    time: '1993',
    text: "A language for styling? That's a neat idea!",
    reply: true
  },
  {
    user: 'Håkon Wium Lie',
    avatar: 'https://pbs.twimg.com/profile_images/681825796802113536/nzEoQF1Y_bigger.jpg',
    handle: '@wiumlie',
    time: '1994',
    text: 'Okay, so users should have be able to configure how the pages look on thier screen, right?'
  },
  {
    user: 'Håkon Wium Lie',
    avatar: 'https://pbs.twimg.com/profile_images/681825796802113536/nzEoQF1Y_bigger.jpg',
    handle: '@wiumlie',
    time: '1994',
    text: 'But, we also want programmers to be able to control the styles for their documents',
    reply: true
  },
  {
    user: 'Håkon Wium Lie',
    avatar: 'https://pbs.twimg.com/profile_images/681825796802113536/nzEoQF1Y_bigger.jpg',
    handle: '@wiumlie',
    time: '1994',
    text:
      "So let developers have a say in how much weightage do they want and let's calculate styles according to that",
    reply: true,
    language: 'html',
    code: `
  <h1>Hello</h1>

  <style>
    h1.font.size = 20pt 40%
  </style>
    `
  },
  {
    user: 'Håkon Wium Lie',
    avatar: 'https://pbs.twimg.com/profile_images/681825796802113536/nzEoQF1Y_bigger.jpg',
    handle: '@wiumlie',
    time: '1994',
    reply: true,
    text:
      'These styles cascade, the users get rest of the weightage. <br/> say if the user wants 16pt, the font size would be `40% * 20 + 60% * 16 = 17.6pt` <br/> calling it Cascading HTML stylesheets'
  },
  {
    user: 'Bert Bos',
    avatar: 'avatars/bert.png',
    time: '1994',
    reply: true,
    text: "cool stuff! I've been working on something of my own, calling it stream-based style sheets",
    language: 'html',
    code: `
  <h1>Hello</h1>

  <style>
    !
    *H1.size = 2
    *H1.slant = true
  </style>
    `
  },
  {
    user: 'Håkon Wium Lie',
    avatar: 'https://pbs.twimg.com/profile_images/681825796802113536/nzEoQF1Y_bigger.jpg',
    handle: '@wiumlie',
    time: '1994',
    reply: true,
    text: "Nice! Let's work together"
  },
  {
    user: 'Dave Raggett',
    avatar: 'https://pbs.twimg.com/profile_images/570260226784247808/TKqgH3m2_bigger.jpeg',
    handle: '@draggett',
    time: '1994',
    text:
      'HTML should not turn into a page-description language, we need a more purpose-built mechanism to satisfy requirements from authors.'
  },
  {
    user: 'Dave Raggett',
    avatar: 'https://pbs.twimg.com/profile_images/570260226784247808/TKqgH3m2_bigger.jpeg',
    handle: '@draggett',
    time: '1994',
    reply: true,
    text: 'I am working on a browser called Arena <br/> @|wiumlie|@, your proposal looks interesting, want to team up?'
  },
  {
    user: 'Netscape',
    avatar: 'avatars/netscape.png',
    time: '1995',
    text: "Hey y'all! We made a new browser!"
  },
  {
    user: 'Brendan Eich',
    handle: '@BrendanEich',
    avatar: 'https://pbs.twimg.com/profile_images/603270050556956672/T0mfRsil_bigger.png',
    time: '1995',
    text: 'It has JavaScript!',
    reply: true
  },
  {
    user: 'w3c',
    handle: '@w3c',
    avatar: 'avatars/w3c.png',
    time: 'April 1995',
    text: "Let's all meet in Berlin and talk about the web?"
  },
  {
    user: 'Dave Raggett @ w3c',
    avatar: 'https://pbs.twimg.com/profile_images/570260226784247808/TKqgH3m2_bigger.jpeg',
    handle: '@draggett',
    time: 'April 1995',
    text:
      "Hello everyone! We could all use some styling on the web. <br/>Here's an implementation of @|håkon|@'s proposal!"
  },
  {
    user: 'w3c',
    handle: '@w3c',
    avatar: 'avatars/w3c.png',
    time: '1996',
    text: 'We present to you, Cascading Style Sheets!',
    image: 'lionking.gif'
  },
  {
    user: 'w3c',
    handle: '@w3c',
    avatar: 'avatars/w3c.png',
    reply: true,
    time: '1996',
    language: 'html',
    code: `
  <h1>Hello</h1>

  <style>
    h1 {
      font-family: 'Arial';
      color: '#333';
    }
  </style>
    `
  },
  {
    user: 'w3c',
    handle: '@w3c',
    avatar: 'avatars/w3c.png',
    reply: true,
    time: '1996',
    text: 'Browser folks, your turn 🙂'
  },
  {
    user: 'Microsoft',
    handle: '@Microsoft',
    avatar: 'https://pbs.twimg.com/profile_images/875416480547917824/R6wl9gWl_bigger.jpg',
    time: '1996',
    text: 'First!',
    reply: true
  },
  {
    user: 'Microsoft',
    handle: '@Microsoft',
    avatar: 'https://pbs.twimg.com/profile_images/875416480547917824/R6wl9gWl_bigger.jpg',
    time: '1996',
    text: 'Super excited about this release! Internet Explorer 3 with CSS support 😉',
    image: 'ie.png'
  },
  {
    user: 'Netscape',
    avatar: 'avatars/netscape.png',
    time: '1996',
    text: 'oh noes!',
    reply: true
  },
  {
    user: 'Netscape',
    avatar: 'avatars/netscape.png',
    time: '1996',
    text: "This CSS thing is nice and stuff, but it's not going to catch on"
  },
  {
    user: 'SpongeBob',
    handle: '@SpongeBob',
    avatar: 'https://pbs.twimg.com/profile_images/420241225283674113/xoCDeFzV_400x400.jpeg',
    time: '1997',
    image:
      'https://4.bp.blogspot.com/-Uanhi5fUUbM/WZWmJEAcR0I/AAAAAAAAAj0/4qjbnMCR-oUhnyjFXI9T5hTCOsG8_ya0gCLcBGAs/s1600/slide_14.jpg'
  },
  {
    user: 'Netscape',
    avatar: 'avatars/netscape.png',
    time: '1997',
    text: 'Okay, it seems like you folks really like this CSS thing, so we built a transpiler!'
  },
  {
    user: 'Netscape',
    avatar: 'avatars/netscape.png',
    time: '1997',
    reply: true,
    text: 'So you can write cascading stylesheets',
    language: 'css',
    code: `
  h1 {
    font-family: 'Arial';
    color: '#333';
  }
    `
  },
  {
    user: 'Netscape',
    avatar: 'avatars/netscape.png',
    time: '1997',
    reply: true,
    text: "and we'll convert it to javascript stylesheets - JSSS",
    language: 'javascript',
    code: `
  document.tags.H1.fontSize = 'Arial';
  document.tags.H1.color = '#333';
    `
  },
  {
    user: 'Netscape',
    avatar: 'avatars/netscape.png',
    time: '1997',
    reply: true,
    text: 'If you like you can skip the CSS and directly write your CSS in JS directly the way we would 😎'
  },
  {
    user: 'w3c',
    handle: '@w3c',
    avatar: 'avatars/w3c.png',
    time: '1997',
    text: 'We are creating a CSS 2 working group lead by @|svgeesus|@ to address all the shortcomings of CSS 1'
  },
  {
    user: 'Chris Lilley',
    handle: '@svgeesus',
    avatar: 'https://pbs.twimg.com/profile_images/637266605911764993/X-M4_Lan_bigger.jpg',
    time: '1997',
    reply: true,
    text: 'This is going to be fun 😉'
  },
  {
    user: 'Chris Lilley',
    handle: '@svgeesus',
    avatar: 'https://pbs.twimg.com/profile_images/637266605911764993/X-M4_Lan_bigger.jpg',
    time: '1997',
    text: 'We have exciting new features for you!'
  },
  {
    user: 'Chris Lilley',
    handle: '@svgeesus',
    avatar: 'https://pbs.twimg.com/profile_images/637266605911764993/X-M4_Lan_bigger.jpg',
    time: '1997',
    reply: true,
    text: 'Positioning and z-index!',
    language: 'css',
    code: `
  h1 {
    position: absolute;
    z-index: 1;
  }
    `
  },
  {
    user: 'Chris Lilley',
    handle: '@svgeesus',
    avatar: 'https://pbs.twimg.com/profile_images/637266605911764993/X-M4_Lan_bigger.jpg',
    time: '1997',
    reply: true,
    text: "Be nice and don't use 999999999 for everything, okay?"
  },
  {
    user: 'Chris Lilley',
    handle: '@svgeesus',
    avatar: 'https://pbs.twimg.com/profile_images/637266605911764993/X-M4_Lan_bigger.jpg',
    time: '1997',
    reply: true,
    text: 'And we have media queries for you!',
    language: 'css',
    code: `
  @media screen and (min-width: 480px) {
    h1 { padding: 1rem 3rem; }
  }
    `
  },
  {
    user: 'Opera',
    handle: '@opera',
    avatar: 'https://pbs.twimg.com/profile_images/825347670218768385/70k0cyif_bigger.jpg',
    time: '1998',
    text: 'Hi, we made a new browser!'
  },
  {
    user: 'Opera',
    handle: '@opera',
    avatar: 'https://pbs.twimg.com/profile_images/825347670218768385/70k0cyif_bigger.jpg',
    time: '1998',
    text: 'for mobile 📱',
    image: 'opera.png',
    reply: true
  },
  {
    user: 'Håkon Wium Lie',
    avatar: 'https://pbs.twimg.com/profile_images/681825796802113536/nzEoQF1Y_bigger.jpg',
    handle: '@wiumlie',
    time: '1998',
    text: 'whoa! this is really good! DM?',
    reply: true
  },
  {
    user: 'Håkon Wium Lie',
    avatar: 'https://pbs.twimg.com/profile_images/681825796802113536/nzEoQF1Y_bigger.jpg',
    handle: '@wiumlie',
    time: '1999',
    text: "Exciting to announce I'm joining @opera as CTO 😊",
    image: 'ceo.png'
  },
  {
    user: 'Microsoft',
    handle: '@Microsoft',
    avatar: 'https://pbs.twimg.com/profile_images/875416480547917824/R6wl9gWl_bigger.jpg',
    time: '1999',
    text: 'IE 5 is here! <br/>And business is good 😊'
  },
  {
    user: 'Netscape',
    avatar: 'avatars/netscape.png',
    time: '1999',
    text: 'Something big coming, watch this space'
  },
  {
    user: 'Netscape',
    avatar: 'avatars/netscape.png',
    time: '1999',
    text: 'We are releasing the source code for our browser!',
    reply: true
  },
  {
    user: 'Eric Raymond',
    avatar: 'avatars/eric.png',
    time: '1999',
    text: "Let's call it...",
    reply: true
  },
  {
    user: 'Eric Raymond',
    avatar: 'avatars/eric.png',
    time: '1999',
    text: '"open source"',
    reply: true
  },
  {
    user: 'Netscape',
    avatar: 'avatars/netscape.png',
    time: '1999',
    text: "We are open sourcing the source code for our browser! <br/> That's not all though 😉"
  },
  {
    user: 'Mozilla Foundation',
    avatar: 'avatars/mozilla.png',
    time: '2000',
    text:
      "Hi, we just formed a foundation and are building a new browser! <br/> It's called Phoenix and it's going to be awesome",
    image: 'phoenix.png'
  },
  {
    user: 'Phoenix Technologies',
    avatar: 'https://pbs.twimg.com/profile_images/335837601/Phoenix-Logo-fb-73_bigger.png',
    handle: '@PhoenixTechNews',
    time: '2000',
    text: 'Yeah, can you not call it that?',
    reply: true
  },
  {
    user: 'Mozilla Foundation',
    avatar: 'avatars/mozilla.png',
    time: '2000',
    text: "Fine, we'll call it Firebird 🔥",
    reply: true
  },
  {
    user: 'Firebird Database',
    avatar: 'https://pbs.twimg.com/profile_images/135916996/ds-firebird-logo-200_bigger.png',
    handle: '@firebirdsql',
    time: '2000',
    text: 'bruh!',
    reply: true
  },
  {
    user: 'Mozilla Foundation',
    avatar: 'avatars/mozilla.png',
    time: '2000',
    text: '!!!!!',
    reply: true
  },
  {
    user: 'Mozilla Foundation',
    avatar: 'avatars/mozilla.png',
    time: '2000',
    text: "We're calling it Firefox! And it's going to be the best browser ever",
    image: 'firefox.png',
    reply: true
  },
  {
    user: 'Microsoft',
    handle: '@Microsoft',
    avatar: 'https://pbs.twimg.com/profile_images/875416480547917824/R6wl9gWl_bigger.jpg',
    time: '2001',
    text: 'New browser, the best one yet: IE 6!'
  },
  {
    user: 'Secunia',
    handle: '@Secunia',
    avatar: 'https://pbs.twimg.com/profile_images/501351310122176512/7kiKflLb_bigger.png',
    time: '2001',
    text: 'Here are a bunch of security issues here!',
    reply: true
  },
  {
    user: 'Microsoft',
    handle: '@Microsoft',
    avatar: 'https://pbs.twimg.com/profile_images/875416480547917824/R6wl9gWl_bigger.jpg',
    time: '2001',
    text: 'Okay thanks, will fix it!',
    reply: true
  },
  {
    user: 'SpongeBob',
    handle: '@SpongeBob',
    avatar: 'https://pbs.twimg.com/profile_images/420241225283674113/xoCDeFzV_400x400.jpeg',
    time: '2001',
    image: 'https://i.ytimg.com/vi/bDQpF92l1vg/maxresdefault.jpg',
    reply: true
  },
  {
    user: 'Microsoft',
    handle: '@Microsoft',
    avatar: 'https://pbs.twimg.com/profile_images/875416480547917824/R6wl9gWl_bigger.jpg',
    time: '2001',
    text: "We appreciate your patience, we're fixing all the bugs.",
    reply: true
  },
  {
    user: 'Microsoft',
    handle: '@Microsoft',
    avatar: 'https://pbs.twimg.com/profile_images/875416480547917824/R6wl9gWl_bigger.jpg',
    time: '2001',
    text: 'Oh btw, the next version, IE 7 will be released with the next version of Windows! <br/><br/>(2006)',
    reply: true
  },
  {
    user: 'w3c',
    handle: '@w3c',
    avatar: 'https://pbs.twimg.com/profile_images/848879764664463361/VCy2ISdM_bigger.jpg',
    time: '2002',
    text: "We have been working on CSS 2.1, here's the first draft!"
  },
  {
    user: 'Mozilla',
    handle: '@mozilla',
    avatar: 'https://pbs.twimg.com/profile_images/821735271049768960/jJZXlJwZ_bigger.jpg',
    time: '2004',
    text: "Are you fed up with your browser? <br/><br/> We're in the newspaper!",
    image: 'nyt.png'
  },
  {
    user: 'Hampton Catlin',
    handle: '@hcatlin',
    avatar: 'https://pbs.twimg.com/profile_images/638910925261541376/WGhFe-az_bigger.jpg',
    time: 2005,
    text: "I'm designing on a new language based on CSS"
  },
  {
    user: 'Natalie Weizenbaum',
    handle: '@nex3',
    avatar: 'https://pbs.twimg.com/profile_images/908215412759814146/6ocuCcR-_bigger.jpg',
    time: 2005,
    text: 'I can help you implement that',
    reply: true
  },
  {
    user: 'Natalie Weizenbaum',
    handle: '@nex3',
    avatar: 'https://pbs.twimg.com/profile_images/908215412759814146/6ocuCcR-_bigger.jpg',
    time: 2005,
    text: 'Super happy to release Sass!',
    image: 'sass.png',
    reply: true
  },
  {
    user: 'Natalie Weizenbaum',
    handle: '@nex3',
    avatar: 'https://pbs.twimg.com/profile_images/908215412759814146/6ocuCcR-_bigger.jpg',
    time: 2005,
    text: 'You can nest classes, use variables and a bunch of other stuff that the preprocessor takes care for you',
    language: 'sass',
    code: `
  $primary-color: #3bbfce

  .notification
    .header
    .photo
    `,
    reply: true
  },
  {
    user: 'Varvara Stepanova',
    handle: '@varya_en',
    avatar: 'https://pbs.twimg.com/profile_images/914150533820243970/DnBSM3RF_bigger.jpg',
    time: 2007,
    text:
      'Okay so the cascade part makes CSS unpredictable, so if we get rid of that, our styles will become much better'
  },
  {
    user: 'Max Shirshin',
    handle: '@ingdir',
    avatar: 'avatars/ingdir.png',
    time: 2007,
    text: "Let's solve this!",
    reply: true
  },
  {
    user: 'Varvara Stepanova',
    handle: '@varya_en',
    avatar: 'https://pbs.twimg.com/profile_images/914150533820243970/DnBSM3RF_bigger.jpg',
    time: 2007,
    text: 'Conventions make things more predictable ✅',
    reply: true,
    language: 'css',
    code: `
  /* Blocks */
  .tweet {}

  /* Elements */
  .tweet__header {}

  /* Modifier */
  .tweet--retweeted {}
    `
  },
  {
    user: 'Max Shirshin',
    handle: '@ingdir',
    avatar: 'avatars/ingdir.png',
    time: 2007,
    reply: true,
    text: "That's a good way to handle state as well 😉",
    image: 'buttons.png',
    language: 'css',
    code: `
  .button { ... }

  .button--disabled { ... }

  .button--loading { ... }
    `
  },
  {
    user: 'Nicole Sullivan',
    handle: '@stubbornella',
    avatar: 'https://pbs.twimg.com/profile_images/796069133926350848/Gk12QrZC_bigger.jpg',
    time: 2009,
    text: "Here's a way of thinking about UI, write object oriented CSS"
  },
  {
    user: 'Nicole Sullivan',
    handle: '@stubbornella',
    avatar: 'https://pbs.twimg.com/profile_images/796069133926350848/Gk12QrZC_bigger.jpg',
    time: 2009,
    text: 'Build small blocks of UI and attach them together to make bigger blocks <br/><br/> Just like lego!',
    reply: true
  },
  {
    user: 'Nicole Sullivan',
    handle: '@stubbornella',
    avatar: 'https://pbs.twimg.com/profile_images/796069133926350848/Gk12QrZC_bigger.jpg',
    time: 2009,
    text:
      'Basically, a CSS “object” is a repeating visual pattern, that can be abstracted into an independent snippet of HTML, CSS, and possibly JavaScript. That object can then be reused throughout a site. <br/><br/>More here: https://github.com/stubbornella/oocss/wiki',
    reply: true
  },
  {
    user: 'Nicole Sullivan',
    handle: '@stubbornella',
    avatar: 'https://pbs.twimg.com/profile_images/796069133926350848/Gk12QrZC_bigger.jpg',
    time: 2009,
    text: 'Follow these 2 rules: <br/><br/> 1. Separate structure and skin <br/> 2. Separate container and content',
    reply: true
  },
  {
    user: 'Mark Otto',
    handle: '@mdo',
    avatar: 'https://pbs.twimg.com/profile_images/630796572691804161/kYW5TxUR_bigger.jpg',
    time: 2011,
    text: "Oh man, we need to bring some consistency in twitter's designs. @|fat|@ you in?"
  },
  {
    user: 'Jacob Thornton',
    handle: '@fat',
    avatar: 'https://pbs.twimg.com/profile_images/892560196324573185/fNHQpBpd_bigger.jpg',
    time: 2011,
    text: 'sounds dope',
    reply: true
  },
  {
    user: 'Mark Otto',
    handle: '@mdo',
    avatar: 'https://pbs.twimg.com/profile_images/630796572691804161/kYW5TxUR_bigger.jpg',
    time: 2011,
    image: 'bootstrap.png',
    text: 'boom! 💥',
    reply: true
  },
  {
    user: 'Jacob Thornton',
    handle: '@fat',
    avatar: 'https://pbs.twimg.com/profile_images/892560196324573185/fNHQpBpd_bigger.jpg',
    time: 2011,
    text: "we some widgets as well! hope this doesn't backfire.",
    language: 'html',
    code: `
  <div class="dropdown">
    <a class="dropdown-toggle"/>
    <ul class="dropdown-menu"></ul>
  </div>

  <script>
    $('.dropdown-toggle').dropdown()
  </script>
    `,
    reply: true
  },
  {
    user: 'Jonathan Snook',
    handle: '@snookca',
    avatar: 'https://pbs.twimg.com/profile_images/717669500917682176/_huneE84_bigger.jpg',
    time: 2011,
    text: "Here's a better way of naming your classes: SMACSS"
  },
  {
    user: 'Brad Frost',
    handle: '@brad_frost',
    avatar: 'https://pbs.twimg.com/profile_images/907811115459125248/i8AzK6gR_bigger.jpg',
    time: 2013,
    text: 'I wrote a book: Atomic design!'
  },
  {
    user: 'Nicolas Gallaghar',
    handle: '@necolas',
    avatar: 'https://pbs.twimg.com/profile_images/921930545595957249/dauinGb__bigger.jpg',
    time: 2014,
    text: 'Style tools for component-based UI development: SUITCSS'
  },
  {
    user: 'Harry Roberts',
    handle: '@csswizardry',
    avatar: 'https://pbs.twimg.com/profile_images/378800000842511021/741a0a2593ea55bbd6238f8705c7074f_bigger.jpeg',
    time: 2014,
    text: 'ITCSS: A sane, scalable, managed CSS architecture'
  },
  {
    user: 'Steve Carlson',
    handle: '@SteveCarlsonSF',
    avatar: 'https://pbs.twimg.com/profile_images/925869952594100224/DozsAa6D_bigger.jpg',
    time: 2014,
    text: 'Maintaining CSS by hand is hard, we should make computers do the work'
  },
  {
    user: 'Steve Carlson',
    handle: '@SteveCarlsonSF',
    avatar: 'https://pbs.twimg.com/profile_images/925869952594100224/DozsAa6D_bigger.jpg',
    time: 2014,
    text: 'Write CSS using functions in your HTML',
    language: 'html',
    code: `
  <button class="Bgc(#333) C(#fff)">
    Click me
  </button>
    `,
    reply: true
  },
  {
    user: 'Robert Raisch',
    avatar: 'avatars/robert.jpg',
    time: 'from 1993',
    text: 'This looks familiar 😉',
    reply: true
  },
  {
    user: 'Steve Carlson',
    handle: '@SteveCarlsonSF',
    avatar: 'https://pbs.twimg.com/profile_images/925869952594100224/DozsAa6D_bigger.jpg',
    time: 2014,
    text: 'Run it through the CLI and it will write the CSS for you <br/><br/> atomizer -o style.css ./*.html',
    reply: true
  },
  {
    user: 'Steve Carlson',
    handle: '@SteveCarlsonSF',
    avatar: 'https://pbs.twimg.com/profile_images/925869952594100224/DozsAa6D_bigger.jpg',
    time: 2014,
    language: 'css',
    code: `
  .Bgc(#333) {
    background-color: #333;
  }
  .C(#fff) {
    color: #fff;
  }
    `,
    reply: true
  },
  {
    user: 'Christopher Chedeau',
    handle: '@vjeux',
    avatar: 'https://pbs.twimg.com/profile_images/758422091347603456/_tIflgtD_bigger.jpg',
    time: 2014,
    text: 'Components are cool, yeah? We write inline styles in our component',
    language: 'javascript',
    code: `
  var styles = {
    button: {
      backgroundColor: '#333',
      color: '#fff'
    }
  }

  const Button = () => (
    <button style={styles.button}>
      Click me
    </button>
  )
    `
  },
  {
    user: 'Christopher Chedeau',
    handle: '@vjeux',
    avatar: 'https://pbs.twimg.com/profile_images/758422091347603456/_tIflgtD_bigger.jpg',
    time: 2014,
    reply: true,
    text: 'And because you have the component, you can use props as well',
    language: 'javascript',
    code: `
  function getStyles (props) {
    return ({
      backgroundColor: props.disabled ? '#333' : 'grey',
      color: props.disabled ? '#fff' : 'light-grey'
    })
  }

  const Button = (props) => (
    <button style={getStyles(props)}>
      Click me
    </button>
  )
    `
  },
  {
    user: 'Christopher Chedeau',
    handle: '@vjeux',
    avatar: 'https://pbs.twimg.com/profile_images/758422091347603456/_tIflgtD_bigger.jpg',
    time: 2014,
    reply: true,
    text: "Using inline styles does have it's downsides though like you can't use pseudo selectors"
  },
  {
    user: 'Alex Lande',
    handle: '@alexlande',
    avatar: 'https://pbs.twimg.com/profile_images/2706075856/c6626e44495a8869e70b729e26e5e785_bigger.png',
    time: 2015,
    text: 'Want to use pseudo selectors? We got you!',
    language: 'javascript',
    code: `
  const styles = {
    button: {
      backgroundColor: '#333',
      color: '#fff',
      ':hover': {
        backgroundColor: '#777'
      }
    }
  }
    `
  },
  {
    user: 'Ian Obermiller',
    handle: '@ianobermiller',
    avatar: 'https://pbs.twimg.com/profile_images/560865821283450880/yjF22pt__bigger.jpeg',
    time: 2015,
    text: 'Wrap your component with a @Radium decorator (1/2)',
    reply: true,
    language: 'javascript',
    code: `
  const Radium = require('radium');

  @Radium
  class Button extends React.Component {
    render () {
      return <button style={styles.button}>Click me</button>,
    }
  }
    `
  },
  {
    user: 'Ian Obermiller',
    handle: '@ianobermiller',
    avatar: 'https://pbs.twimg.com/profile_images/560865821283450880/yjF22pt__bigger.jpeg',
    time: 2015,
    text: 'And add the decorator transform to your .babelrc (2/2)',
    reply: true,
    language: 'javascript',
    code: `
  {
    "plugins": [
      "transform-decorators-legacy",
      "transform-class-properties"
    ]
  }
    `
  },
  {
    user: 'Alex Lande',
    handle: '@alexlande',
    avatar: 'https://pbs.twimg.com/profile_images/2706075856/c6626e44495a8869e70b729e26e5e785_bigger.png',
    time: 2015,
    text: "It's amazing what a little preprocessing can do for you 😉",
    reply: true
  },
  {
    user: 'Mark Dalgeish',
    handle: '@markdalgleish',
    avatar: 'https://pbs.twimg.com/profile_images/754886061872979968/BzaOWhs1_bigger.jpg',
    text: 'We already have a language for writing styles, what if we could solve the problems with some javascript',
    time: 2015
  },
  {
    user: 'Glen Maddern',
    handle: '@glenmaddern',
    avatar: 'https://pbs.twimg.com/profile_images/683874690293612545/kDStZOBp_bigger.png',
    text: 'Agreed! Conventions are good, but humans are really bad at following them',
    time: 2015,
    reply: true
  },
  {
    user: 'Mark Dalgeish',
    handle: '@markdalgleish',
    avatar: 'https://pbs.twimg.com/profile_images/754886061872979968/BzaOWhs1_bigger.jpg',
    text: 'so write your styles without worrying about scoping (1/3)',
    time: 2015,
    reply: true,
    language: 'css',
    code: `
  /* components/buttons.css */

  .btn { ... }
  .primary { ... }
  .secondary { ... }

  .disabled { ... }
  .loading { ... }
    `
  },
  {
    user: 'Mark Dalgeish',
    handle: '@markdalgleish',
    avatar: 'https://pbs.twimg.com/profile_images/754886061872979968/BzaOWhs1_bigger.jpg',
    text: '"require" them into your component file (2/3)',
    time: 2015,
    reply: true,
    language: 'javascript',
    code: `
  const styles = require('./components/buttons.css')

  <button className={styles.primary}>
    Click me
  </button>
    `
  },
  {
    user: 'Mark Dalgeish',
    handle: '@markdalgleish',
    avatar: 'https://pbs.twimg.com/profile_images/754886061872979968/BzaOWhs1_bigger.jpg',
    text: 'and let css-modules take care of the conflicts (3/3) <br/> Uses classes not inline-styles 😉',
    time: 2015,
    reply: true,
    language: 'html',
    code: `
  <button class="components_button__primary__abc5436">
    Click me
  </button>
    `
  },
  {
    user: 'Glen Maddern',
    handle: '@glenmaddern',
    avatar: 'https://pbs.twimg.com/profile_images/683874690293612545/kDStZOBp_bigger.png',
    text: 'Works with any other stack as well 😎',
    time: 2015,
    reply: true,
    language: 'javascript',
    code: `
  /* angular controller */
  const styles = require('./components/buttons.css')

  class MyController {
    constructor($scope) {
      $scope.styles = styles;
    }
  }

  /* html */
  <button ng-class="{{styles.primary}}">
    Click me
  </button>
    `
  },
  {
    user: 'Glen Maddern',
    handle: '@glenmaddern',
    avatar: 'https://pbs.twimg.com/profile_images/683874690293612545/kDStZOBp_bigger.png',
    text: 'Colocate your styles!',
    time: 2015,
    reply: true,
    language: 'sass',
    code: `
  .
  - forms
    - styles.css
    - index.js
  - feed
    - styles.css
    - index.js
    `
  },
  {
    user: 'Emily Eisenberg',
    handle: '@xymostech',
    avatar: 'avatars/emily.png',
    time: 2015,
    text: 'So me and @|jlfwong|@ have been working on something called Aphrodite'
  },
  {
    user: 'Emily Eisenberg',
    handle: '@xymostech',
    avatar: 'avatars/emily.png',
    time: 2015,
    reply: true,
    text: 'It helps you create stylesheets from your components',
    language: 'javascript',
    code: `
  const { Stylesheet, css } = require('aphrodite')

  const styles = Stylesheet.create({
    primary: {
      backgroundColor: '#333',
      ':hover' { backgroundColor: '#777' }
    }
  })

  <button className={css(styles.primary)}>
    Click me
  </button>
    `
  },
  {
    user: 'Jamie Wong',
    handle: '@jlfwong',
    avatar: 'avatars/jamie.png',
    time: 2015,
    reply: true,
    text: 'The result is scoped styles 🙂',
    language: 'html',
    code: `
  <style>
    .button_abc5436 { ... }
  <style>

  <button class="button_abc5436">
    Click me
  </button>
    `
  },
  {
    user: 'Jamie Wong',
    handle: '@jlfwong',
    avatar: 'avatars/jamie.png',
    time: 2015,
    reply: true,
    text: 'developers should be able to write what feels natural and let the library make it work'
  },
  {
    user: 'Oleg Slobodskoi',
    handle: '@oleg008',
    avatar: 'https://pbs.twimg.com/profile_images/754012456368963586/DOwDLy2k_bigger.jpg',
    time: 2015,
    text: 'Sometimes you need more grouping to make complex UI',
    image: 'nesting.png'
  },
  {
    user: 'Oleg Slobodskoi',
    handle: '@oleg008',
    avatar: 'https://pbs.twimg.com/profile_images/754012456368963586/DOwDLy2k_bigger.jpg',
    time: 2015,
    text: "JSS let's you do that 🙂",
    reply: true,
    code: `
  const classNames = createStyleSheet({
    dropdown: {
      backgroundColor: '#fff',
      '&:hover {backgroundColor: '#0c0'},
      '& .toggle' {backgroundColor: '#0e0'}
    }
  }).attach()

  <div className={classNames.dropdown}>
    <ul></ul>
    <div className="toggle></div>
  </div>
    `
  },
  {
    user: 'Evan You',
    handle: '@youyuxi',
    avatar: 'https://pbs.twimg.com/profile_images/888432310504370176/mhoGA4uj_bigger.jpg',
    time: 2015,
    text: 'In vuejs, we are going all in with colocation with single file components'
  },
  {
    user: 'Evan You',
    handle: '@youyuxi',
    avatar: 'https://pbs.twimg.com/profile_images/888432310504370176/mhoGA4uj_bigger.jpg',
    time: 2015,
    reply: true,
    language: 'html',
    code: `
  <template>
    <button>Click me</button>
  </template>

  <script>
    module.exports = { ... }
  </script>

  <style>
    button { ... }
  <style>
    `
  },
  {
    user: 'Evan You',
    handle: '@youyuxi',
    avatar: 'https://pbs.twimg.com/profile_images/888432310504370176/mhoGA4uj_bigger.jpg',
    time: 2015,
    reply: true,
    text: 'If you add scoped to the style tag, it will only apply these styles to the buttons in this component.',
    language: 'html',
    code: `
  <style scoped>
    button { ... }
  <style>
    `
  },
  {
    user: 'Author',
    handle: '@hidden',
    avatar: 'avatars/none.jpg',
    text:
      "This is a lot of work 😅, I'm gonna fill the rest laters <br/><br/> styletron, glamor, styled-components, styled-jsx, glamorous, emotion <br/> css variables, web components, <style scoped>"
  }
]

export default tweets

// {
//   user: 'Cristiano Rastelli',
//   handle: '@areaweb',
//   avatar: 'https://pbs.twimg.com/profile_images/818604518820679683/pJd1hqvC_bigger.jpg',
//   text: 'Let there be peace on CSS',
//   time: 2017,
//   image: 'separation.jpg'
// },
