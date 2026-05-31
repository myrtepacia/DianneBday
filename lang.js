const translations = {
  en: {
    title: 'Made For Dianne 🎁',
    description: 'A special birthday gift is waiting for you.',
    settings: 'Website Settings',
    music: 'Music Settings',
    backgroundMusic: 'Background Music:',
    countdown: 'Countdown Settings',
    countdownTime: 'Countdown Time:',
    matrix: 'Matrix Rain Settings',
    matrixText: 'Matrix main text:',
    colorTheme: 'Choose a color:',
    pinkTheme: 'Sweet Pink',
    blueTheme: 'Cool Blue',
    purpleTheme: 'Dreamy Purple',
    customTheme: 'Custom Color',
    matrixColor1: 'Matrix color 1:',
    matrixColor2: 'Matrix color 2:',
    sequence: 'Main Text Settings',
    sequenceText: 'Main text content:',
    noteSequence: 'Note: separate words with | and avoid making a line too long',
    sequenceColor: 'Main text color:',
    gift: 'Animated Image Settings',
    giftImage: 'Animated image (optional):',
    enableBook: 'Show book:',
    book: 'Book Page Settings',
    enableHeart: 'Show heart effect:',
    apply: 'Apply Settings',
    on: 'On',
    off: 'Off',
    sec3: '3 seconds',
    sec5: '5 seconds',
    sec10: '10 seconds',
    noGif: 'None',
    settingsHint: 'Click here to customize the settings',
    loading: 'Loading...',
    waitingIsHappiness: 'Waiting is happiness!',
    invalidPageStructure: 'Invalid page structure!',
    currentPages: 'Currently {total} pages.',
    bookStructureGuide: 'Book structure required:\n- Page 1: Cover\n- From page 2: Page pairs (2-3, 4-5, 6-7...)',
    pleaseAddOrRemovePage: 'Please add or remove 1 page to create a valid structure.',
    pageTitleCover: 'Page {num} (Cover)',
    pageTitle: 'Page {num}',
    imageLabel: 'Image:',
    coverPlaceholder: 'Book Cover',
    pagePlaceholder: 'Page {num}',
    noImageAlt: 'No image yet - {placeholder}',
    contentLabel: 'Content:',
    contentPlaceholder: 'Enter content for page {num}',
    addNewPage: 'Add New Page',
    emptyPage: 'Empty page',
    endOfBook: 'End of book',
    fullscreenNotSupported: 'Your browser does not support fullscreen mode!'
  }
};

function setLanguage(lang) {
  document.documentElement.lang = 'en';
  document.title = translations.en.title;
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) descriptionMeta.setAttribute('content', translations.en.description);
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) ogDescription.setAttribute('content', translations.en.description);
  const twitterDescription = document.querySelector('meta[name="twitter:description"]');
  if (twitterDescription) twitterDescription.setAttribute('content', translations.en.description);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations.en[key]) {
      if (translations.en[key].includes('<')) {
        el.innerHTML = translations.en[key];
      } else {
        el.innerText = translations.en[key];
      }
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations.en[key]) {
      el.setAttribute('placeholder', translations.en[key]);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setLanguage('en');
});

function t(key, vars = {}) {
  let str = (translations.en && translations.en[key]) || key;
  Object.keys(vars).forEach((k) => {
    str = str.replace(`{${k}}`, vars[k]);
  });
  return str;
}
