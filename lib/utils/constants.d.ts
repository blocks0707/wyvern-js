export declare const constants: {
    NULL_ADDRESS: string;
    INVALID_JUMP_PATTERN: string;
    OUT_OF_GAS_PATTERN: string;
    INVALID_TAKER_FORMAT: string;
    MAX_DIGITS_IN_UNSIGNED_256_INT: number;
    DEFAULT_BLOCK_POLLING_INTERVAL: number;
    DEPLOYED: {
        rinkeby: {
            TestToken: string;
            TestDAO: string;
            Migrations: string;
            MerkleProof: string;
            WyvernToken: string;
            WyvernDAO: string;
            WyvernRegistry: string;
            SaleKindInterface: string;
            WyvernExchange: string;
            DirectEscrowProvider: string;
            WyvernProxyRegistry: string;
            TestStatic: string;
            WyvernDAOProxy: string;
            WyvernAtomicizer: string;
            WyvernTokenTransferProxy: string;
        };
        development: {
            Migrations: string;
            TestToken: string;
            TestDAO: string;
            MerkleProof: string;
            WyvernToken: string;
            WyvernDAO: string;
            WyvernRegistry: string;
            SaleKindInterface: string;
            WyvernExchange: string;
            DirectEscrowProvider: string;
            WyvernProxyRegistry: string;
            TestStatic: string;
            WyvernDAOProxy: string;
            WyvernAtomicizer: string;
            WyvernTokenTransferProxy: string;
        };
        main: {
            Migrations: string;
            TestToken: string;
            TestDAO: string;
            TestStatic: string;
            WyvernDAOProxy: string;
            WyvernAtomicizer: string;
            WyvernProxyRegistry: string;
            WyvernTokenTransferProxy: string;
            WyvernExchange: string;
            MerkleProof: string;
            WyvernToken: string;
            WyvernDAO: string;
        };
        baobab: {
            Migrations: string;
            TestToken: string;
            TestDAO: string;
            TestStatic: string;
            MerkleProof: string;
            WyvernToken: string;
            WyvernDAO: string;
            WyvernDAOProxy: string;
            WyvernAtomicizer: string;
            WyvernProxyRegistry: string;
            WyvernTokenTransferProxy: string;
            WyvernExchange: string;
        };
        cypress: {
            Migrations: string;
            TestToken: string;
            TestDAO: string;
            TestStatic: string;
            WyvernDAOProxy: string;
            WyvernAtomicizer: string;
            WyvernToken: string;
            WyvernDAO: string;
            WyvernProxyRegistry: string;
            WyvernTokenTransferProxy: string;
            WyvernExchange: string;
        };
        goerli: {
            WyvernDAOProxy: string;
            WyvernAtomicizer: string;
            WyvernProxyRegistry: string;
            Migrations: string;
            TestToken: string;
            TestDAO: string;
            TestStatic: string;
            MerkleProof: string;
            WyvernTokenTransferProxy: string;
            WyvernExchange: string;
            WyvernToken: string;
            WyvernDAO: string;
        };
        mumbai: {
            Migrations: string;
            TestToken: string;
            TestDAO: string;
            TestStatic: string;
            WyvernDAOProxy: string;
            WyvernAtomicizer: string;
            WyvernProxyRegistry: string;
            WyvernTokenTransferProxy: string;
            WyvernExchange: string;
            WyvernToken: string;
            WyvernDAO: string;
        };
        polygon: {
            Migrations: string;
            TestToken: string;
            TestDAO: string;
            TestStatic: string;
            WyvernDAOProxy: string;
            WyvernAtomicizer: string;
            WyvernProxyRegistry: string;
            WyvernTokenTransferProxy: string;
            WyvernExchange: string;
            WyvernToken: string;
            WyvernDAO: string;
        };
    };
    ATOMICIZER_ABI: {
        constant: boolean;
        inputs: {
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        payable: boolean;
        stateMutability: string;
        type: string;
    }[];
    EXCHANGE_ABI: ({
        constant: boolean;
        inputs: {
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        constant?: undefined;
        name?: undefined;
        outputs?: undefined;
        anonymous?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        constant?: undefined;
        outputs?: undefined;
        payable?: undefined;
        stateMutability?: undefined;
    })[];
    PROXY_REGISTRY_ABI: ({
        constant: boolean;
        inputs: {
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: never[];
        payable: boolean;
        stateMutability: string;
        type: string;
        constant?: undefined;
        name?: undefined;
        outputs?: undefined;
        anonymous?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        constant?: undefined;
        outputs?: undefined;
        payable?: undefined;
        stateMutability?: undefined;
    })[];
    DAO_ABI: ({
        constant: boolean;
        inputs: {
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        constant?: undefined;
        name?: undefined;
        outputs?: undefined;
        anonymous?: undefined;
    } | {
        payable: boolean;
        stateMutability: string;
        type: string;
        constant?: undefined;
        inputs?: undefined;
        name?: undefined;
        outputs?: undefined;
        anonymous?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        constant?: undefined;
        outputs?: undefined;
        payable?: undefined;
        stateMutability?: undefined;
    })[];
    TOKEN_ABI: ({
        constant: boolean;
        inputs: {
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        constant?: undefined;
        name?: undefined;
        outputs?: undefined;
        anonymous?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        constant?: undefined;
        outputs?: undefined;
        payable?: undefined;
        stateMutability?: undefined;
    })[];
    AUTHENTICATED_PROXY_ABI: ({
        constant: boolean;
        inputs: {
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        constant?: undefined;
        name?: undefined;
        outputs?: undefined;
        anonymous?: undefined;
    } | {
        payable: boolean;
        stateMutability: string;
        type: string;
        constant?: undefined;
        inputs?: undefined;
        name?: undefined;
        outputs?: undefined;
        anonymous?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        constant?: undefined;
        outputs?: undefined;
        payable?: undefined;
        stateMutability?: undefined;
    })[];
};
