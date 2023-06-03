#!/bin/bash
sui client call --package $PACKAGE --module purchase --function add_item --args $GAMEINFO 2 --gas-budget 10000000
