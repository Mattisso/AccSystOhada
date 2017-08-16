
{ type: 'array',
description: '',
minItems: 1,
uniqueItems: true,
items:
 { type: 'object',
   required: [ 'NumCompte', 'IntitulCompte', 'SoldeCredit' ],
   properties:
    { NumCompte: [Object],
      IntitulCompte: [Object],
      SoldeCredit: [Object] } } }
