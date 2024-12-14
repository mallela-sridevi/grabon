"server-only";

const DATABASE = process.env.CLICK_HOUSE_DATABASE;
const PRODUCT_TABLE = `${DATABASE}.product`;
const offer=`${DATABASE}.offer`;
const deals=`${DATABASE}.deals`;


export const productQuery = `SELECT * FROM ${PRODUCT_TABLE} LIMIT 20`;
export const dealsquery=`SELECT id,dealname,image,used,offers FROM ${deals}`;
export const offerquery=`SELECT * FROM ${offer}`;