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
exports.WyvernTokenContract = void 0;
const utils_1 = require("@0xproject/utils");
const base_contract_1 = require("./base_contract");
class WyvernTokenContract extends base_contract_1.BaseContract {
    constructor(web3ContractInstance, defaults) {
        super(web3ContractInstance, defaults);
        this.MULTIPLIER = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.MULTIPLIER.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        this.name = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.name.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        this.maximumRedeemable = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.maximumRedeemable.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        this.approve = {
            sendTransactionAsync(_spender_0, _value_1, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.approve.estimateGasAsync.bind(self, _spender_0, _value_1));
                    const txHash = yield (0, utils_1.promisify)(self.web3ContractInstance.approve, self.web3ContractInstance)(_spender_0, _value_1, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(_spender_0, _value_1, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield (0, utils_1.promisify)(self.web3ContractInstance.approve.estimateGas, self.web3ContractInstance)(_spender_0, _value_1, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(_spender_0, _value_1) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.approve.getData(_spender_0, _value_1);
                return abiEncodedTransactionData;
            },
        };
        this.totalSupply = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.totalSupply.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        this.multiplier = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.multiplier.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        this.transferFrom = {
            sendTransactionAsync(_from_0, _to_1, _value_2, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.transferFrom.estimateGasAsync.bind(self, _from_0, _to_1, _value_2));
                    const txHash = yield (0, utils_1.promisify)(self.web3ContractInstance.transferFrom, self.web3ContractInstance)(_from_0, _to_1, _value_2, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(_from_0, _to_1, _value_2, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield (0, utils_1.promisify)(self.web3ContractInstance.transferFrom.estimateGas, self.web3ContractInstance)(_from_0, _to_1, _value_2, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(_from_0, _to_1, _value_2) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.transferFrom.getData(_from_0, _to_1, _value_2);
                return abiEncodedTransactionData;
            },
        };
        this.decimals = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.decimals.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        this.burn = {
            sendTransactionAsync(_value_0, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.burn.estimateGasAsync.bind(self, _value_0));
                    const txHash = yield (0, utils_1.promisify)(self.web3ContractInstance.burn, self.web3ContractInstance)(_value_0, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(_value_0, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield (0, utils_1.promisify)(self.web3ContractInstance.burn.estimateGas, self.web3ContractInstance)(_value_0, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(_value_0) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.burn.getData(_value_0);
                return abiEncodedTransactionData;
            },
        };
        this.pubKeyToEthereumAddress = {
            callAsync(pubKey_0, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.pubKeyToEthereumAddress.call, self.web3ContractInstance)(pubKey_0, txData);
                    return result;
                });
            },
        };
        this.MINT_AMOUNT = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.MINT_AMOUNT.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        this.decreaseApproval = {
            sendTransactionAsync(_spender_0, _subtractedValue_1, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.decreaseApproval.estimateGasAsync.bind(self, _spender_0, _subtractedValue_1));
                    const txHash = yield (0, utils_1.promisify)(self.web3ContractInstance.decreaseApproval, self.web3ContractInstance)(_spender_0, _subtractedValue_1, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(_spender_0, _subtractedValue_1, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield (0, utils_1.promisify)(self.web3ContractInstance.decreaseApproval.estimateGas, self.web3ContractInstance)(_spender_0, _subtractedValue_1, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(_spender_0, _subtractedValue_1) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.decreaseApproval.getData(_spender_0, _subtractedValue_1);
                return abiEncodedTransactionData;
            },
        };
        this.balanceOf = {
            callAsync(_owner_0, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.balanceOf.call, self.web3ContractInstance)(_owner_0, txData);
                    return result;
                });
            },
        };
        this.redeemUTXO = {
            sendTransactionAsync(txid_0, outputIndex_1, satoshis_2, proof_3, pubKey_4, isCompressed_5, v_6, r_7, s_8, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.redeemUTXO.estimateGasAsync.bind(self, txid_0, outputIndex_1, satoshis_2, proof_3, pubKey_4, isCompressed_5, v_6, r_7, s_8));
                    const txHash = yield (0, utils_1.promisify)(self.web3ContractInstance.redeemUTXO, self.web3ContractInstance)(txid_0, outputIndex_1, satoshis_2, proof_3, pubKey_4, isCompressed_5, v_6, r_7, s_8, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(txid_0, outputIndex_1, satoshis_2, proof_3, pubKey_4, isCompressed_5, v_6, r_7, s_8, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield (0, utils_1.promisify)(self.web3ContractInstance.redeemUTXO.estimateGas, self.web3ContractInstance)(txid_0, outputIndex_1, satoshis_2, proof_3, pubKey_4, isCompressed_5, v_6, r_7, s_8, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(txid_0, outputIndex_1, satoshis_2, proof_3, pubKey_4, isCompressed_5, v_6, r_7, s_8) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.redeemUTXO.getData(txid_0, outputIndex_1, satoshis_2, proof_3, pubKey_4, isCompressed_5, v_6, r_7, s_8);
                return abiEncodedTransactionData;
            },
        };
        this.canRedeemUTXOHash = {
            callAsync(merkleLeafHash_0, proof_1, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.canRedeemUTXOHash.call, self.web3ContractInstance)(merkleLeafHash_0, proof_1, txData);
                    return result;
                });
            },
        };
        this.releaseTokens = {
            sendTransactionAsync(destination_0, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.releaseTokens.estimateGasAsync.bind(self, destination_0));
                    const txHash = yield (0, utils_1.promisify)(self.web3ContractInstance.releaseTokens, self.web3ContractInstance)(destination_0, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(destination_0, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield (0, utils_1.promisify)(self.web3ContractInstance.releaseTokens.estimateGas, self.web3ContractInstance)(destination_0, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(destination_0) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.releaseTokens.getData(destination_0);
                return abiEncodedTransactionData;
            },
        };
        this.symbol = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.symbol.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        this.transfer = {
            sendTransactionAsync(_to_0, _value_1, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.transfer.estimateGasAsync.bind(self, _to_0, _value_1));
                    const txHash = yield (0, utils_1.promisify)(self.web3ContractInstance.transfer, self.web3ContractInstance)(_to_0, _value_1, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(_to_0, _value_1, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield (0, utils_1.promisify)(self.web3ContractInstance.transfer.estimateGas, self.web3ContractInstance)(_to_0, _value_1, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(_to_0, _value_1) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.transfer.getData(_to_0, _value_1);
                return abiEncodedTransactionData;
            },
        };
        this.validateSignature = {
            callAsync(hash_0, v_1, r_2, s_3, expected_4, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.validateSignature.call, self.web3ContractInstance)(hash_0, v_1, r_2, s_3, expected_4, txData);
                    return result;
                });
            },
        };
        this.verifyProof = {
            callAsync(proof_0, merkleLeafHash_1, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.verifyProof.call, self.web3ContractInstance)(proof_0, merkleLeafHash_1, txData);
                    return result;
                });
            },
        };
        this.canRedeemUTXO = {
            callAsync(txid_0, originalAddress_1, outputIndex_2, satoshis_3, proof_4, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.canRedeemUTXO.call, self.web3ContractInstance)(txid_0, originalAddress_1, outputIndex_2, satoshis_3, proof_4, txData);
                    return result;
                });
            },
        };
        this.ecdsaVerify = {
            callAsync(addr_0, pubKey_1, v_2, r_3, s_4, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.ecdsaVerify.call, self.web3ContractInstance)(addr_0, pubKey_1, v_2, r_3, s_4, txData);
                    return result;
                });
            },
        };
        this.increaseApproval = {
            sendTransactionAsync(_spender_0, _addedValue_1, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.increaseApproval.estimateGasAsync.bind(self, _spender_0, _addedValue_1));
                    const txHash = yield (0, utils_1.promisify)(self.web3ContractInstance.increaseApproval, self.web3ContractInstance)(_spender_0, _addedValue_1, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(_spender_0, _addedValue_1, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield (0, utils_1.promisify)(self.web3ContractInstance.increaseApproval.estimateGas, self.web3ContractInstance)(_spender_0, _addedValue_1, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(_spender_0, _addedValue_1) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.increaseApproval.getData(_spender_0, _addedValue_1);
                return abiEncodedTransactionData;
            },
        };
        this.allowance = {
            callAsync(_owner_0, _spender_1, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.allowance.call, self.web3ContractInstance)(_owner_0, _spender_1, txData);
                    return result;
                });
            },
        };
        this.pubKeyToBitcoinAddress = {
            callAsync(pubKey_0, isCompressed_1, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.pubKeyToBitcoinAddress.call, self.web3ContractInstance)(pubKey_0, isCompressed_1, txData);
                    return result;
                });
            },
        };
        this.rootUTXOMerkleTreeHash = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.rootUTXOMerkleTreeHash.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        this.totalRedeemed = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.totalRedeemed.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        this.SATS_TO_TOKENS = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.SATS_TO_TOKENS.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        utils_1.classUtils.bindAll(this, ['web3ContractInstance', 'defaults']);
    }
} // tslint:disable:max-file-line-count
exports.WyvernTokenContract = WyvernTokenContract;
//# sourceMappingURL=wyvern_token.js.map