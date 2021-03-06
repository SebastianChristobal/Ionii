define([], function() {
  var strings = {
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Erro ao carregar o script de depuração. Certifique-se de que o servidor está em execução e que o URL do parâmetro \"{0}\" está correto.",
      "errorLoadingDebugScriptHTTP": "Erro ao carregar o script de depuração. Certifique-se de que o servidor está em execução, que o URL do parâmetro \"{0}\" está correto e que é permitido carregar scripts inseguros. Pondere também utilizar um certificado de desenvolvimento e apresentar os scripts de depuração através de HTTPS.",
      "errorLoadingDebugScriptMalformed": "Erro ao carregar o script de depuração. O URL de depuração ({0}) parece estar incorreto.",
      "errorLoadingDebugScriptUnknown": "Erro desconhecido ao carregar um script de depuração.",
      "errorLoadingDebugLoaderTitle": "Erro ao carregar o carregador de depuração.",
      "errorLoadingDebugManifestTitle": "Erro ao carregar os manifestos de depuração.",
      "errorLoadingUnknownTitle": "Erro ao carregar os scripts de depuração."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Função de inicializador ou componente em falta.",
      "closeDeveloperToolsAriaLabel": "Fechar as ferramentas de programador."
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
      "loaderUserFriendlyError": "Não é possível carregar a aplicação nesta página. Utilize o botão Retroceder do browser para tentar novamente. Se o problema persistir, contacte o administrador do site e forneça-lhe as informações em Detalhes Técnicos.",
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
      "warningLine1": "A utilização desta ferramenta expõe-no a potenciais ameaças de segurança que podem fazer com que outros utilizadores obtenham acesso aos seus dados pessoais do Office 365 (documentos, e-mails, conversações, entre outros). Antes de continuar, certifique-se de que confia na pessoa ou organização que lhe pediu para aceder a esta ferramenta.",
      "warningLine2": "Saiba mais aqui: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Ocorreu um erro ao carregar os manifestos de depuração.",
      "debugManifestErrorDismissButtonText": "Dispensar"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Permitir scripts de depuração?",
      "allowDebugLoaderTitle": "Permitir o carregador de depuração?",
      "allowDebugLoaderAndManifestsTitle": "Permitir o carregador de depuração e os scripts de depuração?",
      "debugManifestLoadingWarning": "AVISO: esta página contém scripts não seguros que poderão danificar o seu computador se forem carregados. Não continue a menos que confie no programador e compreenda os riscos.",
      "debugManifestLoadingWarning2": "Se não tem a certeza, clique em {0}.",
      "debugManifestLoadingConfirm": "Carregar a depuração de scripts",
      "debugManifestLoadingCancel": "Não carregar a depuração de scripts",
      "debugManifestLoadingCalloutText": "Se não souber o que fazer, clique aqui."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "A carregar...",
      "developerToolsTabLoadingUnknownError": "Erro desconhecido ao carregar o módulo de ferramentas de programador."
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Desempenho",
      "ErrorAccessingPerfDataErrorMessage": "Não é possível obter os dados de desempenho: o objeto é nulo ou não foi definido.",
      "ErrorAccessingRedirectDataErrorMessage": "Ocorreu um problema ao aceder aos dados de desempenho do redirecionamento HTTP.",
      "ErrorParsingPercievedLatencyErrorMessage": "Foi detetado um erro ao analisar os dados de latência percetível.",
      "ErrorParsingApiDataErrorMessage": "Foi detetado um erro ao analisar os dados da API.",
      "UnkownPerformanceDataErrorMessage": "Ocorreu um erro desconhecido: {0}",
      "DefaultWebPartName": "Peça Web",
      "ServerResponseLabel": "Resposta do Servidor",
      "ApplicationInitializationLabel": "Inicialização da Aplicação",
      "ScriptFetchEvalLabel": "Avaliação e obtenção de scripts",
      "SpLoaderStartLabel": "Inicialização do SPFx",
      "PageRenderLabel": "Composição de Página",
      "LeftNavRenderLabel": "Composição da Navegação à Esquerda",
      "CanvasRenderLabel": "Composição da Tela",
      "LayoutRenderLabel": "Composição do Esquema",
      "RedirectResponseLabel": "Resposta de Redirecionamento",
      "AppLoadLabel": "Carregamento da Aplicação",
      "RenderWebPartsLabel": "Composição de Peças Web",
      "TotalRenderTimeLabel": "Total",
      "GeneralErrorMessage": "Pedimos desculpa, mas ocorreu um erro ao obter os dados de desempenho.",
      "ErrorMessagePrefix": "Mensagem de Erro: {0}",
      "PerformanceDataHint": "Nota: após adicionar ou remover uma Peça Web, atualize a página para ver os dados de desempenho atualizados.",
      "ModulesLoadedLegendLabel": "Módulos Carregados",
      "InitializationLegendLabel": "Inicialização",
      "RenderTimeLegendLabel": "Tempo de Composição",
      "InitializationTimeLabel": "Hora da inicialização",
      "ModuleLoadingTimeLabel": "Hora do carregamento do módulo",
      "ModuleLazyLoadingDelayLabel": "Atraso no carregamento do módulo",
      "DataFetchTimeLabel": "Hora da obtenção de dados",
      "DataFetchLegendLabel": "Obtenção de Dados",
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
      "TabTitle": "Rastreio",
      "EmptyTraceData": "Não foram carregados rastreios.",
      "ExportCSVButtonLabel": "Exportar CSV",
      "LevelHeaderLabel": "Nível",
      "MessageHeaderLabel": "Mensagem",
      "ScopeHeaderLabel": "Âmbito",
      "SourceHeaderLabel": "Origem",
      "TimestampHeaderLabel": "Carimbo de Data/Hora",
      "TimestampFormat": "{2}/{1}/{0} {3}:{4}:{5}.{6}"
    }
  };

  strings.default = strings;
  return strings;
});