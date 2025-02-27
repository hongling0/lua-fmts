import { Doc } from './docBuilder';
import * as luaparse from 'luaparse';
export declare type Callback = (path: FastPath) => Doc;
export declare type CallbackForEach = (path: FastPath, index: number) => void;
export declare type CallbackMap = (path: FastPath, index: number) => Doc;
export declare class FastPath {
    private stack;
    constructor(ast: luaparse.Chunk);
    getValue(): any;
    getNodeAtDepth(depth: number): any;
    getParent(depth?: number): any;
    call(callback: Callback, field: string): Doc;
    forEach(callback: CallbackForEach, field?: string | null): void;
    map(callback: (path: FastPath, index: number) => Doc, field: string): Doc[];
    needsParens(): boolean;
}
