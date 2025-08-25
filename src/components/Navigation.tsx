import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { 
  Home, 
  GitBranch, 
  Download, 
  Terminal, 
  GitMerge, 
  Github,
  Users,
  BookOpen
} from 'lucide-react';

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/what-is-git', label: 'What is Git?', icon: GitBranch },
  { path: '/installation', label: 'Installation', icon: Download },
  { path: '/basic-commands', label: 'Basic Commands', icon: Terminal },
  { path: '/repositories', label: 'Repositories', icon: BookOpen },
  { path: '/branching', label: 'Branching', icon: GitMerge },
  { path: '/github-basics', label: 'GitHub Basics', icon: Github },
  { path: '/collaboration', label: 'Collaboration', icon: Users },
];

export const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="w-64 bg-card border-r border-border h-screen p-4 fixed left-0 top-0 overflow-y-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold gradient-text mb-2">GitMaster</h1>
        <p className="text-sm text-muted-foreground">Learn Git & GitHub interactively</p>
      </div>

      <div className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link key={item.path} to={item.path} className="block">
              <Button
                variant={isActive ? "default" : "ghost"}
                className="w-full justify-start text-left"
                size="sm"
              >
                <Icon className="w-4 h-4 mr-3" />
                {item.label}
              </Button>
            </Link>
          );
        })}
      </div>

      <div className="mt-8 p-4 bg-muted rounded-lg">
        <h3 className="font-medium mb-2">Progress</h3>
        <div className="flex items-center gap-2">
          <div className="progress-dot completed"></div>
          <div className="progress-dot current"></div>
          <div className="progress-dot upcoming"></div>
          <div className="progress-dot upcoming"></div>
          <span className="text-sm text-muted-foreground ml-2">2/8</span>
        </div>
      </div>
    </nav>
  );
};