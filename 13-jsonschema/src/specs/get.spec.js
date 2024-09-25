import expect from "../libs/expect.js";
import { get_single_user} from "../apis/get.api.js";
import { get_single_schema } from "../schemas/get.schema.js";

describe('GET API', function(){

    describe('/GET/<ID> - Get Single Todo', function(){

        it('check valid response status code', async function (){
            const res = await get_single_user(2)

            expect(res.status).to.equal(200);
        })

        it('check valid response json schema', async function () {
            const res = await get_single_user(2)

                expect(res.data).to.be.jsonSchema(get_single_schema)
        
            })

            it('get nonexistent todo with ID 999', async function () {
                try {
                     await get_single_user(999)
                     throw Error
                     
                } catch (err) {
                     expect(err?.response?.status).to.equal(404)
                }
                 
             })

        it('get nonexistent todo with ID 0', async function () {
           try {
                await get_single_user(0)
                throw Error
                
           } catch (err) {
                expect(err?.response?.status).to.equal(404)
           }
            
        })
    })
       
})

