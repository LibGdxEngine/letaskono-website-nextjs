
// components/HowItWorks.js
const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "قم بتسجيل حسابك",
      description: "سجل دخولك واملأ بياناتك الشخصية. نحن نأخذ خصوصيتك على محمل الجد، لذا يمكنك تخصيص إعدادات الخصوصية الخاصة بك كما تشاء."
    },
    {
      number: "2", 
      title: "ابحث عن زوجك",
      description: "قم بالبحث عن زوجك من خلال واجهة مستخدم بسيطة وسلسة. استخدم خيارات التصفية المتقدمة للعثور على الشخص المناسب لك."
    },
    {
      number: "3",
      title: "توافق واحصل على رقم ولي الأمر", 
      description: "توافق مع الشخص الذي يعجبك واحصل على رقم ولي الأمر للتواصل المباشر. نحن نساعدك في كل خطوة لضمان تجربة آمنة ومريحة."
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-white relative overflow-hidden">
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 15l10 30h30l-25 20 10 30-25-20-25 20 10-30-25-20h30z' fill='%23000000' opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">كيفية عمل التطبيق ؟</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">بخطوات سهلة وبسيطة ستصل إلى غايتك ان شاء الله</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
              <div className="w-24 h-24 bg-gradient-to-br from-[#4b164c] to-[#dd88cf] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks