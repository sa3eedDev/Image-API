"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../../index"));
var supertest_1 = __importDefault(require("supertest"));
var request = (0, supertest_1.default)(index_1.default);
describe("Testing images controller functions", function () {
    describe("Testing checkInput", function () {
        it("Test error message if file not avaliable", function (done) {
            request.get("/api/images?filename=NotFound&width=2000&height=2000")
                .expect(410, done());
        });
        it("test checkinput with an avaliable file", function (done) {
            request.get("/api/images?filename=fjord&width=2000&height=2000")
                .expect(200, done());
        });
    });
});
