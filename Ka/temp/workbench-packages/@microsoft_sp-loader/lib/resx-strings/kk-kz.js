define([], function() {
  var strings = {
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Күйін келтіру сценарийін жүктеу кезінде қате пайда болды. Сервердің жұмыс істеп тұрғанына және \"{0}\" параметрінің URL мекенжайы дұрыс екеніне көз жеткізіңіз.",
      "errorLoadingDebugScriptHTTP": "Күйін келтіру сценарийін жүктеу кезінде қате пайда болды. Сервердің жұмыс істеп тұрғанына, \"{0}\" параметрінің URL мекенжайы дұрыс екеніне және қауіпті сценарийлерді жүктеуге рұқсат етілгеніне көз жеткізіңіз. Сондай-ақ HTTPS протоколдары бойынша әзірлеу сертификатын пайдалану және күйін келтіру сценарийлеріне қызмет көрсету мүмкіндігін қараңыз.",
      "errorLoadingDebugScriptMalformed": "Күйін келтіру сценарийін жүктеу кезінде қате пайда болды. Күйін келтірудің URL мекенжайының ({0}) пішімі қате болу мүмкін.",
      "errorLoadingDebugScriptUnknown": "Күйін келтіру сценарийін жүктеу кезінде белгісіз қате пайда болды.",
      "errorLoadingDebugLoaderTitle": "Күйін келтіруге арналған жүктеу құралын жүктеу кезінде қате пайда болды.",
      "errorLoadingDebugManifestTitle": "Күйін келтіру манифестерін жүктеу кезінде қате пайда болды.",
      "errorLoadingUnknownTitle": "Күйін келтіру сценарийлерін жүктеу кезінде қате пайда болды."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Компонент немесе инициализатор функциясы жоқ.",
      "closeDeveloperToolsAriaLabel": "Әзірлеуші құралдарын жабу."
    },
    "_HyNcqqy05+791EWZRJ/Erg": {
      "listSeparator": ", ",
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
      "loaderUserFriendlyError": "Осы беттегі бағдарламаны жүктеу мүмкін емес. Әрекетті қайталау үшін, браузердің \"Артқа\" түймешігін пайдаланыңыз. Егер мәселе шешілмесе, веб-сайттың әкімшісіне хабарласыңыз және оған \"Техникалық мәліметтер\" бөліміндегі ақпаратты ұсыныңыз.",
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
      "warningHeading": "Ескерту!",
      "warningLine1": "Бұл құралдарды пайдалану қауіпсіздікке қауіп-қатер төндіруі және басқа пайдаланушылардың жеке Office 365 деректеріңізге (құжаттар, электрондық хаттар, сөйлесулер, т.б.) қатынасу мүмкіндігіне ие болуына алып келуі мүмкін. Жалғастырмас бұрын, осы құралға қатынасуды сұраған адамның немесе ұйымның сенімді екеніне көз жеткізіңіз.",
      "warningLine2": "Қосымша мәлімет: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Күйін келтіру манифестерін жүктеу кезінде қате пайда болды.",
      "debugManifestErrorDismissButtonText": "Жабу"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Күйін келтіру сценарийлеріне рұқсат ету қажет пе?",
      "allowDebugLoaderTitle": "Күйін келтіруге арналған жүктеу құралына рұқсат ету қажет пе?",
      "allowDebugLoaderAndManifestsTitle": "Күйін келтіруге арналған жүктеу құралына және күйін келтіру сценарийлеріне рұқсат ету қажет пе?",
      "debugManifestLoadingWarning": "ЕСКЕРТУ: Бұл бет жүктелген жағдайда компьютеріңізге зиян келтіруі мүмкін қауіпті сценарийлерді қамтиды. Әзірлеушіге сенбесеңіз және төнетін қатерлердің қаншалықты қауіпті екенін білмесеңіз, процесті жалғастырмаңыз.",
      "debugManifestLoadingWarning2": "Сенімді болмасаңыз, {0} түймешігін басыңыз.",
      "debugManifestLoadingConfirm": "Реттеу сценарийлерін жүктеу",
      "debugManifestLoadingCancel": "Реттеу сценарийін жүктемеу",
      "debugManifestLoadingCalloutText": "Егер не істеу керектігін білмесеңіз, осы жерді басыңыз."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Жүктелуде...",
      "developerToolsTabLoadingUnknownError": "Әзірлеуші құралдарының модулін жүктеу кезінде белгісіз қате орын алды."
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Өнімділік",
      "ErrorAccessingPerfDataErrorMessage": "Өнімділікке қатысты деректі алу мүмкін емес: нәтижесі жоқ немесе анықталмаған.",
      "ErrorAccessingRedirectDataErrorMessage": "HTTP бағытын өзгертудің өнімділік деректеріне қатынасу кезінде ақаулық орын алды.",
      "ErrorParsingPercievedLatencyErrorMessage": "Деректер кідірісін талдау кезінде қате туралы хабар алынды.",
      "ErrorParsingApiDataErrorMessage": "API деректерін талдау кезінде қате туралы хабар алынды.",
      "UnkownPerformanceDataErrorMessage": "Белгісіз қате пайда болды: {0}",
      "DefaultWebPartName": "Веб-бөлік",
      "ServerResponseLabel": "Сервер жауабы",
      "ApplicationInitializationLabel": "Бағдарламаны іске қосу",
      "ScriptFetchEvalLabel": "Сценарийді таңдау және бағалау",
      "SpLoaderStartLabel": "SPFx инициализациясы",
      "PageRenderLabel": "Бетті көрсету",
      "LeftNavRenderLabel": "Сол жақ навигацияны көрсету",
      "CanvasRenderLabel": "Кенепті көрсету",
      "LayoutRenderLabel": "Орналасуды көрсету",
      "RedirectResponseLabel": "Бағытын өзгерту жауабы",
      "AppLoadLabel": "Бағдарламаны жүктеу",
      "RenderWebPartsLabel": "Веб-бөліктерді көрсету",
      "TotalRenderTimeLabel": "Жалпы",
      "GeneralErrorMessage": "Кешіріңіз, өнімділік деректерін алу кезінде белгісіз бір қате пайда болды.",
      "ErrorMessagePrefix": "Қате туралы хабар: {0}",
      "PerformanceDataHint": "Ескертпе: Веб-бөлікті қосқаннан кейін не жойғаннан кейін, өнімділікке қатысты жаңартылған деректерді көру үшін бетті жаңартыңыз.",
      "ModulesLoadedLegendLabel": "Модульдер жүктелді",
      "InitializationLegendLabel": "Баптандыру",
      "RenderTimeLegendLabel": "Көрсету уақыты",
      "InitializationTimeLabel": "Инициализация уақыты",
      "ModuleLoadingTimeLabel": "Модульді жүктеу уақыты",
      "ModuleLazyLoadingDelayLabel": "Модульдерді жүктеу кідіртілді",
      "DataFetchTimeLabel": "Деректерді таңдау уақыты",
      "DataFetchLegendLabel": "Деректерді шығарып алу",
      "ItemsColumnHeader": "Элементтер",
      "DurationColumnHeader": "Ұзақтық",
      "MillisecondsUnitLabel": "{0} мс",
      "NAPlaceholder": "Жоқ"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Манифестер",
      "noManifestSelected": "Манифест таңдалмады"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Қадағау",
      "EmptyTraceData": "Қадағау деректері жүктелмеді.",
      "ExportCSVButtonLabel": "CSV файлы ретінде экспорттау",
      "LevelHeaderLabel": "Деңгей",
      "MessageHeaderLabel": "Хабар",
      "ScopeHeaderLabel": "Аумақ",
      "SourceHeaderLabel": "Ақпарат көзі",
      "TimestampHeaderLabel": "Уақыт белгісі",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}"
    }
  };

  strings.default = strings;
  return strings;
});