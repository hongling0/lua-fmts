import { FastPath } from './fastPath';
import { Doc } from './docBuilder';
import { Options } from './options';
import * as luaparse from 'luaparse';
export declare type PrintFn = (path: FastPath) => Doc;
export declare function buildDocFromAst(ast: luaparse.Chunk, options: Options): Doc;
