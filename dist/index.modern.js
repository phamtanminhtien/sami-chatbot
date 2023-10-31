import { useState, createElement } from 'react';

var SamiChatBox = function SamiChatBox(_ref) {
  var config = _ref.config;
  var _ref2 = config || {
      containerWidth: 500,
      containerHeight: 80
    },
    containerWidth = _ref2.containerWidth,
    containerHeight = _ref2.containerHeight;
  var _React$useState = useState(false),
    isShow = _React$useState[0],
    setIsShow = _React$useState[1];
  return createElement("div", {
    id: 'sami_chatbot'
  }, createElement("div", {
    id: 'sami_chatbot_btn',
    onClick: function onClick() {
      setIsShow(!isShow);
    }
  }, createElement("img", {
    src: 'https://file-services-tt.s3.amazonaws.com/1698714060.9769785sami-logo.webp'
  })), createElement("div", {
    id: 'sami_chatbot_iframe',
    style: {
      width: containerWidth + "px",
      height: containerHeight + "vh",
      display: isShow ? 'block' : 'none',
      opacity: isShow ? 1 : 0
    }
  }, createElement("iframe", {
    width: '100%',
    height: '100%',
    src: 'https://chat.sami-ai.vn/embed?id=e1521a1a-1f22-4673-91c4-806afe17e339',
    frameBorder: '0'
  }), createElement("div", {
    id: 'sami_chatbot_close',
    onClick: function onClick() {
      setIsShow(false);
    }
  }, createElement("svg", {
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 24 24',
    stroke: 'currentColor',
    style: {
      width: '20px',
      height: '20px'
    }
  }, createElement("path", {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    d: 'M6 18L18 6M6 6l12 12'
  })))));
};

export { SamiChatBox };
//# sourceMappingURL=index.modern.js.map
