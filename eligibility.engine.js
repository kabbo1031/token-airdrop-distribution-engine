export function checkEligibility(users) {
  console.log("Checking eligibility...");

  return users.filter(user => user.activityScore >= 50);
}
