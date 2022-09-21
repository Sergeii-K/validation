const ajv = require('ajv');

const Ajv = new ajv();

const mw = schema => (req, res, next) => {
const validate = Ajv.compile(schema);
const valid = validate(req.body) 

const pattern = /^(0?[1-9]|[12][0-9]|3[01])[-\s/.](0?[1-9]|1[012])[-\s/.](19|20)?[0-9]{2}$/;
str = req.body.birthday;
const strPattern = pattern.test(str);
console.log(pattern.test(str));


 if (!valid) {
     res.json (400, {
         status: 'validation error',
         errors: validation.errors
     });
     return;
 }
 
     next();
     console.log('data valide')

 if(strPattern !== true){
    console.log( 'invalid birthday');
 }
};

module.exports = mw;