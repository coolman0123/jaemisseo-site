import { Metadata } from "next";
import PageTransition from "@/components/animations/PageTransition";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 로또 연구소",
  description: "로또 연구소 - 당첨 확인, QR, 분석 앱 개인정보처리방침",
};

export default function LottoLabPrivacyPage() {
  return (
    <PageTransition>
      <section style={{ paddingTop: '160px' }} className="min-h-screen pb-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            개인정보처리방침
          </h1>
          <p className="text-muted mb-4">
            <strong>로또 연구소 - 당첨 확인, QR, 분석</strong>
          </p>
          <p className="text-muted mb-12">
            최종 업데이트: 2025년 12월 29일
          </p>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-muted leading-relaxed mb-8">
              <strong>로또 연구소 - 당첨 확인, QR, 분석</strong> (이하 &quot;앱&quot;)은 이용자의 개인정보를 중요시하며, 「개인정보 보호법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등 관련 법령을 준수하고 있습니다.
            </p>
            <p className="text-muted leading-relaxed mb-12">
              본 개인정보처리방침은 앱이 수집하는 개인정보의 항목, 수집 및 이용 목적, 보유 및 이용 기간, 제3자 제공 및 처리 위탁 등에 관한 사항을 안내합니다.
            </p>

            <div className="space-y-12">
              {/* 목차 */}
              <section className="p-6 bg-white/[0.02] border border-white/10 rounded-lg">
                <h2 className="text-xl font-bold mb-4 text-foreground">목차</h2>
                <ol className="list-decimal list-inside text-muted space-y-1 text-sm">
                  <li>개인정보처리방침의 목적</li>
                  <li>수집하는 개인정보 항목</li>
                  <li>개인정보 수집 방법</li>
                  <li>개인정보의 이용 목적</li>
                  <li>개인정보의 보유 및 이용 기간</li>
                  <li>개인정보의 제3자 제공</li>
                  <li>개인정보 처리 위탁</li>
                  <li>개인정보의 국외 이전</li>
                  <li>이용자의 권리와 행사 방법</li>
                  <li>개인정보의 파기 절차 및 방법</li>
                  <li>개인정보 보호를 위한 기술적·관리적 대책</li>
                  <li>앱 접근 권한에 관한 사항</li>
                  <li>아동의 개인정보 보호</li>
                  <li>쿠키 및 자동 수집 장치 운영</li>
                  <li>광고성 정보 전송</li>
                  <li>개인정보 보호책임자</li>
                  <li>권익침해 구제방법</li>
                  <li>개인정보처리방침 변경</li>
                  <li>시행일</li>
                </ol>
              </section>

              {/* 1. 개인정보처리방침의 목적 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  1. 개인정보처리방침의 목적
                </h2>
                <p className="text-muted leading-relaxed">
                  본 개인정보처리방침은 <strong>재밌어</strong>(이하 &quot;회사&quot;)가 제공하는 <strong>로또 연구소 - 당첨 확인, QR, 분석</strong> 앱 서비스(이하 &quot;서비스&quot;)와 관련하여, 이용자의 개인정보가 어떻게 수집·이용·보관·파기되는지에 대한 정보를 제공하고, 이용자의 권익을 보호하기 위해 작성되었습니다.
                </p>
                <p className="text-muted leading-relaxed mt-4">
                  본 방침은 대한민국 「개인정보 보호법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 및 관련 법령을 준수합니다.
                </p>
              </section>

              {/* 2. 수집하는 개인정보 항목 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  2. 수집하는 개인정보 항목
                </h2>

                <h3 className="text-xl font-semibold mb-3 text-foreground">2.1 수집하는 정보</h3>
                <p className="text-muted leading-relaxed mb-4">
                  본 앱은 <strong>최소한의 개인정보만을 수집</strong>하며, 회원가입이나 로그인 기능이 없어 이용자를 직접 식별할 수 있는 정보를 수집하지 않습니다.
                </p>

                <h4 className="text-lg font-semibold mb-3 text-foreground">2.1.1 이용자가 직접 입력하는 정보</h4>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm text-muted border border-white/10">
                    <thead className="bg-white/[0.02]">
                      <tr>
                        <th className="px-4 py-2 text-left border-b border-white/10">항목</th>
                        <th className="px-4 py-2 text-left border-b border-white/10">설명</th>
                        <th className="px-4 py-2 text-left border-b border-white/10">저장 위치</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">로또 번호</td>
                        <td className="px-4 py-2 border-b border-white/10">이용자가 입력하거나 생성한 로또 번호 (1~45 범위의 숫자)</td>
                        <td className="px-4 py-2 border-b border-white/10">기기 내부 저장소</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">구매 기록</td>
                        <td className="px-4 py-2 border-b border-white/10">로또 번호 저장 시 생성일시, 생성 방식(수동입력, QR스캔 등)</td>
                        <td className="px-4 py-2 border-b border-white/10">기기 내부 저장소</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h4 className="text-lg font-semibold mb-3 text-foreground">2.1.2 인앱 결제 시 수집되는 정보</h4>
                <p className="text-muted leading-relaxed mb-4">
                  프리미엄 구독 기능 이용 시 다음 정보가 결제 서비스 제공업체(RevenueCat)를 통해 처리됩니다:
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm text-muted border border-white/10">
                    <thead className="bg-white/[0.02]">
                      <tr>
                        <th className="px-4 py-2 text-left border-b border-white/10">항목</th>
                        <th className="px-4 py-2 text-left border-b border-white/10">설명</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">구독 상태</td>
                        <td className="px-4 py-2 border-b border-white/10">프리미엄 구독 활성화 여부</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">구독 만료일</td>
                        <td className="px-4 py-2 border-b border-white/10">구독 서비스 종료 예정일</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">구매 내역</td>
                        <td className="px-4 py-2 border-b border-white/10">구매한 상품 식별자, 구매 일시</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">앱 사용자 ID</td>
                        <td className="px-4 py-2 border-b border-white/10">앱 내부에서 생성되는 익명 식별자 (개인 식별 불가)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted text-sm bg-white/[0.02] p-4 rounded-lg mb-6">
                  <strong>참고:</strong> 실제 결제 정보(신용카드 번호, 계좌 정보 등)는 Apple App Store 또는 Google Play Store에서 직접 처리하며, 회사는 이러한 정보에 접근하지 않습니다.
                </p>

                <h4 className="text-lg font-semibold mb-3 text-foreground">2.1.3 자동으로 수집되는 정보</h4>
                <p className="text-muted leading-relaxed mb-4">
                  본 앱은 서비스 개선 및 광고 제공을 위해 다음과 같은 제3자 SDK를 사용할 수 있으며, 해당 SDK에 의해 정보가 자동 수집될 수 있습니다:
                </p>

                <p className="text-foreground font-semibold mb-2">Google AdMob (광고)</p>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm text-muted border border-white/10">
                    <thead className="bg-white/[0.02]">
                      <tr>
                        <th className="px-4 py-2 text-left border-b border-white/10">수집 항목</th>
                        <th className="px-4 py-2 text-left border-b border-white/10">목적</th>
                        <th className="px-4 py-2 text-left border-b border-white/10">수집 주체</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">광고 식별자 (IDFA/GAID)</td>
                        <td className="px-4 py-2 border-b border-white/10">맞춤형 광고 제공</td>
                        <td className="px-4 py-2 border-b border-white/10">Google AdMob</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">IP 주소</td>
                        <td className="px-4 py-2 border-b border-white/10">대략적 위치 기반 광고</td>
                        <td className="px-4 py-2 border-b border-white/10">Google AdMob</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">기기 정보</td>
                        <td className="px-4 py-2 border-b border-white/10">광고 표시 최적화</td>
                        <td className="px-4 py-2 border-b border-white/10">Google AdMob</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">광고 상호작용 데이터</td>
                        <td className="px-4 py-2 border-b border-white/10">광고 성과 측정</td>
                        <td className="px-4 py-2 border-b border-white/10">Google AdMob</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted text-sm bg-white/[0.02] p-4 rounded-lg mb-6">
                  <strong>참고:</strong> 프리미엄 구독 사용자는 광고가 비활성화되어 위 정보의 수집이 제한되거나 발생하지 않을 수 있습니다.
                </p>

                <p className="text-foreground font-semibold mb-2">Google Analytics / Firebase Analytics (분석)</p>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm text-muted border border-white/10">
                    <thead className="bg-white/[0.02]">
                      <tr>
                        <th className="px-4 py-2 text-left border-b border-white/10">수집 항목</th>
                        <th className="px-4 py-2 text-left border-b border-white/10">목적</th>
                        <th className="px-4 py-2 text-left border-b border-white/10">수집 주체</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">앱 사용 이벤트</td>
                        <td className="px-4 py-2 border-b border-white/10">서비스 품질 개선</td>
                        <td className="px-4 py-2 border-b border-white/10">Google</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">화면 조회 기록</td>
                        <td className="px-4 py-2 border-b border-white/10">사용자 경험 분석</td>
                        <td className="px-4 py-2 border-b border-white/10">Google</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">기기 정보</td>
                        <td className="px-4 py-2 border-b border-white/10">호환성 분석</td>
                        <td className="px-4 py-2 border-b border-white/10">Google</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">앱 오류 정보</td>
                        <td className="px-4 py-2 border-b border-white/10">버그 수정 및 안정성 개선</td>
                        <td className="px-4 py-2 border-b border-white/10">Google</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">세션 정보</td>
                        <td className="px-4 py-2 border-b border-white/10">사용 패턴 분석</td>
                        <td className="px-4 py-2 border-b border-white/10">Google</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted text-sm bg-white/[0.02] p-4 rounded-lg mb-6">
                  <strong>참고:</strong> 분석 데이터는 익명화되어 수집되며, 개인을 식별하는 용도로 사용되지 않습니다.
                </p>

                <h4 className="text-lg font-semibold mb-3 text-foreground">2.1.4 회사의 직접 수집 여부</h4>
                <p className="text-muted leading-relaxed mb-4">
                  회사는 이용자의 개인정보를 <strong>자체 서버로 직접 수집·저장하지 않습니다</strong>.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                  회사는 이용자를 직접 식별할 수 있는 기기 고유 식별자(UDID, IMEI 등) 및 위치 정보(GPS 등)를 자체적으로 수집·저장하지 않습니다.
                </p>
                <p className="text-muted leading-relaxed">
                  다만, 광고 및 분석을 위한 제3자 SDK가 해당 SDK의 정책에 따라 광고 식별자, 기기 정보, 앱 사용 이벤트 등을 수집할 수 있습니다.
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-8 text-foreground">2.2 수집하지 않는 정보</h3>
                <p className="text-muted leading-relaxed mb-4">
                  본 앱은 다음 정보를 <strong>수집하지 않습니다</strong>:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-muted border border-white/10">
                    <thead className="bg-white/[0.02]">
                      <tr>
                        <th className="px-4 py-2 text-left border-b border-white/10">구분</th>
                        <th className="px-4 py-2 text-left border-b border-white/10">미수집 항목</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">개인 식별 정보</td>
                        <td className="px-4 py-2 border-b border-white/10">이름, 이메일 주소, 전화번호, 주민등록번호, 주소</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">금융 정보</td>
                        <td className="px-4 py-2 border-b border-white/10">신용카드 번호, 은행 계좌 정보, 금융 거래 내역</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">위치 정보</td>
                        <td className="px-4 py-2 border-b border-white/10">GPS 정보, 와이파이 기반 위치, 셀룰러 기반 위치</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">연락처 정보</td>
                        <td className="px-4 py-2 border-b border-white/10">주소록, 연락처 목록</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">미디어</td>
                        <td className="px-4 py-2 border-b border-white/10">사진, 동영상, 오디오 파일</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">건강 정보</td>
                        <td className="px-4 py-2 border-b border-white/10">건강 데이터, 피트니스 정보</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">기기 고유 식별자</td>
                        <td className="px-4 py-2 border-b border-white/10">UDID, IMEI 등 (기기 고유 식별자)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 3. 개인정보 수집 방법 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  3. 개인정보 수집 방법
                </h2>

                <h3 className="text-xl font-semibold mb-3 text-foreground">3.1 이용자의 직접 입력</h3>
                <ul className="list-disc list-inside text-muted space-y-2 mb-6">
                  <li>로또 번호 수동 입력</li>
                  <li>QR 코드 스캔을 통한 번호 입력</li>
                  <li>번호 생성 기능(파워볼, 구슬, 분석) 사용</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-foreground">3.2 인앱 결제</h3>
                <ul className="list-disc list-inside text-muted space-y-2 mb-6">
                  <li>App Store 또는 Google Play를 통한 프리미엄 구독 결제 시</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-foreground">3.3 앱 실행 시 자동 수집</h3>
                <ul className="list-disc list-inside text-muted space-y-2">
                  <li>본 앱은 회사가 자체적으로 이용자의 개인정보를 자동 수집하지 않습니다.</li>
                  <li>다만, 광고 및 서비스 분석을 위해 포함된 제3자 SDK(Google AdMob, Google Analytics/Firebase)에 의해 광고 식별자, 앱 사용 이벤트, 기기 정보, 오류 로그 등이 자동으로 수집될 수 있습니다.</li>
                  <li>로또 당첨번호 정보는 동행복권(dhlottery.co.kr) 공개 API에서 가져오며, 이 과정에서 이용자의 개인정보는 전송되지 않습니다.</li>
                </ul>
              </section>

              {/* 4. 개인정보의 이용 목적 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  4. 개인정보의 이용 목적
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  수집된 정보는 다음 목적으로만 이용됩니다:
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm text-muted border border-white/10">
                    <thead className="bg-white/[0.02]">
                      <tr>
                        <th className="px-4 py-2 text-left border-b border-white/10">목적</th>
                        <th className="px-4 py-2 text-left border-b border-white/10">설명</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">서비스 제공</td>
                        <td className="px-4 py-2 border-b border-white/10">이용자가 저장한 로또 번호 표시, 당첨 결과 확인 기능 제공</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">구독 관리</td>
                        <td className="px-4 py-2 border-b border-white/10">프리미엄 구독 상태 확인 및 프리미엄 기능 제공</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">구매 복원</td>
                        <td className="px-4 py-2 border-b border-white/10">기기 변경 시 이전 구매 내역 복원</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted text-sm bg-primary/10 p-4 rounded-lg border border-primary/20">
                  <strong>중요:</strong> 회사는 수집된 정보를 <strong>마케팅, 광고, 프로파일링, 제3자 판매</strong> 목적으로 사용하지 않습니다.
                </p>
              </section>

              {/* 5. 개인정보의 보유 및 이용 기간 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  5. 개인정보의 보유 및 이용 기간
                </h2>

                <h3 className="text-xl font-semibold mb-3 text-foreground">5.1 기기 내 저장 데이터</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm text-muted border border-white/10">
                    <thead className="bg-white/[0.02]">
                      <tr>
                        <th className="px-4 py-2 text-left border-b border-white/10">데이터 유형</th>
                        <th className="px-4 py-2 text-left border-b border-white/10">보유 기간</th>
                        <th className="px-4 py-2 text-left border-b border-white/10">파기 방법</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">로또 번호</td>
                        <td className="px-4 py-2 border-b border-white/10">이용자가 삭제하거나 앱을 삭제할 때까지</td>
                        <td className="px-4 py-2 border-b border-white/10">앱 내 삭제 기능 또는 앱 삭제</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">구매 기록</td>
                        <td className="px-4 py-2 border-b border-white/10">이용자가 삭제하거나 앱을 삭제할 때까지</td>
                        <td className="px-4 py-2 border-b border-white/10">앱 내 삭제 기능 또는 앱 삭제</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">구독 캐시 정보</td>
                        <td className="px-4 py-2 border-b border-white/10">앱 삭제 시까지</td>
                        <td className="px-4 py-2 border-b border-white/10">앱 삭제</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-foreground">5.2 결제 서비스 제공업체 저장 데이터</h3>
                <p className="text-muted leading-relaxed mb-4">
                  RevenueCat에 저장되는 구독 관련 정보의 보유 기간은 RevenueCat의 개인정보처리방침을 따릅니다.
                </p>
                <p className="text-muted text-sm mb-6">
                  RevenueCat 개인정보처리방침: <a href="https://www.revenuecat.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.revenuecat.com/privacy</a>
                </p>

                <h3 className="text-xl font-semibold mb-3 text-foreground">5.3 법령에 따른 보유</h3>
                <p className="text-muted leading-relaxed mb-4">
                  관련 법령에 의해 보존이 필요한 경우, 해당 법령에서 정한 기간 동안 보관합니다:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-muted border border-white/10">
                    <thead className="bg-white/[0.02]">
                      <tr>
                        <th className="px-4 py-2 text-left border-b border-white/10">관련 법령</th>
                        <th className="px-4 py-2 text-left border-b border-white/10">보유 항목</th>
                        <th className="px-4 py-2 text-left border-b border-white/10">보유 기간</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">전자상거래법</td>
                        <td className="px-4 py-2 border-b border-white/10">계약 또는 청약철회 등에 관한 기록</td>
                        <td className="px-4 py-2 border-b border-white/10">5년</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">전자상거래법</td>
                        <td className="px-4 py-2 border-b border-white/10">대금결제 및 재화 등의 공급에 관한 기록</td>
                        <td className="px-4 py-2 border-b border-white/10">5년</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">전자상거래법</td>
                        <td className="px-4 py-2 border-b border-white/10">소비자의 불만 또는 분쟁처리에 관한 기록</td>
                        <td className="px-4 py-2 border-b border-white/10">3년</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 6. 개인정보의 제3자 제공 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  6. 개인정보의 제3자 제공
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  회사는 이용자의 개인정보를 제4조에서 명시한 범위 내에서만 이용하며, 이용자의 <strong>사전 동의 없이 제3자에게 개인정보를 제공하지 않습니다</strong>.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                  다만, 다음의 경우에는 예외로 합니다:
                </p>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-sm text-muted border border-white/10">
                    <thead className="bg-white/[0.02]">
                      <tr>
                        <th className="px-4 py-2 text-left border-b border-white/10">예외 사유</th>
                        <th className="px-4 py-2 text-left border-b border-white/10">설명</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">이용자 동의</td>
                        <td className="px-4 py-2 border-b border-white/10">이용자가 사전에 제3자 제공에 동의한 경우</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">법률 규정</td>
                        <td className="px-4 py-2 border-b border-white/10">법령에 특별한 규정이 있는 경우</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">수사 목적</td>
                        <td className="px-4 py-2 border-b border-white/10">수사기관의 법령에 근거한 적법한 요청이 있는 경우</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">긴급 상황</td>
                        <td className="px-4 py-2 border-b border-white/10">이용자 또는 제3자의 생명, 신체, 재산 보호를 위해 긴급히 필요한 경우</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted text-sm bg-white/[0.02] p-4 rounded-lg">
                  <strong>참고:</strong> 로또 당첨번호 조회를 위해 동행복권(dhlottery.co.kr) API에 접속하지만, 이 과정에서 이용자의 개인정보는 전송되지 않습니다.
                </p>
              </section>

              {/* 7. 개인정보 처리 위탁 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  7. 개인정보 처리 위탁
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  회사는 서비스 제공을 위해 다음과 같이 개인정보 처리를 위탁하고 있습니다:
                </p>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-sm text-muted border border-white/10">
                    <thead className="bg-white/[0.02]">
                      <tr>
                        <th className="px-4 py-2 text-left border-b border-white/10">수탁업체</th>
                        <th className="px-4 py-2 text-left border-b border-white/10">위탁 업무</th>
                        <th className="px-4 py-2 text-left border-b border-white/10">처리 정보</th>
                        <th className="px-4 py-2 text-left border-b border-white/10">보유 기간</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">RevenueCat, Inc.</td>
                        <td className="px-4 py-2 border-b border-white/10">인앱 결제 및 구독 관리</td>
                        <td className="px-4 py-2 border-b border-white/10">구독 상태, 구매 내역, 익명 앱 사용자 ID</td>
                        <td className="px-4 py-2 border-b border-white/10">위탁 계약 종료 시 또는 이용자 요청 시까지</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">Google LLC (AdMob)</td>
                        <td className="px-4 py-2 border-b border-white/10">인앱 광고 서비스</td>
                        <td className="px-4 py-2 border-b border-white/10">광고 식별자, IP 주소, 기기 정보, 광고 상호작용 데이터</td>
                        <td className="px-4 py-2 border-b border-white/10">Google 정책에 따름</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">Google LLC (Analytics/Firebase)</td>
                        <td className="px-4 py-2 border-b border-white/10">앱 분석 및 오류 수집</td>
                        <td className="px-4 py-2 border-b border-white/10">앱 사용 이벤트, 화면 조회, 기기 정보, 오류 로그 (익명화)</td>
                        <td className="px-4 py-2 border-b border-white/10">Google 정책에 따름</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">Cloudflare, Inc.</td>
                        <td className="px-4 py-2 border-b border-white/10">콘텐츠 전송 네트워크(CDN)</td>
                        <td className="px-4 py-2 border-b border-white/10">없음 (정적 데이터 전송만)</td>
                        <td className="px-4 py-2 border-b border-white/10">해당 없음</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">Apple Inc.</td>
                        <td className="px-4 py-2 border-b border-white/10">App Store 결제 처리 (iOS)</td>
                        <td className="px-4 py-2 border-b border-white/10">결제 정보 (회사 미접근)</td>
                        <td className="px-4 py-2 border-b border-white/10">Apple 정책에 따름</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">Google LLC</td>
                        <td className="px-4 py-2 border-b border-white/10">Play Store 결제 처리 (Android)</td>
                        <td className="px-4 py-2 border-b border-white/10">결제 정보 (회사 미접근)</td>
                        <td className="px-4 py-2 border-b border-white/10">Google 정책에 따름</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted leading-relaxed">
                  회사는 위탁업무 수행 목적 외 개인정보 처리 금지, 기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하도록 감독하고 있습니다.
                </p>
              </section>

              {/* 8. 개인정보의 국외 이전 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  8. 개인정보의 국외 이전
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  회사는 다음과 같이 개인정보를 국외로 이전하고 있습니다:
                </p>

                <h3 className="text-xl font-semibold mb-3 text-foreground">8.1 RevenueCat, Inc.</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm text-muted border border-white/10">
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10 font-medium bg-white/[0.02]">이전받는 자</td>
                        <td className="px-4 py-2 border-b border-white/10">RevenueCat, Inc.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10 font-medium bg-white/[0.02]">이전받는 자의 연락처</td>
                        <td className="px-4 py-2 border-b border-white/10">support@revenuecat.com</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10 font-medium bg-white/[0.02]">이전받는 국가</td>
                        <td className="px-4 py-2 border-b border-white/10">미국</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10 font-medium bg-white/[0.02]">이전 일시 및 방법</td>
                        <td className="px-4 py-2 border-b border-white/10">서비스 이용 시 네트워크를 통한 전송</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10 font-medium bg-white/[0.02]">이전되는 개인정보 항목</td>
                        <td className="px-4 py-2 border-b border-white/10">구독 상태, 구매 내역, 익명 앱 사용자 ID</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10 font-medium bg-white/[0.02]">이전받는 자의 이용 목적</td>
                        <td className="px-4 py-2 border-b border-white/10">인앱 결제 및 구독 관리 서비스 제공</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10 font-medium bg-white/[0.02]">이전받는 자의 보유·이용 기간</td>
                        <td className="px-4 py-2 border-b border-white/10">위탁 계약 종료 시 또는 이용자 요청 시까지</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-foreground">8.2 Google LLC (AdMob / Google Analytics / Firebase)</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm text-muted border border-white/10">
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10 font-medium bg-white/[0.02]">이전받는 자</td>
                        <td className="px-4 py-2 border-b border-white/10">Google LLC</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10 font-medium bg-white/[0.02]">이전받는 자의 연락처</td>
                        <td className="px-4 py-2 border-b border-white/10">https://support.google.com</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10 font-medium bg-white/[0.02]">이전받는 국가</td>
                        <td className="px-4 py-2 border-b border-white/10">미국</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10 font-medium bg-white/[0.02]">이전 일시 및 방법</td>
                        <td className="px-4 py-2 border-b border-white/10">서비스 이용 시 네트워크를 통한 전송</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10 font-medium bg-white/[0.02]">이전되는 개인정보 항목</td>
                        <td className="px-4 py-2 border-b border-white/10">(AdMob) 광고 식별자, IP 주소, 기기 정보, 광고 상호작용 데이터 / (Analytics/Firebase) 앱 사용 이벤트, 화면 조회, 기기 정보, 세션 정보, 오류 로그</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10 font-medium bg-white/[0.02]">이전받는 자의 이용 목적</td>
                        <td className="px-4 py-2 border-b border-white/10">맞춤형 광고 제공, 광고 성과 측정, 앱 분석, 사용자 경험 개선, 오류 수정</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10 font-medium bg-white/[0.02]">이전받는 자의 보유·이용 기간</td>
                        <td className="px-4 py-2 border-b border-white/10">Google 개인정보처리방침에 따름</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-foreground">8.3 Cloudflare, Inc.</h3>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-sm text-muted border border-white/10">
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10 font-medium bg-white/[0.02]">이전받는 자</td>
                        <td className="px-4 py-2 border-b border-white/10">Cloudflare, Inc.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10 font-medium bg-white/[0.02]">이전받는 국가</td>
                        <td className="px-4 py-2 border-b border-white/10">미국 및 전 세계 엣지 서버</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10 font-medium bg-white/[0.02]">이전되는 개인정보 항목</td>
                        <td className="px-4 py-2 border-b border-white/10">없음 (정적 콘텐츠 전송만)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10 font-medium bg-white/[0.02]">이전받는 자의 이용 목적</td>
                        <td className="px-4 py-2 border-b border-white/10">로또 당첨번호 데이터 전송</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted text-sm bg-white/[0.02] p-4 rounded-lg">
                  <strong>참고:</strong> 미국은 대한민국과 동등한 수준의 개인정보 보호 법령을 갖추지 않을 수 있으나, 회사는 계약 조항을 통해 이용자의 개인정보가 안전하게 보호되도록 조치하고 있습니다.
                </p>
              </section>

              {/* 9. 이용자의 권리와 행사 방법 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  9. 이용자의 권리와 행사 방법
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  이용자(법정대리인 포함)는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다:
                </p>

                <h3 className="text-xl font-semibold mb-3 text-foreground">9.1 권리의 종류</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm text-muted border border-white/10">
                    <thead className="bg-white/[0.02]">
                      <tr>
                        <th className="px-4 py-2 text-left border-b border-white/10">권리</th>
                        <th className="px-4 py-2 text-left border-b border-white/10">설명</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">열람권</td>
                        <td className="px-4 py-2 border-b border-white/10">본인의 개인정보 처리 현황을 열람할 권리</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">정정권</td>
                        <td className="px-4 py-2 border-b border-white/10">개인정보의 오류에 대해 정정을 요구할 권리</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">삭제권</td>
                        <td className="px-4 py-2 border-b border-white/10">개인정보의 삭제를 요구할 권리</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">처리정지권</td>
                        <td className="px-4 py-2 border-b border-white/10">개인정보 처리의 정지를 요구할 권리</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">동의철회권</td>
                        <td className="px-4 py-2 border-b border-white/10">개인정보 수집·이용에 대한 동의를 철회할 권리</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">이동권</td>
                        <td className="px-4 py-2 border-b border-white/10">본인의 개인정보를 전송받거나 다른 사업자에게 전송을 요구할 권리</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-foreground">9.2 권리 행사 방법</h3>

                <h4 className="text-lg font-semibold mb-2 text-foreground">기기 내 저장된 데이터</h4>
                <p className="text-muted leading-relaxed mb-2">
                  기기에 저장된 로또 번호 및 구매 기록은 앱 내에서 직접 관리할 수 있습니다:
                </p>
                <ol className="list-decimal list-inside text-muted space-y-1 mb-6">
                  <li><strong>데이터 열람:</strong> 앱 내 &quot;내 번호&quot; 또는 &quot;구매 내역&quot; 메뉴에서 확인</li>
                  <li><strong>데이터 삭제:</strong> 앱 내 삭제 기능 사용 또는 앱 삭제</li>
                  <li><strong>전체 삭제:</strong> 앱을 삭제하면 기기에 저장된 모든 데이터가 삭제됩니다</li>
                </ol>

                <h4 className="text-lg font-semibold mb-2 text-foreground">구독 관련 데이터</h4>
                <p className="text-muted leading-relaxed mb-2">
                  구독 취소 및 관련 데이터 삭제는 다음 방법으로 요청할 수 있습니다:
                </p>
                <ul className="list-disc list-inside text-muted space-y-1 mb-6">
                  <li><strong>iOS:</strong> 설정 &gt; Apple ID &gt; 구독에서 구독 취소</li>
                  <li><strong>Android:</strong> Google Play 스토어 &gt; 구독에서 구독 취소</li>
                  <li><strong>데이터 삭제 요청:</strong> 아래 개인정보 보호책임자 이메일로 요청</li>
                </ul>

                <h4 className="text-lg font-semibold mb-2 text-foreground">문의 및 요청</h4>
                <p className="text-muted leading-relaxed mb-2">
                  개인정보 관련 문의 및 권리 행사 요청은 아래 연락처로 해주시기 바랍니다:
                </p>
                <p className="text-muted mb-4">
                  <strong>이메일:</strong> funpeople.hq@gmail.com
                </p>
                <p className="text-muted leading-relaxed">
                  회사는 이용자의 요청을 받은 날로부터 <strong>10일 이내</strong>에 조치 결과를 통지합니다. 정당한 사유로 처리가 지연되는 경우, 그 사유와 처리 예정 기한을 알려드립니다.
                </p>
              </section>

              {/* 10. 개인정보의 파기 절차 및 방법 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  10. 개인정보의 파기 절차 및 방법
                </h2>

                <h3 className="text-xl font-semibold mb-3 text-foreground">10.1 파기 절차</h3>
                <p className="text-muted leading-relaxed mb-6">
                  회사는 개인정보 보유 기간의 경과, 처리 목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-foreground">10.2 파기 방법</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm text-muted border border-white/10">
                    <thead className="bg-white/[0.02]">
                      <tr>
                        <th className="px-4 py-2 text-left border-b border-white/10">저장 형태</th>
                        <th className="px-4 py-2 text-left border-b border-white/10">파기 방법</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">기기 내 저장 데이터 (SQLite)</td>
                        <td className="px-4 py-2 border-b border-white/10">앱 삭제 시 기기 운영체제에 의해 자동 삭제</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">캐시 데이터 (AsyncStorage)</td>
                        <td className="px-4 py-2 border-b border-white/10">앱 삭제 시 기기 운영체제에 의해 자동 삭제</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">외부 서비스 저장 데이터</td>
                        <td className="px-4 py-2 border-b border-white/10">각 서비스 제공업체의 정책에 따라 파기</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-foreground">10.3 이용자의 데이터 삭제</h3>
                <p className="text-muted leading-relaxed mb-2">
                  이용자는 다음 방법으로 데이터를 삭제할 수 있습니다:
                </p>
                <ol className="list-decimal list-inside text-muted space-y-1">
                  <li><strong>앱 내 삭제 기능:</strong> 개별 번호 또는 구매 기록 삭제</li>
                  <li><strong>휴지통 기능:</strong> 삭제된 항목 영구 삭제</li>
                  <li><strong>앱 삭제:</strong> 앱을 삭제하면 기기에 저장된 모든 데이터가 완전히 삭제됩니다</li>
                </ol>
              </section>

              {/* 11. 개인정보 보호를 위한 기술적·관리적 대책 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  11. 개인정보 보호를 위한 기술적·관리적 대책
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  회사는 이용자의 개인정보를 안전하게 관리하기 위해 다음과 같은 대책을 시행하고 있습니다:
                </p>

                <h3 className="text-xl font-semibold mb-3 text-foreground">11.1 기술적 대책</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm text-muted border border-white/10">
                    <thead className="bg-white/[0.02]">
                      <tr>
                        <th className="px-4 py-2 text-left border-b border-white/10">대책</th>
                        <th className="px-4 py-2 text-left border-b border-white/10">설명</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">데이터 로컬 저장</td>
                        <td className="px-4 py-2 border-b border-white/10">로또 번호 등 이용자 데이터는 외부 서버가 아닌 이용자 기기에만 저장</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">암호화 통신</td>
                        <td className="px-4 py-2 border-b border-white/10">모든 네트워크 통신은 HTTPS(TLS) 암호화 적용</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">기기 보안 의존</td>
                        <td className="px-4 py-2 border-b border-white/10">기기에 저장된 데이터는 iOS/Android 운영체제의 보안 기능(기기 암호화, 앱 샌드박싱)으로 보호</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">최소 권한 원칙</td>
                        <td className="px-4 py-2 border-b border-white/10">서비스에 필요한 최소한의 권한만 요청</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-foreground">11.2 관리적 대책</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm text-muted border border-white/10">
                    <thead className="bg-white/[0.02]">
                      <tr>
                        <th className="px-4 py-2 text-left border-b border-white/10">대책</th>
                        <th className="px-4 py-2 text-left border-b border-white/10">설명</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">접근 제한</td>
                        <td className="px-4 py-2 border-b border-white/10">개인정보에 접근할 수 있는 담당자를 최소화</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">위탁업체 관리</td>
                        <td className="px-4 py-2 border-b border-white/10">개인정보 처리 위탁 시 안전성 확보 조치 이행 여부 확인</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">정기 점검</td>
                        <td className="px-4 py-2 border-b border-white/10">개인정보 처리 현황 정기 점검</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-foreground">11.3 이용자의 보안 책임</h3>
                <p className="text-muted leading-relaxed mb-2">
                  이용자의 기기 보안은 이용자 본인의 책임입니다. 다음 사항을 권장합니다:
                </p>
                <ul className="list-disc list-inside text-muted space-y-1">
                  <li>기기에 화면 잠금(비밀번호, 생체인증) 설정</li>
                  <li>최신 운영체제 버전 유지</li>
                  <li>신뢰할 수 없는 앱 설치 자제</li>
                </ul>
              </section>

              {/* 12. 앱 접근 권한에 관한 사항 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  12. 앱 접근 권한에 관한 사항
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  본 앱은 서비스 제공을 위해 다음과 같은 기기 접근 권한을 요청할 수 있습니다:
                </p>

                <h3 className="text-xl font-semibold mb-3 text-foreground">12.1 필수 권한</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm text-muted border border-white/10">
                    <thead className="bg-white/[0.02]">
                      <tr>
                        <th className="px-4 py-2 text-left border-b border-white/10">권한</th>
                        <th className="px-4 py-2 text-left border-b border-white/10">플랫폼</th>
                        <th className="px-4 py-2 text-left border-b border-white/10">목적</th>
                        <th className="px-4 py-2 text-left border-b border-white/10">거부 시 영향</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">인터넷</td>
                        <td className="px-4 py-2 border-b border-white/10">iOS, Android</td>
                        <td className="px-4 py-2 border-b border-white/10">로또 당첨번호 조회, 구독 확인</td>
                        <td className="px-4 py-2 border-b border-white/10">최신 당첨번호 조회 불가</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-foreground">12.2 선택 권한</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm text-muted border border-white/10">
                    <thead className="bg-white/[0.02]">
                      <tr>
                        <th className="px-4 py-2 text-left border-b border-white/10">권한</th>
                        <th className="px-4 py-2 text-left border-b border-white/10">플랫폼</th>
                        <th className="px-4 py-2 text-left border-b border-white/10">목적</th>
                        <th className="px-4 py-2 text-left border-b border-white/10">거부 시 영향</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">카메라</td>
                        <td className="px-4 py-2 border-b border-white/10">iOS, Android</td>
                        <td className="px-4 py-2 border-b border-white/10">QR 코드 스캔으로 로또 번호 입력</td>
                        <td className="px-4 py-2 border-b border-white/10">QR 스캔 기능 사용 불가 (수동 입력 가능)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-foreground">12.3 권한 관리</h3>
                <ul className="list-disc list-inside text-muted space-y-1 mb-4">
                  <li><strong>iOS:</strong> 설정 &gt; 로또 연구소에서 권한 관리</li>
                  <li><strong>Android:</strong> 설정 &gt; 앱 &gt; 로또 연구소 &gt; 권한에서 권한 관리</li>
                </ul>
                <p className="text-muted text-sm bg-white/[0.02] p-4 rounded-lg">
                  <strong>참고:</strong> 선택 권한을 거부해도 해당 기능을 제외한 서비스 이용이 가능합니다.
                </p>
              </section>

              {/* 13. 아동의 개인정보 보호 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  13. 아동의 개인정보 보호
                </h2>

                <h3 className="text-xl font-semibold mb-3 text-foreground">13.1 서비스 대상</h3>
                <p className="text-muted leading-relaxed mb-6">
                  본 앱은 로또 당첨번호 조회 및 분석 서비스로, <strong>전 연령 이용 가능</strong>합니다. 다만, 실제 복권 구매는 대한민국 법률에 따라 만 19세 이상만 가능하며, 본 앱은 복권 구매 기능을 제공하지 않습니다.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-foreground">13.2 아동 개인정보 수집 금지</h3>
                <p className="text-muted leading-relaxed mb-6">
                  회사는 <strong>만 14세 미만 아동의 개인정보를 의도적으로 수집하지 않습니다</strong>. 본 앱은 회원가입 기능이 없어 이용자를 식별하거나 연령을 확인하지 않으며, 로또 번호 등 이용자가 입력하는 정보는 기기 내부에만 저장됩니다.
                </p>
                <p className="text-muted leading-relaxed mb-6">
                  만 14세 미만 아동의 개인정보가 외부 서비스(RevenueCat 등)를 통해 수집된 것을 알게 된 경우, 해당 정보를 지체 없이 파기합니다.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-foreground">13.3 부모 및 보호자 안내</h3>
                <p className="text-muted leading-relaxed">
                  만 14세 미만 자녀가 프리미엄 구독 등 결제 기능을 이용하고자 하는 경우, 부모 또는 법정대리인의 동의가 필요합니다. 관련 문의사항은 아래 연락처로 연락해 주시기 바랍니다.
                </p>
              </section>

              {/* 14. 쿠키 및 자동 수집 장치 운영 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  14. 쿠키 및 자동 수집 장치 운영
                </h2>

                <h3 className="text-xl font-semibold mb-3 text-foreground">14.1 쿠키 사용</h3>
                <p className="text-muted leading-relaxed mb-6">
                  본 앱은 <strong>쿠키(Cookie)를 사용하지 않습니다</strong>.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-foreground">14.2 자동 수집 장치</h3>
                <p className="text-muted leading-relaxed mb-4">
                  본 앱은 다음과 같은 <strong>자체 자동 수집 장치를 사용하지 않습니다</strong>:
                </p>
                <ul className="list-disc list-inside text-muted space-y-1 mb-6">
                  <li>웹 비콘 (Web Beacon)</li>
                  <li>픽셀 태그 (Pixel Tag)</li>
                  <li>회사 자체 개발 분석 도구</li>
                  <li>회사 자체 행동 추적 도구</li>
                </ul>
                <p className="text-muted leading-relaxed mb-4">
                  다만, 서비스 개선 및 광고 제공을 위해 다음 <strong>제3자 SDK</strong>가 포함되어 있으며, 해당 SDK를 통해 데이터가 수집될 수 있습니다:
                </p>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-sm text-muted border border-white/10">
                    <thead className="bg-white/[0.02]">
                      <tr>
                        <th className="px-4 py-2 text-left border-b border-white/10">SDK</th>
                        <th className="px-4 py-2 text-left border-b border-white/10">목적</th>
                        <th className="px-4 py-2 text-left border-b border-white/10">수집 정보</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">Google AdMob</td>
                        <td className="px-4 py-2 border-b border-white/10">맞춤형 광고 제공</td>
                        <td className="px-4 py-2 border-b border-white/10">광고 식별자, 광고 상호작용 데이터</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">Google Analytics / Firebase</td>
                        <td className="px-4 py-2 border-b border-white/10">서비스 품질 개선, 오류 분석</td>
                        <td className="px-4 py-2 border-b border-white/10">앱 사용 이벤트, 화면 조회, 기기 정보, 세션 정보, 오류 로그 (익명화)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted leading-relaxed">
                  이용자는 기기 설정 및 Google의 광고/분석 설정을 통해 맞춤형 광고 및 데이터 수집을 제한할 수 있습니다.
                </p>
              </section>

              {/* 15. 광고성 정보 전송 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  15. 광고성 정보 전송
                </h2>

                <h3 className="text-xl font-semibold mb-3 text-foreground">15.1 인앱 광고 (Google AdMob)</h3>
                <p className="text-muted leading-relaxed mb-4">
                  본 앱은 <strong>Google AdMob</strong>을 통해 배너 광고 및 전면 광고를 표시합니다. 프리미엄 구독 이용자에게는 광고가 표시되지 않습니다.
                </p>

                <h4 className="text-lg font-semibold mb-2 text-foreground">광고 서비스 제공업체</h4>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm text-muted border border-white/10">
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10 font-medium bg-white/[0.02]">서비스명</td>
                        <td className="px-4 py-2 border-b border-white/10">Google AdMob</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10 font-medium bg-white/[0.02]">제공업체</td>
                        <td className="px-4 py-2 border-b border-white/10">Google LLC</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10 font-medium bg-white/[0.02]">소재지</td>
                        <td className="px-4 py-2 border-b border-white/10">미국</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10 font-medium bg-white/[0.02]">개인정보처리방침</td>
                        <td className="px-4 py-2 border-b border-white/10"><a href="https://policies.google.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h4 className="text-lg font-semibold mb-2 text-foreground">AdMob이 수집하는 정보</h4>
                <p className="text-muted leading-relaxed mb-4">
                  Google AdMob은 맞춤형 광고 제공을 위해 다음 정보를 수집할 수 있습니다:
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm text-muted border border-white/10">
                    <thead className="bg-white/[0.02]">
                      <tr>
                        <th className="px-4 py-2 text-left border-b border-white/10">수집 항목</th>
                        <th className="px-4 py-2 text-left border-b border-white/10">목적</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">광고 식별자 (IDFA/GAID)</td>
                        <td className="px-4 py-2 border-b border-white/10">맞춤형 광고 제공, 광고 성과 측정</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">IP 주소</td>
                        <td className="px-4 py-2 border-b border-white/10">대략적인 위치 기반 광고 제공</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">기기 정보</td>
                        <td className="px-4 py-2 border-b border-white/10">광고 표시 최적화</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">광고 상호작용 데이터</td>
                        <td className="px-4 py-2 border-b border-white/10">클릭, 노출 등 광고 성과 측정</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h4 className="text-lg font-semibold mb-2 text-foreground">맞춤형 광고 설정</h4>
                <p className="text-muted leading-relaxed mb-2">
                  이용자는 다음 방법으로 맞춤형 광고 수신을 제한할 수 있습니다:
                </p>
                <ul className="list-disc list-inside text-muted space-y-1 mb-6">
                  <li><strong>iOS:</strong> 설정 &gt; 개인정보 보호 &gt; 추적에서 &quot;앱이 추적을 요청하도록 허용&quot; 비활성화</li>
                  <li><strong>Android:</strong> 설정 &gt; Google &gt; 광고에서 &quot;광고 맞춤설정 선택 해제&quot; 활성화</li>
                </ul>

                <h4 className="text-lg font-semibold mb-2 text-foreground">광고 없이 이용하기</h4>
                <p className="text-muted leading-relaxed mb-6">
                  프리미엄 구독을 통해 모든 광고 없이 앱을 이용할 수 있습니다.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-foreground">15.2 기타 광고성 정보</h3>
                <p className="text-muted leading-relaxed mb-2">
                  본 앱은 다음과 같은 광고성 정보를 전송하지 않습니다:
                </p>
                <ul className="list-disc list-inside text-muted space-y-1">
                  <li>푸시 알림 광고</li>
                  <li>이메일 마케팅</li>
                  <li>SMS/MMS 광고</li>
                </ul>
              </section>

              {/* 16. 개인정보 보호책임자 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  16. 개인정보 보호책임자
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 이용자의 불만 처리 및 피해 구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                </p>
                <div className="p-6 bg-white/[0.02] border border-white/10 rounded-lg mb-4">
                  <h3 className="text-lg font-semibold mb-4 text-foreground">개인정보 보호책임자</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-muted">
                      <tbody>
                        <tr>
                          <td className="py-2 font-medium">사업자명</td>
                          <td className="py-2">재밌어</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-medium">이메일</td>
                          <td className="py-2">funpeople.hq@gmail.com</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <p className="text-muted leading-relaxed">
                  이용자는 서비스 이용 중 발생하는 모든 개인정보 보호 관련 문의, 불만 처리, 피해 구제 등에 관한 사항을 개인정보 보호책임자에게 문의할 수 있습니다. 회사는 이용자의 문의에 대해 <strong>지체 없이 답변 및 처리</strong>해 드립니다.
                </p>
              </section>

              {/* 17. 권익침해 구제방법 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  17. 권익침해 구제방법
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  이용자는 개인정보 침해로 인한 피해 구제, 상담 등이 필요한 경우 아래 기관에 문의할 수 있습니다:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-muted border border-white/10">
                    <thead className="bg-white/[0.02]">
                      <tr>
                        <th className="px-4 py-2 text-left border-b border-white/10">기관명</th>
                        <th className="px-4 py-2 text-left border-b border-white/10">연락처</th>
                        <th className="px-4 py-2 text-left border-b border-white/10">홈페이지</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">개인정보침해 신고센터</td>
                        <td className="px-4 py-2 border-b border-white/10">국번없이 118</td>
                        <td className="px-4 py-2 border-b border-white/10"><a href="https://privacy.kisa.or.kr" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">privacy.kisa.or.kr</a></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">개인정보 분쟁조정위원회</td>
                        <td className="px-4 py-2 border-b border-white/10">1833-6972</td>
                        <td className="px-4 py-2 border-b border-white/10"><a href="https://www.kopico.go.kr" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">kopico.go.kr</a></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">대검찰청 사이버수사과</td>
                        <td className="px-4 py-2 border-b border-white/10">국번없이 1301</td>
                        <td className="px-4 py-2 border-b border-white/10"><a href="https://www.spo.go.kr" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">spo.go.kr</a></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">경찰청 사이버수사국</td>
                        <td className="px-4 py-2 border-b border-white/10">국번없이 182</td>
                        <td className="px-4 py-2 border-b border-white/10"><a href="https://ecrm.police.go.kr" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">ecrm.police.go.kr</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 18. 개인정보처리방침 변경 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  18. 개인정보처리방침 변경
                </h2>

                <h3 className="text-xl font-semibold mb-3 text-foreground">18.1 변경 고지</h3>
                <p className="text-muted leading-relaxed mb-4">
                  본 개인정보처리방침은 법령, 정책 또는 서비스의 변경에 따라 내용이 추가, 삭제 및 수정될 수 있습니다.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                  개인정보처리방침이 변경되는 경우, 변경 사항을 시행일 <strong>최소 7일 전</strong>에 앱 내 공지사항 또는 팝업을 통해 고지합니다.
                </p>
                <p className="text-muted leading-relaxed mb-6">
                  다만, 이용자의 권리에 중대한 변경이 있는 경우에는 <strong>최소 30일 전</strong>에 고지합니다.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-foreground">18.2 버전 관리</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-muted border border-white/10">
                    <thead className="bg-white/[0.02]">
                      <tr>
                        <th className="px-4 py-2 text-left border-b border-white/10">버전</th>
                        <th className="px-4 py-2 text-left border-b border-white/10">시행일</th>
                        <th className="px-4 py-2 text-left border-b border-white/10">변경 내용</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">1.0</td>
                        <td className="px-4 py-2 border-b border-white/10">2025년 1월 1일</td>
                        <td className="px-4 py-2 border-b border-white/10">최초 제정</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 19. 시행일 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  19. 시행일
                </h2>
                <p className="text-muted leading-relaxed">
                  본 개인정보처리방침은 <strong>2025년 1월 1일</strong>부터 시행됩니다.
                </p>
              </section>

              {/* 부칙 */}
              <section className="border-t border-white/10 pt-12">
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  부칙
                </h2>

                <h3 className="text-xl font-semibold mb-4 text-foreground">App Store 개인정보 보호 라벨 정보</h3>
                <p className="text-muted leading-relaxed mb-4">
                  Apple App Store의 앱 개인정보 보호 섹션에 표시되는 정보입니다:
                </p>

                <h4 className="text-lg font-semibold mb-2 text-foreground">사용자에게 연결된 데이터</h4>
                <ul className="list-disc list-inside text-muted space-y-1 mb-4">
                  <li><strong>구매 항목:</strong> 구독 상태, 구매 내역 (RevenueCat 경유)</li>
                </ul>

                <h4 className="text-lg font-semibold mb-2 text-foreground">사용자에게 연결되지 않은 데이터</h4>
                <ul className="list-disc list-inside text-muted space-y-1 mb-4">
                  <li><strong>식별자:</strong> 광고 식별자(IDFA/GAID), 기기 정보(모델/OS 등) (AdMob/Analytics)</li>
                  <li><strong>분석 데이터:</strong> 앱 사용 이벤트, 화면 조회, 세션 정보, 오류 로그 (Google Analytics/Firebase - 익명화)</li>
                </ul>

                <h4 className="text-lg font-semibold mb-2 text-foreground">사용자 추적에 사용되는 데이터</h4>
                <ul className="list-disc list-inside text-muted space-y-1 mb-4">
                  <li><strong>광고 데이터:</strong> 광고 식별자 (AdMob - 맞춤형 광고 제공 목적)</li>
                </ul>

                <p className="text-muted text-sm bg-white/[0.02] p-4 rounded-lg mb-6">
                  <strong>참고:</strong> 프리미엄 구독 사용자는 광고가 표시되지 않으므로 광고 관련 데이터의 수집이 제한되거나 발생하지 않을 수 있습니다.
                </p>

                <h4 className="text-lg font-semibold mb-2 text-foreground">수집하지 않는 데이터</h4>
                <p className="text-muted leading-relaxed mb-8">
                  연락처 정보, 건강 및 피트니스, 금융 정보, 위치, 민감한 정보, 연락처, 사용자 콘텐츠, 검색 기록, 브라우징 기록
                </p>

                <h3 className="text-xl font-semibold mb-4 text-foreground">Google Play 데이터 안전 섹션 정보</h3>
                <p className="text-muted leading-relaxed mb-4">
                  Google Play 스토어의 데이터 안전 섹션에 표시되는 정보입니다:
                </p>

                <h4 className="text-lg font-semibold mb-2 text-foreground">수집되는 데이터</h4>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm text-muted border border-white/10">
                    <thead className="bg-white/[0.02]">
                      <tr>
                        <th className="px-4 py-2 text-left border-b border-white/10">데이터 유형</th>
                        <th className="px-4 py-2 text-left border-b border-white/10">데이터</th>
                        <th className="px-4 py-2 text-left border-b border-white/10">수집 여부</th>
                        <th className="px-4 py-2 text-left border-b border-white/10">공유 여부</th>
                        <th className="px-4 py-2 text-left border-b border-white/10">목적</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">앱 활동</td>
                        <td className="px-4 py-2 border-b border-white/10">인앱 구매 내역</td>
                        <td className="px-4 py-2 border-b border-white/10">예</td>
                        <td className="px-4 py-2 border-b border-white/10">아니요</td>
                        <td className="px-4 py-2 border-b border-white/10">구독 관리</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">기기 또는 기타 ID</td>
                        <td className="px-4 py-2 border-b border-white/10">광고 ID</td>
                        <td className="px-4 py-2 border-b border-white/10">예</td>
                        <td className="px-4 py-2 border-b border-white/10">예 (AdMob)</td>
                        <td className="px-4 py-2 border-b border-white/10">광고</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">앱 활동</td>
                        <td className="px-4 py-2 border-b border-white/10">앱 상호작용, 화면 조회</td>
                        <td className="px-4 py-2 border-b border-white/10">예</td>
                        <td className="px-4 py-2 border-b border-white/10">예 (AdMob, Analytics/Firebase)</td>
                        <td className="px-4 py-2 border-b border-white/10">광고, 분석</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-white/10">앱 정보 및 성능</td>
                        <td className="px-4 py-2 border-b border-white/10">오류 로그, 진단</td>
                        <td className="px-4 py-2 border-b border-white/10">예</td>
                        <td className="px-4 py-2 border-b border-white/10">예 (Analytics/Firebase)</td>
                        <td className="px-4 py-2 border-b border-white/10">앱 품질 개선</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h4 className="text-lg font-semibold mb-2 text-foreground">데이터 공유</h4>
                <ul className="list-disc list-inside text-muted space-y-1 mb-4">
                  <li>광고 식별자 및 광고 상호작용 데이터가 Google AdMob과 공유됩니다</li>
                  <li>앱 사용 이벤트, 화면 조회, 오류 로그가 Google Analytics/Firebase와 공유됩니다 (익명화)</li>
                  <li>프리미엄 구독 사용자는 광고가 비활성화되어 광고 관련 데이터의 공유가 제한되거나 발생하지 않을 수 있습니다</li>
                </ul>

                <h4 className="text-lg font-semibold mb-2 text-foreground">보안 관행</h4>
                <ul className="list-disc list-inside text-muted space-y-1 mb-4">
                  <li>데이터 전송 시 암호화됨 (HTTPS)</li>
                  <li>데이터 삭제를 요청할 수 있음</li>
                </ul>

                <h4 className="text-lg font-semibold mb-2 text-foreground">데이터 삭제 요청</h4>
                <p className="text-muted leading-relaxed">
                  앱 삭제 시 기기 내 데이터가 삭제됩니다.
                </p>
              </section>

              {/* 연락처 */}
              <section className="border-t border-white/10 pt-8 mt-8">
                <div className="text-center">
                  <p className="text-muted mb-2">
                    <strong>최종 업데이트: 2025년 12월 29일</strong>
                  </p>
                  <p className="text-foreground font-bold text-lg mb-2">재밌어</p>
                  <p className="text-muted">
                    이메일: <a href="mailto:funpeople.hq@gmail.com" className="text-primary hover:underline">funpeople.hq@gmail.com</a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
