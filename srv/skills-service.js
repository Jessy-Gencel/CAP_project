const cds = require('@sap/cds');
const axios = require('axios');
const tokenService = require('./utils/tokenservice.js');

module.exports = cds.service.impl(async function() {
// this.on('READ', 'Skills', async (req) => {
//         console.log('READ Skills triggered with query:', req.query)
//         try {
//             const token = await tokenService.getToken();
//             console.log(`Token acquired ${token}, calling iFlow...`);
      
//             // Call your iFlow endpoint
//             const response = await axios.get(process.env.IS_GET_DATA_URL, {
//                 headers: {
//                     'Authorization': `Bearer ${token}`,
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json' // ← Add this
//                 },
//                 timeout: 10000 // 10 second timeout
//             });
//             console.log('iFlow Response:', response.status, response.data); // Better logging

            
//             // Map iFlow response to our entity structure
//             return response.data.map(skill => ({
//                 ID: skill.id || cds.utils.uuid(),
//                 attributeExternalId: skill.attributeExternalId,
//                 personExternalId: skill.personExternalId,
//                 personIdentifierType: skill.personIdentifierType,
//                 proficiencyLevel: skill.proficiencyLevel,
//                 proficiencyAssignDate: skill.proficiencyAssignDate,
//                 preferenceValue: skill.preferenceValue,
//                 status: skill.status,
//                 lastModifiedBy: skill.lastModifiedBy,
//                 lastModifiedAt: skill.lastModifiedAt,
//                 expectedRating: skill.expectedRating
//             }));
            
//         } catch (error) {
//             console.log('Error calling iFlow:', error);
//             req.reject(500, 'Failed to fetch skills data');
//         }
//     });
});