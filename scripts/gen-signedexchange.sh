#! /bin/sh

BASE_URL=sisidov.ski

go get -u github.com/WICG/webpackage/go/signedexchange/cmd/gen-signedexchange

gen-signedexchange \
  -uri         https://${BASE_URL}/signed-exchange \
  -content     ../dist/blog/post/signed-http-exchange/index.html \
  -certificate ../.secrets/cert.pem \
  -privateKey  ../.secrets/priv.key \
  -certUrl     https://${BASE_URL}/signed-http-exchange/b2/cert.cbor \
  -validityUrl https://${BASE_URL}/signed-http-exchange/b2/validity-data \
  -o           ../public/signed.sxg.dummy # sxg returns unexpected content-type from firebase hosting

