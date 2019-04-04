# DynamoDB on Local

公式の DynamoDB docker イメージを利用してローカル環境で DynamoDB を使うためのツールです。

## 使い方

起動:

```shell
docker-compose up -d
```

終了:

```shell
docker-compose down
```

## dynamodb-admin の使い方

ライブラリのインストール:

```shell
npm install
```

起動 (ブラウザで `http://localhost:8001` が開きます) :

```shell
npm start
```

終了:

`ctrl-c` で終了してください。

## 注意

- DynamoDB に `-sharedDb` オプションを指定しているため、リージョンなどの指定に関係なく共通のデータベースが利用されます
- データはメモリ上にストアされるため、Docker を落とすとデータは消えます
