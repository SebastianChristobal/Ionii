define([], function() {
  var strings = {
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Med nalaganjem iskanja napak v skriptu je prišlo do napake. Preverite, ali strežnik deluje in ali je URL parametra »{0}« pravilen.",
      "errorLoadingDebugScriptHTTP": "Med nalaganjem iskanja napak v skriptu je prišlo do napake. Preverite, ali strežnik deluje, ali je URL parametra »{0}« pravilen in ali je dovoljeno nalaganje nevarnih skriptov. Uporabite lahko tudi potrdilo o razvoju in podajanju skriptov za iskanje prek protokola HTTPS.",
      "errorLoadingDebugScriptMalformed": "Med nalaganjem iskanja napak v skriptu je prišlo do napake. Videti je, da je URL ({0}), vključen v iskanje napak, poškodovan.",
      "errorLoadingDebugScriptUnknown": "Med nalaganjem iskanja napak v skriptu je prišlo do neznane napake.",
      "errorLoadingDebugLoaderTitle": "Med nalaganjem iskanja napak v nalagalniku je prišlo do napake.",
      "errorLoadingDebugManifestTitle": "Med nalaganjem iskanja napak v manifestu je prišlo do napake.",
      "errorLoadingUnknownTitle": "Med nalaganjem iskanja napak v skriptih je prišlo do napake."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Manjkajo komponente ali funkcija inicializatorja.",
      "closeDeveloperToolsAriaLabel": "Zapri orodja za razvijalce."
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
      "loaderUserFriendlyError": "Aplikacije ni mogoče naložiti na tej strani. Poskusite znova z gumbom »Nazaj« v brskalniku. Če težave ne morete odpraviti, se obrnite na skrbnika spletnega mesta in mu posredujte informacije iz razdelka s tehničnimi podrobnostmi.",
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
      "warningHeading": "Opozorilo!",
      "warningLine1": "Če uporabite to orodje, ste izpostavljeni morebitnim varnostnim grožnjam, zaradi katerih lahko drugi dobijo dostop do osebnih podatkov v storitvi Office 365 (dokumenti, e-pošte, pogovori in veliko drugega). Pred nadaljevanjem preverite, ali je oseba ali organizacija, ki vas je prosila za dostop, vredna zaupanja.",
      "warningLine2": "Več informacij je na voljo tukaj: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Med nalaganjem iskanja v manifestu napak je prišlo do napake.",
      "debugManifestErrorDismissButtonText": "Opusti"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Ali želite dovoliti iskanje napak v skriptih?",
      "allowDebugLoaderTitle": "Ali dovolite iskanje napak v nalagalniku?",
      "allowDebugLoaderAndManifestsTitle": "Ali želite dovoliti iskanje napak v nalagalniku in skriptih?",
      "debugManifestLoadingWarning": "OPOZORILO: Na tej strani so nevarni skripti. Če jih naložite, bi lahko potencialno škodovali vašemu računalniku! Ne nadaljujte postopka, razen če zaupate razvijalcu in razumete tveganja.",
      "debugManifestLoadingWarning2": "Če niste prepričani, kliknite {0}.",
      "debugManifestLoadingConfirm": "Naloži skripte za iskanje napak",
      "debugManifestLoadingCancel": "Ne naloži skriptov za iskanje napak",
      "debugManifestLoadingCalloutText": "Če ne veste, kaj bi naredili, kliknite tukaj."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Nalaganje ...",
      "developerToolsTabLoadingUnknownError": "Med nalaganjem modula orodij za razvijalce je prišlo do napake."
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Učinkovitost delovanja",
      "ErrorAccessingPerfDataErrorMessage": "Ni mogoče pridobiti podatkov o učinkovitosti delovanja: predmet je ničeln ali pa ni določen.",
      "ErrorAccessingRedirectDataErrorMessage": "Pri dostopu do podatkov o učinkovitosti preusmeritve HTTP je prišlo do težave.",
      "ErrorParsingPercievedLatencyErrorMessage": "Pri razčlenjevanju podatkov o zaznani zakasnitvi je prišlo do napake.",
      "ErrorParsingApiDataErrorMessage": "Pri razčlenjevanju podatkov vmesnika API je prišlo do napake.",
      "UnkownPerformanceDataErrorMessage": "Prišlo je do neznane napake: {0}",
      "DefaultWebPartName": "Spletni gradnik",
      "ServerResponseLabel": "Odgovor strežnika",
      "ApplicationInitializationLabel": "Inicializacija aplikacije",
      "ScriptFetchEvalLabel": "Dobivanje in ocena scenarija",
      "SpLoaderStartLabel": "Inicializacija SPFx",
      "PageRenderLabel": "Upodabljalnik strani",
      "LeftNavRenderLabel": "Levi upodabljalnik krmarjenja",
      "CanvasRenderLabel": "Upodabljalnik platna",
      "LayoutRenderLabel": "Upodabljalnik postavitve",
      "RedirectResponseLabel": "Preusmeri odgovor",
      "AppLoadLabel": "Nalaganje aplikacije",
      "RenderWebPartsLabel": "Upodabljalnik spletnih gradnikov",
      "TotalRenderTimeLabel": "Skupaj",
      "GeneralErrorMessage": "Pri pridobivanju podatkov o učinkovitosti delovanja je prišlo do napake.",
      "ErrorMessagePrefix": "Sporočilo o napaki: {0}",
      "PerformanceDataHint": "Opomba: ko dodate ali odstranite spletni gradnik, osvežite stran, da si ogledate posodobljene podatke o učinkovitosti delovanja.",
      "ModulesLoadedLegendLabel": "Naloženi moduli",
      "InitializationLegendLabel": "Inicializacija",
      "RenderTimeLegendLabel": "Čas upodabljanja",
      "InitializationTimeLabel": "Čas inicializacije",
      "ModuleLoadingTimeLabel": "Čas nalaganja modula",
      "ModuleLazyLoadingDelayLabel": "Zakasnitev nalaganja modula",
      "DataFetchTimeLabel": "Čas pridobivanja podatkov",
      "DataFetchLegendLabel": "Pridobivanje podatkov",
      "ItemsColumnHeader": "Elementi",
      "DurationColumnHeader": "Trajanje",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "Ni na voljo"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifesti",
      "noManifestSelected": "Noben manifest ni izbran"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Sled",
      "EmptyTraceData": "Nobena sled ni naložena.",
      "ExportCSVButtonLabel": "Izvozi v CSV",
      "LevelHeaderLabel": "Raven",
      "MessageHeaderLabel": "Sporočilo",
      "ScopeHeaderLabel": "Obseg",
      "SourceHeaderLabel": "Vir",
      "TimestampHeaderLabel": "Časovni žig",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}"
    }
  };

  strings.default = strings;
  return strings;
});