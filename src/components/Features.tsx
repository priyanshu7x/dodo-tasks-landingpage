
import React from 'react';
import { 
  MessageSquare, 
  Bookmark, 
  CheckCircle, 
  Clock, 
  List, 
  User, 
  RefreshCw,
  Bell,
  ArrowRight
} from 'lucide-react';
import { Button } from './ui/button';

const Features: React.FC = () => {
  const features = [
    {
      icon: <MessageSquare className="h-6 w-6 text-slack-blue" />,
      title: "Capture Tasks Where They Happen",
      description: "Simply reply in a Slack thread and mention @dodo. No need to switch apps or manually create tasks."
    },
    {
      icon: <Bookmark className="h-6 w-6 text-slack-green" />,
      title: "Keep the Context Attached",
      description: "Tasks are linked to original discussions, so anyone can refer back to the full context within Slack."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-slack-purple" />,
      title: "Effortless Details",
      description: "Assign tasks and set deadlines right in your message with intuitive syntax like assign: @username or due: tomorrow."
    },
    {
      icon: <List className="h-6 w-6 text-slack-yellow" />,
      title: "Clear Team Visibility",
      description: "Type /tasks list to instantly see all open tasks for a specific channel or project team."
    },
    {
      icon: <User className="h-6 w-6 text-slack-red" />,
      title: "Personal Focus",
      description: "Use /mytasks to get a private list showing only tasks assigned to you across all channels."
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-slack-blue" />,
      title: "Manage Without Leaving Slack",
      description: "Update task status directly within Slack using simple commands like /tasks complete."
    },
    {
      icon: <Bell className="h-6 w-6 text-slack-purple" />,
      title: "Automatic Updates",
      description: "When tasks are completed, Dodo posts notifications in the original thread to close the loop."
    },
    {
      icon: <Clock className="h-6 w-6 text-dodo-500" />,
      title: "Save Time & Focus",
      description: "Reduce context switching and keep your team's productivity flowing smoothly."
    }
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="bg-dodo-100 text-dodo-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4 inline-block">
            POWERFUL FEATURES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight">
            Everything You Need for <span className="text-dodo-500">Seamless</span> Task Management
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Dodo Tasks streamlines your workflow with powerful features designed to keep your team productive and focused.
          </p>
          
          <div className="flex justify-center gap-4 mb-16">
            <Button className="bg-dodo-500 hover:bg-dodo-600 text-white">
              Try for Free <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-dodo-500 text-dodo-500 hover:bg-dodo-50">
              See Demo
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:translate-y-[-8px] hover:border-dodo-200"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: "fade-in 0.6s ease-out forwards",
                opacity: 0
              }}
            >
              <div className="bg-white rounded-full p-4 w-fit mb-4 shadow-sm border border-gray-100">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-dodo-700 font-medium mb-4">Trusted by teams at companies like</p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
            <span className="text-gray-400 font-bold text-lg">COMPANY</span>
            <span className="text-gray-400 font-bold text-lg">COMPANY</span>
            <span className="text-gray-400 font-bold text-lg">COMPANY</span>
            <span className="text-gray-400 font-bold text-lg">COMPANY</span>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Features;
