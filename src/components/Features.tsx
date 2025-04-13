
import React from 'react';
import { 
  MessageSquare, 
  Bookmark, 
  CheckCircle, 
  Clock, 
  List, 
  User, 
  RefreshCw,
  Bell
} from 'lucide-react';

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
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Everything You Need for Seamless Task Management</h2>
          <p className="text-lg text-gray-600">
            Dodo Tasks streamlines your workflow with powerful features designed to keep your team productive and focused.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-white rounded-lg p-3 w-fit mb-4 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
