// import React from 'react';

export class BurritoMD {
  constructor() {
    const header = (text, chars, content) => {
      const level = chars.length;
      return `${Array(level).join('#')} ${content.trim()}`;
    };

    this.rules = [
      { regex: /(#+)(.*)/g, replacement: header } // headers
      // { regex: /!\[([^\[]+)\]\(([^\)]+)\)/g, replacement: '<img src=\'$2\' alt=\'$1\'>' }, // image
      // { regex: /\[([^\[]+)\]\(([^\)]+)\)/g, replacement: '<a href=\'$2\'>$1</a>' },        // hyperlink
      // { regex: /(\*\*|__)(.*?)\1/g, replacement: '<strong>$2</strong>' },                  // bold
      // { regex: /(\*|_)(.*?)\1/g, replacement: '<em>$2</em>' },                             // emphasis
      // { regex: /\~\~(.*?)\~\~/g, replacement: '<del>$1</del>' },                           // del
      // { regex: /\:\"(.*?)\"\:/g, replacement: '<q>$1</q>' },                               // quote
      // { regex: /`(.*?)`/g, replacement: '<code>$1</code>' },                               // inline code
      // { regex: /\n\*(.*)/g, replacement: ulList },                                         // ul lists
      // { regex: /\n[0-9]+\.(.*)/g, replacement: olList },                                   // ol lists
      // { regex: /\n(&gt;|\>)(.*)/g, replacement: blockquote },                              // blockquotes
      // { regex: /\n-{5,}/g, replacement: '\n<hr />' },                                      // horizontal rule
      // { regex: /\n([^\n]+)\n/g, replacement: para },                                       // add paragraphs
      // { regex: /<\/ul>\s?<ul>/g, replacement: '' },                                        // fix extra ul
      // { regex: /<\/ol>\s?<ol>/g, replacement: '' },                                        // fix extra ol
      // { regex: /<\/blockquote><blockquote>/g, replacement: '\n' }                          // fix extra blockquote
    ];
  }

  parse(text) {
    let string = `\n${text}\n`;
    this.rules.forEach(rule => {
      string = string.replace(rule.regex, rule.replacement);
    });

    return string.trim();
  }
}

const Parser = new BurritoMD();

export default Parser;
