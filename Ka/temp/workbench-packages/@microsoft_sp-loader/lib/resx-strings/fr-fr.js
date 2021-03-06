define([], function() {
  var strings = {
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Une erreur s’est produite lors du chargement du script du débogage. Assurez-vous que le serveur est en cours d’exécution et que l’URL du paramètre « {0} » est appropriée.",
      "errorLoadingDebugScriptHTTP": "Une erreur s’est produite lors du chargement du script de débogage. Assurez-vous que le serveur est en cours d’exécution, que l’URL du paramètre « {0} » est appropriée et que le chargement de scripts non sécurisés est autorisé. Envisagez également d’utiliser un certificat de développement et de proposer des scripts de débogage via HTTPS.",
      "errorLoadingDebugScriptMalformed": "Une erreur s’est produite lors du chargement du script de débogage. Le format de l’URL de débogage ({0}) semble incorrect.",
      "errorLoadingDebugScriptUnknown": "Une erreur inconnue s’est produite lors du chargement d’un script de débogage.",
      "errorLoadingDebugLoaderTitle": "Une erreur s’est produite lors du chargement du chargeur de débogage.",
      "errorLoadingDebugManifestTitle": "Une erreur s’est produite lors du chargement des manifestes de débogage.",
      "errorLoadingUnknownTitle": "Une erreur s’est produite lors du chargement de scripts de débogage."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "La fonction d’initialiseur ou un composant est manquant.",
      "closeDeveloperToolsAriaLabel": "Fermer les outils de développement."
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
      "loaderUserFriendlyError": "Nous ne pouvons pas charger l’application sur cette page. Utilisez le bouton Précédent du navigateur pour réessayer. Si le problème persiste, contactez l’administrateur du site et communiquez-lui les informations figurant dans la section Détails techniques.",
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
      "warningHeading": "Avertissement !",
      "warningLine1": "L’utilisation de cet outil vous expose à des menaces potentielles liées à la sécurité. Des personnes pourraient obtenir l’accès à vos données Office 365 personnelles (documents, courriers, conversations, etc.). Avant de continuer, vérifiez que la personne ou l’organisation qui vous a demandé d’accéder à cet outil est digne de confiance.",
      "warningLine2": "En savoir plus ici : {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Une erreur s’est produite lors du chargement des manifestes de débogage.",
      "debugManifestErrorDismissButtonText": "Masquer"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Voulez-vous autoriser les scripts de débogage ?",
      "allowDebugLoaderTitle": "Voulez-vous autoriser le chargeur de débogage ?",
      "allowDebugLoaderAndManifestsTitle": "Voulez-vous autoriser le chargeur de débogage et les scripts de débogage ?",
      "debugManifestLoadingWarning": "AVERTISSEMENT : cette page contient des scripts non sécurisés qui, en cas de chargement, pourraient endommager votre ordinateur. Ne poursuivez que si vous faites confiance au développeur et comprenez les risques.",
      "debugManifestLoadingWarning2": "Si vous n’êtes pas sûr, cliquez sur {0}.",
      "debugManifestLoadingConfirm": "Charger les scripts de débogage",
      "debugManifestLoadingCancel": "Ne pas charger les scripts de débogage",
      "debugManifestLoadingCalloutText": "Si vous ne savez pas quoi faire, cliquez ici."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Chargement en cours...",
      "developerToolsTabLoadingUnknownError": "Nous avons rencontré une erreur inconnue lors du chargement du module des outils de développement."
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Performances",
      "ErrorAccessingPerfDataErrorMessage": "Nous n’avons pas pu récupérer les données de performance, car l’objet a la valeur null ou n’est pas défini.",
      "ErrorAccessingRedirectDataErrorMessage": "Nous avons rencontré un problème lors de l’accès aux données de performance de redirection HTTP.",
      "ErrorParsingPercievedLatencyErrorMessage": "Nous avons rencontré un problème lors de l’analyse des données de latence identifiées.",
      "ErrorParsingApiDataErrorMessage": "Nous avons rencontré une erreur lors de l’analyse des données de l’API.",
      "UnkownPerformanceDataErrorMessage": "Nous avons rencontré une erreur inconnue : {0}",
      "DefaultWebPartName": "Composant WebPart",
      "ServerResponseLabel": "Réponse du serveur",
      "ApplicationInitializationLabel": "Initialisation de l’application",
      "ScriptFetchEvalLabel": "Récupération et évaluation de scripts",
      "SpLoaderStartLabel": "Initialisation de SPFx",
      "PageRenderLabel": "Rendu de page",
      "LeftNavRenderLabel": "Rendu du menu de navigation gauche",
      "CanvasRenderLabel": "Rendu de la zone de dessin",
      "LayoutRenderLabel": "Restitution de la disposition",
      "RedirectResponseLabel": "Réponse redirigée",
      "AppLoadLabel": "Chargement de l’application",
      "RenderWebPartsLabel": "Rendu des composants WebPart",
      "TotalRenderTimeLabel": "Total",
      "GeneralErrorMessage": "Désolé... Nous avons rencontré un problème lors de la récupération des données de performance.",
      "ErrorMessagePrefix": "Message d’erreur : {0}",
      "PerformanceDataHint": "Remarque : après l’ajout ou la suppression d’un composant WebPart, actualisez la page pour afficher les données de performances mises à jour.",
      "ModulesLoadedLegendLabel": "Modules chargés",
      "InitializationLegendLabel": "Initialisation",
      "RenderTimeLegendLabel": "Heure du rendu",
      "InitializationTimeLabel": "Durée d’initialisation",
      "ModuleLoadingTimeLabel": "Durée de chargement du module",
      "ModuleLazyLoadingDelayLabel": "Chargement du module retardé",
      "DataFetchTimeLabel": "Durée de récupération des données",
      "DataFetchLegendLabel": "Récupération des données",
      "ItemsColumnHeader": "Éléments",
      "DurationColumnHeader": "Durée",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "N/A"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifestes",
      "noManifestSelected": "Aucun manifeste n’est sélectionné"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Trace",
      "EmptyTraceData": "Aucune trace n’a été chargée.",
      "ExportCSVButtonLabel": "Exporter au format CSV",
      "LevelHeaderLabel": "Niveau",
      "MessageHeaderLabel": "Message",
      "ScopeHeaderLabel": "Étendue",
      "SourceHeaderLabel": "Source",
      "TimestampHeaderLabel": "Horodateur",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}"
    }
  };

  strings.default = strings;
  return strings;
});