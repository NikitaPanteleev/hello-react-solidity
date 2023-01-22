
import web3 from './web3';
import { AbiItem } from 'web3-utils'

import abi from './lottery-abi.json';
const address = '0xA01E412bB822B8F68Fb82A2D8eA26e34Dc28beb8';

export default new web3.eth.Contract(abi as AbiItem[], address);