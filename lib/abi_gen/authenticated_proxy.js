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
exports.AuthenticatedProxyContract = void 0;
const utils_1 = require("@0xproject/utils");
const base_contract_1 = require("./base_contract");
class AuthenticatedProxyContract extends base_contract_1.BaseContract {
    constructor(web3ContractInstance, defaults) {
        super(web3ContractInstance, defaults);
        this.proxyType = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.proxyType.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        this.user = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.user.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        this.implementation = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.implementation.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        this.revoked = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.revoked.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        this.upgradeabilityOwner = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.upgradeabilityOwner.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        this.registry = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.registry.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        this.receiveApproval = {
            sendTransactionAsync(from_0, value_1, token_2, extraData_3, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.receiveApproval.estimateGasAsync.bind(self, from_0, value_1, token_2, extraData_3));
                    const txHash = yield (0, utils_1.promisify)(self.web3ContractInstance.receiveApproval, self.web3ContractInstance)(from_0, value_1, token_2, extraData_3, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(from_0, value_1, token_2, extraData_3, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield (0, utils_1.promisify)(self.web3ContractInstance.receiveApproval.estimateGas, self.web3ContractInstance)(from_0, value_1, token_2, extraData_3, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(from_0, value_1, token_2, extraData_3) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.receiveApproval.getData(from_0, value_1, token_2, extraData_3);
                return abiEncodedTransactionData;
            },
        };
        this.initialize = {
            sendTransactionAsync(addrUser_0, addrRegistry_1, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.initialize.estimateGasAsync.bind(self, addrUser_0, addrRegistry_1));
                    const txHash = yield (0, utils_1.promisify)(self.web3ContractInstance.initialize, self.web3ContractInstance)(addrUser_0, addrRegistry_1, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(addrUser_0, addrRegistry_1, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield (0, utils_1.promisify)(self.web3ContractInstance.initialize.estimateGas, self.web3ContractInstance)(addrUser_0, addrRegistry_1, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(addrUser_0, addrRegistry_1) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.initialize.getData(addrUser_0, addrRegistry_1);
                return abiEncodedTransactionData;
            },
        };
        this.setRevoke = {
            sendTransactionAsync(revoke_0, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.setRevoke.estimateGasAsync.bind(self, revoke_0));
                    const txHash = yield (0, utils_1.promisify)(self.web3ContractInstance.setRevoke, self.web3ContractInstance)(revoke_0, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(revoke_0, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield (0, utils_1.promisify)(self.web3ContractInstance.setRevoke.estimateGas, self.web3ContractInstance)(revoke_0, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(revoke_0) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.setRevoke.getData(revoke_0);
                return abiEncodedTransactionData;
            },
        };
        this.proxy = {
            sendTransactionAsync(dest_0, howToCall_1, calldata_2, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.proxy.estimateGasAsync.bind(self, dest_0, howToCall_1, calldata_2));
                    const txHash = yield (0, utils_1.promisify)(self.web3ContractInstance.proxy, self.web3ContractInstance)(dest_0, howToCall_1, calldata_2, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(dest_0, howToCall_1, calldata_2, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield (0, utils_1.promisify)(self.web3ContractInstance.proxy.estimateGas, self.web3ContractInstance)(dest_0, howToCall_1, calldata_2, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(dest_0, howToCall_1, calldata_2) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.proxy.getData(dest_0, howToCall_1, calldata_2);
                return abiEncodedTransactionData;
            },
        };
        this.proxyAssert = {
            sendTransactionAsync(dest_0, howToCall_1, calldata_2, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.proxyAssert.estimateGasAsync.bind(self, dest_0, howToCall_1, calldata_2));
                    const txHash = yield (0, utils_1.promisify)(self.web3ContractInstance.proxyAssert, self.web3ContractInstance)(dest_0, howToCall_1, calldata_2, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(dest_0, howToCall_1, calldata_2, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield (0, utils_1.promisify)(self.web3ContractInstance.proxyAssert.estimateGas, self.web3ContractInstance)(dest_0, howToCall_1, calldata_2, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(dest_0, howToCall_1, calldata_2) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.proxyAssert.getData(dest_0, howToCall_1, calldata_2);
                return abiEncodedTransactionData;
            },
        };
        utils_1.classUtils.bindAll(this, ['web3ContractInstance', 'defaults']);
    }
} // tslint:disable:max-file-line-count
exports.AuthenticatedProxyContract = AuthenticatedProxyContract;
//# sourceMappingURL=authenticated_proxy.js.map