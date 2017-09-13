import 'jquery';
import 'angular';
import './cmll';

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
                },
            }
        };
    });