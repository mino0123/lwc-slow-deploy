const { writeFileSync } = require('fs');

const js = `;`.repeat(34225);
// const js = `;`.repeat(34226);

writeFileSync(`force-app/main/default/lwc/lwcSlowDeploy/lwcSlowDeploy.js`, js, 'utf8');
