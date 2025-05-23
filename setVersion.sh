#!/bin/bash
DATE=$(date)
GOVERSION=$(go version)
VERSION=$(git describe --tags --abbrev=8 --dirty --always --long)
#VERSION=$(git describe)

PREFIX="main"

LDFLAGS=
LDFLAGS="$LDFLAGS -X '$PREFIX.Version=$VERSION'"
LDFLAGS="$LDFLAGS -X '$PREFIX.Date=$DATE'"
LDFLAGS="$LDFLAGS -X '$PREFIX.Go_Version=$GOVERSION'"
go build -ldflags "$LDFLAGS"
