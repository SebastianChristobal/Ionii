/**
 * Stores the address for each module by its normalized name.
 * This is used for SystemJS to know how to locate each module.
 */
export default class AddressStore {
    private static _instance;
    static readonly instance: AddressStore;
    /**
     * Map from normalized name to address
     */
    private _addressMap;
    private _reverseAddressMap;
    /**
     * Returns an address for a module, given its normalized name.
     * @param normalizedName - Normalized name
     */
    tryGetAddress(normalizedName: string): string | undefined;
    /**
     * Returns the normalized name for a given address.
     * If the address hasn't been set in the AddressStore, it returns undefined
     * @param address - Address
     */
    getNormalizedName(address: string): string | undefined;
    /**
     * Set a mapping from a module's normalized name to the module address.
     *
     * @remarks
     * If the address has been set for a previous module's normalized name, when searching for that address
     * the original module's normalized name will be returned.
     * @param normalizedName - Module normalized name
     * @param address - Module address
     */
    set(normalizedName: string, address: string): void;
}
//# sourceMappingURL=AddressStore.d.ts.map