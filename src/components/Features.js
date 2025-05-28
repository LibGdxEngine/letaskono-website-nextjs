
// components/Features.js
const Features = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-[#4b164c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      ),
      title: "زواج إسلامي",
      description: "تطبيق مخصص للزواج الإسلامي، يضمن الالتزام بالقيم الإسلامية في كل خطوة من خطوات البحث عن الزوج."
     },
    {
      icon: (
        <svg className="w-8 h-8 text-[#4b164c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
      title: "بناء بيت مسلم",
      description: "يساعدك في بناء بيت مسلم قائم على طاعة الله ورسوله صلى الله عليه وسلم."
      },
    {
      icon: (
        <svg className="w-8 h-8 text-[#4b164c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      ),
      title: "سهولة البحث",
      description: "ابحث عن زوجك بسهولة من خلال واجهة مستخدم بسيطة وسلسة، مع خيارات تصفية متقدمة."
   },
    {
      icon: (
        <svg className="w-8 h-8 text-[#4b164c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
        </svg>
      ),
      title: "الأمن والخصوصية",
      description: "نحن نأخذ خصوصيتك على محمل الجد. جميع المعلومات الشخصية محمية بتشفير من طرف إلى طرف وضوابط خصوصية صارمة يمكنك تخصيصها."
      },
    {
      icon: (
        <svg className="w-8 h-8 text-[#4b164c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      title: "مسلمون حول العالم",
      description: "انضم إلى مجتمعنا العالمي من المسلمين الباحثين عن الزواج، حيث يمكنك التواصل مع أشخاص من خلفيات ثقافية متنوعة."
     },
    {
      icon: (
        <svg className="w-8 h-8 text-[#4b164c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      ),
      title: "قصص نجاح",
      description: "  العديد من الأشخاص تزوجوا من خلال لتسكنوا وبنوا أسرًا إسلامية جميلة معًا."
    }
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">ما هي مبادرة لتسكنوا ؟</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            
          هي مبادرة مجتمعية تهدف إلى تيسير الزواج وترغيب الشباب فيه مع وضع الدين والأخلاق كمعيار أول في عملية الاختيار، حيث توفر منصة آمنة وسهلة الاستخدام للبحث عن الزوج المناسب.  
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" 
              data-aos="fade-up" 
              data-aos-delay={100 * (index + 1)}
            >
              <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
