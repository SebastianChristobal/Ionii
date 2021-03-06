define([], function() {
  var strings = {
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Eroare la încărcarea scriptului de depanare. Asigurați-vă că serverul rulează și că URL-ul din parametrul „{0}” este corect.",
      "errorLoadingDebugScriptHTTP": "Eroare la încărcarea scriptului de depanare. Asigurați-vă că serverul rulează, că URL-ul din parametrul „{0}” este corect și că încărcarea de scripturi nesigure este permisă. De asemenea, luați în considerare utilizarea unui certificat de dezvoltator și servirea scripturilor de depanare prin HTTPS.",
      "errorLoadingDebugScriptMalformed": "Eroare la încărcarea scriptului de depanare. URL-ul de depanare ({0}) pare a fi greșit format.",
      "errorLoadingDebugScriptUnknown": "Eroare necunoscută la încărcarea unui script de depanare.",
      "errorLoadingDebugLoaderTitle": "Eroare la încărcarea instrumentului de încărcare a depanării.",
      "errorLoadingDebugManifestTitle": "Eroare la încărcarea manifestelor de depanare.",
      "errorLoadingUnknownTitle": "Eroare la încărcarea scripturilor de depanare."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Componenta sau funcția de inițializare lipsesc.",
      "closeDeveloperToolsAriaLabel": "Închideți instrumentele de dezvoltator."
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
      "loaderUserFriendlyError": "Aplicația nu se poate încărca pe această pagină. Utilizați butonul Înapoi din browser pentru a reîncerca. Dacă problema persistă, contactați administratorul site-ului și dați-i informațiile din Detalii tehnice.",
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
      "warningHeading": "Avertisment!",
      "warningLine1": "Utilizarea acestui instrument vă expune unor potențiale amenințări de securitate, care pot duce la o situație în care alte persoane obțin acces la datele dvs. personale Office 365 (documente, mesaje de e-mail, conversații și altele). Înainte de a continua, asigurați-vă că aveți încredere în persoana sau organizația care v-a solicitat să accesați acest instrument.",
      "warningLine2": "Aflați mai multe aici: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "A avut loc o eroare la încărcarea manifestelor de depanare.",
      "debugManifestErrorDismissButtonText": "Îndepărtare"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Permiteți scripturile de depanare?",
      "allowDebugLoaderTitle": "Permiteți instrumentul de încărcare a depanării?",
      "allowDebugLoaderAndManifestsTitle": "Permiteți instrumentul de încărcare a depanării și scripturi de depanare?",
      "debugManifestLoadingWarning": "AVERTISMENT: această pagină conține scripturi nesigure care, dacă sunt încărcate, ar putea dăuna computerului. Nu începeți decât dacă aveți încredere în dezvoltator și înțelegeți riscurile.",
      "debugManifestLoadingWarning2": "Dacă nu sunteți sigur, faceți clic pe {0}.",
      "debugManifestLoadingConfirm": "Încărcați scripturile de depanare",
      "debugManifestLoadingCancel": "Nu încărcați scripturile de depanare",
      "debugManifestLoadingCalloutText": "Dacă nu știți ce să faceți, faceți clic aici."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Se încarcă...",
      "developerToolsTabLoadingUnknownError": "Eroare necunoscută la încărcarea modulului de instrumente pentru dezvoltatori."
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Performanță",
      "ErrorAccessingPerfDataErrorMessage": "Nu s-a reușit regăsirea datelor de performanță: obiectul este nul sau nedefinit.",
      "ErrorAccessingRedirectDataErrorMessage": "A existat o problemă la accesarea datelor de performanță de redirecționare HTTP.",
      "ErrorParsingPercievedLatencyErrorMessage": "A fost interceptată o eroare la analiza datelor de latență percepute.",
      "ErrorParsingApiDataErrorMessage": "A fost interceptată o eroare la analiza datelor API.",
      "UnkownPerformanceDataErrorMessage": "A apărut o eroare necunoscută: {0}",
      "DefaultWebPartName": "Parte web",
      "ServerResponseLabel": "Răspuns de la server",
      "ApplicationInitializationLabel": "Inițializare aplicație",
      "ScriptFetchEvalLabel": "Preluare și evaluare script",
      "SpLoaderStartLabel": "Inițializare SPFx",
      "PageRenderLabel": "Redare pagină",
      "LeftNavRenderLabel": "Redare navigare stânga",
      "CanvasRenderLabel": "Redare pânză",
      "LayoutRenderLabel": "Redare aspect",
      "RedirectResponseLabel": "Redirecționați răspunsul",
      "AppLoadLabel": "Încărcare aplicație",
      "RenderWebPartsLabel": "Redare părți web",
      "TotalRenderTimeLabel": "Total",
      "GeneralErrorMessage": "Ne pare rău, ceva nu a funcționat corect la regăsirea datelor de performanță.",
      "ErrorMessagePrefix": "Mesaj de eroare: {0}",
      "PerformanceDataHint": "Notă: după adăugarea sau eliminarea unei părți web, reîmprospătați pagina pentru a vedea datele de performanță actualizate.",
      "ModulesLoadedLegendLabel": "Module încărcate",
      "InitializationLegendLabel": "Inițializare",
      "RenderTimeLegendLabel": "Ora de redare",
      "InitializationTimeLabel": "Timp de inițializare",
      "ModuleLoadingTimeLabel": "Timp de încărcare a modulelor",
      "ModuleLazyLoadingDelayLabel": "Încărcare modul întârziată",
      "DataFetchTimeLabel": "Timp de preluare a datelor",
      "DataFetchLegendLabel": "Preluare date",
      "ItemsColumnHeader": "Elemente",
      "DurationColumnHeader": "Durată",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "Indisponibil"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifeste",
      "noManifestSelected": "Niciun manifest selectat"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Urmărire",
      "EmptyTraceData": "Nicio urmărire încărcată.",
      "ExportCSVButtonLabel": "Export la CSV",
      "LevelHeaderLabel": "Nivel",
      "MessageHeaderLabel": "Mesaj",
      "ScopeHeaderLabel": "Domeniu",
      "SourceHeaderLabel": "Sursă",
      "TimestampHeaderLabel": "Marcă de timp",
      "TimestampFormat": "{2}.{1}.{0} {3}:{4}:{5}.{6}"
    }
  };

  strings.default = strings;
  return strings;
});