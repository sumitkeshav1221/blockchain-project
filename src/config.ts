import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "RWA Token swap",
    chainId: "galileo-4",
    createdDate: "2025-07-30T17:23:35.925Z",
  modifiedDate: "2025-07-30T17:23:35.925Z",
    id: "andromeda",
    collections: [
        {
            exchange:
                "andr1f825h7xhvyuqg3fhy32jlhsruagt63qq0meheyc4u62uawndaydshdndh4",
            cw20: "andr13znrumha5gtpq2vnnrvpnxddtlrnt7h3jyfslxzn73k5amzch8hsc7p8hc",
            name: "embeddables-exchange",
            type: ICollectionType.EXCHANGE,
            id: "embeddables-exchange-1",
        },
    ],
};

export default CONFIG;
