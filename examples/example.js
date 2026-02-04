/**
 * USDC Hackathon Skill - Example File
 * 
 * This file demonstrates the actual usage examples of the OpenClaw skill.
 * When executing, API keys and wallet addresses must be set in environment variables.
 */

// In the actual OpenClaw environment, functions are used as follows:
async function exampleUsage() {
  console.log('=== USDC Hackathon Skill Examples ===\n');

  // 1. Balance check example
  console.log('1. Balance check example:');
  try {
    const balanceResult = await checkBalance(
      '0x6693cce5Fb566A0A25866190D77C646f76481376', 
      'ethereum-sepolia'
    );
    console.log('Balance check result:', JSON.stringify(balanceResult, null, 2));
  } catch (error) {
    console.error('Error during balance check:', error);
  }

  console.log('\n' + '='.repeat(50) + '\n');

  // 2. USDC transfer example
  console.log('2. USDC transfer example:');
  try {
    const sendResult = await sendUsdc(
      '0xAnotherTestAddress123456789012345678901234', 
      50, 
      'ethereum-sepolia', 
      'polygon-mumbai'
    );
    console.log('Transfer result:', JSON.stringify(sendResult, null, 2));
  } catch (error) {
    console.error('Error during transfer:', error);
  }

  console.log('\n' + '='.repeat(50) + '\n');

  // 3. Transaction history example
  console.log('3. Transaction history example:');
  try {
    const historyResult = await getTransactionHistory(
      '0x6693cce5Fb566A0A25866190D77C646f76481376', 
      'ethereum-sepolia'
    );
    console.log('Transaction history:', JSON.stringify(historyResult, null, 2));
  } catch (error) {
    console.error('Error during transaction history check:', error);
  }

  console.log('\n=== Example Execution Complete ===');
}

// Scenario of an actual OpenClaw agent using this skill
async function hackathonScenario() {
  console.log('\n=== Moltbook USDC Hackathon Scenario ===');
  
  // Example of an agent autonomously performing USDC-related tasks
  console.log('Agent checking USDC balance on testnet...');
  const balance = await checkBalance(
    process.env.WALLET_ADDRESS || '0x6693cce5Fb566A0A25866190D77C646f76481376', 
    'ethereum-sepolia'
  );
  
  if (balance.success && parseFloat(balance.balances[0].available) > 10) {
    console.log(`Sufficient balance confirmed: ${balance.balances[0].available} USDC`);
    
    // Perform test transaction
    console.log('Performing test transaction...');
    const testTx = await sendUsdc(
      '0xTestAddressForHackathon12345678901234567890', 
      5, 
      'ethereum-sepolia', 
      'polygon-mumbai'
    );
    
    console.log('Transaction result:', testTx.status);
  } else {
    console.log('Insufficient balance to proceed with transaction.');
  }
  
  console.log('Hackathon scenario execution complete');
}

// Example execution (not directly called in actual OpenClaw)
// exampleUsage();
// hackathonScenario();

module.exports = {
  exampleUsage,
  hackathonScenario
};