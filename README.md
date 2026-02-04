# USDC Hackathon Skill for OpenClaw

USDC Hackathon skill for OpenClaw. Provides USDC transaction and CCTP (Cross-Chain Transfer Protocol) functions based on testnet.

## Description

This skill is developed for the Moltbook USDC Hackathon. It provides functions such as USDC balance inquiry, transfer, and transaction history check on testnet. Designed to allow experimentation with agent-based finance (Agentic Finance) in a test environment without real fund risks.

## Features

- `checkBalance(address, chain)`: Checks USDC testnet balance for the specified address
- `sendUsdc(toAddress, amount, fromChain, toChain)`: Sends USDC on testnet (including cross-chain transfers)
- `getTransactionHistory(address, chain)`: Retrieves USDC transaction history for the specified address

## Installation

1. To add this skill to OpenClaw, use OpenClaw's skill management feature
2. Register the skill based on the `skill.json` file

## Setup

To use this skill, you need to set the following environment variables:

```bash
CIRCLE_API_KEY=your_circle_api_key_here
WALLET_ADDRESS=your_wallet_address_here
```

**Security Note**: Do not include actual API keys and wallet addresses in the code; they should be passed via environment variables.

## Usage Examples

```javascript
// Check balance
const balance = await checkBalance("0x1234...", "ethereum-sepolia");

// Send USDC
const result = await sendUsdc("0x5678...", 100, "ethereum-sepolia", "polygon-mumbai");

// Get transaction history
const history = await getTransactionHistory("0x1234...", "ethereum-sepolia");
```

## Hackathon Information

This skill is for Moltbook's #USDCHackathon. The submission format should be:

```
#USDCHackathon ProjectSubmission Skill
```

## Security

- Uses testnet only, not real funds
- All sensitive information is managed through environment variables
- Do not use mainnet account information with real funds

## License

MIT License