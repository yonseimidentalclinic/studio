import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-12 md:py-20">
        <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-8">서비스 이용약관</h1>
        <div className="prose prose-lg max-w-none text-foreground/80 space-y-4">
          <p>최종 업데이트: {new Date().toLocaleDateString()}</p>
          <h2 className="font-headline text-2xl text-primary/90">1. 약관 동의</h2>
          <p>
            당사 웹사이트 및 서비스에 액세스하거나 이를 사용함으로써 귀하는 본 서비스 이용약관("약관")에 동의하는 것으로 간주됩니다. 약관의 일부에 동의하지 않는 경우 서비스를 이용할 수 없습니다.
          </p>
          <h2 className="font-headline text-2xl text-primary/90">2. 서비스</h2>
          <p>
            연세 리바이브 치과는 치과 정보 및 예약 서비스를 제공합니다. 이 웹사이트에서 제공되는 정보는 일반적인 정보 제공 목적으로만 제공되며 의학적 조언을 구성하지 않습니다.
          </p>
          <h2 className="font-headline text-2xl text-primary/90">3. 사용자 책임</h2>
          <p>
            예약을 하거나 당사 서비스를 이용할 때 정확한 정보를 제공할 책임은 귀하에게 있습니다. 귀하는 불법적인 목적으로 웹사이트를 사용하지 않을 것에 동의합니다.
          </p>
          <h2 className="font-headline text-2xl text-primary/90">4. 지적 재산권</h2>
          <p>
            달리 명시되지 않는 한, 이 웹사이트의 콘텐츠, 레이아웃, 디자인, 데이터, 데이터베이스 및 그래픽은 지적 재산권법에 의해 보호되며 연세 리바이브 치과의 소유입니다.
          </p>
          <h2 className="font-headline text-2xl text-primary/90">5. 책임 제한</h2>
          <p>
            연세 리바이브 치과는 귀하의 서비스 액세스 또는 사용 또는 서비스 액세스 또는 사용 불능으로 인해 발생하는 이익, 데이터, 사용, 영업권 또는 기타 무형의 손실을 포함하되 이에 국한되지 않는 간접적, 부수적, 특별, 결과적 또는 징벌적 손해에 대해 책임을 지지 않습니다.
          </p>
          <h2 className="font-headline text-2xl text-primary/90">6. 약관 변경</h2>
          <p>
            당사는 단독 재량에 따라 언제든지 본 약관을 수정하거나 교체할 권리를 보유합니다. 변경 사항이 있는 경우 이 페이지에 새 약관을 게시하여 통지합니다.
          </p>
           <h2 className="font-headline text-2xl text-primary/90">7. 문의하기</h2>
          <p>
            본 약관에 대해 질문이 있으시면 info@yonseirevive.com으로 문의하십시오.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
