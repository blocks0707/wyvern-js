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
exports.WyvernExchangeContract = void 0;
const utils_1 = require("@0xproject/utils");
const base_contract_1 = require("./base_contract");
class WyvernExchangeContract extends base_contract_1.BaseContract {
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
        this.tokenTransferProxy = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.tokenTransferProxy.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        this.staticCall = {
            callAsync(target_0, calldata_1, extradata_2, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.staticCall.call, self.web3ContractInstance)(target_0, calldata_1, extradata_2, txData);
                    return result;
                });
            },
        };
        this.changeMinimumMakerProtocolFee = {
            sendTransactionAsync(newMinimumMakerProtocolFee_0, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.changeMinimumMakerProtocolFee.estimateGasAsync.bind(self, newMinimumMakerProtocolFee_0));
                    const txHash = yield (0, utils_1.promisify)(self.web3ContractInstance.changeMinimumMakerProtocolFee, self.web3ContractInstance)(newMinimumMakerProtocolFee_0, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(newMinimumMakerProtocolFee_0, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield (0, utils_1.promisify)(self.web3ContractInstance.changeMinimumMakerProtocolFee.estimateGas, self.web3ContractInstance)(newMinimumMakerProtocolFee_0, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(newMinimumMakerProtocolFee_0) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.changeMinimumMakerProtocolFee.getData(newMinimumMakerProtocolFee_0);
                return abiEncodedTransactionData;
            },
        };
        this.changeMinimumTakerProtocolFee = {
            sendTransactionAsync(newMinimumTakerProtocolFee_0, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.changeMinimumTakerProtocolFee.estimateGasAsync.bind(self, newMinimumTakerProtocolFee_0));
                    const txHash = yield (0, utils_1.promisify)(self.web3ContractInstance.changeMinimumTakerProtocolFee, self.web3ContractInstance)(newMinimumTakerProtocolFee_0, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(newMinimumTakerProtocolFee_0, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield (0, utils_1.promisify)(self.web3ContractInstance.changeMinimumTakerProtocolFee.estimateGas, self.web3ContractInstance)(newMinimumTakerProtocolFee_0, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(newMinimumTakerProtocolFee_0) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.changeMinimumTakerProtocolFee.getData(newMinimumTakerProtocolFee_0);
                return abiEncodedTransactionData;
            },
        };
        this.guardedArrayReplace = {
            callAsync(array_0, desired_1, mask_2, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.guardedArrayReplace.call, self.web3ContractInstance)(array_0, desired_1, mask_2, txData);
                    return result;
                });
            },
        };
        this.minimumTakerProtocolFee = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.minimumTakerProtocolFee.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        this.codename = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.codename.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        this.DOMAIN_SEPARATOR = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.DOMAIN_SEPARATOR.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        this.calculateCurrentPrice_ = {
            callAsync(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.calculateCurrentPrice_.call, self.web3ContractInstance)(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, txData);
                    return result;
                });
            },
        };
        this.changeProtocolFeeRecipient = {
            sendTransactionAsync(newProtocolFeeRecipient_0, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.changeProtocolFeeRecipient.estimateGasAsync.bind(self, newProtocolFeeRecipient_0));
                    const txHash = yield (0, utils_1.promisify)(self.web3ContractInstance.changeProtocolFeeRecipient, self.web3ContractInstance)(newProtocolFeeRecipient_0, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(newProtocolFeeRecipient_0, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield (0, utils_1.promisify)(self.web3ContractInstance.changeProtocolFeeRecipient.estimateGas, self.web3ContractInstance)(newProtocolFeeRecipient_0, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(newProtocolFeeRecipient_0) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.changeProtocolFeeRecipient.getData(newProtocolFeeRecipient_0);
                return abiEncodedTransactionData;
            },
        };
        this.version = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.version.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        this.orderCalldataCanMatch = {
            callAsync(buyCalldata_0, buyReplacementPattern_1, sellCalldata_2, sellReplacementPattern_3, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.orderCalldataCanMatch.call, self.web3ContractInstance)(buyCalldata_0, buyReplacementPattern_1, sellCalldata_2, sellReplacementPattern_3, txData);
                    return result;
                });
            },
        };
        this.validateOrder_ = {
            callAsync(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.validateOrder_.call, self.web3ContractInstance)(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11, txData);
                    return result;
                });
            },
        };
        this.incrementNonce = {
            sendTransactionAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.incrementNonce.estimateGasAsync.bind(self));
                    const txHash = yield (0, utils_1.promisify)(self.web3ContractInstance.incrementNonce, self.web3ContractInstance)(txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield (0, utils_1.promisify)(self.web3ContractInstance.incrementNonce.estimateGas, self.web3ContractInstance)(txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData() {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.incrementNonce.getData();
                return abiEncodedTransactionData;
            },
        };
        this.calculateFinalPrice = {
            callAsync(side_0, saleKind_1, basePrice_2, extra_3, listingTime_4, expirationTime_5, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.calculateFinalPrice.call, self.web3ContractInstance)(side_0, saleKind_1, basePrice_2, extra_3, listingTime_4, expirationTime_5, txData);
                    return result;
                });
            },
        };
        this.protocolFeeRecipient = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.protocolFeeRecipient.call, self.web3ContractInstance)(txData);
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
        this.hashOrder_ = {
            callAsync(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.hashOrder_.call, self.web3ContractInstance)(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, txData);
                    return result;
                });
            },
        };
        this.ordersCanMatch_ = {
            callAsync(addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.ordersCanMatch_.call, self.web3ContractInstance)(addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, txData);
                    return result;
                });
            },
        };
        this.approveOrder_ = {
            sendTransactionAsync(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, orderbookInclusionDesired_9, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.approveOrder_.estimateGasAsync.bind(self, addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, orderbookInclusionDesired_9));
                    const txHash = yield (0, utils_1.promisify)(self.web3ContractInstance.approveOrder_, self.web3ContractInstance)(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, orderbookInclusionDesired_9, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, orderbookInclusionDesired_9, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield (0, utils_1.promisify)(self.web3ContractInstance.approveOrder_.estimateGas, self.web3ContractInstance)(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, orderbookInclusionDesired_9, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, orderbookInclusionDesired_9) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.approveOrder_.getData(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, orderbookInclusionDesired_9);
                return abiEncodedTransactionData;
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
        this.minimumMakerProtocolFee = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.minimumMakerProtocolFee.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        this.hashToSign_ = {
            callAsync(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.hashToSign_.call, self.web3ContractInstance)(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, txData);
                    return result;
                });
            },
        };
        this.nonces = {
            callAsync(index_0, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.nonces.call, self.web3ContractInstance)(index_0, txData);
                    return result;
                });
            },
        };
        this.cancelledOrFinalized = {
            callAsync(index_0, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.cancelledOrFinalized.call, self.web3ContractInstance)(index_0, txData);
                    return result;
                });
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
        this.exchangeToken = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.exchangeToken.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        this.cancelOrder_ = {
            sendTransactionAsync(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.cancelOrder_.estimateGasAsync.bind(self, addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11));
                    const txHash = yield (0, utils_1.promisify)(self.web3ContractInstance.cancelOrder_, self.web3ContractInstance)(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield (0, utils_1.promisify)(self.web3ContractInstance.cancelOrder_.estimateGas, self.web3ContractInstance)(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.cancelOrder_.getData(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11);
                return abiEncodedTransactionData;
            },
        };
        this.atomicMatch_ = {
            sendTransactionAsync(addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, vs_9, rssMetadata_10, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.atomicMatch_.estimateGasAsync.bind(self, addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, vs_9, rssMetadata_10));
                    const txHash = yield (0, utils_1.promisify)(self.web3ContractInstance.atomicMatch_, self.web3ContractInstance)(addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, vs_9, rssMetadata_10, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, vs_9, rssMetadata_10, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield (0, utils_1.promisify)(self.web3ContractInstance.atomicMatch_.estimateGas, self.web3ContractInstance)(addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, vs_9, rssMetadata_10, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, vs_9, rssMetadata_10) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.atomicMatch_.getData(addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, vs_9, rssMetadata_10);
                return abiEncodedTransactionData;
            },
        };
        this.validateOrderParameters_ = {
            callAsync(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.validateOrderParameters_.call, self.web3ContractInstance)(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, txData);
                    return result;
                });
            },
        };
        this.INVERSE_BASIS_POINT = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.INVERSE_BASIS_POINT.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        this.calculateMatchPrice_ = {
            callAsync(addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.calculateMatchPrice_.call, self.web3ContractInstance)(addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, txData);
                    return result;
                });
            },
        };
        this.approvedOrders = {
            callAsync(hash_0, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.approvedOrders.call, self.web3ContractInstance)(hash_0, txData);
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
        this.cancelOrderWithNonce_ = {
            sendTransactionAsync(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11, nonce_12, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.cancelOrderWithNonce_.estimateGasAsync.bind(self, addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11, nonce_12));
                    const txHash = yield (0, utils_1.promisify)(self.web3ContractInstance.cancelOrderWithNonce_, self.web3ContractInstance)(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11, nonce_12, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11, nonce_12, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield (0, utils_1.promisify)(self.web3ContractInstance.cancelOrderWithNonce_.estimateGas, self.web3ContractInstance)(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11, nonce_12, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11, nonce_12) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.cancelOrderWithNonce_.getData(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11, nonce_12);
                return abiEncodedTransactionData;
            },
        };
        utils_1.classUtils.bindAll(this, ['web3ContractInstance', 'defaults']);
    }
} // tslint:disable:max-file-line-count
exports.WyvernExchangeContract = WyvernExchangeContract;
//# sourceMappingURL=wyvern_exchange.js.map