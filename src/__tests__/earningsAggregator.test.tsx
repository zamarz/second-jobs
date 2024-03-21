import { earningsAggregator } from "../app/utils/functions";

describe("earningsAggregator", () => {
  test("adds an item to an array", () => {
    const array1 = {
      childInterests: [1, 2, 3],
      createdWhen: null,
      deletedWhen: null,
      id: 51517,
      interest:
        "From 16 January 2023, Partner in Warre Constable LLP, The Barn, Lamport Manor, Old Road, Lamport NN6 9HF, a family business providing professional advice with respect to property management, mediation services and legal and financial matters. I expect some of the clients, to whom I personally provide services, to require confidentiality under relevant legal and professional codes. Any hours and payments will be listed below. (Registered 26 January 2023; updated 08 March 2023 and 02 May 2023)",
      isCorrection: false,
      lastAmendedWhen: "2023-05-03T13:35:41.933",
    };
    const array2 = ["1", "4", "5"];

    const result = earningsAggregator(array1, array2);

    expect(result).toBe([1, 4, 5, 25]);
  });
});
