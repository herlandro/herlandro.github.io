
import React from 'react';
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface ProfileHeaderProps {
  name: string;
  title: string;
  avatarUrl: string;
  location: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  name,
  title,
  avatarUrl,
  location
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-8">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-xl opacity-20 transform scale-110"></div>
        <Avatar className="h-32 w-32 border-4 border-white relative z-10 shadow-xl">
          <img 
            src={avatarUrl || "/placeholder.svg"} 
            alt={name} 
            className="object-cover"
          />
        </Avatar>
      </div>
      
      <div className="flex-1">
        <h1 className="text-4xl font-display font-bold text-gray-800 mb-2 tracking-tight">{name}</h1>
        <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
          <Briefcase size={16} className="text-slate-500" />
          <p className="text-lg text-gray-600">{title}</p>
        </div>
        
        <div className="flex items-center justify-center md:justify-start gap-2 text-sm mb-4">
          <Badge variant="outline" className="px-3 py-1.5 bg-white border-slate-200 shadow-sm flex items-center gap-1.5">
            <MapPin size={14} className="text-slate-500" />
            <span className="text-gray-700">{location}</span>
          </Badge>
        </div>
        
        <p className="text-gray-600 leading-relaxed mb-4 max-w-md">
          Connecting creative dots across the digital universe. Developer, designer, and content creator 
          passionate about building beautiful, functional experiences.
        </p>
        
        <div className="flex gap-3 justify-center md:justify-start">
          <Button variant="outline" className="rounded-full">Contact Me</Button>
          <Button className="rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-white">Resume</Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
