define([], function() {
  var strings = {
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "加载调试脚本时出错。请确保服务器正在运行且“{0}”参数 URL 正确。",
      "errorLoadingDebugScriptHTTP": "加载调试脚本时出错。请确保服务器正在运行，“{0}”参数 URL 正确，且允许加载不安全的脚本。同时考虑使用开发证书并通过 HTTPS 处理调试脚本。",
      "errorLoadingDebugScriptMalformed": "加载调试脚本时出错。调试 URL ({0})似乎格式错误。",
      "errorLoadingDebugScriptUnknown": "加载调试脚本时出现未知错误。",
      "errorLoadingDebugLoaderTitle": "加载调试加载程序时出错。",
      "errorLoadingDebugManifestTitle": "加载调试清单时出错。",
      "errorLoadingUnknownTitle": "加载调试脚本时出错。"
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "缺少组件或初始值设定项函数。",
      "closeDeveloperToolsAriaLabel": "关闭开发人员工具。"
    },
    "_HyNcqqy05+791EWZRJ/Erg": {
      "listSeparator": "、",
      "loadComponentError": "Failed to load component \"{0}\" ({1}). Original error: {2}",
      "loadComponentDependencyError": "Failed to load component dependency \"{0}\" from component \"{1}\" ({2}). Original error: {3}",
      "loadComponentDependencyFailoverPathError": "Failed to load component dependency \"{0}\" with failover path \"{1}\" from component \"{2}\" ({3}). Original error: {4}",
      "loadPathDependencyError": "Failed to load path dependency \"{0}\" from component \"{1}\" ({2}). Original error: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "Failed to load path dependency \"{0}\" from component \"{1}\" ({2}) due to another dependency that failed to load.",
      "loadEntryPointError": "Failed to load entry point from component \"{0}\" ({1}). Original error: {2}",
      "loadComponentReturnsEmptyError": "loadComponent() returned an empty object for component \"{0}\" ({1}).",
      "loadComponentReturnsDefaultEmptyError": "loadComponent() returned an object with an empty default property for component \"{0}\" ({1}).",
      "moduleHasUndeclaredDependencyError": "The entry point for component \"{0}\" ({1}) has a dependency on \"{2}\" that is not declared in the manifest.",
      "loadScriptWithStringError": "loadScript function doesn't allow a string as 2nd parameter. Use ILoadScriptOptions instead.",
      "urlStatusLocalhostFileNotFoundError": "Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). The file was not found in the server. Make sure that you are running 'gulp serve'.",
      "urlStatusFileNotFoundError": "Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). The file was not found in the server.",
      "urlStatusForbiddenError": "Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). The access to the file is forbidden.",
      "urlStatusClientErrorError": "Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was an error requesting the file.",
      "urlStatusServerErrorError": "Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a problem in the server.",
      "urlStatusLocalhostNetworkErrorError": "Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a network problem. Make sure that you are running 'gulp serve' and you have run 'gulp trust-dev-cert'.",
      "urlStatusHttpsNetworkErrorError": "Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a network problem. This may be a problem with a HTTPS certificate. Make sure you have the right certificate.",
      "urlStatusNetworkErrorError": "Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a network problem.",
      "urlStatusUndefinedError": "Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}) because of unknown problems.",
      "failedToCreateGlobalVariableError": "Failed to create global variable \"{0}\" from script \"{1}\"",
      "dependencyLoadError": "Failed to load module '{0}' because dependency {1} was not loaded",
      "missingPathDependencyError": "Missing path dependency \"{0}\" from component \"{1}\" ({2}). Existing path dependencies: {3}"
    },
    "_F4HRA/FKfb0X6JapWo2vTw": {
      "loadComponentLog": "Loading component \"{0}\" ({1}).",
      "loadComponentEndLog": "Component \"{0}\" ({1}) loaded.",
      "loadComponentRetryLog": "Loading component \"{0}\" ({1}). Attempt {2} of {3}.",
      "loadPathDependencyLog": "Loading path dependency \"{0}\" from component \"{1}\" ({2})",
      "isUndefinedValidateError": "The value for \"{0}\" must not be undefined"
    },
    "_fVUay/3ENa56/o3BfjRdrw": {
      "loadComponentMaxRetriesError": "Attempted to load component \"{0}\" ({1}) {2} times without success.",
      "manifestNotFoundError": "Manifest not found for component id \"{0}\" and version \"{1}\"."
    },
    "_ZZX3HYmO09A0dtXnoncSkA": {
      "tooManyComponentsError": "Too many components found for id \"{0}\".",
      "deleteComponentLog": "Deleting component \"{0}\" version \"{1}\" from the store.",
      "noComponentFoundError": "No component found for id \"{0}\".",
      "manifestNotFoundByIdError": "Manifest not found for component id \"{0}\".",
      "tooManyManifestsError": "{0} manifests (versions {1}) found for component \"{2}\".",
      "tooManyCompatibleVersionsError": "{0} compatible versions ({1}) found for component \"{2}\" version \"{3}\"."
    },
    "_C14mR9Diz4DseFaa7aiq6A": {
      "browserNotSupportedError": "This version of your browser is not supported. Please update your browser to the latest version.",
      "loaderUserFriendlyError": "无法加载此页上的应用程序。请使用浏览器的“后退”按钮重试。如果问题仍然存在，请联系网站管理员并向其提供“技术详细信息”中的信息。",
      "invalidPreloadedDataError": "Invalid preloaded data."
    },
    "_a4wKXyUGuAbOcWmuhzMXpg": {
      "systemConfigDisabledError": "System.config() is not supported. Use a manifest to specify the configuration."
    },
    "_KuTfBwDffam4eyPQEJupWw": {
      "ie9OrOlderNotSupportedError": "This page does not support Internet Explorer releases older than version 10. Please update your web browser.",
      "firefox43OrOlderNotSupportedError": "This page does not support Mozilla Firefox releases older than version 44. Please update your web browser.",
      "platformFailedToLoadError": "Platform failed to load. Id: \"{0}\", name: \"{1}\"",
      "platformFailedToLoadWithMessageError": "Platform failed to load. Id: \"{0}\", name: \"{1}\". Error: {2}",
      "applicationFailedToInitializeError": "Error initializing application. Error: {0}",
      "resourceNotFoundError": "Resource \"{0}\" not found in loader configuration of manifest for component \"{1}\" ({2}).",
      "noFailoverPathError": "Cannot call resolveAddress() on a component with no failover path"
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "警告!",
      "warningLine1": "使用此工具会让你面临潜在的安全威胁，可能导致其他人访问你的个人 Office 365 数据(文档、电子邮件、对话等)。请确保你信任请你使用此工具的人员或组织，再继续操作。",
      "warningLine2": "在此了解详细信息: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "加载调试清单时出错。",
      "debugManifestErrorDismissButtonText": "忽略"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "允许使用调试脚本?",
      "allowDebugLoaderTitle": "是否允许调试加载程序?",
      "allowDebugLoaderAndManifestsTitle": "是否允许调试加载程序和调试脚本?",
      "debugManifestLoadingWarning": "警告: 此页面包含不安全的脚本，加载这些脚本可能会对你的计算机造成危害。如果你不信任此开发者并且不了解相关风险，请不要继续。",
      "debugManifestLoadingWarning2": "如果不确定的话，请单击 {0}。",
      "debugManifestLoadingConfirm": "加载调试脚本",
      "debugManifestLoadingCancel": "不加载调试脚本",
      "debugManifestLoadingCalloutText": "如果不知道如何操作，请单击此处。"
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "正在加载...",
      "developerToolsTabLoadingUnknownError": "加载开发人员工具模块时出现未知错误。"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "性能",
      "ErrorAccessingPerfDataErrorMessage": "无法检索性能数据: 对象为 null 或未定义。",
      "ErrorAccessingRedirectDataErrorMessage": "访问 HTTP 重定向性能数据时出错。",
      "ErrorParsingPercievedLatencyErrorMessage": "分析感知到的延迟数据时捕获到错误。",
      "ErrorParsingApiDataErrorMessage": "分析 API 数据时捕获到错误。",
      "UnkownPerformanceDataErrorMessage": "发生未知错误: {0}",
      "DefaultWebPartName": "Web 部件",
      "ServerResponseLabel": "服务器响应",
      "ApplicationInitializationLabel": "应用程序初始化",
      "ScriptFetchEvalLabel": "脚本提取与评估",
      "SpLoaderStartLabel": "SPFx 初始化",
      "PageRenderLabel": "页面呈现",
      "LeftNavRenderLabel": "左侧导航呈现",
      "CanvasRenderLabel": "画布呈现",
      "LayoutRenderLabel": "布局呈现",
      "RedirectResponseLabel": "重定向响应",
      "AppLoadLabel": "应用程序负载",
      "RenderWebPartsLabel": "Web 部件呈现",
      "TotalRenderTimeLabel": "总计",
      "GeneralErrorMessage": "很抱歉，检索性能数据时出错。",
      "ErrorMessagePrefix": "错误消息: {0}",
      "PerformanceDataHint": "注意: 添加或删除 Web 部件后，刷新页面可显示更新后的性能数据。",
      "ModulesLoadedLegendLabel": "加载的模块",
      "InitializationLegendLabel": "初始化",
      "RenderTimeLegendLabel": "呈现时间",
      "InitializationTimeLabel": "初始化时间",
      "ModuleLoadingTimeLabel": "模块加载时间",
      "ModuleLazyLoadingDelayLabel": "模块加载延迟",
      "DataFetchTimeLabel": "数据提取时间",
      "DataFetchLegendLabel": "数据提取",
      "ItemsColumnHeader": "项目",
      "DurationColumnHeader": "持续时间",
      "MillisecondsUnitLabel": "{0} 毫秒",
      "NAPlaceholder": "N/A"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "清单",
      "noManifestSelected": "未选择任何清单"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "跟踪",
      "EmptyTraceData": "未加载跟踪。",
      "ExportCSVButtonLabel": "导出 CSV",
      "LevelHeaderLabel": "级别",
      "MessageHeaderLabel": "消息",
      "ScopeHeaderLabel": "范围",
      "SourceHeaderLabel": "源",
      "TimestampHeaderLabel": "时间戳",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}"
    }
  };

  strings.default = strings;
  return strings;
});