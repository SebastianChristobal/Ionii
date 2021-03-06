define([], function() {
  var strings = {
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Greška prilikom učitavanja skripte za otklanjanje grešaka. Proverite da li je server pokrenut i da li je tačna URL adresa parametra „{0}“.",
      "errorLoadingDebugScriptHTTP": "Greška prilikom učitavanja skripte za otklanjanje grešaka. Proverite da li je server pokrenut, da li je tačna URL adresa parametra „{0}“ i da li je omogućeno učitavanje nebezbednih skripti. Razmotrite i korišćenje razvojnog certifikata i isporuku skripti za otklanjanje grešaka putem HTTPS protokola.",
      "errorLoadingDebugScriptMalformed": "Greška prilikom učitavanja skripte za otklanjanje grešaka. Izgleda da je URL adresa otklanjanja grešaka ({0}) pogrešno uobličena.",
      "errorLoadingDebugScriptUnknown": "Nepoznata greška prilikom učitavanja skripte za otklanjanje grešaka.",
      "errorLoadingDebugLoaderTitle": "Greška prilikom učitavanja programa za učitavanje otklanjanja grešaka.",
      "errorLoadingDebugManifestTitle": "Greška prilikom učitavanja manifesta otklanjanja grešaka.",
      "errorLoadingUnknownTitle": "Greška prilikom učitavanja skripti za otklanjanje grešaka."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Nedostaje komponenta ili funkcija pokretača.",
      "closeDeveloperToolsAriaLabel": "Zatvorite alatke za programere."
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
      "loaderUserFriendlyError": "Nije moguće učitati aplikaciju na ovoj stranici. Koristite dugme „Nazad“ u pregledaču da biste pokušali opet. Ako ponovo dođe do problema, obratite se administratoru sajta i dajte mu informacije u okviru „Tehnički detalji“.",
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
      "warningHeading": "Upozorenje!",
      "warningLine1": "Korišćenje ove alatke vas izlaže potencijalnim bezbednosnim pretnjama koje mogu dovesti do toga da drugi ljudi dobiju pristup vašim ličnim Office 365 podacima (dokumentima, e-porukama, razgovorima i još mnogo toga). Pre nego što nastavite, uverite se da imate poverenja u osobu ili organizaciju koje su vam zatražile pristup ovoj alatki.",
      "warningLine2": "Saznajte više ovde: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Došlo je do greške prilikom učitavanja manifesta otklanjanja grešaka.",
      "debugManifestErrorDismissButtonText": "Odbaci"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Želite li da dozvolite skripte za otklanjanje grešaka?",
      "allowDebugLoaderTitle": "Želite li da dozvolite učitavanje otklanjanja grešaka?",
      "allowDebugLoaderAndManifestsTitle": "Želite li da dozvolite učitavanje otklanjanja grešaka i skripte za otklanjanje grešaka?",
      "debugManifestLoadingWarning": "UPOZORENJE: Ova stranica sadrži nebezbedne skripte koje mogu oštetiti vaš računar ako se učitaju! Nemojte nastavljati ako nemate poverenja u projektanta i ne razumete rizike.",
      "debugManifestLoadingWarning2": "Ako niste sigurni, kliknite na dugme {0}.",
      "debugManifestLoadingConfirm": "Učitaj skripte za otklanjanje grešaka",
      "debugManifestLoadingCancel": "Ne učitavaj skripte za otklanjanje grešaka",
      "debugManifestLoadingCalloutText": "Ako ne znate šta da radite, kliknite ovde."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Učitavanje...",
      "developerToolsTabLoadingUnknownError": "Nepoznata greška pri učitavanju modula alatki za programere."
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Performanse",
      "ErrorAccessingPerfDataErrorMessage": "Nije moguće preuzeti podatke o performansama: objekat je bez vrednosti ili nedefinisan.",
      "ErrorAccessingRedirectDataErrorMessage": "Došlo je do problema prilikom pristupa podacima o performansama HTTP preusmeravanja.",
      "ErrorParsingPercievedLatencyErrorMessage": "Otkrivena je greška prilikom raščlanjivanja podataka o prepoznatom kašnjenju.",
      "ErrorParsingApiDataErrorMessage": "Otkrivena je greška prilikom raščlanjivanja API podataka.",
      "UnkownPerformanceDataErrorMessage": "Došlo je do nepoznate greške: {0}",
      "DefaultWebPartName": "Veb segment",
      "ServerResponseLabel": "Odziv servera",
      "ApplicationInitializationLabel": "Pokretanje aplikacije",
      "ScriptFetchEvalLabel": "Dobavljanje i procenjivanje skripti",
      "SpLoaderStartLabel": "SPFx inicijalizacija",
      "PageRenderLabel": "Vizuelizacija stranice",
      "LeftNavRenderLabel": "Vizuelizacija levog okna za navigaciju",
      "CanvasRenderLabel": "Vizuelizacija platna",
      "LayoutRenderLabel": "Vizuelizacija rasporeda",
      "RedirectResponseLabel": "Odgovor o preusmeravanju",
      "AppLoadLabel": "Učitavanje aplikacije",
      "RenderWebPartsLabel": "Vizuelizacija veb segmenata",
      "TotalRenderTimeLabel": "Ukupno",
      "GeneralErrorMessage": "Žao nam je, došlo je do greške prilikom preuzimanja podataka o performansama.",
      "ErrorMessagePrefix": "Poruka o grešci: {0}",
      "PerformanceDataHint": "Napomena: Kada dodate ili uklonite veb segment, osvežite stranicu da biste videli ažurirane podatke o performansama.",
      "ModulesLoadedLegendLabel": "Učitani moduli",
      "InitializationLegendLabel": "Pokretanje",
      "RenderTimeLegendLabel": "Vreme vizuelizacije",
      "InitializationTimeLabel": "Vreme pokretanja",
      "ModuleLoadingTimeLabel": "Vreme učitavanja modula",
      "ModuleLazyLoadingDelayLabel": "Učitavanje modula je odloženo",
      "DataFetchTimeLabel": "Vreme dobavljanja podataka",
      "DataFetchLegendLabel": "Dobavljanje podataka",
      "ItemsColumnHeader": "Stavke",
      "DurationColumnHeader": "Trajanje",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "Ne postoji"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifesti",
      "noManifestSelected": "Nije izabran nijedan manifest"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Praćenje",
      "EmptyTraceData": "Nema učitanih praćenja.",
      "ExportCSVButtonLabel": "Izvezi CSV",
      "LevelHeaderLabel": "Nivo",
      "MessageHeaderLabel": "Poruka",
      "ScopeHeaderLabel": "Opseg",
      "SourceHeaderLabel": "Izvor",
      "TimestampHeaderLabel": "Vremenska oznaka",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}"
    }
  };

  strings.default = strings;
  return strings;
});