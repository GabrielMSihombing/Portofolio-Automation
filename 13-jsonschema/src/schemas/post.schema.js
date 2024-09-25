export const post_user_schema = {
    type: 'object',
    properties: {
            id          :   {type: 'string'},
            name        :   {type: 'string'},
            job         :   {type: 'string'},
            email       :   {type: 'string', format: 'email'},
            createdAt   :   {type: 'string', format: 'date-time'}
       
    }
}