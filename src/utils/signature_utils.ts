/* Sourced from 0x.js */

import * as ethUtil from 'ethereumjs-util';

import { ECSignature } from '../types';

export const signatureUtils = {
    isValidSignature(data: string, signature: ECSignature, signerAddress: string): boolean {
        const dataBuff = ethUtil.toBuffer(data);
        // const msgHashBuff = ethUtil.hashPersonalMessage(dataBuff);
        const msgHashBuff = dataBuff;
        console.log("v, r, s: ", signature.v, signature.r, signature.s);
        console.log("data length: ", dataBuff.length);
        try {
            const pubKey = ethUtil.ecrecover(
                msgHashBuff,
                signature.v,
                ethUtil.toBuffer(signature.r),
                ethUtil.toBuffer(signature.s),
            );
            const retrievedAddress = ethUtil.bufferToHex(ethUtil.pubToAddress(pubKey));
            console.log("retrievedAddress: ", retrievedAddress);
            console.log("signerAddress: ", signerAddress);
            return retrievedAddress === signerAddress;
        } catch (err) {
            console.error("exception occured while isValidSignature: ", err)
            return false;
        }
    },
    parseSignatureHexAsVRS(signatureHex: string): ECSignature {
        const signatureBuffer = ethUtil.toBuffer(signatureHex);
        let v = signatureBuffer[0];
        if (v < 27) {
            v += 27;
        }
        const r = signatureBuffer.slice(1, 33);
        const s = signatureBuffer.slice(33, 65);
        const ecSignature: ECSignature = {
            v,
            r: ethUtil.bufferToHex(r),
            s: ethUtil.bufferToHex(s),
        };
        return ecSignature;
    },
    parseSignatureHexAsRSV(signatureHex: string): ECSignature {
        const { v, r, s } = ethUtil.fromRpcSig(signatureHex);
        const ecSignature: ECSignature = {
            v,
            r: ethUtil.bufferToHex(r),
            s: ethUtil.bufferToHex(s),
        };
        return ecSignature;
    },
};
