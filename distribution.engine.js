export function distributeTokens(users, amountPerUser) {
  console.log("Distributing tokens...");

  return users.map(user => {
    return {
      address: user.address,
      amount: amountPerUser,
      claimed: false
    };
  });
}
