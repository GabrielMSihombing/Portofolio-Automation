import expect from "../libs/expect.js";
import { delete_User_Schema } from "../apis/delete.api.js";
import { delete_schema } from "../schemas/delete.schema.js";




describe('DELETE API', function(){

    describe('/DELETE/ - DELETE User', function(){
        
        it('check valid response status code', async function (){
            
            const res = await delete_User_Schema(2);

            expect(res.status).to.equal(204);


        })
       
        it('check jsonSchema', async function (){
            
            const res = await delete_User_Schema(2);

            expect(res.status).to.be.jsonSchema(delete_schema);


        })
    })
})