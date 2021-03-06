import { Guid, Version } from '@microsoft/sp-core-library';
/**
 * Given a component id and version, gives a normalized string that includes both string and version.
 * Used internally to provide a common way to refer to id + version in different classes.
 *
 * Example:
 * { id: d1d91016-032f-456d-98a4-721247c305e8, version: 1.0.0 } -> d1d91016-032f-456d-98a4-721247c305e8_1.0.0
 */
export default function normalizeComponentId(id: string | Guid, version: string | Version): string;
//# sourceMappingURL=normalizeComponentId.d.ts.map