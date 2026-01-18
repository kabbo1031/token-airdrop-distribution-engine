export function generateReport(distribution) {
  console.log("----- Airdrop Report -----");

  distribution.forEach(entry => {
    console.log("User:", entry.address, "Amount:", entry.amount, "Claimed:", entry.claimed);
  });

  console.log("---------------------------");
}
