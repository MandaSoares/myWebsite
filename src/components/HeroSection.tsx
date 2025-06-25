import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const terminalLines = [
  "user@amanda:~$ whoami",
  "Engineer focused on innovation, social impact and smart technologies",
  "",
  "user@amanda:~$ ls skills",
  "Problem-solver Computer-Technician Young-Scientist Fullstack-Developer",
  "",
  "user@amanda:~$ ",
];

export const HeroSection = () => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= terminalLines.length) return;

    const currentLine = terminalLines[currentLineIndex];
    const typingTimeout = setTimeout(() => {
      const updatedLine = currentLine.slice(0, charIndex + 1);
      const updatedLines = [...displayedLines];
      updatedLines[currentLineIndex] = updatedLine;
      setDisplayedLines(updatedLines);

      if (charIndex + 1 < currentLine.length) {
        setCharIndex(charIndex + 1);
      } else {
        setCurrentLineIndex(currentLineIndex + 1);
        setCharIndex(0);
      }
    }, 25);

    return () => clearTimeout(typingTimeout);
  }, [charIndex, currentLineIndex, displayedLines]);

  useEffect(() => {
    if (displayedLines.length < terminalLines.length) {
      setDisplayedLines((prev) => [...prev, ""]);
    }
  }, [currentLineIndex]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const formatTerminalLine = (line: string) => {
    if (line.startsWith("user@amanda:")) {
      const parts = line.split("~");
      return (
        <>
          <span className="text-green-400">user@amanda:</span>
          <span className="text-blue-400">~</span>
          <span className="text-white">{parts[1]}</span>
        </>
      );
    }
    return <span className="text-white">{line}</span>;
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 pb-0 gradient-earth overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text and Terminal */}
          <div className="space-y-8 animate-fade-in">
            <div className="text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 animate-slide-up whitespace-nowrap">
              Olá, I'm Amanda!
            </h1>
              <p className="text-xl lg:text-2xl text-white/90 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Aspiring Engineer, Researcher and Developer
              </p>
            </div>

            {/* Typing Terminal */}
            <div className="terminal max-w-2xl animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="text-gray-300 text-sm ml-2">bash</span>
              </div>
              <div className="terminal-content">
                <pre className="whitespace-pre-wrap text-white">
                  {displayedLines.map((line, i) => (
                    <div key={i}>
                      {formatTerminalLine(line)}
                      {i === displayedLines.length - 1 && <span className="blinking-cursor"></span>}
                    </div>
                  ))}
                </pre>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 animate-slide-up mt-12 justify-center md:justify-start px-4" style={{ animationDelay: '0.6s' }}>
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-[#5B2C06] text-white hover:bg-[#B55338] border-2 border-[#5B2C06] font-medium"
            >
              Contact
            </Button>

            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-[#5B2C06] text-white hover:bg-[#8BA98E] border-2 border-[#5B2C06] font-medium"
            >
              View Projects
            </Button>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex gap-4 animate-slide-up mt-8 justify-start md:justify-center lg:justify-start px-4" style={{ animationDelay: '0.6s' }}>
          <div className="flex justify-center lg:justify-end items-end animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="w-[300px] sm:w-[360px] md:w-[420px] lg:w-[500px] xl:w-[580px]">
              <img 
                src="/images/amandapf.jpg"
                alt="Amanda"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};
