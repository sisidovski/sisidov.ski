#! /bin/sh

go get -u github.com/WICG/webpackage/go/signedexchange/cmd/gen-certurl

echo "ocsp" > tmp
./bin/gen-certurl -pem cert.pem -ocsp tmp > cert.cbor
