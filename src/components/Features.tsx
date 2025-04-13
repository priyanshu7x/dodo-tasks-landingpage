
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
  ArrowRight,
  Sparkles
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
      icon: <Sparkles className="h-6 w-6 text-slack-purple" />,
      title: "AI-Powered Task Creation",
      description: "Just type '@dodo create a task based on this thread, assign it to @john and due date day after tomorrow' - our AI does the rest."
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
            NO BS TASK MANAGEMENT
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight">
            The <span className="text-dodo-500">Slack Task Manager</span> You've Been Looking For
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
              className="glass-card rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:translate-y-[-8px] hover:border-dodo-200 feature-card"
              style={{ 
                animationDelay: `${index * 100}ms`
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
      </div>
    </section>
  );
};

export default Features;
