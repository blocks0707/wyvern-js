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
exports.WyvernDAOContract = void 0;
const utils_1 = require("@0xproject/utils");
const base_contract_1 = require("./base_contract");
class WyvernDAOContract extends base_contract_1.BaseContract {
    constructor(web3ContractInstance, defaults) {
        super(web3ContractInstance, defaults);
        this.proposals = {
            callAsync(index_0, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.proposals.call, self.web3ContractInstance)(index_0, txData);
                    return result;
                });
            },
        };
        this.delegatesByDelegator = {
            callAsync(index_0, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.delegatesByDelegator.call, self.web3ContractInstance)(index_0, txData);
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
        this.REQUIRED_SHARES_TO_BE_BOARD_MEMBER = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.REQUIRED_SHARES_TO_BE_BOARD_MEMBER.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        this.lockedDelegatingTokens = {
            callAsync(index_0, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.lockedDelegatingTokens.call, self.web3ContractInstance)(index_0, txData);
                    return result;
                });
            },
        };
        this.countVotes = {
            callAsync(proposalNumber_0, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.countVotes.call, self.web3ContractInstance)(proposalNumber_0, txData);
                    return result;
                });
            },
        };
        this.executeProposal = {
            sendTransactionAsync(proposalNumber_0, transactionBytecode_1, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.executeProposal.estimateGasAsync.bind(self, proposalNumber_0, transactionBytecode_1));
                    const txHash = yield (0, utils_1.promisify)(self.web3ContractInstance.executeProposal, self.web3ContractInstance)(proposalNumber_0, transactionBytecode_1, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(proposalNumber_0, transactionBytecode_1, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield (0, utils_1.promisify)(self.web3ContractInstance.executeProposal.estimateGas, self.web3ContractInstance)(proposalNumber_0, transactionBytecode_1, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(proposalNumber_0, transactionBytecode_1) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.executeProposal.getData(proposalNumber_0, transactionBytecode_1);
                return abiEncodedTransactionData;
            },
        };
        this.sharesTokenAddress = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.sharesTokenAddress.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        this.delegatedAmountsByDelegate = {
            callAsync(index_0, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.delegatedAmountsByDelegate.call, self.web3ContractInstance)(index_0, txData);
                    return result;
                });
            },
        };
        this.numProposals = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.numProposals.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        this.hasVoted = {
            callAsync(proposalNumber_0, shareholder_1, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.hasVoted.call, self.web3ContractInstance)(proposalNumber_0, shareholder_1, txData);
                    return result;
                });
            },
        };
        this.TOKEN_DECIMALS = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.TOKEN_DECIMALS.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        this.setDelegateAndLockTokens = {
            sendTransactionAsync(tokensToLock_0, delegate_1, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.setDelegateAndLockTokens.estimateGasAsync.bind(self, tokensToLock_0, delegate_1));
                    const txHash = yield (0, utils_1.promisify)(self.web3ContractInstance.setDelegateAndLockTokens, self.web3ContractInstance)(tokensToLock_0, delegate_1, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(tokensToLock_0, delegate_1, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield (0, utils_1.promisify)(self.web3ContractInstance.setDelegateAndLockTokens.estimateGas, self.web3ContractInstance)(tokensToLock_0, delegate_1, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(tokensToLock_0, delegate_1) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.setDelegateAndLockTokens.getData(tokensToLock_0, delegate_1);
                return abiEncodedTransactionData;
            },
        };
        this.clearDelegateAndUnlockTokens = {
            sendTransactionAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.clearDelegateAndUnlockTokens.estimateGasAsync.bind(self));
                    const txHash = yield (0, utils_1.promisify)(self.web3ContractInstance.clearDelegateAndUnlockTokens, self.web3ContractInstance)(txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield (0, utils_1.promisify)(self.web3ContractInstance.clearDelegateAndUnlockTokens.estimateGas, self.web3ContractInstance)(txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData() {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.clearDelegateAndUnlockTokens.getData();
                return abiEncodedTransactionData;
            },
        };
        this.debatingPeriodInMinutes = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.debatingPeriodInMinutes.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        this.changeVotingRules = {
            sendTransactionAsync(minimumSharesToPassAVote_0, minutesForDebate_1, sharesToBeBoardMember_2, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.changeVotingRules.estimateGasAsync.bind(self, minimumSharesToPassAVote_0, minutesForDebate_1, sharesToBeBoardMember_2));
                    const txHash = yield (0, utils_1.promisify)(self.web3ContractInstance.changeVotingRules, self.web3ContractInstance)(minimumSharesToPassAVote_0, minutesForDebate_1, sharesToBeBoardMember_2, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(minimumSharesToPassAVote_0, minutesForDebate_1, sharesToBeBoardMember_2, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield (0, utils_1.promisify)(self.web3ContractInstance.changeVotingRules.estimateGas, self.web3ContractInstance)(minimumSharesToPassAVote_0, minutesForDebate_1, sharesToBeBoardMember_2, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(minimumSharesToPassAVote_0, minutesForDebate_1, sharesToBeBoardMember_2) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.changeVotingRules.getData(minimumSharesToPassAVote_0, minutesForDebate_1, sharesToBeBoardMember_2);
                return abiEncodedTransactionData;
            },
        };
        this.minimumQuorum = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.minimumQuorum.call, self.web3ContractInstance)(txData);
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
        this.tokenLocker = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.tokenLocker.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        this.MINIMUM_QUORUM = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.MINIMUM_QUORUM.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        this.requiredSharesToBeBoardMember = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.requiredSharesToBeBoardMember.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        this.vote = {
            sendTransactionAsync(proposalNumber_0, supportsProposal_1, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.vote.estimateGasAsync.bind(self, proposalNumber_0, supportsProposal_1));
                    const txHash = yield (0, utils_1.promisify)(self.web3ContractInstance.vote, self.web3ContractInstance)(proposalNumber_0, supportsProposal_1, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(proposalNumber_0, supportsProposal_1, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield (0, utils_1.promisify)(self.web3ContractInstance.vote.estimateGas, self.web3ContractInstance)(proposalNumber_0, supportsProposal_1, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(proposalNumber_0, supportsProposal_1) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.vote.getData(proposalNumber_0, supportsProposal_1);
                return abiEncodedTransactionData;
            },
        };
        this.newProposal = {
            sendTransactionAsync(beneficiary_0, weiAmount_1, jobMetadataHash_2, transactionBytecode_3, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.newProposal.estimateGasAsync.bind(self, beneficiary_0, weiAmount_1, jobMetadataHash_2, transactionBytecode_3));
                    const txHash = yield (0, utils_1.promisify)(self.web3ContractInstance.newProposal, self.web3ContractInstance)(beneficiary_0, weiAmount_1, jobMetadataHash_2, transactionBytecode_3, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(beneficiary_0, weiAmount_1, jobMetadataHash_2, transactionBytecode_3, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield (0, utils_1.promisify)(self.web3ContractInstance.newProposal.estimateGas, self.web3ContractInstance)(beneficiary_0, weiAmount_1, jobMetadataHash_2, transactionBytecode_3, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(beneficiary_0, weiAmount_1, jobMetadataHash_2, transactionBytecode_3) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.newProposal.getData(beneficiary_0, weiAmount_1, jobMetadataHash_2, transactionBytecode_3);
                return abiEncodedTransactionData;
            },
        };
        this.DEBATE_PERIOD_MINUTES = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.DEBATE_PERIOD_MINUTES.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        this.checkProposalCode = {
            callAsync(proposalNumber_0, beneficiary_1, weiAmount_2, transactionBytecode_3, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.checkProposalCode.call, self.web3ContractInstance)(proposalNumber_0, beneficiary_1, weiAmount_2, transactionBytecode_3, txData);
                    return result;
                });
            },
        };
        this.totalLockedTokens = {
            callAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield (0, utils_1.promisify)(self.web3ContractInstance.totalLockedTokens.call, self.web3ContractInstance)(txData);
                    return result;
                });
            },
        };
        utils_1.classUtils.bindAll(this, ['web3ContractInstance', 'defaults']);
    }
} // tslint:disable:max-file-line-count
exports.WyvernDAOContract = WyvernDAOContract;
//# sourceMappingURL=wyvern_d_a_o.js.map