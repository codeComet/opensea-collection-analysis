# Step 1 - Get the user's wallet address

# Step 2 - Use the wallet address to get the assets using https://api.opensea.io/api/v1/assets?owner=USERS_WALLET_ADDRESS

# Step 3 - Loop through the NFTs that the user owns

# Step 4 - For each NFT, you'll see the contract address under the 'asset_contract' object and slug under the 'collection' object for each NFT in the response

# Step 5 - Use the slug for https://api.opensea.io/api/v1/collection/SLUG_GOES_HERE/stats

# So, if you want to start with a user's wallet address, you'll have to do it in two steps.

# Step 1 - get their wallet address and then use this endpoint to get all the NFTs that the person owns: https://api.opensea.io/api/v1/assets?owner=0x026b2B61A8657948eA1891BdE2a0E33b75eEBA3c

# Step 2 - For each NFT you find, you can use the address under 'asset_contract' object and then use this endpoint to get all the NFTs in that collection: https://api.opensea.io/api/v1/assets?asset_contract_address=0x60e4d786628fea6478f785a6d7e704777c86a7c6
