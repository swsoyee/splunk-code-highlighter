// ==UserScript==
// @name         Splunk code highlighter
// @namespace    https://github.com/swsoyee/splunk-code-highlighter
// @version      0.1.0
// @description  Highlight Splunk code in documentation and community.
// @icon         https://docs.splunk.com/favicon.ico
// @author       Wei Su
// @match        https://docs.splunk.com/Documentation/*
// @match        https://community.splunk.com/*
// @require      https://unpkg.com/@highlightjs/cdn-assets@10.7.1/highlight.min.js
// @require      https://cdn.jsdelivr.net/gh/swsoyee/highlightjs-spl/dist/spl.min.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @resource     hybrid https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/styles/hybrid.min.css
// ==/UserScript==
(function() {
    'use strict';
    GM_addStyle(GM_getResourceText('hybrid'));
    document.querySelectorAll('p.inlineQuery>code, pre>code').forEach(block => {
        block.innerText = block.innerText.replaceAll(' |', '\n|');
        hljs.highlightElement(block);
    });
})();
