 // stackOverflow:  https://stackoverflow.com/questions/57110946/raise-reveal-text-from-bottom-css-animation with some changes


 class TextSliderUpper {
  constructor(wrapper) {
    this.wrapper = wrapper;
    this.delay = 20;
    this._wrapContent();
  }

  _wrapContent() {
    let words = this.wrapper.textContent.split(' ');
    let delay = 0;
    let content = '';

    words.forEach((word, multiplier) => {
      let word_split = word.split(/([^\x00-\x80]|\w)/g);
      let word_content = '';
      word_split.forEach((char, index) => {
        delay += this.delay;

        word_content += `<span style="animation-delay: ${delay}ms">${char}</span>`;
      });

     
      if (content !== '') content += ' ';
      content += `<span>${word_content}</span>`;
    })

    
    this.wrapper.innerHTML = content;
  }

  init() {
    this.wrapper.classList.add('show');
  }
}

let headers = document.querySelectorAll('[data-animate]');

// Loop through, add relevant class
Array.from(headers).forEach(header => {
  let slideHeader = new TextSliderUpper(header);
   slideHeader.init();
  
})