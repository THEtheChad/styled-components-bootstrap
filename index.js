import React from 'react';
import styled, { injectGlobal } from 'styled-components';

function colWidth(units = 12) {
  return (units / 12 * 100) + '%';
}

const clearFix = `
  :before,
  :after{
    display: table;
    content: " ";
  }

  :after{
    clear: both;
  }
`;

export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

export const Row = styled.div`
  margin-right: -15px;
  margin-left: -15px;

  ${clearFix}
`;

export const Col = styled.div`
  ${(props) => {
    if (!props.type) props.type = 'xs';
    if (!props.units) props.units = 12;
    if (!props.offsetUnits) props.offsetUnits = 0;
  }}

  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  width: ${(props) => colWidth(props.units)};
  margin-left: ${(props) => colWidth(props['offsetUnits'])};

  ${(props) => (props.type == 'xs') && 'float: left'};

  @media (min-width: 768px) {
    ${(props) => (props.type == 'sm') && 'float: left;'};
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;

  ${clearFix}
`;

export class FormControl extends React.Component {
  constructor(props) {
    super(props);

    this.Control = styled[props.element]`
      display: block;
      width: 100%;
      height: 34px;
      padding: 6px 12px;
      font-size: 14px;
      line-height: 1.42857143;
      color: #555;
      background-color: #fff;
      background-image: none;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
      transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;

      :focus {
        border-color: #66afe9;
        outline: 0;
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
      }
      ::-webkit-input-placeholder {
        color: #999;
      }
      [disabled],
      [readonly]{
        background-color: #eee;
        opacity: 1;
      }
      [disabled]{
        cursor: not-allowed;
      }
    `;
  }

  render() {
    return <this.Control key="FormControl" {...this.props} />;
  }
}

export const Button = styled.div`
  ${(props) => {
    if (!props.buttonType) props.buttonType = 'default';
  }}

  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;

  color: ${(props) => {
    switch (props.buttonType) {
      default: return '#333';
    }
  }};
  background-color: ${(props) => {
    switch (props.buttonType) {
      default: return '#fff';
    }
  }};
  border-color: ${(props) => {
    switch (props.buttonType) {
      default: return '#ccc';
    }
  }};

  :focus,
  :active:focus,
  .active:focus,
  .focus,
  :active.focus,
  .active.focus {
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
    background-color: ${(props) => {
    switch (props.buttonType) {
      default: return '#e6e6e6';
    }
  }};
    border-color: ${(props) => {
    switch (props.buttonType) {
      default: return '#8c8c8c';
    }
  }};
  }
  :hover,
  :focus,
  .focus {
    background-color: ${(props) => {
    switch (props.buttonType) {
      default: return '#e6e6e6';
    }
  }};
    border-color: ${(props) => {
    switch (props.buttonType) {
      default: return '#adadad';
    }
  }};
    text-decoration: none;
  }
  :active,
  .active {
    background-image: none;
    outline: 0;
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
  }
  .disabled,
  [disabled]{
    cursor: not-allowed;
    filter: alpha(opacity=65);
    box-shadow: none;
    opacity: .65;
  }
`;

