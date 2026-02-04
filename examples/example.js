/**
 * USDC Hackathon Skill - 예제 파일
 * 
 * 이 파일은 OpenClaw 스킬의 실제 사용 예시를 보여줍니다.
 * 실제 실행 시에는 환경 변수에 API 키와 지갑 주소가 설정되어 있어야 합니다.
 */

// 실제 OpenClaw 환경에서는 다음과 같이 함수를 사용합니다
async function exampleUsage() {
  console.log('=== USDC 해커톤 스킬 예제 ===\n');

  // 1. 잔액 조회 예시
  console.log('1. 잔액 조회 예시:');
  try {
    const balanceResult = await checkBalance(
      '0x6693cce5Fb566A0A25866190D77C646f76481376', 
      'ethereum-sepolia'
    );
    console.log('잔액 조회 결과:', JSON.stringify(balanceResult, null, 2));
  } catch (error) {
    console.error('잔액 조회 중 오류:', error);
  }

  console.log('\n' + '='.repeat(50) + '\n');

  // 2. USDC 송금 예시
  console.log('2. USDC 송금 예시:');
  try {
    const sendResult = await sendUsdc(
      '0xAnotherTestAddress123456789012345678901234', 
      50, 
      'ethereum-sepolia', 
      'polygon-mumbai'
    );
    console.log('송금 결과:', JSON.stringify(sendResult, null, 2));
  } catch (error) {
    console.error('송금 중 오류:', error);
  }

  console.log('\n' + '='.repeat(50) + '\n');

  // 3. 거래 내역 조회 예시
  console.log('3. 거래 내역 조회 예시:');
  try {
    const historyResult = await getTransactionHistory(
      '0x6693cce5Fb566A0A25866190D77C646f76481376', 
      'ethereum-sepolia'
    );
    console.log('거래 내역:', JSON.stringify(historyResult, null, 2));
  } catch (error) {
    console.error('거래 내역 조회 중 오류:', error);
  }

  console.log('\n=== 예제 실행 완료 ===');
}

// 실제 OpenClaw 에이전트가 이 스킬을 사용하는 시나리오
async function hackathonScenario() {
  console.log('\n=== Moltbook USDC 해커톤 시나리오 ===');
  
  // 에이전트가 자율적으로 USDC 관련 작업을 수행하는 예시
  console.log('에이전트가 테스트넷에서 USDC 잔액을 확인합니다...');
  const balance = await checkBalance(
    process.env.WALLET_ADDRESS || '0x6693cce5Fb566A0A25866190D77C646f76481376', 
    'ethereum-sepolia'
  );
  
  if (balance.success && parseFloat(balance.balances[0].available) > 10) {
    console.log(`충분한 잔액이 확인되었습니다: ${balance.balances[0].available} USDC`);
    
    // 테스트 목적의 거래 수행
    console.log('테스트 거래를 수행합니다...');
    const testTx = await sendUsdc(
      '0xTestAddressForHackathon12345678901234567890', 
      5, 
      'ethereum-sepolia', 
      'polygon-mumbai'
    );
    
    console.log('거래 결과:', testTx.status);
  } else {
    console.log('잔액이 부족하여 거래를 진행할 수 없습니다.');
  }
  
  console.log('해커톤 시나리오 실행 완료');
}

// 예제 실행 (실제 OpenClaw에서는 직접 호출하지 않음)
// exampleUsage();
// hackathonScenario();

module.exports = {
  exampleUsage,
  hackathonScenario
};