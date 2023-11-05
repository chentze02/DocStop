import React, { useState } from 'react';

const FAQ = () => {
  const [expanded, setExpanded] = useState(Array(3).fill(false)); // Assuming there are 3 FAQs

  const toggleAccordion = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  const FAQData = [
    {
      question: "How can I schedule a dental appointment?",
      answer: "To schedule a dental appointment, please visit our website and log in to your account. From there, you can choose an available time slot that works for you.",
    },
    {
      question: "Can I reschedule my dental appointment?",
      answer: "Yes, you can reschedule your dental appointment by logging into your account on our website. You can select a new time slot that is convenient for you.",
    },
    {
      question: "What do I do if I need to cancel my appointment?",
      answer: "If you need to cancel your dental appointment, please log in to your account and navigate to the appointments section. There, you can find the option to cancel your appointment.",
    },
  ];

  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
      <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
          {FAQData.map((faq, index) => (
            <div key={index} className="pt-6">
              <dt>
                <button
                  type="button"
                  className="flex w-full items-start justify-between text-left text-gray-900"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={expanded[index]}
                >
                  <span className="text-base font-semibold leading-7">{faq.question}</span>
                  <span className="ml-6 flex h-7 items-center">
                    <svg
                      className={`h-6 w-6 ${expanded[index] ? 'hidden' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                    <svg
                      className={`h-6 w-6 ${expanded[index] ? '' : 'hidden'}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                    </svg>
                  </span>
                </button>
              </dt>
              <dd
                className={`mt-2 pr-12 ${expanded[index] ? '' : 'hidden'}`}
                id={`faq-${index}`}
              >
                <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default FAQ;
