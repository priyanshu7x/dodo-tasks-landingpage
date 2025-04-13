
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Is Dodo Tasks free to use?",
      answer: "Yes, Dodo Tasks offers a free plan for small teams with up to 5 users. For larger teams or additional features, we offer premium plans starting at $4.99 per user per month."
    },
    {
      question: "How do I install Dodo Tasks in my Slack workspace?",
      answer: "Installation is simple! Just click the 'Add to Slack' button on our website, authorize the app for your workspace, and Dodo Tasks will be ready to use in your channels."
    },
    {
      question: "Does Dodo Tasks work with Slack Enterprise Grid?",
      answer: "Yes, Dodo Tasks is fully compatible with Slack Enterprise Grid and includes additional enterprise features like advanced permissions and admin controls."
    },
    {
      question: "Can I integrate Dodo Tasks with other project management tools?",
      answer: "Currently, Dodo Tasks works exclusively within Slack to provide a seamless experience. We have integrations with popular tools like Jira, Asana, and Trello on our roadmap."
    },
    {
      question: "How secure is my task data with Dodo Tasks?",
      answer: "We take security seriously. Dodo Tasks uses industry-standard encryption, regular security audits, and follows Slack's security guidelines. Your data is stored securely and never shared with third parties."
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">
            Got questions about Dodo Tasks? Find answers to common inquiries below.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-gray-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
