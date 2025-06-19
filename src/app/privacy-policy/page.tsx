import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-12 md:py-20">
        <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-8">개인정보 처리방침</h1>
        <div className="prose prose-lg max-w-none text-foreground/80 space-y-4">
          <p>최종 업데이트: {new Date().toLocaleDateString()}</p>
          <h2 className="font-headline text-2xl text-primary/90">소개</h2>
          <p>
            연세 리바이브 치과("당사", "우리")에 오신 것을 환영합니다. 당사는 귀하의 개인 정보를 보호하고 귀하의 개인 정보 보호 권리를 존중하기 위해 최선을 다하고 있습니다. 이 개인 정보 보호 고지 또는 귀하의 개인 정보와 관련된 당사의 관행에 대해 질문이나 우려 사항이 있는 경우 info@yonseirevive.com으로 문의하십시오.
          </p>
          <h2 className="font-headline text-2xl text-primary/90">수집하는 정보</h2>
          <p>
            당사는 귀하가 당사 또는 당사의 제품 및 서비스에 대한 정보를 얻는 데 관심을 표명하거나 웹사이트 활동에 참여하거나 기타 방식으로 당사에 연락할 때 귀하가 자발적으로 제공하는 개인 정보를 수집합니다.
          </p>
          <p>
            당사가 수집하는 개인 정보는 귀하와 당사 및 웹사이트 간의 상호 작용 맥락, 귀하의 선택, 귀하가 사용하는 제품 및 기능에 따라 달라집니다. 당사가 수집하는 개인 정보에는 다음이 포함될 수 있습니다: 이름, 전화번호, 이메일 주소, 우편 주소 및 기타 유사한 정보.
          </p>
          <h2 className="font-headline text-2xl text-primary/90">정보 사용 방법</h2>
          <p>
            당사는 아래 설명된 다양한 사업 목적으로 웹사이트를 통해 수집된 개인 정보를 사용합니다. 당사는 당사의 합법적인 사업 이익에 의존하여, 귀하와의 계약 체결 또는 이행, 귀하의 동의 및/또는 법적 의무 준수를 위해 이러한 목적으로 귀하의 개인 정보를 처리합니다.
          </p>
          <ul className="list-disc pl-6">
            <li>계정 생성 및 로그인 절차를 용이하게 하기 위해.</li>
            <li>추천글을 게시하기 위해.</li>
            <li>피드백을 요청하기 위해.</li>
            <li>사용자 계정을 관리하기 위해.</li>
            <li>귀하에게 관리 정보를 보내기 위해.</li>
            <li>당사 서비스를 보호하기 위해.</li>
            <li>사용자 문의에 응답하고 사용자에게 지원을 제공하기 위해.</li>
          </ul>
          <h2 className="font-headline text-2xl text-primary/90">귀하의 정보가 다른 사람과 공유됩니까?</h2>
          <p>
            당사는 귀하의 동의가 있거나, 법률을 준수하거나, 귀하에게 서비스를 제공하거나, 귀하의 권리를 보호하거나, 사업 의무를 이행하기 위해서만 정보를 공유합니다.
          </p>
          <h2 className="font-headline text-2xl text-primary/90">본 개인정보 처리방침의 변경</h2>
          <p>
            당사는 수시로 이 개인정보 처리방침을 업데이트할 수 있습니다. 업데이트된 버전은 업데이트된 "최종 업데이트" 날짜로 표시되며 업데이트된 버전은 액세스 가능해지는 즉시 효력이 발생합니다.
          </p>
          <h2 className="font-headline text-2xl text-primary/90">문의하기</h2>
          <p>
            본 정책에 대한 질문이나 의견이 있으시면 info@yonseirevive.com으로 이메일을 보내거나 다음 주소로 우편을 보내주십시오:
            <br />
            Yonsei Revive Dental
            <br />
            123 Dental Street, Smileville, SV 45678
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
