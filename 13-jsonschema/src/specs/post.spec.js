import expect from "../libs/expect.js";
import { createUser } from "../apis/post.api.js";
import { payloadUser, payloadUser2, payloadUser3  } from "../payload/payloaduser.js";
import { post_user_schema } from "../schemas/post.schema.js";



describe('POST API', function(){

    describe('/POST/ - Post User', function(){
        
        it('check valid response status code', async function (){
            
            
            
            const res = await createUser(payloadUser);

            expect(res.status).to.equal(201);


        })

        it('check valid jsonSchema', async function (){

            
             
            const res = await createUser(payloadUser);

            expect(res.data).to.be.jsonSchema(post_user_schema)
     
        })

        it('check valid when the name is number', async function (){

            const res = await createUser(payloadUser2);

            expect(res.status).to.equal(400)
     
        })

        it('check valid when the name null', async function (){

            const res = await createUser(payloadUser3);

            expect(res.status).to.equal(400)
     
        })

    })

})
