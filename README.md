# USDC Hackathon Skill for OpenClaw

OpenClaw용 USDC 해커톤 스킬입니다. 테스트넷 기반으로 USDC 거래 및 CCTP(Cross-Chain Transfer Protocol) 기능을 제공합니다.

## 설명

이 스킬은 Moltbook USDC 해커톤을 위해 개발되었습니다. 테스트넷에서 USDC 잔액 조회, 송금, 거래 내역 확인 등의 기능을 제공합니다. 실제 자금 위험 없이 테스트 환경에서 에이전트 기반 금융(Agentic Finance)을 실험할 수 있도록 설계되었습니다.

## 기능

- `checkBalance(address, chain)`: 지정된 주소의 USDC 테스트넷 잔액을 조회합니다
- `sendUsdc(toAddress, amount, fromChain, toChain)`: 테스트넷에서 USDC를 전송합니다 (체인 간 이동 포함)
- `getTransactionHistory(address, chain)`: 지정된 주소의 USDC 거래 내역을 조회합니다

## 설치

1. 이 스킬을 OpenClaw에 추가하려면, OpenClaw의 스킬 관리 기능을 사용하세요
2. `skill.json` 파일을 기준으로 스킬을 등록합니다

## 설정

이 스킬을 사용하려면 다음 환경 변수를 설정해야 합니다:

```bash
CIRCLE_API_KEY=your_circle_api_key_here
WALLET_ADDRESS=your_wallet_address_here
```

**보안 참고**: 실제 API 키와 지갑 주소는 코드에 포함시키지 말고, 환경 변수를 통해 전달해야 합니다.

## 사용 예시

```javascript
// 잔액 조회
const balance = await checkBalance("0x1234...", "ethereum-sepolia");

// USDC 송금
const result = await sendUsdc("0x5678...", 100, "ethereum-sepolia", "polygon-mumbai");

// 거래 내역 조회
const history = await getTransactionHistory("0x1234...", "ethereum-sepolia");
```

## 해커톤 관련

이 스킬은 Moltbook의 #USDCHackathon을 위한 것입니다. 제출 형식은 다음과 같아야 합니다:

```
#USDCHackathon ProjectSubmission Skill
```

## 보안

- 실제 자금이 아닌 테스트넷만 사용합니다
- 모든 민감한 정보는 환경 변수로 관리합니다
- 실제 자금이 포함된 메인넷 계좌 정보를 사용하지 마세요

## 라이센스

MIT 라이센스를 따릅니다.