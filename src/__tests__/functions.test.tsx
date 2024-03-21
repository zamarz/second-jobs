"use client";

import { useState } from "react";
import {
  earningsAggregator,
  hoursAggregator,
  sumEarnings,
  valueAggregator,
} from "../app/utils/functions";

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

describe("sumEarnings", () => {
  test("adds numbers and updates state", () => {
    const Test = () => {
      const [earnings, setEarnings] = useState(0);
      let earningsArray = ["1", "1", "1"];
      sumEarnings(earningsArray, setEarnings);
      expect(earnings).toEqual(3);
    };
  });
  test("removes commas correctly", () => {
    const Test = () => {
      const [earnings, setEarnings] = useState(0);
      let earningsArray = ["1,000", "1,500", "1"];
      sumEarnings(earningsArray, setEarnings);
      expect(earnings).toEqual(3500);
    };
  });
});

describe("hoursAggregator", () => {
  test("adds new hour to array", () => {
    const array1 = {
      childInterests: [1, 2, 3],
      createdWhen: null,
      deletedWhen: null,
      id: 51517,
      interest:
        " From 16 January 2023, Partner in Warre Constable LLP, The Barn, Lamport Manor, Old Road, Lamport NN6 9HF, a family business providing professional advice with respect to property management, Hours: 15 hrs  mediation services and legal and financial matters.",
      isCorrection: false,
      lastAmendedWhen: "2023-05-03T13:35:41.933",
    };
    const array2 = [0];

    hoursAggregator(array1, array2);

    expect(array2).toEqual([0, 15]);
  });
  test("only extracts hour and not other numbers", () => {
    const array1 = {
      childInterests: [1, 2, 3],
      createdWhen: null,
      deletedWhen: null,
      id: 51517,
      interest:
        " From 16 January 2023, Partner in Warre Constable LLP, The Barn, Lamport Manor, Old Road, Lamport £234 NN6 9HF, a family business providing professional advice with respect to property management, Hours: 15 hrs  mediation services and legal and financial matters.",
      isCorrection: false,
      lastAmendedWhen: "2023-05-03T13:35:41.933",
    };
    const array2 = [0];

    hoursAggregator(array1, array2);

    expect(array2).toEqual([0, 15]);
  });
  test("Converts mins to hours", () => {
    const array1 = {
      childInterests: [1, 2, 3],
      createdWhen: null,
      deletedWhen: null,
      id: 51517,
      interest:
        " From 16 January 2023, Partner in Warre Constable LLP, The Barn, Lamport Manor, Old Road, Lamport £234 NN6 9HF, a family business providing professional advice with respect to property management, Hours: 30 mins  mediation services and legal and financial matters.",
      isCorrection: false,
      lastAmendedWhen: "2023-05-03T13:35:41.933",
    };
    const array2 = [0];

    hoursAggregator(array1, array2);

    expect(array2).toEqual([0, 0.5]);
  });
});

describe("sumHours", () => {
  test("adds numbers and updates state", () => {
    const Test = () => {
      const [hours, setHours] = useState(0);
      let hoursArray = ["1", "1", "1"];
      sumEarnings(hoursArray, setHours);
      expect(hours).toEqual(3);
    };
  });
});

describe("valueAggregator", () => {
  test.only("adds new hour to array", () => {
    const array1 = {
      childInterests: [1, 2, 3],
      createdWhen: null,
      deletedWhen: null,
      id: 51517,
      interest:
        " From 16 January 2023, Partner in Warre Constable LLP, The Barn, Lamport Manor, Old Road, Lamport NN6 9HF, a family business providing professional advice with respect value: £15 to property management,  mediation services and legal and financial matters.",
      isCorrection: false,
      lastAmendedWhen: "2023-05-03T13:35:41.933",
    };
    const array2 = ["1"];

    valueAggregator(array1, array2);

    expect(array2).toEqual(["1", "15"]);
  });
  test.only("only extracts value and not other numbers", () => {
    const array1 = {
      childInterests: [1, 2, 3],
      createdWhen: null,
      deletedWhen: null,
      id: 51517,
      interest:
        " From 16 January 2023, Partner in Warre Constable LLP, The Barn, Lamport Manor, Old Road, Lamport £234 NN6 9HF, a family business providing professional donation in kind: £3 advice with respect to property management, Hours: 15 hrs  mediation services and legal and financial matters.",
      isCorrection: false,
      lastAmendedWhen: "2023-05-03T13:35:41.933",
    };
    const array2 = ["0"];

    valueAggregator(array1, array2);

    expect(array2).toEqual(["0", "3"]);
  });
});
