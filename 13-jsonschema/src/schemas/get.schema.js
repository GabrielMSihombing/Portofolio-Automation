export const get_single_schema = {
    type: 'object',
    properties: {
                id:             { type : 'number'},
                email:          { type : 'string', format: 'email'},
                first_name:     { type : 'string'},
                last_name:      { type : 'string'},
                avatar:         { type : 'string'},
                url:            { type : 'string'},
                text:           { type : 'string'},
          
        
    }

}