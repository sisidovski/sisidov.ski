#! /bin/sh

# gen-certurl の取得
go get -u github.com/WICG/webpackage/go/signedexchange/cmd/gen-certurl

# 本来は ocsp の指定が必要だが、自己証明書なので適当な値を指定する
echo "ocsp" > tmp
./bin/gen-certurl -pem cert.pem -ocsp tmp > cert.cbor
