import { Global } from "src/global/global";

export class Buyer {

    constructor(
        public id: number = 0,
        public name: string = '',
    ) { }

    public getBuyerBasicNameVMsgs(): any {
        return {

            buyerBasicName: {
                buyerName: {
                    required: true,
                    requiredMsg: Global.validationMsg.buyer
                },
                buyerShortName: {
                    required: true,
                    requiredMsg: Global.validationMsg.buyerShortName
                },

                buyerID: {
                    range: "1,2147483647",
                    rangeMsg: Global.validationMsg.buyer
                }
            }
        };
    }
}