/* eslint no-unused-expressions: 0 */
injectGlobal`
html {
  font-family: sans-serif;
  -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
}
body {
  margin: 0;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary {
  display: block;
}
audio,
canvas,
progress,
video {
  display: inline-block;
  vertical-align: baseline;
}
audio:not([controls]) {
  display: none;
  height: 0;
}
[hidden],
template {
  display: none;
}
a {
  background-color: transparent;
}
a:active,
a:hover {
  outline: 0;
}
abbr[title] {
  border-bottom: 1px dotted;
}
b,
strong {
  font-weight: bold;
}
dfn {
  font-style: italic;
}
h1 {
  margin: .67em 0;
  font-size: 2em;
}
mark {
  color: #000;
  background: #ff0;
}
small {
  font-size: 80%;
}
sub,
sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
}
sup {
  top: -.5em;
}
sub {
  bottom: -.25em;
}
img {
  border: 0;
}
svg:not(:root) {
  overflow: hidden;
}
figure {
  margin: 1em 40px;
}
hr {
  height: 0;
  -webkit-box-sizing: content-box;
     -moz-box-sizing: content-box;
          box-sizing: content-box;
}
pre {
  overflow: auto;
}
code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}
button,
input,
optgroup,
select,
textarea {
  margin: 0;
  font: inherit;
  color: inherit;
}
button {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button;
  cursor: pointer;
}
button[disabled],
html input[disabled] {
  cursor: default;
}
button::-moz-focus-inner,
input::-moz-focus-inner {
  padding: 0;
  border: 0;
}
input {
  line-height: normal;
}
input[type="checkbox"],
input[type="radio"] {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
  padding: 0;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
input[type="search"] {
  -webkit-box-sizing: content-box;
     -moz-box-sizing: content-box;
          box-sizing: content-box;
  -webkit-appearance: textfield;
}
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
fieldset {
  padding: .35em .625em .75em;
  margin: 0 2px;
  border: 1px solid #c0c0c0;
}
legend {
  padding: 0;
  border: 0;
}
textarea {
  overflow: auto;
}
optgroup {
  font-weight: bold;
}
table {
  border-spacing: 0;
  border-collapse: collapse;
}
td,
th {
  padding: 0;
}
/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */
@media print {
  *,
  *:before,
  *:after {
    color: #000 !important;
    text-shadow: none !important;
    background: transparent !important;
    -webkit-box-shadow: none !important;
            box-shadow: none !important;
  }
  a,
  a:visited {
    text-decoration: underline;
  }
  a[href]:after {
    content: " (" attr(href) ")";
  }
  abbr[title]:after {
    content: " (" attr(title) ")";
  }
  a[href^="#"]:after,
  a[href^="javascript:"]:after {
    content: "";
  }
  pre,
  blockquote {
    border: 1px solid #999;

    page-break-inside: avoid;
  }
  thead {
    display: table-header-group;
  }
  tr,
  img {
    page-break-inside: avoid;
  }
  img {
    max-width: 100% !important;
  }
  p,
  h2,
  h3 {
    orphans: 3;
    widows: 3;
  }
  h2,
  h3 {
    page-break-after: avoid;
  }
  .navbar {
    display: none;
  }
  .btn > .caret,
  .dropup > .btn > .caret {
    border-top-color: #000 !important;
  }
  .label {
    border: 1px solid #000;
  }
  .table {
    border-collapse: collapse !important;
  }
  .table td,
  .table th {
    background-color: #fff !important;
  }
  .table-bordered th,
  .table-bordered td {
    border: 1px solid #ddd !important;
  }
}
@font-face {
  font-family: 'Glyphicons Halflings';

  src: url('../fonts/glyphicons-halflings-regular.eot');
  src: url('../fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('../fonts/glyphicons-halflings-regular.woff2') format('woff2'), url('../fonts/glyphicons-halflings-regular.woff') format('woff'), url('../fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('../fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg');
}
.glyphicon {
  position: relative;
  top: 1px;
  display: inline-block;
  font-family: 'Glyphicons Halflings';
  font-style: normal;
  font-weight: normal;
  line-height: 1;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.glyphicon-asterisk:before {
  content: "\u{002a}";
}
.glyphicon-plus:before {
  content: "\u{002b}";
}
.glyphicon-euro:before,
.glyphicon-eur:before {
  content: "\u{20ac}";
}
.glyphicon-minus:before {
  content: "\u{2212}";
}
.glyphicon-cloud:before {
  content: "\u{2601}";
}
.glyphicon-envelope:before {
  content: "\u{2709}";
}
.glyphicon-pencil:before {
  content: "\u{270f}";
}
.glyphicon-glass:before {
  content: "\u{e001}";
}
.glyphicon-music:before {
  content: "\u{e002}";
}
.glyphicon-search:before {
  content: "\u{e003}";
}
.glyphicon-heart:before {
  content: "\u{e005}";
}
.glyphicon-star:before {
  content: "\u{e006}";
}
.glyphicon-star-empty:before {
  content: "\u{e007}";
}
.glyphicon-user:before {
  content: "\u{e008}";
}
.glyphicon-film:before {
  content: "\u{e009}";
}
.glyphicon-th-large:before {
  content: "\u{e010}";
}
.glyphicon-th:before {
  content: "\u{e011}";
}
.glyphicon-th-list:before {
  content: "\u{e012}";
}
.glyphicon-ok:before {
  content: "\u{e013}";
}
.glyphicon-remove:before {
  content: "\u{e014}";
}
.glyphicon-zoom-in:before {
  content: "\u{e015}";
}
.glyphicon-zoom-out:before {
  content: "\u{e016}";
}
.glyphicon-off:before {
  content: "\u{e017}";
}
.glyphicon-signal:before {
  content: "\u{e018}";
}
.glyphicon-cog:before {
  content: "\u{e019}";
}
.glyphicon-trash:before {
  content: "\u{e020}";
}
.glyphicon-home:before {
  content: "\u{e021}";
}
.glyphicon-file:before {
  content: "\u{e022}";
}
.glyphicon-time:before {
  content: "\u{e023}";
}
.glyphicon-road:before {
  content: "\u{e024}";
}
.glyphicon-download-alt:before {
  content: "\u{e025}";
}
.glyphicon-download:before {
  content: "\u{e026}";
}
.glyphicon-upload:before {
  content: "\u{e027}";
}
.glyphicon-inbox:before {
  content: "\u{e028}";
}
.glyphicon-play-circle:before {
  content: "\u{e029}";
}
.glyphicon-repeat:before {
  content: "\u{e030}";
}
.glyphicon-refresh:before {
  content: "\u{e031}";
}
.glyphicon-list-alt:before {
  content: "\u{e032}";
}
.glyphicon-lock:before {
  content: "\u{e033}";
}
.glyphicon-flag:before {
  content: "\u{e034}";
}
.glyphicon-headphones:before {
  content: "\u{e035}";
}
.glyphicon-volume-off:before {
  content: "\u{e036}";
}
.glyphicon-volume-down:before {
  content: "\u{e037}";
}
.glyphicon-volume-up:before {
  content: "\u{e038}";
}
.glyphicon-qrcode:before {
  content: "\u{e039}";
}
.glyphicon-barcode:before {
  content: "\u{e040}";
}
.glyphicon-tag:before {
  content: "\u{e041}";
}
.glyphicon-tags:before {
  content: "\u{e042}";
}
.glyphicon-book:before {
  content: "\u{e043}";
}
.glyphicon-bookmark:before {
  content: "\u{e044}";
}
.glyphicon-print:before {
  content: "\u{e045}";
}
.glyphicon-camera:before {
  content: "\u{e046}";
}
.glyphicon-font:before {
  content: "\u{e047}";
}
.glyphicon-bold:before {
  content: "\u{e048}";
}
.glyphicon-italic:before {
  content: "\u{e049}";
}
.glyphicon-text-height:before {
  content: "\u{e050}";
}
.glyphicon-text-width:before {
  content: "\u{e051}";
}
.glyphicon-align-left:before {
  content: "\u{e052}";
}
.glyphicon-align-center:before {
  content: "\u{e053}";
}
.glyphicon-align-right:before {
  content: "\u{e054}";
}
.glyphicon-align-justify:before {
  content: "\u{e055}";
}
.glyphicon-list:before {
  content: "\u{e056}";
}
.glyphicon-indent-left:before {
  content: "\u{e057}";
}
.glyphicon-indent-right:before {
  content: "\u{e058}";
}
.glyphicon-facetime-video:before {
  content: "\u{e059}";
}
.glyphicon-picture:before {
  content: "\u{e060}";
}
.glyphicon-map-marker:before {
  content: "\u{e062}";
}
.glyphicon-adjust:before {
  content: "\u{e063}";
}
.glyphicon-tint:before {
  content: "\u{e064}";
}
.glyphicon-edit:before {
  content: "\u{e065}";
}
.glyphicon-share:before {
  content: "\u{e066}";
}
.glyphicon-check:before {
  content: "\u{e067}";
}
.glyphicon-move:before {
  content: "\u{e068}";
}
.glyphicon-step-backward:before {
  content: "\u{e069}";
}
.glyphicon-fast-backward:before {
  content: "\u{e070}";
}
.glyphicon-backward:before {
  content: "\u{e071}";
}
.glyphicon-play:before {
  content: "\u{e072}";
}
.glyphicon-pause:before {
  content: "\u{e073}";
}
.glyphicon-stop:before {
  content: "\u{e074}";
}
.glyphicon-forward:before {
  content: "\u{e075}";
}
.glyphicon-fast-forward:before {
  content: "\u{e076}";
}
.glyphicon-step-forward:before {
  content: "\u{e077}";
}
.glyphicon-eject:before {
  content: "\u{e078}";
}
.glyphicon-chevron-left:before {
  content: "\u{e079}";
}
.glyphicon-chevron-right:before {
  content: "\u{e080}";
}
.glyphicon-plus-sign:before {
  content: "\u{e081}";
}
.glyphicon-minus-sign:before {
  content: "\u{e082}";
}
.glyphicon-remove-sign:before {
  content: "\u{e083}";
}
.glyphicon-ok-sign:before {
  content: "\u{e084}";
}
.glyphicon-question-sign:before {
  content: "\u{e085}";
}
.glyphicon-info-sign:before {
  content: "\u{e086}";
}
.glyphicon-screenshot:before {
  content: "\u{e087}";
}
.glyphicon-remove-circle:before {
  content: "\u{e088}";
}
.glyphicon-ok-circle:before {
  content: "\u{e089}";
}
.glyphicon-ban-circle:before {
  content: "\u{e090}";
}
.glyphicon-arrow-left:before {
  content: "\u{e091}";
}
.glyphicon-arrow-right:before {
  content: "\u{e092}";
}
.glyphicon-arrow-up:before {
  content: "\u{e093}";
}
.glyphicon-arrow-down:before {
  content: "\u{e094}";
}
.glyphicon-share-alt:before {
  content: "\u{e095}";
}
.glyphicon-resize-full:before {
  content: "\u{e096}";
}
.glyphicon-resize-small:before {
  content: "\u{e097}";
}
.glyphicon-exclamation-sign:before {
  content: "\u{e101}";
}
.glyphicon-gift:before {
  content: "\u{e102}";
}
.glyphicon-leaf:before {
  content: "\u{e103}";
}
.glyphicon-fire:before {
  content: "\u{e104}";
}
.glyphicon-eye-open:before {
  content: "\u{e105}";
}
.glyphicon-eye-close:before {
  content: "\u{e106}";
}
.glyphicon-warning-sign:before {
  content: "\u{e107}";
}
.glyphicon-plane:before {
  content: "\u{e108}";
}
.glyphicon-calendar:before {
  content: "\u{e109}";
}
.glyphicon-random:before {
  content: "\u{e110}";
}
.glyphicon-comment:before {
  content: "\u{e111}";
}
.glyphicon-magnet:before {
  content: "\u{e112}";
}
.glyphicon-chevron-up:before {
  content: "\u{e113}";
}
.glyphicon-chevron-down:before {
  content: "\u{e114}";
}
.glyphicon-retweet:before {
  content: "\u{e115}";
}
.glyphicon-shopping-cart:before {
  content: "\u{e116}";
}
.glyphicon-folder-close:before {
  content: "\u{e117}";
}
.glyphicon-folder-open:before {
  content: "\u{e118}";
}
.glyphicon-resize-vertical:before {
  content: "\u{e119}";
}
.glyphicon-resize-horizontal:before {
  content: "\u{e120}";
}
.glyphicon-hdd:before {
  content: "\u{e121}";
}
.glyphicon-bullhorn:before {
  content: "\u{e122}";
}
.glyphicon-bell:before {
  content: "\u{e123}";
}
.glyphicon-certificate:before {
  content: "\u{e124}";
}
.glyphicon-thumbs-up:before {
  content: "\u{e125}";
}
.glyphicon-thumbs-down:before {
  content: "\u{e126}";
}
.glyphicon-hand-right:before {
  content: "\u{e127}";
}
.glyphicon-hand-left:before {
  content: "\u{e128}";
}
.glyphicon-hand-up:before {
  content: "\u{e129}";
}
.glyphicon-hand-down:before {
  content: "\u{e130}";
}
.glyphicon-circle-arrow-right:before {
  content: "\u{e131}";
}
.glyphicon-circle-arrow-left:before {
  content: "\u{e132}";
}
.glyphicon-circle-arrow-up:before {
  content: "\u{e133}";
}
.glyphicon-circle-arrow-down:before {
  content: "\u{e134}";
}
.glyphicon-globe:before {
  content: "\u{e135}";
}
.glyphicon-wrench:before {
  content: "\u{e136}";
}
.glyphicon-tasks:before {
  content: "\u{e137}";
}
.glyphicon-filter:before {
  content: "\u{e138}";
}
.glyphicon-briefcase:before {
  content: "\u{e139}";
}
.glyphicon-fullscreen:before {
  content: "\u{e140}";
}
.glyphicon-dashboard:before {
  content: "\u{e141}";
}
.glyphicon-paperclip:before {
  content: "\u{e142}";
}
.glyphicon-heart-empty:before {
  content: "\u{e143}";
}
.glyphicon-link:before {
  content: "\u{e144}";
}
.glyphicon-phone:before {
  content: "\u{e145}";
}
.glyphicon-pushpin:before {
  content: "\u{e146}";
}
.glyphicon-usd:before {
  content: "\u{e148}";
}
.glyphicon-gbp:before {
  content: "\u{e149}";
}
.glyphicon-sort:before {
  content: "\u{e150}";
}
.glyphicon-sort-by-alphabet:before {
  content: "\u{e151}";
}
.glyphicon-sort-by-alphabet-alt:before {
  content: "\u{e152}";
}
.glyphicon-sort-by-order:before {
  content: "\u{e153}";
}
.glyphicon-sort-by-order-alt:before {
  content: "\u{e154}";
}
.glyphicon-sort-by-attributes:before {
  content: "\u{e155}";
}
.glyphicon-sort-by-attributes-alt:before {
  content: "\u{e156}";
}
.glyphicon-unchecked:before {
  content: "\u{e157}";
}
.glyphicon-expand:before {
  content: "\u{e158}";
}
.glyphicon-collapse-down:before {
  content: "\u{e159}";
}
.glyphicon-collapse-up:before {
  content: "\u{e160}";
}
.glyphicon-log-in:before {
  content: "\u{e161}";
}
.glyphicon-flash:before {
  content: "\u{e162}";
}
.glyphicon-log-out:before {
  content: "\u{e163}";
}
.glyphicon-new-window:before {
  content: "\u{e164}";
}
.glyphicon-record:before {
  content: "\u{e165}";
}
.glyphicon-save:before {
  content: "\u{e166}";
}
.glyphicon-open:before {
  content: "\u{e167}";
}
.glyphicon-saved:before {
  content: "\u{e168}";
}
.glyphicon-import:before {
  content: "\u{e169}";
}
.glyphicon-export:before {
  content: "\u{e170}";
}
.glyphicon-send:before {
  content: "\u{e171}";
}
.glyphicon-floppy-disk:before {
  content: "\u{e172}";
}
.glyphicon-floppy-saved:before {
  content: "\u{e173}";
}
.glyphicon-floppy-remove:before {
  content: "\u{e174}";
}
.glyphicon-floppy-save:before {
  content: "\u{e175}";
}
.glyphicon-floppy-open:before {
  content: "\u{e176}";
}
.glyphicon-credit-card:before {
  content: "\u{e177}";
}
.glyphicon-transfer:before {
  content: "\u{e178}";
}
.glyphicon-cutlery:before {
  content: "\u{e179}";
}
.glyphicon-header:before {
  content: "\u{e180}";
}
.glyphicon-compressed:before {
  content: "\u{e181}";
}
.glyphicon-earphone:before {
  content: "\u{e182}";
}
.glyphicon-phone-alt:before {
  content: "\u{e183}";
}
.glyphicon-tower:before {
  content: "\u{e184}";
}
.glyphicon-stats:before {
  content: "\u{e185}";
}
.glyphicon-sd-video:before {
  content: "\u{e186}";
}
.glyphicon-hd-video:before {
  content: "\u{e187}";
}
.glyphicon-subtitles:before {
  content: "\u{e188}";
}
.glyphicon-sound-stereo:before {
  content: "\u{e189}";
}
.glyphicon-sound-dolby:before {
  content: "\u{e190}";
}
.glyphicon-sound-5-1:before {
  content: "\u{e191}";
}
.glyphicon-sound-6-1:before {
  content: "\u{e192}";
}
.glyphicon-sound-7-1:before {
  content: "\u{e193}";
}
.glyphicon-copyright-mark:before {
  content: "\u{e194}";
}
.glyphicon-registration-mark:before {
  content: "\u{e195}";
}
.glyphicon-cloud-download:before {
  content: "\u{e197}";
}
.glyphicon-cloud-upload:before {
  content: "\u{e198}";
}
.glyphicon-tree-conifer:before {
  content: "\u{e199}";
}
.glyphicon-tree-deciduous:before {
  content: "\u{e200}";
}
.glyphicon-cd:before {
  content: "\u{e201}";
}
.glyphicon-save-file:before {
  content: "\u{e202}";
}
.glyphicon-open-file:before {
  content: "\u{e203}";
}
.glyphicon-level-up:before {
  content: "\u{e204}";
}
.glyphicon-copy:before {
  content: "\u{e205}";
}
.glyphicon-paste:before {
  content: "\u{e206}";
}
.glyphicon-alert:before {
  content: "\u{e209}";
}
.glyphicon-equalizer:before {
  content: "\u{e210}";
}
.glyphicon-king:before {
  content: "\u{e211}";
}
.glyphicon-queen:before {
  content: "\u{e212}";
}
.glyphicon-pawn:before {
  content: "\u{e213}";
}
.glyphicon-bishop:before {
  content: "\u{e214}";
}
.glyphicon-knight:before {
  content: "\u{e215}";
}
.glyphicon-baby-formula:before {
  content: "\u{e216}";
}
.glyphicon-tent:before {
  content: "\u{26fa}";
}
.glyphicon-blackboard:before {
  content: "\u{e218}";
}
.glyphicon-bed:before {
  content: "\u{e219}";
}
.glyphicon-apple:before {
  content: "\u{f8ff}";
}
.glyphicon-erase:before {
  content: "\u{e221}";
}
.glyphicon-hourglass:before {
  content: "\u{231b}";
}
.glyphicon-lamp:before {
  content: "\u{e223}";
}
.glyphicon-duplicate:before {
  content: "\u{e224}";
}
.glyphicon-piggy-bank:before {
  content: "\u{e225}";
}
.glyphicon-scissors:before {
  content: "\u{e226}";
}
.glyphicon-bitcoin:before {
  content: "\u{e227}";
}
.glyphicon-btc:before {
  content: "\u{e227}";
}
.glyphicon-xbt:before {
  content: "\u{e227}";
}
.glyphicon-yen:before {
  content: "\u{00a5}";
}
.glyphicon-jpy:before {
  content: "\u{00a5}";
}
.glyphicon-ruble:before {
  content: "\u{20bd}";
}
.glyphicon-rub:before {
  content: "\u{20bd}";
}
.glyphicon-scale:before {
  content: "\u{e230}";
}
.glyphicon-ice-lolly:before {
  content: "\u{e231}";
}
.glyphicon-ice-lolly-tasted:before {
  content: "\u{e232}";
}
.glyphicon-education:before {
  content: "\u{e233}";
}
.glyphicon-option-horizontal:before {
  content: "\u{e234}";
}
.glyphicon-option-vertical:before {
  content: "\u{e235}";
}
.glyphicon-menu-hamburger:before {
  content: "\u{e236}";
}
.glyphicon-modal-window:before {
  content: "\u{e237}";
}
.glyphicon-oil:before {
  content: "\u{e238}";
}
.glyphicon-grain:before {
  content: "\u{e239}";
}
.glyphicon-sunglasses:before {
  content: "\u{e240}";
}
.glyphicon-text-size:before {
  content: "\u{e241}";
}
.glyphicon-text-color:before {
  content: "\u{e242}";
}
.glyphicon-text-background:before {
  content: "\u{e243}";
}
.glyphicon-object-align-top:before {
  content: "\u{e244}";
}
.glyphicon-object-align-bottom:before {
  content: "\u{e245}";
}
.glyphicon-object-align-horizontal:before {
  content: "\u{e246}";
}
.glyphicon-object-align-left:before {
  content: "\u{e247}";
}
.glyphicon-object-align-vertical:before {
  content: "\u{e248}";
}
.glyphicon-object-align-right:before {
  content: "\u{e249}";
}
.glyphicon-triangle-right:before {
  content: "\u{e250}";
}
.glyphicon-triangle-left:before {
  content: "\u{e251}";
}
.glyphicon-triangle-bottom:before {
  content: "\u{e252}";
}
.glyphicon-triangle-top:before {
  content: "\u{e253}";
}
.glyphicon-console:before {
  content: "\u{e254}";
}
.glyphicon-superscript:before {
  content: "\u{e255}";
}
.glyphicon-subscript:before {
  content: "\u{e256}";
}
.glyphicon-menu-left:before {
  content: "\u{e257}";
}
.glyphicon-menu-right:before {
  content: "\u{e258}";
}
.glyphicon-menu-down:before {
  content: "\u{e259}";
}
.glyphicon-menu-up:before {
  content: "\u{e260}";
}
* {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}
*:before,
*:after {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}
html {
  font-size: 10px;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
  background-color: #fff;
}
input,
button,
select,
textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
a {
  color: #337ab7;
  text-decoration: none;
}
a:hover,
a:focus {
  color: #23527c;
  text-decoration: underline;
}
a:focus {
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
figure {
  margin: 0;
}
img {
  vertical-align: middle;
}
.img-responsive,
.thumbnail > img,
.thumbnail a > img,
.carousel-inner > .item > img,
.carousel-inner > .item > a > img {
  display: block;
  max-width: 100%;
  height: auto;
}
.img-rounded {
  border-radius: 6px;
}
.img-thumbnail {
  display: inline-block;
  max-width: 100%;
  height: auto;
  padding: 4px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-transition: all .2s ease-in-out;
       -o-transition: all .2s ease-in-out;
          transition: all .2s ease-in-out;
}
.img-circle {
  border-radius: 50%;
}
hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid #eee;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
.sr-only-focusable:active,
.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  clip: auto;
}
[role="button"] {
  cursor: pointer;
}
h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
}
h1 small,
h2 small,
h3 small,
h4 small,
h5 small,
h6 small,
.h1 small,
.h2 small,
.h3 small,
.h4 small,
.h5 small,
.h6 small,
h1 .small,
h2 .small,
h3 .small,
h4 .small,
h5 .small,
h6 .small,
.h1 .small,
.h2 .small,
.h3 .small,
.h4 .small,
.h5 .small,
.h6 .small {
  font-weight: normal;
  line-height: 1;
  color: #777;
}
h1,
.h1,
h2,
.h2,
h3,
.h3 {
  margin-top: 20px;
  margin-bottom: 10px;
}
h1 small,
.h1 small,
h2 small,
.h2 small,
h3 small,
.h3 small,
h1 .small,
.h1 .small,
h2 .small,
.h2 .small,
h3 .small,
.h3 .small {
  font-size: 65%;
}
h4,
.h4,
h5,
.h5,
h6,
.h6 {
  margin-top: 10px;
  margin-bottom: 10px;
}
h4 small,
.h4 small,
h5 small,
.h5 small,
h6 small,
.h6 small,
h4 .small,
.h4 .small,
h5 .small,
.h5 .small,
h6 .small,
.h6 .small {
  font-size: 75%;
}
h1,
.h1 {
  font-size: 36px;
}
h2,
.h2 {
  font-size: 30px;
}
h3,
.h3 {
  font-size: 24px;
}
h4,
.h4 {
  font-size: 18px;
}
h5,
.h5 {
  font-size: 14px;
}
h6,
.h6 {
  font-size: 12px;
}
p {
  margin: 0 0 10px;
}
.lead {
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.4;
}
@media (min-width: 768px) {
  .lead {
    font-size: 21px;
  }
}
small,
.small {
  font-size: 85%;
}
mark,
.mark {
  padding: .2em;
  background-color: #fcf8e3;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
.text-center {
  text-align: center;
}
.text-justify {
  text-align: justify;
}
.text-nowrap {
  white-space: nowrap;
}
.text-lowercase {
  text-transform: lowercase;
}
.text-uppercase {
  text-transform: uppercase;
}
.text-capitalize {
  text-transform: capitalize;
}
.text-muted {
  color: #777;
}
.text-primary {
  color: #337ab7;
}
a.text-primary:hover,
a.text-primary:focus {
  color: #286090;
}
.text-success {
  color: #3c763d;
}
a.text-success:hover,
a.text-success:focus {
  color: #2b542c;
}
.text-info {
  color: #31708f;
}
a.text-info:hover,
a.text-info:focus {
  color: #245269;
}
.text-warning {
  color: #8a6d3b;
}
a.text-warning:hover,
a.text-warning:focus {
  color: #66512c;
}
.text-danger {
  color: #a94442;
}
a.text-danger:hover,
a.text-danger:focus {
  color: #843534;
}
.bg-primary {
  color: #fff;
  background-color: #337ab7;
}
a.bg-primary:hover,
a.bg-primary:focus {
  background-color: #286090;
}
.bg-success {
  background-color: #dff0d8;
}
a.bg-success:hover,
a.bg-success:focus {
  background-color: #c1e2b3;
}
.bg-info {
  background-color: #d9edf7;
}
a.bg-info:hover,
a.bg-info:focus {
  background-color: #afd9ee;
}
.bg-warning {
  background-color: #fcf8e3;
}
a.bg-warning:hover,
a.bg-warning:focus {
  background-color: #f7ecb5;
}
.bg-danger {
  background-color: #f2dede;
}
a.bg-danger:hover,
a.bg-danger:focus {
  background-color: #e4b9b9;
}
.page-header {
  padding-bottom: 9px;
  margin: 40px 0 20px;
  border-bottom: 1px solid #eee;
}
ul,
ol {
  margin-top: 0;
  margin-bottom: 10px;
}
ul ul,
ol ul,
ul ol,
ol ol {
  margin-bottom: 0;
}
.list-unstyled {
  padding-left: 0;
  list-style: none;
}
.list-inline {
  padding-left: 0;
  margin-left: -5px;
  list-style: none;
}
.list-inline > li {
  display: inline-block;
  padding-right: 5px;
  padding-left: 5px;
}
dl {
  margin-top: 0;
  margin-bottom: 20px;
}
dt,
dd {
  line-height: 1.42857143;
}
dt {
  font-weight: bold;
}
dd {
  margin-left: 0;
}
@media (min-width: 768px) {
  .dl-horizontal dt {
    float: left;
    width: 160px;
    overflow: hidden;
    clear: left;
    text-align: right;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .dl-horizontal dd {
    margin-left: 180px;
  }
}
abbr[title],
abbr[data-original-title] {
  cursor: help;
  border-bottom: 1px dotted #777;
}
.initialism {
  font-size: 90%;
  text-transform: uppercase;
}
blockquote {
  padding: 10px 20px;
  margin: 0 0 20px;
  font-size: 17.5px;
  border-left: 5px solid #eee;
}
blockquote p:last-child,
blockquote ul:last-child,
blockquote ol:last-child {
  margin-bottom: 0;
}
blockquote footer,
blockquote small,
blockquote .small {
  display: block;
  font-size: 80%;
  line-height: 1.42857143;
  color: #777;
}
blockquote footer:before,
blockquote small:before,
blockquote .small:before {
  content: '\u{2014} \u{00A0}';  
}
.blockquote-reverse,
blockquote.pull-right {
  padding-right: 15px;
  padding-left: 0;
  text-align: right;
  border-right: 5px solid #eee;
  border-left: 0;
}
.blockquote-reverse footer:before,
blockquote.pull-right footer:before,
.blockquote-reverse small:before,
blockquote.pull-right small:before,
.blockquote-reverse .small:before,
blockquote.pull-right .small:before {
  content: '';
}
.blockquote-reverse footer:after,
blockquote.pull-right footer:after,
.blockquote-reverse small:after,
blockquote.pull-right small:after,
.blockquote-reverse .small:after,
blockquote.pull-right .small:after {
  content: '\u{00A0} \u{2014}';
}
address {
  margin-bottom: 20px;
  font-style: normal;
  line-height: 1.42857143;
}
code,
kbd,
pre,
samp {
  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
}
code {
  padding: 2px 4px;
  font-size: 90%;
  color: #c7254e;
  background-color: #f9f2f4;
  border-radius: 4px;
}
kbd {
  padding: 2px 4px;
  font-size: 90%;
  color: #fff;
  background-color: #333;
  border-radius: 3px;
  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);
          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);
}
kbd kbd {
  padding: 0;
  font-size: 100%;
  font-weight: bold;
  -webkit-box-shadow: none;
          box-shadow: none;
}
pre {
  display: block;
  padding: 9.5px;
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 1.42857143;
  color: #333;
  word-break: break-all;
  word-wrap: break-word;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
}
pre code {
  padding: 0;
  font-size: inherit;
  color: inherit;
  white-space: pre-wrap;
  background-color: transparent;
  border-radius: 0;
}
`;
