export const put_user_schema = {
    type: 'object',
    properties: {
            name        :   {type: 'string'},
            job         :   {type: 'string'},
            updateAt   :   {type: 'string', format: 'date-time'}
       
    }
}