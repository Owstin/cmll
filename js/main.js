import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

import 'jquery';
import 'bootstrap';
import 'angular';
import './addLinks';
import './rotate';

angular.module('app', [])
    .controller('AppController', function() {
        const vm = this;

        vm.algs = {
            a: {
                a3: {
                    name: 'a3',
                    algs: [
                        'R U R\' F\' R U R\' U\' R\' F R2 U\' R\'',
                        'R U R\' U\' R\' F R2 U\' R\' U\' R U R\' F\''
                    ]
                },
                a6: {
                    name: 'a6',
                    algs: [
                        'F R U\' R\' U\' R U R\' F\' R U R\' U\' R\' F R F\''
                    ]
                }
            },
            b: {
                b1: {
                    name: 'b1',
                    algs: [
                        'R\' U\' R U\' R\' U2 R'
                    ]
                },
                b2: {
                    name: 'b2',
                    algs: [
                        '(U) R\' U\' R U\' R\' U R\' D\' R U R\' D R2'
                    ]
                },
                b3: {
                    name: 'b3',
                    algs: [
                        '(U2) R2 D R\' U2 R D\' R2\' U\' R U\' R\''
                    ]
                },
                b4: {
                    name: 'b4',
                    algs: [
                        '(U2) R U2 R\' U2 R\' F R F\'',
                        '(U2) r\' R2 U2 R\' U2 R\' F R F\' M\''
                    ]
                },
                b5: {
                    name: 'b5',
                    algs: [
                        'R\' U L U\' R U L\''
                    ]
                },
                b6: {
                    name: 'b6',
                    algs: [
                        'L\' U\' L U\' L F\' L\' F L\' U2 L',
                        'L\' U\' L U\' R U\' L\' U R\' U2 L'
                    ]
                }
            },
            c: {
                c1: {
                    name: 'c1',
                    algs: [
                        'R U R\' U R U2 R\'',
                        'r U R\' U R U2 r\''
                    ]
                },
                c2: {
                    name: 'c2',
                    algs: [
                        'L\' U2 L U2 L F\' L\' F',
                        'M L\' U2 L U2 L F\' L\' F M\''
                    ]
                },
                c3: {
                    name: 'c3',
                    algs: [
                        'F U R U\' R2\' F\' R U R U\' R\'',
                        '(U2) R2 D\' R U2 R\' D R2 U R\' U R'
                    ]
                },
                c4: {
                    name: 'c4',
                    algs: [
                        'r U R\' U\' r\' F R F\' R U R\' U R U2 R\''
                    ]
                },
                c5: {
                    name: 'c5',
                    algs: [
                        'R U\' L\' U R\' U\' L',
                        'r U\' r\' F R\' F\' R'
                    ]
                },
                c6: {
                    name: 'c6',
                    algs: [
                        '(U2) R U R\' U R\' F R F\' R U2 R\'',
                        '(U2) R U R\' U L\' U R U\' L U2 R\''
                    ]
                }
            },
            d: {
                d1: {
                    name: 'd1',
                    algs: [
                        'R U\' L\' U R\' U\' r U R\' U\' L U R U\' r\''
                    ]
                },
                d2: {
                    name: 'd2',
                    algs: [
                        '(U2) R\' U2 R\' D\' R U2 R\' D R2'
                    ]
                },
                d3: {
                    name: 'd3',
                    algs: [
                        '(U\') R U2 R D R\' U2 R D\' R2\''
                    ]
                },
                d4: {
                    name: 'd4',
                    algs: [
                        'R2 D R\' U R D\' R\' U\' R\''
                    ]
                },
                d5: {
                    name: 'd5',
                    algs: [
                        'F\' r U R\' U\' r\' F R',
                        '(U) R\' F R U R\' U\' F\' U R'
                    ]
                },
                d6: {
                    name: 'd6',
                    algs: [
                        '(U) R\' U\' R U R\' F\' R U R\' U\' R\' F R2',
                        '(U\') R U2 R2\' F R F\' R U2 R\'',
                        '(U\') R\' U2 l U\' R U l\' R\' U2 R'
                    ]
                }
            },
            e: {
                e1: {
                    name: 'e1',
                    algs: [
                        'R\' U\' R U R\' U\' l\' U R U\' R\' U R U\' l',
                        '(U) r U2 R\' U\' R U\' r\' l\' U2 L U L\' U l'
                    ]
                },
                e2: {
                    name: 'e2',
                    algs: [
                        'R\' F R U\' R\' U\' R U R\' F\' R U R\' U\' R\' F R F\' R',
                        '(U\') F R2 D R\' U R D\' R2\' U\' F\''
                    ]
                },
                e3: {
                    name: 'e3',
                    algs: [
                        '(U2) R2 D R\' U2 R D\' R\' U2 R\''
                    ]
                },
                e4: {
                    name: 'e4',
                    algs: [
                        'R\' U2 x R U\' R\' U B2 U\' R U x\''
                    ]
                },
                e5: {
                    name: 'e5',
                    algs: [
                        'R2 D\' R U2 R\' D R U2 R'
                    ]
                },
                e6: {
                    name: 'e6',
                    algs: [
                        '(U\') F R U R\' U\' F\'',
                        '(U) R\' U\' R\' F R F\' U R',
                        '(U2) R\' U\' F\' U F R',
                        '(U\') f R U R\' U\' f\'',
                        '(U\') R U2 R2 F R F\' U2 M\' U R U\' r\'',
                        'R2\' D\' R U R\' D R U R U\' R\' U\' R'
                    ]
                }
            },
            f: {
                f1: {
                    name: 'f1',
                    algs: [
                        '(U\') L\' U R\' U\' r U R\' U\' L U R U\' r\' U R',
                        '(U\') l\' U R\' U\' R U R\' U\' l U R U\' R\' U R'
                    ]
                },
                f2: {
                    name: 'f2',
                    algs: [
                        'R\' U R U2 r\' R\' F R F\' r'
                    ]
                },
                f3: {
                    name: 'f3',
                    algs: [
                        '(U\') F R U\' R\' U R U R\' F\'',
                        '(U) l\' U\' L U R U\' r\' F'
                    ]
                },
                f4: {
                    name: 'f4',
                    algs: [
                        '(U2) F R U R\' U\' R U\' R\' U\' R U R\' F\''
                    ]
                },
                f5: {
                    name: 'f5',
                    algs: [
                        '(U\') r U R\' U\' r\' F R F\'',
                        '(U\') R U R\' U\' R\' F R F\''
                    ]
                },
                f6: {
                    name: 'f6',
                    algs: [
                        'R\' U R2 D r\' U2 r D\' R2\' U\' R',
                        '(U2) r2\' D\' r U r\' D r2 U\' r\' U\' r'
                    ]
                }
            },
            g: {
                g1: {
                    name: 'g1',
                    algs: [
                        'F R U R\' U\' R U R\' U\' F\'',
                        'f R U R\' U\' R U R\' U\' f\'',
                        'f R U R\' U\' f\' F R U R\' U\' F\'',
                        'F R U R\' U\' F\' f R U R\' U\' f\'',
                        'r U\' r2\' U r2 U r2\' U\' r',
                        'r\' U r2 U\' r2\' U\' r2 U r\'',
                        '(U2) R\' U\' x R\' U R U\' R\' U R U\' x\' U R',
                        'R U x\' U\' R U R\' U\' R U R\' x U\' R\''
                    ]
                },
                g2: {
                    name: 'g2',
                    algs: [
                        'R\' F2 R U2 R U2 R\' F2 U\' R U\' R\''
                    ]
                },
                g3: {
                    name: 'g3',
                    algs: [
                        'R\' F2 y\' U R2 U\' R2\' U\' y F2 R',
                        'R\' F2 y\' U R2 U\' R2\' U\' y L\' R U2 L'
                    ]
                },
                g4: {
                    name: 'g4',
                    algs: [
                        '(U\') R U R\' U F2 R U2\' R\' U2 R\' F2 R'
                    ]
                },
                g5: {
                    name: 'g5',
                    algs: [
                        'R U\' L\' U R\' U L U L\' U L'
                    ]
                },
                g6: {
                    name: 'g6',
                    algs: [
                        '(U2) R\' U\' R U\' R\' U F\' U F R',
                        '(U\') R\' U\' R\' F R F\' R U\' R\' U2 R',
                        'R2\' D\' R U R\' D R U R U\' R\' U R U R\' U R'
                    ]
                }
            },
            h: {
                h1: {
                    name: 'h1',
                    algs: [
                        '(U) R U2\' R\' U\' R U R\' U\' R U\' R\''
                    ]
                },
                h2: {
                    name: 'h2',
                    algs: [
                        'f R U R\' U\' f\' R U R\' U\' R\' F R F\''
                    ]
                },
                h3: {
                    name: 'h3',
                    algs: [
                        'R U R\' U R U L\' U R\' U\' L'
                    ]
                },
                h6: {
                    name: 'h6',
                    algs: [
                        '(U) F R U R\' U\' R U R\' U\' R U R\' U\' F\''
                    ]
                }
            }
        };
    });