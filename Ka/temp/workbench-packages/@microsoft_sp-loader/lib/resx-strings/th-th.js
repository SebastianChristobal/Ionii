define([], function() {
  var strings = {
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "เกิดข้อผิดพลาดในการโหลดสคริปต์แก้จุดบกพร่อง ตรวจสอบให้แน่ใจว่า เซิร์ฟเวอร์กำลังทำงานอยู่ และ URL พารามิเตอร์ \"{0}\" ถูกต้อง",
      "errorLoadingDebugScriptHTTP": "เกิดข้อผิดพลาดในการโหลดสคริปต์แก้จุดบกพร่อง ตรวจสอบให้แน่ใจว่าเซิร์ฟเวอร์กำลังทำงานอยู่, URL พารามิเตอร์ \"{0}\" ถูกต้อง และการโหลดสคริปต์ที่ไม่ปลอดภัยได้รับอนุญาต นอกจากนี้ ให้พิจารณาการใช้ใบรับรองการพัฒนา และทำหน้าที่สคริปต์การตรวจแก้จุดบกพร่องผ่านทาง HTTPS",
      "errorLoadingDebugScriptMalformed": "เกิดข้อผิดพลาดในการโหลดสคริปต์แก้จุดบกพร่อง URL แก้จุดบกพร่อง ({0}) อยู่ในรูปแบบที่ผิดปกติ",
      "errorLoadingDebugScriptUnknown": "เกิดข้อผิดพลาดในการโหลดสคริปต์แก้จุดบกพร่องที่ไม่รู้จัก",
      "errorLoadingDebugLoaderTitle": "เกิดข้อผิดพลาดในการโหลดตัวโหลดแก้จุดบกพร่อง",
      "errorLoadingDebugManifestTitle": "เกิดข้อผิดพลาดในการโหลดรายการการตรวจแก้จุดบกพร่อง",
      "errorLoadingUnknownTitle": "เกิดข้อผิดพลาดในการโหลดสคริปต์แก้จุดบกพร่อง"
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "ไม่มีคอมโพเนนต์หรือฟังก์ชันตัวกำหนดค่าเริ่มต้น",
      "closeDeveloperToolsAriaLabel": "ปิดเครื่องมือสำหรับนักพัฒนา"
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
      "loaderUserFriendlyError": "ไม่สามารถโหลดแอปพลิเคชันบนหน้านี้ ใช้ปุ่มย้อนกลับของเบราว์เซอร์เพื่อลองอีกครั้ง ถ้าปัญหายังคงอยู่ ให้ติดต่อผู้ดูแลของไซต์ แล้วให้ข้อมูลในรายละเอียดทางเทคนิค",
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
      "warningHeading": "คำเตือน!",
      "warningLine1": "การใช้เครื่องมือนี้จะเป็นการเปิดช่องให้ภัยคุกคามด้านความปลอดภัยที่อาจเกิดขึ้น ซึ่งอาจทำให้ผู้อื่นสามารถเข้าถึงข้อมูล Office 365 ส่วนบุคคล (เอกสาร อีเมล การสนทนา และอื่นๆ) ของคุณ โปรดตรวจสอบให้แน่ใจว่าคุณเชื่อถือบุคคลหรือองค์กรที่ขอให้คุณเข้าถึงเครื่องมือนี้ก่อนดำเนินการต่อ",
      "warningLine2": "เรียนรู้เพิ่มเติมที่นี่: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "เกิดข้อผิดพลาดการโหลดรายการการตรวจแก้จุดบกพร่อง",
      "debugManifestErrorDismissButtonText": "ยกเลิก"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "อนุญาตให้ใช้สคริปต์แก้จุดบกพร่องหรือไม่",
      "allowDebugLoaderTitle": "อนุญาตตัวโหลดการแก้จุดบกพร่องหรือไม่",
      "allowDebugLoaderAndManifestsTitle": "อนุญาตตัวโหลดแก้จุดบกพร่องและสคริปต์แก้จุดบกพร่องหรือไม่",
      "debugManifestLoadingWarning": "คำเตือน: หน้านี้มีสคริปต์ที่ไม่ปลอดภัย ซึ่งอาจเป็นอันตรายกับคอมพิวเตอร์ของคุณถ้าถูกโหลด อย่าดำเนินการใดๆ นอกจากคุณจะเชื่อถือนักพัฒนาและเข้าใจถึงความเสี่ยง",
      "debugManifestLoadingWarning2": "ถ้าคุณไม่แน่ใจ ให้คลิก {0}",
      "debugManifestLoadingConfirm": "โหลดสคริปต์การดีบัก",
      "debugManifestLoadingCancel": "ไม่ต้องโหลดสคริปต์การดีบัก",
      "debugManifestLoadingCalloutText": "ถ้าคุณไม่ทราบว่าจะทำอะไร ให้คลิกที่นี่"
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "กำลังโหลด...",
      "developerToolsTabLoadingUnknownError": "ข้อผิดพลาดที่ไม่รู้จักในการโหลดมอดูลเครื่องมือสำหรับนักพัฒนา"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "ประสิทธิภาพ",
      "ErrorAccessingPerfDataErrorMessage": "มีปัญหาในการเข้าถึงข้อมูลประสิทธิภาพ: วัตถุเป็นค่า Null หรือไม่ได้ระบุ",
      "ErrorAccessingRedirectDataErrorMessage": "มีปัญหาในการเข้าถึงข้อมูลประสิทธิภาพของการเปลี่ยนเส้นทาง HTTP",
      "ErrorParsingPercievedLatencyErrorMessage": "ตรวจพบข้อผิดพลาดขณะแยกวิเคราะห์ข้อมูลเวลาแฝงที่รับรู้",
      "ErrorParsingApiDataErrorMessage": "ตรวจพบข้อผิดพลาดขณะแยกวิเคราะห์ข้อมูล API",
      "UnkownPerformanceDataErrorMessage": "เกิดข้อผิดพลาดที่ไม่รู้จัก: {0}",
      "DefaultWebPartName": "Web Part",
      "ServerResponseLabel": "การตอบสนองของเซิร์ฟเวอร์",
      "ApplicationInitializationLabel": "การเตรียมใช้งานแอปพลิเคชัน",
      "ScriptFetchEvalLabel": "การดึงข้อมูลและประเมินผลสคริปต์",
      "SpLoaderStartLabel": "การเตรียมใช้งาน SPFx",
      "PageRenderLabel": "การแสดงหน้า",
      "LeftNavRenderLabel": "การแสดงการนำทางด้านซ้าย",
      "CanvasRenderLabel": "การแสดง Canvas",
      "LayoutRenderLabel": "แสดงเค้าโครง",
      "RedirectResponseLabel": "เวลาตอบสนองของการเปลี่ยนเส้นทาง",
      "AppLoadLabel": "การโหลดแอปพลิเคชัน",
      "RenderWebPartsLabel": "การแสดง Web Part",
      "TotalRenderTimeLabel": "ผลรวม",
      "GeneralErrorMessage": "ขออภัย มีบางอย่างผิดพลาดขณะดึงข้อมูลประสิทธิภาพ",
      "ErrorMessagePrefix": "ข้อความแสดงข้อผิดพลาด: {0}",
      "PerformanceDataHint": "หมายเหตุ: หลังจากเพิ่มหรือนำ Web Part ออกแล้ว ให้รีเฟรชหน้าเพื่อดูข้อมูลประสิทธิภาพที่อัปเดตแล้ว",
      "ModulesLoadedLegendLabel": "มอดูลที่โหลด",
      "InitializationLegendLabel": "การเตรียมใช้งาน",
      "RenderTimeLegendLabel": "เวลาแสดง",
      "InitializationTimeLabel": "เวลาเตรียมใช้งาน",
      "ModuleLoadingTimeLabel": "เวลาการโหลดมอดูล",
      "ModuleLazyLoadingDelayLabel": "การโหลดโมดูลล่าช้า",
      "DataFetchTimeLabel": "เวลาดึงข้อมูล",
      "DataFetchLegendLabel": "การดึงข้อมูล",
      "ItemsColumnHeader": "รายการ",
      "DurationColumnHeader": "ระยะเวลา",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "ไม่มี"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "ไฟล์กำกับ",
      "noManifestSelected": "ไม่ได้เลือกไฟล์กำกับ"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "ติดตาม",
      "EmptyTraceData": "ไม่ได้โหลดข้อมูลการติดตามใดๆ",
      "ExportCSVButtonLabel": "ส่งออกไฟล์ CSV",
      "LevelHeaderLabel": "ระดับ",
      "MessageHeaderLabel": "ข้อความ",
      "ScopeHeaderLabel": "ขอบเขต",
      "SourceHeaderLabel": "แหล่งที่มา",
      "TimestampHeaderLabel": "ประทับเวลา",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}"
    }
  };

  strings.default = strings;
  return strings;
});