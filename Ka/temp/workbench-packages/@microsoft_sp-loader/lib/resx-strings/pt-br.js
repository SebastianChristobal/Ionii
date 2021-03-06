define([], function() {
  var strings = {
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Erro ao carregar o script de depuração. Verifique se o servidor está em execução e se a URL do parâmetro \"{0}\" está correta.",
      "errorLoadingDebugScriptHTTP": "Erro ao carregar o script de depuração. Verifique se que o servidor está em execução, se a URL do parâmetro \"{0}\" está correta, e se é permitido carregar scripts perigosos. Além disso, considere usar um certificado de desenvolvimento e atender a scripts de depuração em HTTPS.",
      "errorLoadingDebugScriptMalformed": "Erro ao carregar o script de depuração. A URL de depuração ({0}) parece estar incorreta.",
      "errorLoadingDebugScriptUnknown": "Erro desconhecido ao carregar um script de depuração.",
      "errorLoadingDebugLoaderTitle": "Erro ao carregar carregador de depuração.",
      "errorLoadingDebugManifestTitle": "Erro ao carregar os manifestos de depuração.",
      "errorLoadingUnknownTitle": "Erro ao carregar scripts de depuração."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Função de componente ou inicializador ausente.",
      "closeDeveloperToolsAriaLabel": "Feche as ferramentas de desenvolvedor."
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
      "loaderUserFriendlyError": "Não é possível carregar o aplicativo nesta página. Use o botão Voltar do navegador para tentar novamente. Se o problema persistir, contate o administrador do site e forneça a ele as informações contidas em Detalhes Técnicos.",
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
      "warningHeading": "Aviso!",
      "warningLine1": "O uso desta ferramenta expõe você a possíveis ameaças de segurança que podem resultar em que outras pessoas tenham acesso a seus dados pessoais do Office 365 (documentos, emails, conversas e muito mais). Verifique se você confia na pessoa ou na organização que solicitou acesso a essa ferramenta antes de prosseguir.",
      "warningLine2": "Saiba mais aqui: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Erro ao carregar manifestos de depuração.",
      "debugManifestErrorDismissButtonText": "Ignorar"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Permitir scripts de depuração?",
      "allowDebugLoaderTitle": "Permitir carregador de depuração?",
      "allowDebugLoaderAndManifestsTitle": "Permitir carregador de depuração e scripts de depuração?",
      "debugManifestLoadingWarning": "AVISO: esta página contém scripts perigosos, que se carregados, podem danificar seu computador. Não continue a menos que confie no desenvolvedor e entenda os riscos.",
      "debugManifestLoadingWarning2": "Se você não tiver certeza, clique em {0}.",
      "debugManifestLoadingConfirm": "Carregar scripts de depuração",
      "debugManifestLoadingCancel": "Não carregar scripts de depuração",
      "debugManifestLoadingCalloutText": "Se você não souber o que fazer, clique aqui."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Carregando...",
      "developerToolsTabLoadingUnknownError": "Erro desconhecido ao carregar o módulo de ferramentas de desenvolvedor."
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Desempenho",
      "ErrorAccessingPerfDataErrorMessage": "Não é possível recuperar os dados de desempenho: o objeto é nulo ou indefinido.",
      "ErrorAccessingRedirectDataErrorMessage": "Ocorreu um problema ao acessar os dados de desempenho do redirecionamento HTTP.",
      "ErrorParsingPercievedLatencyErrorMessage": "Um erro foi detectado durante a análise dos dados de latência percebida.",
      "ErrorParsingApiDataErrorMessage": "Um erro foi detectado durante a análise dos dados da API.",
      "UnkownPerformanceDataErrorMessage": "Ocorreu um erro desconhecido: {0}",
      "DefaultWebPartName": "Web Part",
      "ServerResponseLabel": "Resposta do Servidor",
      "ApplicationInitializationLabel": "Inicialização do Aplicativo",
      "ScriptFetchEvalLabel": "Avaliação e busca de script",
      "SpLoaderStartLabel": "Inicialização de SPFx",
      "PageRenderLabel": "Renderização de Página",
      "LeftNavRenderLabel": "Renderização de Navegação à Esquerda",
      "CanvasRenderLabel": "Renderizador de Tela",
      "LayoutRenderLabel": "Renderizador de Layout",
      "RedirectResponseLabel": "Resposta de Redirecionamento",
      "AppLoadLabel": "Carga do Aplicativo",
      "RenderWebPartsLabel": "Renderização de Web Parts",
      "TotalRenderTimeLabel": "Total",
      "GeneralErrorMessage": "Algo deu errado ao recuperar os dados de desempenho.",
      "ErrorMessagePrefix": "Mensagem de Erro: {0}",
      "PerformanceDataHint": "Observação: após adicionar ou remover uma Web Part, atualize a página para ver os dados de desempenho atualizados.",
      "ModulesLoadedLegendLabel": "Módulos Carregados",
      "InitializationLegendLabel": "Inicialização",
      "RenderTimeLegendLabel": "Tempo de Renderização",
      "InitializationTimeLabel": "Tempo de inicialização",
      "ModuleLoadingTimeLabel": "Tempo de carregamento do módulo",
      "ModuleLazyLoadingDelayLabel": "Carregamento de módulo atrasado",
      "DataFetchTimeLabel": "Tempo de busca de dados",
      "DataFetchLegendLabel": "Busca de Dados",
      "ItemsColumnHeader": "Itens",
      "DurationColumnHeader": "Duração",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "N/D"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifestos",
      "noManifestSelected": "Nenhum manifesto selecionado"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Rastrear",
      "EmptyTraceData": "Não há rastreamentos carregados.",
      "ExportCSVButtonLabel": "Exportar CSV",
      "LevelHeaderLabel": "Nível",
      "MessageHeaderLabel": "Mensagem",
      "ScopeHeaderLabel": "Escopo",
      "SourceHeaderLabel": "Origem",
      "TimestampHeaderLabel": "Carimbo de data/hora",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}"
    }
  };

  strings.default = strings;
  return strings;
});