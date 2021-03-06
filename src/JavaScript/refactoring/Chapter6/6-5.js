// 함수 선언 바꾸기

/**
 * function circum(radius) {...}
 * ====>>
 * function circumference(radius) {...}
 */

// 주석을 이용해 함수의 목적을 설명해 보는 것
// 매개변수는 함수가 외부 세계와 어우러지는 방식을 정의
// 변경사항을 살펴보고 함수 선언과 호출문들을 단번에 고칠 수 있을지 가늠해본다.
/**
 * 간단한 절차
 * 1. 매개변수를 제거하려거든 먼저 함수 본문에서 제거 대상 매개변수를 참조하는 곳은 없는지 확인
 * 2. 메서드 선언을 원하는 형태로 바꾼다.
 * 3. 기존 메서드 선언을 참조하는 부분을 모두 찾아서 바뀐 형태로 수정한다.
 */

/**
 * 마이그레이션 절차
 * 1. 이어지는 추출 단계를 수월하게 만들어야 한다면 함수의 본문을 적절히 리팩터링한다.
 * 2. 함수 본문을 새로운 함수로 추출 한다.
 *  -> 새로 만들 함수 이름이 기존 함수와 같다면 일단 검색하기 쉬운 이름을 임시로 붙여둔다.
 * 3. 추출한 함수에 매개변수를 추가해야 한다면 '간단한 절차'를 따라 추가한다.
 * 4. 테스트한다.
 * 5. 기존 함수를 인라인 한다.
 * 6. 이름을 임시로 붙여뒀다면 함수 선언 바꾸기를 한 번 더 적용해서 원래 이름으로 되돌린다.
 * 7. 테스트한다.
 */

// 간단
const circum = (radius) => 2 * Math.PI * radius;
// ====> 명시적으로
const circumference = (radius) => 2 * Math.PI * radius;

// 마이그레이션
const circumferenceM = (radius) => 2 * Math.PI * radius;
// circumM 폐기 예정임을 표시 (로직이 매끄럽게 이뤄지면 삭제)
const circumM = (radius) => circumferenceM(radius);

// 마이그레이션
/*
zz_addReservation = (customer, isPriority) => {
  this._reservations.push(customer)
}

addReservation = (customer) => {
  this.zz_addReservation(customer, false);
}

어설션을 이용해 확인하기
zz_addReservation(customer, isPriority) {
  => assert(isPriority === true || isPriority === false);
  this._reservation.push(customer)
}

이 다음 기존 함수를 인라인 하기 ex) this.zz_addReservation(customer, false)
*/

const isNewEngland = (aCustomer) => {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(aCustomer.address.state);
};

const newEnglanders = someCustomers.filter(isNewEngland);

/*
const isNewEnglandRefactor = (aCustomer) => {
  const stateCode = aCustomer.address.state;
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode)
}

const isNewEnglandRefactor = (aCustomer) => {
  const stateCode = aCustomer.address.state
  return xxNewInNewEngland(stateCode);
}
const xxNewInNewEngland = (stateCode) => {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode)
}

// 인라인

const isNewEnglandRefactor = (aCustomer) => {
  return xxNewInNewEngland(aCustomer.address.state);
}

// 호출문
const newEnglanders = someCustomers.filter(xxNewInNewEngland)

// 기존 함수 이름으로 변경
const newEnglanders = someCustomers.filter(c => inNewEngland(c.address.state))
const inNewEngland = (stateCode) => 
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode)
*/
