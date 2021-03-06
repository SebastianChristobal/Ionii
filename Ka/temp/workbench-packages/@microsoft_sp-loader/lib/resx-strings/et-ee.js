define([], function() {
  var strings = {
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Tõrge silumisskripti laadimisel. Kontrollige, kas server töötab ja parameeter \"{0}\" on õige.",
      "errorLoadingDebugScriptHTTP": "Tõrge silumisskripti laadimisel. Kontrollige, kas server töötab, parameeter \"{0}\" on õige ja ebaturvaliste skriptide laadimine on lubatud. Võiksite kasutada ka arendusserti ja silumisskriptide teenindamist HTTPS-i kaudu.",
      "errorLoadingDebugScriptMalformed": "Tõrge silumisskripti laadimisel. Silumise URL ({0}) näib olevat moonutatud.",
      "errorLoadingDebugScriptUnknown": "Tundmatu tõrge silumisskripti laadimisel.",
      "errorLoadingDebugLoaderTitle": "Tõrge silumislaaduri laadimisel.",
      "errorLoadingDebugManifestTitle": "Tõrge silumismanifestide laadimisel.",
      "errorLoadingUnknownTitle": "Tõrge silumisskriptide laadimisel."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Komponent või lähtestajafunktsioon on puudu.",
      "closeDeveloperToolsAriaLabel": "Sulgege arendusriistad."
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
      "loaderUserFriendlyError": "Rakendust ei saa sellel lehel laadida. Uuesti proovimiseks vajutage brauseris nuppu Tagasi. Kui probleem ei lahene, pöörduge saidi administraatori poole ja edastage talle teave, mis on toodud jaotises Tehnilised üksikasjad.",
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
      "warningHeading": "Hoiatus!",
      "warningLine1": "Selle tööriista kasutamisega kaasnevad võimalikud turbeohud, mille tagajärjel võivad teised inimesed saada juurdepääsu teie isiklikele Office 365 andmetele (dokumentidele, meilidele, vestlustele ja muule). Enne jätkamist veenduge, et usaldate isikut või asutust, kes palus teil seda tööriista kasutada.",
      "warningLine2": "Lugege lisateavet siit: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Silumismanifestide laadimisel ilmnes tõrge.",
      "debugManifestErrorDismissButtonText": "Unusta"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Kas soovite lubada silumisskriptid?",
      "allowDebugLoaderTitle": "Kas soovite lubada silumislaaduri?",
      "allowDebugLoaderAndManifestsTitle": "Kas soovite lubada silumislaaduri ja -skriptid?",
      "debugManifestLoadingWarning": "HOIATUS. See leht sisaldab ebaturvalisi skripte, mis võivad laadimisel teie arvutit kahjustada. Jätkake ainult juhul, kui usaldate arendajat ja mõistate riske.",
      "debugManifestLoadingWarning2": "Kui te pole kindel, klõpsake nuppu {0}.",
      "debugManifestLoadingConfirm": "Laadi silumisskriptid",
      "debugManifestLoadingCancel": "Ära laadi silumisskripte",
      "debugManifestLoadingCalloutText": "Kui te ei tea, mida teha, klõpsake siin."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Laadimine...",
      "developerToolsTabLoadingUnknownError": "Arendusriistade mooduli laadimisel ilmnes tundmatu tõrge."
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Jõudlus",
      "ErrorAccessingPerfDataErrorMessage": "Jõudlusandmeid ei saanud tuua: objekt on tühi või määramata.",
      "ErrorAccessingRedirectDataErrorMessage": "HTTP ümbersuunamise jõudlusandmetele juurdepääsemisel ilmnes probleem.",
      "ErrorParsingPercievedLatencyErrorMessage": "Tajutava latentsusaja andmete sõelumisel tuvastati tõrge.",
      "ErrorParsingApiDataErrorMessage": "API andmete sõelumisel tuvastati tõrge.",
      "UnkownPerformanceDataErrorMessage": "Ilmnes tundmatu tõrge: {0}",
      "DefaultWebPartName": "Veebiosa",
      "ServerResponseLabel": "Serveri vastus",
      "ApplicationInitializationLabel": "Rakenduse lähtestamine",
      "ScriptFetchEvalLabel": "Skripti toomine ja hindamine",
      "SpLoaderStartLabel": "SPFx-i lähtestamine",
      "PageRenderLabel": "Lehe renderdus",
      "LeftNavRenderLabel": "Vasakpoolse navigeerimisriba renderdus",
      "CanvasRenderLabel": "Lõuendi renderdus",
      "LayoutRenderLabel": "Paigutuse renderdus",
      "RedirectResponseLabel": "Ümbersuunamise vastus",
      "AppLoadLabel": "Rakenduse laadimine",
      "RenderWebPartsLabel": "Veebiosade renderdus",
      "TotalRenderTimeLabel": "Kokku",
      "GeneralErrorMessage": "Kahjuks läks jõudlusandmete toomisel midagi valesti.",
      "ErrorMessagePrefix": "Tõrketeade: {0}",
      "PerformanceDataHint": "Märkus: värskendage veebiosa lisamise või eemaldamise järel lehte, et näha uuendatud jõudlusandmeid.",
      "ModulesLoadedLegendLabel": "Laaditud moodulid",
      "InitializationLegendLabel": "Lähtestamine",
      "RenderTimeLegendLabel": "Renderdusaeg",
      "InitializationTimeLabel": "Lähtestamise aeg",
      "ModuleLoadingTimeLabel": "Mooduli laadimise aeg",
      "ModuleLazyLoadingDelayLabel": "Mooduli laadimine on edasi lükatud",
      "DataFetchTimeLabel": "Andmete toomise aeg",
      "DataFetchLegendLabel": "Andmete toomine",
      "ItemsColumnHeader": "Üksused",
      "DurationColumnHeader": "Kestus",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "Pole saadaval"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifestid",
      "noManifestSelected": "Manifesti pole valitud"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Jälitus",
      "EmptyTraceData": "Jälitusandmeid ei laaditud.",
      "ExportCSVButtonLabel": "Ekspordi CSV-failina",
      "LevelHeaderLabel": "Tase",
      "MessageHeaderLabel": "Sõnum",
      "ScopeHeaderLabel": "Ulatus",
      "SourceHeaderLabel": "Allikas",
      "TimestampHeaderLabel": "Ajatempel",
      "TimestampFormat": "{2}.{1}.{0} {3}:{4}:{5}:{6}"
    }
  };

  strings.default = strings;
  return strings;
});