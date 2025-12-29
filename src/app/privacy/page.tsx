import { Metadata } from "next";
import PageTransition from "@/components/animations/PageTransition";

export const metadata: Metadata = {
  title: "개인정보처리방침 | Jaemisseo",
  description: "Jaemisseo 개인정보처리방침",
};

export default function PrivacyPage() {
  return (
    <PageTransition>
      <section className="min-h-screen pt-32 pb-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            개인정보처리방침
          </h1>
          <p className="text-muted mb-12">
            최종 수정일: {new Date().toLocaleDateString("ko-KR")}
          </p>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  1. 개인정보의 처리 목적
                </h2>
                <p className="text-muted leading-relaxed">
                  Jaemisseo(이하 &quot;회사&quot;)는 다음의 목적을 위하여 개인정보를
                  처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는
                  이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법
                  제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                </p>
                <ul className="list-disc list-inside text-muted mt-4 space-y-2">
                  <li>서비스 제공 및 운영</li>
                  <li>고객 문의 응대 및 상담</li>
                  <li>서비스 개선 및 신규 서비스 개발</li>
                  <li>마케팅 및 광고 활용 (동의 시)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  2. 수집하는 개인정보 항목
                </h2>
                <p className="text-muted leading-relaxed">
                  회사는 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다.
                </p>
                <ul className="list-disc list-inside text-muted mt-4 space-y-2">
                  <li>필수 항목: 이름, 이메일 주소</li>
                  <li>선택 항목: 회사명, 전화번호</li>
                  <li>자동 수집 항목: IP 주소, 쿠키, 서비스 이용 기록, 기기 정보</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  3. 개인정보의 보유 및 이용 기간
                </h2>
                <p className="text-muted leading-relaxed">
                  회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터
                  개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서
                  개인정보를 처리·보유합니다.
                </p>
                <ul className="list-disc list-inside text-muted mt-4 space-y-2">
                  <li>고객 문의 기록: 3년</li>
                  <li>서비스 이용 기록: 1년</li>
                  <li>마케팅 동의 기록: 동의 철회 시까지</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  4. 개인정보의 제3자 제공
                </h2>
                <p className="text-muted leading-relaxed">
                  회사는 원칙적으로 정보주체의 개인정보를 제1조에서 명시한 목적
                  범위 내에서 처리하며, 정보주체의 사전 동의 없이는 본래의 목적
                  범위를 초과하여 처리하거나 제3자에게 제공하지 않습니다.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  5. 개인정보처리의 위탁
                </h2>
                <p className="text-muted leading-relaxed">
                  회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보
                  처리업무를 위탁하고 있습니다.
                </p>
                <ul className="list-disc list-inside text-muted mt-4 space-y-2">
                  <li>클라우드 서비스 제공: Vercel, AWS</li>
                  <li>이메일 발송 서비스: (해당 시 추가)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  6. 정보주체의 권리·의무 및 행사방법
                </h2>
                <p className="text-muted leading-relaxed">
                  정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호
                  관련 권리를 행사할 수 있습니다.
                </p>
                <ul className="list-disc list-inside text-muted mt-4 space-y-2">
                  <li>개인정보 열람 요구</li>
                  <li>오류 등이 있을 경우 정정 요구</li>
                  <li>삭제 요구</li>
                  <li>처리정지 요구</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  7. 개인정보의 파기
                </h2>
                <p className="text-muted leading-relaxed">
                  회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가
                  불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
                </p>
                <ul className="list-disc list-inside text-muted mt-4 space-y-2">
                  <li>전자적 파일 형태: 복구 불가능한 방법으로 영구 삭제</li>
                  <li>기록물, 인쇄물, 서면: 분쇄기로 분쇄 또는 소각</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  8. 개인정보 보호책임자
                </h2>
                <p className="text-muted leading-relaxed">
                  회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보
                  처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여
                  아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                </p>
                <div className="mt-4 p-4 bg-white/[0.02] border border-white/10 rounded-lg">
                  <p className="text-foreground font-medium">개인정보 보호책임자</p>
                  <p className="text-muted mt-2">이메일: privacy@jaemisseo.com</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  9. 개인정보처리방침의 변경
                </h2>
                <p className="text-muted leading-relaxed">
                  이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에
                  따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의
                  시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  10. 권익침해 구제방법
                </h2>
                <p className="text-muted leading-relaxed">
                  정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보
                  분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에
                  분쟁해결이나 상담 등을 신청할 수 있습니다.
                </p>
                <ul className="list-disc list-inside text-muted mt-4 space-y-2">
                  <li>개인정보분쟁조정위원회: (국번없이) 1833-6972</li>
                  <li>개인정보침해신고센터: (국번없이) 118</li>
                  <li>대검찰청: (국번없이) 1301</li>
                  <li>경찰청: (국번없이) 182</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
