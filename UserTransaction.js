async function getNumTransactions(username) {
  let uesrApi = "https://jsonmock.hackerrank.com/api/article_users?username=";
  let transactionsApi =
    "https://jsonmock.hackerrank.com/api/transactions?&userId=";

  const dataUser = await fetch(uesrApi + username);
  const responseUser = await dataUser.json();

  if (!responseUser.data.length) return "Username Not Found";

  const dataTransaction = await fetch(
    transactionsApi + responseUser.data[0].id
  );
  const responseTransaction = await dataTransaction.json();

  return responseTransaction.total;
}

getNumTransactions("epaga").then((res) => {
  console.log(res);
});
