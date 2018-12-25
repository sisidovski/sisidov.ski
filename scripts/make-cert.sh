#! /bin/sh

openssl ecparam -out priv.key -name prime256v1 -genkey

openssl req -new -sha256 -key priv.key -out cert.csr -subj '/CN=sisidov.ski/O=Test/C=US'

echo "1.3.6.1.4.1.11129.2.1.22 = ASN1:NULL\nsubjectAltName=DNS:sisidov.ski" > ext
openssl x509 -req -days 360 -in cert.csr -signkey priv.key -out cert.pem -extfile ext

openssl x509 -req -days 360 -in cert.csr -signkey priv.key -out cert.pem
