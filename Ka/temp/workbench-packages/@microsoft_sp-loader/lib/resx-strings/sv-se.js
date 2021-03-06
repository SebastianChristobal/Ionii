define([], function() {
  var strings = {
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Fel vid inläsning av felsökningsskript. Kontrollera att servern är igång och att parameter-URL:en {0} är korrekt.",
      "errorLoadingDebugScriptHTTP": "Fel vid inläsning av felsökningsskript. Kontrollera att servern är igång, att parameter-URL:en {0} är korrekt och att det är tillåtet att läsa in osäkra skript. Överväg också att använda ett utvecklingscertifikat och köra felsökningsskript via HTTPS.",
      "errorLoadingDebugScriptMalformed": "Fel vid inläsning av felsökningsskript. Felsöknings-URL:en ({0}) verkar ha ett felaktigt format.",
      "errorLoadingDebugScriptUnknown": "Okänt fel vid inläsning av ett felsökningsskript.",
      "errorLoadingDebugLoaderTitle": "Fel vid inläsning av felsökningsladdare.",
      "errorLoadingDebugManifestTitle": "Fel vid inläsning av felsökningsmanifest.",
      "errorLoadingUnknownTitle": "Fel vid inläsning av felsökningsskript."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Saknar komponent eller initierarfunktion.",
      "closeDeveloperToolsAriaLabel": "Stäng utvecklarverktygen."
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
      "loaderUserFriendlyError": "Det går inte att läsa in appen på den här sidan. Använd webbläsarens bakåtknapp för att försöka igen. Om problemet kvarstår kontaktar du administratören för webbplatsen och ange information i Teknisk information.",
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
      "warningHeading": "Varning!",
      "warningLine1": "Om du använder det här verktyget utsätter du dig för möjliga säkerhetshot som kan leda till att andra får åtkomst till dina personliga Office 365-data (dokument, e-post, konversationer med mer). Se till att du litar på personen eller organisationen som har bett dig att använda det här verktyget innan du fortsätter.",
      "warningLine2": "Läs mer här: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Ett fel uppstod inläsning av felsökningsmanifest.",
      "debugManifestErrorDismissButtonText": "Ignorera"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Tillåta felsökning av skript?",
      "allowDebugLoaderTitle": "Tillåt felsökningsladdare?",
      "allowDebugLoaderAndManifestsTitle": "Tillåt felsökningsladdare och felsökningsskript?",
      "debugManifestLoadingWarning": "VARNING: Den här sidan innehåller osäkra skript som, om de läses in, kan skada din dator. Fortsätt inte om du inte litar på utvecklaren och förstår riskerna.",
      "debugManifestLoadingWarning2": "Klicka på {0} om du är osäker.",
      "debugManifestLoadingConfirm": "Läs in felsökningsskript",
      "debugManifestLoadingCancel": "Läs inte in felsökningsskript",
      "debugManifestLoadingCalloutText": "Om du inte vet vad du ska göra klickar du här."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Läser in...",
      "developerToolsTabLoadingUnknownError": "Okänt fel vid inläsning av modulen för utvecklarverktyg."
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Prestanda",
      "ErrorAccessingPerfDataErrorMessage": "Det gick inte att hämta prestandadata: objektet är null eller odefinierat.",
      "ErrorAccessingRedirectDataErrorMessage": "Det inträffade ett problem vid åtkomst av prestandadata för HTTP-omdirigering.",
      "ErrorParsingPercievedLatencyErrorMessage": "Ett fel upptäcktes vid tolkning av uppfattade fördröjningsdata.",
      "ErrorParsingApiDataErrorMessage": "Ett fel upptäcktes vid tolkning av API-data.",
      "UnkownPerformanceDataErrorMessage": "Ett okänt fel har uppstått: {0}",
      "DefaultWebPartName": "Webbdel",
      "ServerResponseLabel": "Serversvar",
      "ApplicationInitializationLabel": "Initiering av app",
      "ScriptFetchEvalLabel": "Hämta och utvärdera skript",
      "SpLoaderStartLabel": "SPFx-initiering",
      "PageRenderLabel": "Sidåtergivning",
      "LeftNavRenderLabel": "Återgivning av vänster navigering",
      "CanvasRenderLabel": "Återgivning av arbetsyta",
      "LayoutRenderLabel": "Layoutrendering",
      "RedirectResponseLabel": "Omdirigera svar",
      "AppLoadLabel": "Inläsning av app",
      "RenderWebPartsLabel": "Återgivning av webbdelar",
      "TotalRenderTimeLabel": "Totalt",
      "GeneralErrorMessage": "Något gick fel vid hämtning av prestandadata.",
      "ErrorMessagePrefix": "Felmeddelande: {0}",
      "PerformanceDataHint": "Obs! När du har lagt till eller tagit bort en webbdel uppdaterar du sidan för att visa uppdaterade prestandadata.",
      "ModulesLoadedLegendLabel": "Inlästa moduler",
      "InitializationLegendLabel": "Initiering",
      "RenderTimeLegendLabel": "Återgivningstid",
      "InitializationTimeLabel": "Initieringstid",
      "ModuleLoadingTimeLabel": "Modulinläsningstid",
      "ModuleLazyLoadingDelayLabel": "Fördröjd inläsning av modul",
      "DataFetchTimeLabel": "Datahämtningstid",
      "DataFetchLegendLabel": "Datahämtning",
      "ItemsColumnHeader": "Objekt",
      "DurationColumnHeader": "Varaktighet",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "Ej tillämpligt"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifest",
      "noManifestSelected": "Inget manifest har valts"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Spårning",
      "EmptyTraceData": "Inga spårningar har lästs in.",
      "ExportCSVButtonLabel": "Exportera CSV",
      "LevelHeaderLabel": "Nivå",
      "MessageHeaderLabel": "Meddelande",
      "ScopeHeaderLabel": "Omfattning",
      "SourceHeaderLabel": "Källa",
      "TimestampHeaderLabel": "Tidsstämpel",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}"
    }
  };

  strings.default = strings;
  return strings;
});