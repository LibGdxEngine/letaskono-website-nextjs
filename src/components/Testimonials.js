// components/Testimonials.js
const Testimonials = () => {
  const testimonials = [
    {
      initials: "A",
      names: "م/عبد الرحمن",
      year: "تزوج عام 2022",
      text: "Alhamdulillah, we found each other through Letaskono. The app's focus on Islamic values made our connection meaningful from the start. We're now happily married with our first child on the way!",
      rating: 5
    },
    {
      initials: "O&F", 
      names: "Omar & Fatima",
      year: "Married 2023",
      text: "The family involvement feature was perfect for us. Both our families could participate in the process, making our union blessed by everyone. Jazakallahu khairan Letaskono!",
      rating: 5
    },
    {
      initials: "Y&A",
      names: "Yusuf & Aisha", 
      year: "Married 2024",
      text: "As converts to Islam, finding someone who understood our journey was challenging. Letaskono connected us with like-minded people who shared our values. SubhanAllah!",
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600">Real couples who found love through Letaskono</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg" 
              data-aos="fade-up" 
              data-aos-delay={100 * (index + 1)}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#4b164c] rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.names}</h4>
                  <p className="text-sm text-gray-600">{testimonial.year}</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
              <div className="flex text-amber-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials