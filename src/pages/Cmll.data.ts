import { RouteDataFunc } from 'solid-app-router';

export interface Alg {
  name: string;
  cases: string[];
}

type CollectionNames = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h';

export type CmllData = Record<CollectionNames, Alg[]>;

export const CmllData: RouteDataFunc<CmllData> = () => ({
  a: [
    {
      name: 'a3',
      cases: ["R U R' F' R U R' U' R' F R2 U' R'", "R U R' U' R' F R2 U' R' U' R U R' F'"],
    },
    {
      name: 'a6',
      cases: ["F R U' R' U' R U R' F' R U R' U' R' F R F'"],
    },
  ],
  b: [
    {
      name: 'b1',
      cases: ["R' U' R U' R' U2 R", "(U) r U2' R' U' R  U' r'"],
    },
    {
      name: 'b2',
      cases: ["(U) R' U' R U' R' U R' D' R U R' D R2"],
    },
    {
      name: 'b3',
      cases: ["(U2) R2 D R' U2 R D' R2' U' R U' R'"],
    },
    {
      name: 'b4',
      cases: ["(U2) R U2 R' U2 R' F R F'", "(U2) r' R2 U2 R' U2 R' F R F' M'"],
    },
    {
      name: 'b5',
      cases: ["R' U L U' R U L'"],
    },
    {
      name: 'b6',
      cases: ["L' U' L U' L F' L' F L' U2 L", "L' U' L U' R U' L' U R' U2 L"],
    },
  ],
  c: [
    {
      name: 'c1',
      cases: ["R U R' U R U2 R'", "r U R' U R U2 r'", "(U) l' U2 L U r' F R"],
    },
    {
      name: 'c2',
      cases: ["L' U2 L U2 L F' L' F", "M L' U2 L U2 L F' L' F M'"],
    },
    {
      name: 'c3',
      cases: ["F U R U' R2' F' R U R U' R'", "(U2) R2 D' R U2 R' D R2 U R' U R"],
    },
    {
      name: 'c4',
      cases: ["r U R' U' r' F R F' R U R' U R U2 R'"],
    },
    {
      name: 'c5',
      cases: ["R U' L' U R' U' L", "r U' r' F R' F' R"],
    },
    {
      name: 'c6',
      cases: ["(U2) R U R' U R' F R F' R U2 R'", "(U2) R U R' U L' U R U' L U2 R'"],
    },
  ],
  d: [
    {
      name: 'd1',
      cases: ["R U' L' U R' U' r U R' U' L U R U' r'"],
    },
    {
      name: 'd2',
      cases: ["(U2) R' U2 R' D' R U2 R' D R2"],
    },
    {
      name: 'd3',
      cases: ["(U') R U2 R D R' U2 R D' R2'"],
    },
    {
      name: 'd4',
      cases: ["R2 D R' U R D' R' U' R'", "(U') l' U' r' F R F' L F'"],
    },
    {
      name: 'd5',
      cases: ["F' r U R' U' r' F R", "(U) R' F R U R' U' F' U R"],
    },
    {
      name: 'd6',
      cases: [
        "(U) R' U' R U R' F' R U R' U' R' F R2",
        "(U') R U2 R2' F R F' R U2 R'",
        "(U') R' U2 l U' R U l' R' U2 R",
      ],
    },
  ],
  e: [
    {
      name: 'e1',
      cases: ["R' U' R U R' U' l' U R U' R' U R U' l", "(U) r U2 R' U' R U' r' l' U2 L U L' U l"],
    },
    {
      name: 'e2',
      cases: ["R' F R U' R' U' R U R' F' R U R' U' R' F R F' R", "(U') F R2 D R' U R D' R2' U' F'"],
    },
    {
      name: 'e3',
      cases: ["(U2) R2 D R' U2 R D' R' U2 R'"],
    },
    {
      name: 'e4',
      cases: ["R' U2 x R U' R' U B2 U' R U x'"],
    },
    {
      name: 'e5',
      cases: ["R2 D' R U2 R' D R U2 R"],
    },
    {
      name: 'e6',
      cases: [
        "(U') F R U R' U' F'",
        "(U) R' U' R' F R F' U R",
        "(U2) R' U' F' U F R",
        "(U') f R U R' U' f'",
        "(U') R U2 R2 F R F' U2 M' U R U' r'",
        "R2' D' R U R' D R U R U' R' U' R",
      ],
    },
  ],
  f: [
    {
      name: 'f1',
      cases: [
        "(U') L' U R' U' r U R' U' L U R U' r' U R",
        "(U') l' U R' U' R U R' U' l U R U' R' U R",
      ],
    },
    {
      name: 'f2',
      cases: ["R' U R U2 r' R' F R F' r"],
    },
    {
      name: 'f3',
      cases: ["(U') F R U' R' U R U R' F'", "(U) l' U' L U R U' r' F"],
    },
    {
      name: 'f4',
      cases: ["(U2) F R U R' U' R U' R' U' R U R' F'", "(U') R U R' F' U' R U R' U' R' F R2 U' R'"],
    },
    {
      name: 'f5',
      cases: ["(U') r U R' U' r' F R F'", "(U') R U R' U' R' F R F'"],
    },
    {
      name: 'f6',
      cases: ["R' U R2 D r' U2 r D' R2' U' R", "(U2) r2' D' r U r' D r2 U' r' U' r"],
    },
  ],
  g: [
    {
      name: 'g1',
      cases: [
        "F R U R' U' R U R' U' F'",
        "f R U R' U' R U R' U' f'",
        "f R U R' U' f' F R U R' U' F'",
        "F R U R' U' F' f R U R' U' f'",
        "r U' r2' U r2 U r2' U' r",
        "r' U r2 U' r2' U' r2 U r'",
        "(U2) R' U' x R' U R U' R' U R U' x' U R",
        "R U x' U' R U R' U' R U R' x U' R'",
      ],
    },
    {
      name: 'g2',
      cases: ["R' F2 R U2 R U2 R' F2 U' R U' R'"],
    },
    {
      name: 'g3',
      cases: ["R' F2 y' U R2 U' R2' U' y F2 R", "R' F2 y' U R2 U' R2' U' y L' R U2 L"],
    },
    {
      name: 'g4',
      cases: ["(U') R U R' U F2 R U2' R' U2 R' F2 R"],
    },
    {
      name: 'g5',
      cases: ["R U' L' U R' U L U L' U L"],
    },
    {
      name: 'g6',
      cases: [
        "(U2) R' U' R U' R' U F' U F R",
        "(U') R' U' R' F R F' R U' R' U2 R",
        "R2' D' R U R' D R U R U' R' U R U R' U R",
      ],
    },
  ],
  h: [
    {
      name: 'h1',
      cases: ["(U) R U2' R' U' R U R' U' R U' R'"],
    },
    {
      name: 'h2',
      cases: ["F R U R' U' F' R U R' U' R' F R F'", "f R U R' U' f' R U R' U' R' F R F'"],
    },
    {
      name: 'h3',
      cases: ["R U R' U R U L' U R' U' L"],
    },
    {
      name: 'h6',
      cases: ["(U) F R U R' U' R U R' U' R U R' U' F'"],
    },
  ],
});
