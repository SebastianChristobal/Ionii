define([], function() {
  var strings = {
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "S'ha produït un error en carregar l'script de depuració. Assegureu-vos que el servidor s'està executant i que l'adreça URL del paràmetre \"{0}\" és correcta.",
      "errorLoadingDebugScriptHTTP": "S'ha produït un error en carregar l'script de depuració. Assegureu-vos que el servidor s'està executant, que l'adreça URL del paràmetre \"{0}\" és correcta i que es permet la càrrega d'scripts no segurs. Considereu també la possibilitat d'utilitzar un certificat de desenvolupament i de proporcionar els scripts de depuració a través de HTTPS.",
      "errorLoadingDebugScriptMalformed": "S'ha produït un error en carregar l'script de depuració. Sembla que l'adreça URL de depuració ({0}) té un format incorrecte.",
      "errorLoadingDebugScriptUnknown": "S'ha produït un error desconegut en carregar un script de depuració.",
      "errorLoadingDebugLoaderTitle": "S'ha produït un error en carregar el carregador de depuració.",
      "errorLoadingDebugManifestTitle": "Error en carregar els manifestos de depuració.",
      "errorLoadingUnknownTitle": "S'ha produït un error en carregar els scripts de depuració."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Falta un component o la funció de l'inicialitzador.",
      "closeDeveloperToolsAriaLabel": "Tanqueu les eines de desenvolupador."
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
      "loaderUserFriendlyError": "No es pot carregar l'aplicació en aquesta pàgina. Utilitzeu el botó Enrere del navegador per tornar-ho a provar. Si el problema continua, contacteu amb l'administrador del lloc i proporcioneu-li informació a la secció Detalls tècnics.",
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
      "warningHeading": "Advertiment",
      "warningLine1": "L'ús d'aquesta eina us exposa a amenaces de seguretat potencials que poden provocar que altres usuaris obtinguin accés a les vostres dades personals de l'Office 365 (els documents, els correus, les converses i molt més). Assegureu-vos que confieu en la persona o en l'organització que us ha demanat accedir a aquesta eina abans de continuar.",
      "warningLine2": "Obteniu més informació aquí: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "S'ha produït un error en carregar els manifestos de depuració.",
      "debugManifestErrorDismissButtonText": "Descarta"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Voleu permetre els scripts de depuració?",
      "allowDebugLoaderTitle": "Voleu permetre el carregador de depuració?",
      "allowDebugLoaderAndManifestsTitle": "Voleu permetre el carregador i els scripts de depuració?",
      "debugManifestLoadingWarning": "ADVERTIMENT: aquesta pàgina conté scripts no segurs que, si es carreguen, podrien malmetre l'ordinador. No continueu tret que confieu en el desenvolupador i n'entengueu els riscos.",
      "debugManifestLoadingWarning2": "Si no ho teniu clar, feu clic a {0}.",
      "debugManifestLoadingConfirm": "Carrega els scripts de depuració",
      "debugManifestLoadingCancel": "No carreguis els scripts de depuració",
      "debugManifestLoadingCalloutText": "Si no sabeu què cal fer, feu clic aquí."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "S'està carregant...",
      "developerToolsTabLoadingUnknownError": "S'ha produït un error desconegut en carregar el mòdul d'eines de desenvolupador."
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Rendiment",
      "ErrorAccessingPerfDataErrorMessage": "No s'han pogut recuperar les dades de rendiment: l'objecte és nul o no s'ha definit.",
      "ErrorAccessingRedirectDataErrorMessage": "S'ha produït un problema en accedir a les dades de rendiment de redirecció HTTP.",
      "ErrorParsingPercievedLatencyErrorMessage": "S'ha produït un error en analitzar les dades de latència que s'han obtingut.",
      "ErrorParsingApiDataErrorMessage": "S'ha produït un error en analitzar les dades de l'API.",
      "UnkownPerformanceDataErrorMessage": "S'ha produït un error desconegut: {0}",
      "DefaultWebPartName": "Element web",
      "ServerResponseLabel": "Resposta del servidor",
      "ApplicationInitializationLabel": "Inicialització de l'aplicació",
      "ScriptFetchEvalLabel": "Obtenció i avaluació d'scripts",
      "SpLoaderStartLabel": "Inicialització d'SPFx",
      "PageRenderLabel": "Representació de la pàgina",
      "LeftNavRenderLabel": "Representació de la navegació esquerra",
      "CanvasRenderLabel": "Representació del llenç",
      "LayoutRenderLabel": "Representació de la disposició",
      "RedirectResponseLabel": "Resposta de redirecció",
      "AppLoadLabel": "Càrrega de l'aplicació",
      "RenderWebPartsLabel": "Representació d'elements web",
      "TotalRenderTimeLabel": "Total",
      "GeneralErrorMessage": "S'ha produït un error en recuperar les dades de rendiment.",
      "ErrorMessagePrefix": "Missatge d'error: {0}",
      "PerformanceDataHint": "Nota: després d'afegir o de suprimir un element web, actualitzeu la pàgina per veure les dades de rendiment actualitzades.",
      "ModulesLoadedLegendLabel": "Mòduls carregats",
      "InitializationLegendLabel": "Inicialització",
      "RenderTimeLegendLabel": "Temps de representació",
      "InitializationTimeLabel": "Hora de la inicialització",
      "ModuleLoadingTimeLabel": "Temps de càrrega del mòdul",
      "ModuleLazyLoadingDelayLabel": "Càrrega del mòdul retardada",
      "DataFetchTimeLabel": "Hora d'obtenció de les dades",
      "DataFetchLegendLabel": "Obtenció de dades",
      "ItemsColumnHeader": "Elements",
      "DurationColumnHeader": "Durada",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "N/D"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifests",
      "noManifestSelected": "No s'ha seleccionat cap manifest"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Seguiment",
      "EmptyTraceData": "No s'ha carregat cap seguiment.",
      "ExportCSVButtonLabel": "Exporta-ho com a fitxer CSV",
      "LevelHeaderLabel": "Nivell",
      "MessageHeaderLabel": "Missatge",
      "ScopeHeaderLabel": "Àmbit",
      "SourceHeaderLabel": "Origen",
      "TimestampHeaderLabel": "Data i hora",
      "TimestampFormat": "{2}/{1}/{0} a les {3}:{4}:{5}:{6}"
    }
  };

  strings.default = strings;
  return strings;
});