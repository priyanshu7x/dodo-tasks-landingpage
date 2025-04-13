
import React from 'react';
import { Bird, CheckCircle, Clock, MessageSquare } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Create a Task in Slack",
      description: "Reply to a message in any thread and mention @dodo with optional details like assign: and due:.",
      icon: <MessageSquare className="h-6 w-6 text-white" />,
      color: "bg-slack-blue"
    },
    {
      number: "02",
      title: "Track Team Progress",
      description: "Use /tasks list to see all tasks for your channel or /mytasks for your personal assignments.",
      icon: <Clock className="h-6 w-6 text-white" />,
      color: "bg-slack-green"
    },
    {
      number: "03",
      title: "Complete Tasks Seamlessly",
      description: "Mark tasks as done with /tasks complete [Task ID] without leaving Slack.",
      icon: <CheckCircle className="h-6 w-6 text-white" />,
      color: "bg-dodo-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">How Dodo Tasks Works</h2>
          <p className="text-lg text-gray-600">
            Turning conversations into action has never been easier. Here's how to use Dodo Tasks within your Slack workspace.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="glass-card rounded-xl p-8 h-full flex flex-col">
                <div className={`${step.color} rounded-full w-12 h-12 flex items-center justify-center mb-6`}>
                  {step.icon}
                </div>
                <div className="absolute top-6 right-8 text-5xl font-bold text-gray-100">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 rotate-45 border-t border-r border-gray-200 bg-white"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-slack-purple to-dodo-700 rounded-2xl overflow-hidden shadow-xl">
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to make task management effortless?</h3>
              <p className="text-white/90 mb-6">
                Join thousands of teams who use Dodo Tasks to stay organized and focused right inside Slack.
              </p>
              <button className="bg-white text-slack-purple hover:bg-gray-100 transition-colors font-medium rounded-lg px-6 py-3 flex items-center gap-2">
                <Bird className="h-5 w-5" />
                <span>Add to Slack</span>
              </button>
            </div>
            <div className="flex-1 flex justify-center md:justify-end">
              <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center">
                <Bird className="h-32 w-32 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
