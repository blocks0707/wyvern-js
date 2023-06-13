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
exports.WyvernAtomicizerContract = void 0;
const utils_1 = require("@0xproject/utils");
const base_contract_1 = require("./base_contract");
class WyvernAtomicizerContract extends base_contract_1.BaseContract {
    constructor(web3ContractInstance, defaults) {
        super(web3ContractInstance, defaults);
        this.atomicize = {
            sendTransactionAsync(addrs_0, values_1, calldataLengths_2, calldatas_3, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.atomicize.estimateGasAsync.bind(self, addrs_0, values_1, calldataLengths_2, calldatas_3));
                    const txHash = yield (0, utils_1.promisify)(self.web3ContractInstance.atomicize, self.web3ContractInstance)(addrs_0, values_1, calldataLengths_2, calldatas_3, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(addrs_0, values_1, calldataLengths_2, calldatas_3, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield (0, utils_1.promisify)(self.web3ContractInstance.atomicize.estimateGas, self.web3ContractInstance)(addrs_0, values_1, calldataLengths_2, calldatas_3, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(addrs_0, values_1, calldataLengths_2, calldatas_3) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.atomicize.getData(addrs_0, values_1, calldataLengths_2, calldatas_3);
                return abiEncodedTransactionData;
            },
        };
        utils_1.classUtils.bindAll(this, ['web3ContractInstance', 'defaults']);
    }
} // tslint:disable:max-file-line-count
exports.WyvernAtomicizerContract = WyvernAtomicizerContract;
//# sourceMappingURL=wyvern_atomicizer.js.map