define([], function() {
  var strings = {
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Fout bij het laden van script voor foutopsporing. Controleer of de server actief is en de URL voor de parameter {0} juist is.",
      "errorLoadingDebugScriptHTTP": "Fout bij het laden van script voor foutopsporing. Controleer of de server actief is, de URL voor de parameter {0} juist is en of het laden van onveilige scripts is toegestaan. Overweeg ook om een ontwikkelingscertificaat te gebruiken en scripts voor foutopsporing via HTTPS te verwerken.",
      "errorLoadingDebugScriptMalformed": "Fout bij het laden van script voor foutopsporing. De foutopsporings-URL ({0}) is waarschijnlijk onjuist.",
      "errorLoadingDebugScriptUnknown": "Onbekende fout bij het laden van een script voor foutopsporing.",
      "errorLoadingDebugLoaderTitle": "Fout bij het laden van lader voor foutopsporing.",
      "errorLoadingDebugManifestTitle": "Fout bij het laden van foutopsporingsmanifesten.",
      "errorLoadingUnknownTitle": "Fout bij het laden van scripts voor foutopsporing."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Onderdeel of initialisatiefunctie ontbreekt.",
      "closeDeveloperToolsAriaLabel": "Sluit de ontwikkelhulpprogramma's."
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
      "loaderUserFriendlyError": "De toepassing kan niet worden geladen op deze pagina. Gebruik de knop Terug van de browser om het opnieuw te proberen. Stuur de beheerder van de site de informatie in Technische details als het probleem zich blijft voordoen.",
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
      "warningHeading": "Waarschuwing!",
      "warningLine1": "Als u dit hulpprogramma gebruikt, wordt u blootgesteld aan potentiële beveiligingsrisico's die ertoe kunnen leiden dat anderen toegang krijgen tot uw persoonlijke Office 365-gegevens (documenten, e-mailberichten, gesprekken en meer). Zorg ervoor dat u de persoon of organisatie vertrouwt die toegang tot dit hulpprogramma vraagt, voordat u doorgaat.",
      "warningLine2": "Meer informatie: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Er is een fout opgetreden bij het laden van foutopsporingsmanifesten.",
      "debugManifestErrorDismissButtonText": "Verwijderen"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Scripts voor foutopsporing toestaan?",
      "allowDebugLoaderTitle": "Lader voor foutopsporing toestaan?",
      "allowDebugLoaderAndManifestsTitle": "Lader voor foutopsporing en scripts voor foutopsporing toestaan?",
      "debugManifestLoadingWarning": "WAARSCHUWING: Deze pagina bevat onveilige scripts die de computer kunnen beschadigen indien ze worden geladen. Ga niet door tenzij u de ontwikkelaar vertrouwt en de risico's begrijpt.",
      "debugManifestLoadingWarning2": "Klik op {0} als u het niet zeker weet.",
      "debugManifestLoadingConfirm": "Scripts voor foutopsporing laden",
      "debugManifestLoadingCancel": "Scripts voor foutopsporing niet laden",
      "debugManifestLoadingCalloutText": "Klik hier als u niet weet wat u moet doen."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Laden...",
      "developerToolsTabLoadingUnknownError": "Er is een onbekende fout opgetreden bij het laden van de module ontwikkelhulpprogramma's."
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Prestaties",
      "ErrorAccessingPerfDataErrorMessage": "Kan de prestatiegegevens niet ophalen: object is null of is niet gedefinieerd.",
      "ErrorAccessingRedirectDataErrorMessage": "Er is een probleem opgetreden bij het openen van de prestatiegegevens van de HTTP-omleiding.",
      "ErrorParsingPercievedLatencyErrorMessage": "Er is een fout aangetroffen bij het parseren van de waargenomen latentiegegevens.",
      "ErrorParsingApiDataErrorMessage": "Er is een fout aangetroffen bij het parseren van de API-gegevens.",
      "UnkownPerformanceDataErrorMessage": "Er is een onbekende fout opgetreden: {0}",
      "DefaultWebPartName": "Webonderdeel",
      "ServerResponseLabel": "Reactietijd van server",
      "ApplicationInitializationLabel": "Initialisatietijd voor toepassing",
      "ScriptFetchEvalLabel": "Script ophalen en evalueren",
      "SpLoaderStartLabel": "SPFx-initialisatie",
      "PageRenderLabel": "Weergavetijd voor pagina",
      "LeftNavRenderLabel": "Weergavetijd voor linkernavigatiegedeelte",
      "CanvasRenderLabel": "Weergavetijd voor canvas",
      "LayoutRenderLabel": "Weergavetijd voor indeling",
      "RedirectResponseLabel": "Laadtijd voor omleiding van antwoord",
      "AppLoadLabel": "Laadtijd voor toepassing",
      "RenderWebPartsLabel": "Weergavetijd voor webonderdelen",
      "TotalRenderTimeLabel": "Totaal",
      "GeneralErrorMessage": "Er is iets misgegaan bij het ophalen van de prestatiegegevens.",
      "ErrorMessagePrefix": "Foutbericht: {0}",
      "PerformanceDataHint": "Opmerking: vernieuw de pagina na het toevoegen of verwijderen van een webonderdeel om de bijgewerkte prestatiegegevens te zien.",
      "ModulesLoadedLegendLabel": "Geladen modules",
      "InitializationLegendLabel": "Initialisatie",
      "RenderTimeLegendLabel": "Weergavetijd",
      "InitializationTimeLabel": "Initialisatietijd",
      "ModuleLoadingTimeLabel": "Laadtijd voor modules",
      "ModuleLazyLoadingDelayLabel": "Laden van module is vertraagd",
      "DataFetchTimeLabel": "Tijd voor ophalen van gegevens",
      "DataFetchLegendLabel": "Ophalen van gegevens",
      "ItemsColumnHeader": "Items",
      "DurationColumnHeader": "Duur",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "N.v.t."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifesten",
      "noManifestSelected": "Er is geen manifest geselecteerd"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Tracering",
      "EmptyTraceData": "Geen traceringen geladen.",
      "ExportCSVButtonLabel": "Exporteren als CSV",
      "LevelHeaderLabel": "Niveau",
      "MessageHeaderLabel": "Bericht",
      "ScopeHeaderLabel": "Bereik",
      "SourceHeaderLabel": "Bron",
      "TimestampHeaderLabel": "Timestamp",
      "TimestampFormat": "{2}-{1}-{0} {3}:{4}:{5},{6}"
    }
  };

  strings.default = strings;
  return strings;
});