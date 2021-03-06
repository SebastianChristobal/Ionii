import * as React from 'react';
import * as ReactDom from 'react-dom';
import DebugPrompt from './debugPrompt/DebugPrompt';
import DebugError from './debugError/DebugError';
import strings from './debugPrompt/DebugPrompt.resx';
var _errorIsShown = false;
var _containerElement;
export function showDebugPrompt(options) {
    return new Promise(function (resolve) {
        var title = options.loaderRequested && options.manifestsRequested
            ? strings.allowDebugLoaderAndManifestsTitle
            : (options.loaderRequested ? strings.allowDebugLoaderTitle : strings.allowDebugManifestsTitle);
        ReactDom.render(React.createElement(DebugPrompt, { title: title, callback: resolve }), _ensureEmptyContainerElement());
    });
}
export function showError(innerError, errorText, title) {
    if (!_errorIsShown) {
        _errorIsShown = true;
        ReactDom.render(React.createElement(DebugError, { innerError: innerError, errorText: errorText, title: title }), _ensureEmptyContainerElement());
    }
}
function _ensureEmptyContainerElement() {
    if (!_containerElement) {
        _containerElement = document.createElement('div');
        document.body.appendChild(_containerElement);
    }
    return _containerElement;
}
