"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var images_1 = require("../../controllers/images");
var express_1 = __importDefault(require("express"));
describe('Test controllers functions', function () {
    describe('Resize function', function () {
        it('Resize works', function () {
            var req = express_1.default.request;
            req.query = {
                filename: 'fjord',
                width: '200',
                height: '200'
            };
            var res = express_1.default.response;
            (0, images_1.resize)(req, res);
            expect(res.statusCode).toEqual(200);
        });
    });
    describe('test CheckCache', function () {
        it('With string input', function () {
            var req = express_1.default.request;
            req.query = {
                filename: 'fjord',
                width: 'ddfdds',
                height: '2'
            };
            var res = express_1.default.response;
            (0, images_1.checkCache)(req, res, Function);
            expect(res.statusCode).toEqual(412);
        });
        it('With string negative number', function () {
            var req = express_1.default.request;
            req.query = {
                filename: 'fjord',
                width: '-10',
                height: '2'
            };
            var res = express_1.default.response;
            (0, images_1.checkCache)(req, res, Function);
            expect(res.statusCode).toEqual(413);
        });
    });
});
