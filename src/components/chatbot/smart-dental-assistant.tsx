"use client";

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from '@/components/ui/dialog';
import { MessageSquare, Loader2, User, Sparkles as AiIcon } from 'lucide-react';
import { smartDentalAssistant, type SmartDentalAssistantInput, type SmartDentalAssistantOutput } from '@/ai/flows/smart-dental-assistant';

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
}

export default function SmartDentalAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputValue.trim() === '' || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputValue,
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const input: SmartDentalAssistantInput = { query: userMessage.text };
      const result: SmartDentalAssistantOutput = await smartDentalAssistant(input);
      
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: result.response,
      };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error("Error calling smart dental assistant:", error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: "죄송합니다, 오류가 발생했습니다. 나중에 다시 시도해주세요.",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Add initial greeting message from AI when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: 'initial-greeting',
          sender: 'ai',
          text: "안녕하세요! 저는 연세 미 치과의 스마트 덴탈 어시스턴트입니다. 무엇을 도와드릴까요? 저희 서비스, 진료 시간 또는 예약 방법에 대해 문의하실 수 있습니다."
        }
      ]);
    }
  }, [isOpen, messages.length]);


  return (
    <>
      <Button
        variant="default"
        size="lg"
        className="fixed bottom-6 right-6 rounded-full h-16 w-16 p-0 shadow-xl bg-accent hover:bg-accent/90 z-50 flex items-center justify-center animate-fade-in"
        onClick={() => setIsOpen(true)}
        aria-label="덴탈 어시스턴트 챗봇 열기"
      >
        <MessageSquare className="h-8 w-8 text-accent-foreground" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px] md:max-w-[550px] lg:max-w-[600px] p-0 flex flex-col max-h-[80vh]">
          <DialogHeader className="p-6 pb-2 border-b">
            <DialogTitle className="font-headline text-xl text-primary flex items-center gap-2">
              <AiIcon className="h-6 w-6 text-primary" />
              스마트 덴탈 어시스턴트
            </DialogTitle>
            <DialogDescription className="text-sm">
              서비스, 시간 또는 예약에 대해 문의하세요.
            </DialogDescription>
          </DialogHeader>
          
          <ScrollArea className="flex-grow p-6" ref={scrollAreaRef as any}>
            <div className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-end gap-2 ${
                    msg.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {msg.sender === 'ai' && (
                    <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center shadow-md">
                      <AiIcon className="h-5 w-5" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] rounded-xl px-4 py-3 shadow-md ${
                      msg.sender === 'user'
                        ? 'bg-primary text-primary-foreground rounded-br-none'
                        : 'bg-muted text-muted-foreground rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                  </div>
                   {msg.sender === 'user' && (
                    <div className="flex-shrink-0 bg-accent text-accent-foreground rounded-full h-8 w-8 flex items-center justify-center shadow-md">
                      <User className="h-5 w-5" />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex items-end gap-2 justify-start">
                  <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center shadow-md">
                    <AiIcon className="h-5 w-5" />
                  </div>
                  <div className="max-w-[75%] rounded-xl px-4 py-3 shadow-md bg-muted text-muted-foreground rounded-bl-none">
                    <Loader2 className="h-5 w-5 animate-spin text-primary" />
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
          
          <DialogFooter className="p-4 border-t">
            <div className="flex w-full items-center gap-2">
              <Input
                type="text"
                placeholder="메시지를 입력하세요..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-grow bg-input focus:ring-accent"
                disabled={isLoading}
                aria-label="채팅 입력"
              />
              <Button onClick={handleSendMessage} disabled={isLoading || inputValue.trim() === ''} className="bg-accent hover:bg-accent/90">
                보내기
                {isLoading && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
