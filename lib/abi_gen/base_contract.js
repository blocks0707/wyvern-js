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
exports.BaseContract = void 0;
const _ = require("lodash");
class BaseContract {
    constructor(web3ContractInstance, defaults) {
        this.web3ContractInstance = web3ContractInstance;
        this.defaults = defaults;
    }
    applyDefaultsToTxDataAsync(txData, estimateGasAsync) {
        return __awaiter(this, void 0, void 0, function* () {
            // Gas amount sourced with the following priorities:
            // 1. Optional param passed in to public method call
            // 2. Global config passed in at library instantiation
            // 3. Gas estimate calculation + safety margin
            const removeUndefinedProperties = _.pickBy;
            const txDataWithDefaults = Object.assign(Object.assign({}, removeUndefinedProperties(this.defaults)), removeUndefinedProperties(txData));
            if (_.isUndefined(txDataWithDefaults.gas) && !_.isUndefined(estimateGasAsync)) {
                const estimatedGas = yield estimateGasAsync(txData);
                txDataWithDefaults.gas = estimatedGas;
            }
            return txDataWithDefaults;
        });
    }
}
exports.BaseContract = BaseContract;
//# sourceMappingURL=base_contract.js.map