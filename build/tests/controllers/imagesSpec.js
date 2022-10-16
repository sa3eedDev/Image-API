"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var images_1 = require("../../controllers/images");
var express_1 = __importDefault(require("express"));
describe("Test controllers functions", function () {
    describe("Resize function", function () {
        it("Resize works", function () {
            var req = express_1.default.request;
            req.query = {
                filename: "fjord",
                width: "200",
                height: "200"
            };
            var res = express_1.default.response;
            (0, images_1.resize)(req, res);
            expect(res.statusCode).toEqual(200);
        });
    });
    describe("test CheckCache", function () {
        it("With string input", function () {
            var req = express_1.default.request;
            req.query = {
                filename: "fjord",
                width: "ddfdds",
                height: "2"
            };
            var res = express_1.default.response;
            (0, images_1.checkCache)(req, res, Function);
            expect(res.statusCode).toEqual(412);
        });
        it("With string negative number", function () {
            var req = express_1.default.request;
            req.query = {
                filename: "fjord",
                width: "-10",
                height: "2"
            };
            var res = express_1.default.response;
            res.set({
                "connection": "keep-alive",
                "cache-control": "max-age=0",
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
                "upgrade-insecure-requests": "1",
                "user-agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.107 Safari/537.36",
                "accept-encoding": "gzip, deflate, sdch",
                "accept-language": "en-US,en;q=0.8,et;q=0.6"
            });
            (0, images_1.checkCache)(req, res, Function);
            expect(res.statusCode).toEqual(413);
        });
    });
});
