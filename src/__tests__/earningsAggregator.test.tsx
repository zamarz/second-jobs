import { earningsAggregator } from "../app/utils/functions";

describe("earningsAggregator", () => {
  test("adds an item to an array", () => {
    const array1 = {
      childInterests: [1, 2, 3],
      createdWhen: null,
      deletedWhen: null,
      id: 51517,
      interest:
        " From 16 January 2023, Partner in Warre Constable LLP, The Barn, Lamport Manor, Old Road, Lamport NN6 9HF, a family business providing £25 professional advice with respect to property management, mediation services and legal and financial matters.",
      isCorrection: false,
      lastAmendedWhen: "2023-05-03T13:35:41.933",
    };
    const array2 = ["0"];

    earningsAggregator(array1, array2);

    expect(array2).toEqual(["0", "25"]);
  });
  test("array being added to remains as an array", () => {
    const array1 = {
      childInterests: [1, 2, 3],
      createdWhen: null,
      deletedWhen: null,
      id: 51517,
      interest:
        " From 16 January 2023, Partner in Warre Constable LLP, The Barn, Lamport Manor, Old Road, Lamport NN6 9HF, a family business providing £25 professional advice with respect to property management, mediation services and legal and financial matters.",
      isCorrection: false,
      lastAmendedWhen: "2023-05-03T13:35:41.933",
    };
    const array2 = ["0"];

    earningsAggregator(array1, array2);

    expect(typeof array2).toBe("object");
  });
  test("remains 0 if no number found in text", () => {
    const array1 = {
      childInterests: [1, 2, 3],
      createdWhen: null,
      deletedWhen: null,
      id: 51517,
      interest:
        " From 16 January 2023, Partner in Warre Constable LLP, The Barn, Lamport Manor, Old Road, Lamport NN6 9HF, a family business providing professional advice with respect to property management, mediation services and legal and financial matters.",
      isCorrection: false,
      lastAmendedWhen: "2023-05-03T13:35:41.933",
    };
    const array2 = ["0"];

    earningsAggregator(array1, array2);

    expect(array2).toEqual(["0"]);
  });
});
