
import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckCheck, MessageSquare, Clock, Bird } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm">
              <span className="flex h-2 w-2 rounded-full bg-dodo-500"></span>
              <span className="ml-2 text-gray-600">Now available in Slack App Directory</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Your Smart Task Assistant <span className="text-dodo-500">Inside Slack</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              Capture, track, and manage tasks without ever leaving your Slack conversations. Dodo Tasks makes team productivity feel natural.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-dodo-500 hover:bg-dodo-600 text-white h-12 px-6 text-base">
                Add to Slack
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-700 h-12 px-6 text-base">
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <CheckCheck className="h-4 w-4 text-dodo-500" />
                <span>Free for small teams</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCheck className="h-4 w-4 text-dodo-500" />
                <span>No credit card required</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-lg shadow-2xl overflow-hidden border-8 border-white">
              <div className="bg-slack-purple text-white p-3 text-xs">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>Project Planning Channel</span>
                </div>
              </div>
              
              <div className="bg-white p-4 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">JD</div>
                  <div className="flex-1">
                    <div className="font-semibold">John Doe</div>
                    <div className="bg-gray-100 p-3 rounded mt-1 text-gray-800">
                      We need to update our website content before the next release.
                    </div>
                    <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>12:34 PM</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">AS</div>
                  <div className="flex-1">
                    <div className="font-semibold">Ana Smith</div>
                    <div className="bg-gray-100 p-3 rounded mt-1 text-gray-800">
                      @dodo Create task assign: @tom due: next Friday
                    </div>
                    <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>12:36 PM</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-dodo-500 flex items-center justify-center text-white text-xs">
                    <Bird className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">Dodo Tasks</div>
                    <div className="bg-white border border-green-200 p-3 rounded mt-1 text-gray-800">
                      <div className="flex items-center gap-2 text-green-600 font-medium">
                        <CheckCheck className="h-4 w-4" />
                        <span>Task created!</span>
                      </div>
                      <div className="mt-2 p-3 bg-gray-50 rounded-md border border-gray-200">
                        <div className="text-sm font-medium">Update website content before the next release</div>
                        <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <div className="w-4 h-4 rounded-full bg-indigo-500 flex items-center justify-center text-white text-[8px] font-bold">T</div>
                            <span>Tom</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>Due: Next Friday</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>12:36 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 -bottom-6 -left-6 bg-gradient-to-br from-slack-blue via-slack-green to-slack-yellow rounded-xl -z-10 opacity-20 blur-xl animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
