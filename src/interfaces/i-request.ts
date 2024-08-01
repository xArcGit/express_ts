import type { Request } from "express";
import type DecodedUser from "./decoded-user";

/**
 * @description Interface for expand Request express object

 */
export default interface IRequest extends Request {
	user?: DecodedUser;
}
