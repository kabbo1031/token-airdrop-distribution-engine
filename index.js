import { connectRPC } from "./rpc.client.js";
import { loadUsers } from "./user.registry.js";
import { checkEligibility } from "./eligibility.engine.js";
import { distributeTokens } from "./distribution.engine.js";
import { generateReport } from "./analytics.report.js";
import { NETWORK } from "./network.config.js";

console.log("Token Airdrop Distribution Engine");
console.log("Active Network:", NETWORK);

const provider = connectRPC();
const users = loadUsers();

const eligibleUsers = checkEligibility(users);
const distribution = distributeTokens(eligibleUsers, 100);

generateReport(distribution);
