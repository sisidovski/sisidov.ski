#! /bin/sh

# prime256v1 ecdsa の秘密鍵を生成
openssl ecparam -out priv.key -name prime256v1 -genkey

# 鍵に対する証明書のリクエストを作成、ドメインは mozaic.fm とする
openssl req -new -sha256 -key priv.key -out cert.csr -subj '/CN=mozaic.fm/O=Test/C=US'

# 拡張を指定した CSR を生成する
echo "1.3.6.1.4.1.11129.2.1.22 = ASN1:NULL\nsubjectAltName=DNS:sisidov.ski" > ext
openssl x509 -req -days 360 -in cert.csr -signkey priv.key -out cert.pem -extfile ext

# 証明書を生成する
openssl x509 -req -days 360 -in cert.csr -signkey priv.key -out cert.pem
