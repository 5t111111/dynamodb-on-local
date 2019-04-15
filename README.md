# DynamoDB on Local

公式の DynamoDB docker イメージを利用してローカル環境で DynamoDB を使うためのツールです。

`amazon/dynamodb-local` イメージをそのまま起動するときと比較して以下の違いがあります。

- データが永続化される (公式イメージそのままだと揮発性の `inMemory` データベースになる)
- `sharedDb` オプションを指定しているため、リージョンなどの指定に関係なく共通のデータベースが利用される
- [dynamodb-admin](https://www.npmjs.com/package/dynamodb-admin) を同梱している

## 使い方

起動:

```shell
docker-compose up -d
```

終了:

```shell
docker-compose down
```

- DymanoDB Endpoint: `http://localhost:8000`
- dynamodb-admin: `http://localhost:8001`
