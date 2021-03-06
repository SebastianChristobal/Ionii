define([], function() {
  var strings = {
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Sazlama skriptini yükləyən zaman səhv baş verdi. Serverin icra olunduğuna, \"{0}\" parametri URL-nin düzgün olduğuna əmin olun.",
      "errorLoadingDebugScriptHTTP": "Sazlama skriptini yükləyən zaman səhv baş verdi. Serverin icra olunduğuna, \"{0}\" parametri URL-nin düzgün olduğuna və təhlükəli skriptlərin yüklənməsinə icazə verilib-verilmədiyinə əmin olun. Bundan başqa, tərtibat sertifikatından istifadəni və HTTPS vasitəsilə sazlama skriptlərinin xidmət etdiyini nəzərə alın.",
      "errorLoadingDebugScriptMalformed": "Sazlama skriptini yükləyən zaman səhv baş verdi. Görünür, sazlama URL-i ({0}) korlanıb.",
      "errorLoadingDebugScriptUnknown": "Sazlama skriptini yükləyən zaman naməlum səhv baş verdi.",
      "errorLoadingDebugLoaderTitle": "Sazlama yükləyicisini yükləyən zaman səhv baş verdi.",
      "errorLoadingDebugManifestTitle": "Sazlama bəyannaməsini yükləyən zaman səhv.",
      "errorLoadingUnknownTitle": "Sazlama skriptlərini yükləyən zaman səhv baş verdi."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Buraxılan komponent və ya başladıcı funksiyası.",
      "closeDeveloperToolsAriaLabel": "Tərtibatçı alətlərini bağlayın."
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
      "loaderUserFriendlyError": "Bu səhifədə proqramı yükləmək olmur. Təkrar cəhd etmək üçün brauzerin Geri düyməsini istifadə edin. Problem davam edərsə, saytın inzibatçısı ilə əlaqə saxlayın və Texniki Təfərrüatlarda onlara məlumat verin.",
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
      "warningHeading": "Xəbərdarlıq!",
      "warningLine1": "Bu alətdən istifadə sizi, şəxsi Office 365 verilənlərinizə (sənədlər, e-poçtlar, söhbətlər və daha çox şey) digərlərinin müraciət qazanması ilə nəticələnə bilən potensial təhlükəsizlik risklərinə məruz qoyur. Davam etməzdən əvvəl bu alətə müraciət istəyən şəxs və ya təşkilata güvəndiyinizdən əmin olun.",
      "warningLine2": "Burada ətraflı öyrənin: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Sazlama bəyannaməsini yükləyən zaman səhv baş verdi.",
      "debugManifestErrorDismissButtonText": "Rədd edin"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Sazlama skriptlərinə icazə verilsin?",
      "allowDebugLoaderTitle": "Sazlama yükləyicisinə icazə verilsin?",
      "allowDebugLoaderAndManifestsTitle": "Sazlama yükləyicisi və sazlama skriptlərinə icazə verilsin?",
      "debugManifestLoadingWarning": "XƏBƏRDARLIQ: Bu səhifə, yüklənibsə, potensial olaraq kompüterinizə ziyan verə bilən təhlükəli skriptləri ehtiva edir! Tərtibatçıya etibar etməyənə və riskləri başa düşməyənə kimi davam etməyin.",
      "debugManifestLoadingWarning2": "Əgər əmin deyilsinizsə, {0} üzərinə klikləyin.",
      "debugManifestLoadingConfirm": "Sazlama skriptlərini yüklə",
      "debugManifestLoadingCancel": "Sazlama skriptlərini yükləmə",
      "debugManifestLoadingCalloutText": "Nə edəcəyinizi bilmirsinizsə, bura klikləyin."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Yüklənir...",
      "developerToolsTabLoadingUnknownError": "Tərtibatçı alətləri modulunu yükləməklə bağlı naməlum səhv."
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Məhsuldarlıq",
      "ErrorAccessingPerfDataErrorMessage": "Məhsuldarlıq verilənlərini əldə etmək mümkün deyil: obyekt sıfır və ya qeyri-müəyyəndir.",
      "ErrorAccessingRedirectDataErrorMessage": "HTTP yönləndirmə məhsuldarlığı verilənlərinə müraciətlə bağlı səhv baş verdi.",
      "ErrorParsingPercievedLatencyErrorMessage": "Ləngimə verilənlərini parselləyən zaman səhv baş verdi.",
      "ErrorParsingApiDataErrorMessage": "API verilənlərini parselləyən zaman səhv baş verdi.",
      "UnkownPerformanceDataErrorMessage": "Naməlum səhv baş verib: {0}",
      "DefaultWebPartName": "Veb-hissə",
      "ServerResponseLabel": "Serverin Cavabı",
      "ApplicationInitializationLabel": "Proqramın İşə Salınması",
      "ScriptFetchEvalLabel": "Skriptin gətirilməsi və qiymətləndirmə",
      "SpLoaderStartLabel": "SPFx işəsalma",
      "PageRenderLabel": "Səhifənin Vizuallaşdırılması",
      "LeftNavRenderLabel": "Sol Naviqasiya Vizuallaşdırması",
      "CanvasRenderLabel": "Lövhənin Vizuallaşdırılması",
      "LayoutRenderLabel": "Düzən Vizuallaşdırıcısı",
      "RedirectResponseLabel": "Yönləndirmə Cavabı",
      "AppLoadLabel": "Proqramın Yüklənməsi",
      "RenderWebPartsLabel": "Veb Hissələrin Vizuallaşdırılması",
      "TotalRenderTimeLabel": "Yekun",
      "GeneralErrorMessage": "Üzr istəyirik, məhsuldarlıq verilənlərini əldə edərkən səhv baş verdi.",
      "ErrorMessagePrefix": "Səhv Mesajı: {0}",
      "PerformanceDataHint": "Qeyd: Veb hissəni əlavə etdikdən və ya sildikdən sonra yenilənmiş məhsuldarlıq verilənlərinə baxmaq üçün səhifəni təzələyin.",
      "ModulesLoadedLegendLabel": "Yüklənmiş Modullar",
      "InitializationLegendLabel": "İşəsalma",
      "RenderTimeLegendLabel": "Vizuallaşdırma Vaxtı",
      "InitializationTimeLabel": "İşəsalma vaxtı",
      "ModuleLoadingTimeLabel": "Modul yükləmə vaxtı",
      "ModuleLazyLoadingDelayLabel": "Modulun yüklənməsi gecikdi",
      "DataFetchTimeLabel": "Verilənlərin geri gətirilməsi vaxtı",
      "DataFetchLegendLabel": "Verilənlərin Gətirilməsi",
      "ItemsColumnHeader": "Elementlər",
      "DurationColumnHeader": "Müddət",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "Q/M"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifestlər",
      "noManifestSelected": "Manifest seçilmədi"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "İstiqaməti Göstərilmə",
      "EmptyTraceData": "İstiqaməti göstərilmə yüklənmədi.",
      "ExportCSVButtonLabel": "CSV-ni ixrac edin",
      "LevelHeaderLabel": "Səviyyə",
      "MessageHeaderLabel": "Mesaj",
      "ScopeHeaderLabel": "Miqyas",
      "SourceHeaderLabel": "Mənbə",
      "TimestampHeaderLabel": "Vaxt ştampı",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}"
    }
  };

  strings.default = strings;
  return strings;
});