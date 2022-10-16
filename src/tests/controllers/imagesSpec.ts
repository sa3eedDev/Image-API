import { resize, checkInput, checkCache } from "../../controllers/images";
import express from "express";


describe("Test controllers functions", ()=>{
    describe("Resize function", ()=>{
        it("Resize works", ()=>{
            let req: express.Request = express.request 
            req.query = {
                    filename: "fjord",
                    width: "200",
                    height: "200"
                }
            
            let res: express.Response = express.response
            resize(req,res)
            expect(res.statusCode).toEqual(200)
            
        })
    })
    describe("test CheckCache", () =>{
        it("With string input", ()=>{
            let req : express.Request = express.request 
            req.query = {
                    filename: "fjord",
                    width: "ddfdds",
                    height: "2"
                }
            
            let res : express.Response = express.response
            checkCache(req,res, Function)
            expect(res.statusCode).toEqual(412)
        })
        it("With string negative number",  ()=>{
            let req : express.Request = express.request 
            req.query = {
                    filename: "fjord",
                    width: "-10",
                    height: "2"
                }
            
            let res : express.Response = express.response
            checkCache(req,res, Function)
            expect(res.statusCode).toEqual(413)
        })
    })
})