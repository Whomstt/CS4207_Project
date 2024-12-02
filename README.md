Node info with account details in nodes_info.txt

Currently to test:

Terminal 1:
Launch node 1 (Paste as one command):
geth --datadir node1 --networkid 12345 --http --http.addr 0.0.0.0 --http.port 8545 --http.corsdomain "*" --http.api web3,eth,net,personal,admin,miner --port 30303 --allow-insecure-unlock --mine --miner.threads 1 --syncmode full

Terminal 2:
Launch node 2 (Paste as one command)
geth --datadir node2 --networkid 12345 --http --http.addr 0.0.0.0 --http.port 8546 --http.corsdomain "*" --http.api web3,eth,net,personal,admin,miner --port 30304 --allow-insecure-unlock --ipcdisable

Terminal 3:
geth.attach http://127.0.0.1:8545
personal.unlockAccount("0xe508c1571ccc27ac15c7f8793112a2b35776a778", "Valid1234$", 600) 

Terminal 4:
geth.attach http://127.0.0.1:8546

Terminal 5 (Paste one after another):
truffle compile
truffle migrate --network development