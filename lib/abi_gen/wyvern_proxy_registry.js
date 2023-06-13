"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WyvernProxyRegistryContract = void 0;
const utils_1 = require("@0xproject/utils");
const base_contract_1 = require("./base_contract");
class WyvernProxyRegistryContract extends base_contract_1.BaseContract {
    constructor(web3ContractInstance, defaults) {
        super(web3ContractInstance, defaults);
        this.name = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.name.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        this.initialAddressSet = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.initialAddressSet.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        this.endGrantAuthentication = {
            sendTransactionAsync(addr_0, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.endGrantAuthentication.estimateGasAsync.bind(self, addr_0));
                    const txHash = yield (0, utils_1.promisify)(self.web3ContractInstance.endGrantAuthentication, self.web3ContractInstance)(addr_0, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(addr_0, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield (0, utils_1.promisify)(self.web3ContractInstance.endGrantAuthentication.estimateGas, self.web3ContractInstance)(addr_0, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(addr_0) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.endGrantAuthentication.getData(addr_0);
                return abiEncodedTransactionData;
            },
        };
        this.revokeAuthentication = {
            sendTransactionAsync(addr_0, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.revokeAuthentication.estimateGasAsync.bind(self, addr_0));
                    const txHash = yield (0, utils_1.promisify)(self.web3ContractInstance.revokeAuthentication, self.web3ContractInstance)(addr_0, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(addr_0, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield (0, utils_1.promisify)(self.web3ContractInstance.revokeAuthentication.estimateGas, self.web3ContractInstance)(addr_0, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(addr_0) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.revokeAuthentication.getData(addr_0);
                return abiEncodedTransactionData;
            },
        };
        this.pending = {
            callAsync(index_0, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.pending.call, self.web3ContractInstance)(index_0, txData);
                    return result;
                });
            },
        };
        this.contracts = {
            callAsync(index_0, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.contracts.call, self.web3ContractInstance)(index_0, txData);
                    return result;
                });
            },
        };
        this.renounceOwnership = {
            sendTransactionAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.renounceOwnership.estimateGasAsync.bind(self));
                    const txHash = yield (0, utils_1.promisify)(self.web3ContractInstance.renounceOwnership, self.web3ContractInstance)(txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield (0, utils_1.promisify)(self.web3ContractInstance.renounceOwnership.estimateGas, self.web3ContractInstance)(txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData() {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.renounceOwnership.getData();
                return abiEncodedTransactionData;
            },
        };
        this.owner = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.owner.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        this.delegateProxyImplementation = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.delegateProxyImplementation.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        this.proxies = {
            callAsync(index_0, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.proxies.call, self.web3ContractInstance)(index_0, txData);
                    return result;
                });
            },
        };
        this.startGrantAuthentication = {
            sendTransactionAsync(addr_0, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.startGrantAuthentication.estimateGasAsync.bind(self, addr_0));
                    const txHash = yield (0, utils_1.promisify)(self.web3ContractInstance.startGrantAuthentication, self.web3ContractInstance)(addr_0, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(addr_0, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield (0, utils_1.promisify)(self.web3ContractInstance.startGrantAuthentication.estimateGas, self.web3ContractInstance)(addr_0, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(addr_0) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.startGrantAuthentication.getData(addr_0);
                return abiEncodedTransactionData;
            },
        };
        this.registerProxy = {
            sendTransactionAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.registerProxy.estimateGasAsync.bind(self));
                    const txHash = yield (0, utils_1.promisify)(self.web3ContractInstance.registerProxy, self.web3ContractInstance)(txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield (0, utils_1.promisify)(self.web3ContractInstance.registerProxy.estimateGas, self.web3ContractInstance)(txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData() {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.registerProxy.getData();
                return abiEncodedTransactionData;
            },
        };
        this.DELAY_PERIOD = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.DELAY_PERIOD.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        this.transferOwnership = {
            sendTransactionAsync(newOwner_0, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.transferOwnership.estimateGasAsync.bind(self, newOwner_0));
                    const txHash = yield (0, utils_1.promisify)(self.web3ContractInstance.transferOwnership, self.web3ContractInstance)(newOwner_0, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(newOwner_0, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield (0, utils_1.promisify)(self.web3ContractInstance.transferOwnership.estimateGas, self.web3ContractInstance)(newOwner_0, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(newOwner_0) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.transferOwnership.getData(newOwner_0);
                return abiEncodedTransactionData;
            },
        };
        this.grantInitialAuthentication = {
            sendTransactionAsync(authAddress_0, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.grantInitialAuthentication.estimateGasAsync.bind(self, authAddress_0));
                    const txHash = yield (0, utils_1.promisify)(self.web3ContractInstance.grantInitialAuthentication, self.web3ContractInstance)(authAddress_0, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(authAddress_0, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield (0, utils_1.promisify)(self.web3ContractInstance.grantInitialAuthentication.estimateGas, self.web3ContractInstance)(authAddress_0, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(authAddress_0) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.grantInitialAuthentication.getData(authAddress_0);
                return abiEncodedTransactionData;
            },
        };
        utils_1.classUtils.bindAll(this, ['web3ContractInstance', 'defaults']);
    }
} // tslint:disable:max-file-line-count
exports.WyvernProxyRegistryContract = WyvernProxyRegistryContract;
//# sourceMappingURL=wyvern_proxy_registry.js.map