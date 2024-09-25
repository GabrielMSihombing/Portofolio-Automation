import expect from "../libs/expect.js";
import { update_User_Schema } from "../apis/put.api.js";
import { validupdateUser, invalidupdateUser  } from "../payload/updatepayload.js";
import {put_user_schema } from "../schemas/put.schema.js";




describe('PUT API', function(){

    describe('/PUT/ - Update User', function(){
        
        it('check valid response status code', async function (){
            
            const res = await update_User_Schema(2, validupdateUser);

            expect(res.status).to.equal(200);


        })

        it('check valid jsonSchema', async function (){

             
            const res = await update_User_Schema(2, validupdateUser);
            console.log (res.data)
            expect(res.data).to.be.jsonSchema(put_user_schema)
     
        })

        it('check valid update when the name is null', async function (){

            const res = await update_User_Schema(2, invalidupdateUser);

            expect(res.status).to.equal(400)
     
        })

        it('Check update data with parameter id is 999', async function (){
            try {
                const res = await update_User_Schema(999, validupdateUser);
                throw res    
                 } catch (err) {
                   expect(err?.response?.status).to.equal(404)
                }
            
     
        })

        // it('check valid when the name null', async function (){

        //     const res = await createUser(payloadUser3);

        //     expect(res.data).to.be.jsonSchema(post_user_schema)
     
        // })


        // it('check valid response json schema', async function () {
        //     const res = await get_single_todo(2)

        //         expect(res.data).to.be.jsonSchema(todo_single_schema)
        
        //     })

        //     it('get nonexistent todo with ID 999', async function () {
        //         try {
        //              await get_single_todo(999)
        //              throw Error
                     
        //         } catch (err) {
        //              expect(err?.response?.status).to.equal(404)
        //         }
                 
        //      })

        // it('get nonexistent todo with ID 0', async function () {
        //    try {
        //         await get_single_todo(0)
        //         throw Error
                
        //    } catch (err) {
        //         expect(err?.response?.status).to.equal(404)
        //    }
            
        // })
    })

    })
