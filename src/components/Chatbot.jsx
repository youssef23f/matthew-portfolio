import React, { useState } from 'react';
import { Bot, X, Send, MessageSquare, Sparkles } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'أهلاً بك! أنا المساعد الذكي لماثيو. كيف يمكنني مساعدتك اليوم؟ اختر من الأسئلة الجاهزة أو اتصل بنا مباشرة!'
    }
  ]);

  const presetQuestions = [
    {
      q: "ما هي الخدمات البرمجية التي تقدمها؟",
      a: "أقدم خدمات تطوير مواقع وويب كاملة (MERN Stack)، تصميم أنظمة SaaS، حلول وأتمتة الذكاء الاصطناعي (AI Integration)، وبناء تطبيقات السطح المكتب بـ Python."
    },
    {
      q: "كيف يمكنني طلب مشروع جديد أو الحصول على استشارة؟",
      a: "يمكنك التواصل المباشر عبر زر الواتساب أو التليجرام الموجود في الموقع، أو ترك تفاصيل مشروعك وسأقوم بالرد عليك فوراً بأفضل سعر وخطة عمل!"
    },
    {
      q: "ما هي التقنيات واللغات الأساسية التي تعمل بها؟",
      a: "أعمل بشكل أساسي بـ React.js, Tailwind CSS, Node.js, Express, MongoDB, Python, FastAPI, Scikit-Learn, ومكتبات الـ AI المختلفة."
    }
  ];

  const handleSelectQuestion = (q, a) => {
    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: q },
      { sender: 'bot', text: a }
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 p-4 rounded-full shadow-2xl flex items-center justify-center gap-2 font-bold transition-all duration-300 hover:scale-110 group border-2 border-emerald-400"
        >
          <Bot className="w-6 h-6 animate-bounce" />
          <span className="hidden sm:inline text-sm">تحدث مع AI Assistant</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl w-[340px] sm:w-[380px] h-[500px] flex flex-col justify-between overflow-hidden animate-in fade-in slide-in-from-bottom-5">
          
          {/* Header */}
          <div className="bg-slate-800 p-4 border-b border-slate-700 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Matthew Assistant AI</h4>
                <span className="text-xs text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span> متصل الآن
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="p-4 flex-1 overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-slate-700">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-emerald-500 text-slate-950 rounded-br-none font-medium'
                      : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick FAQ Options */}
          <div className="p-3 bg-slate-800/60 border-t border-slate-800 space-y-1.5">
            <p className="text-[11px] text-slate-400 px-1 font-semibold">أسئلة شائعة للطلب والاستفسار:</p>
            {presetQuestions.map((item, index) => (
              <button
                key={index}
                onClick={() => handleSelectQuestion(item.q, item.a)}
                className="w-full text-right text-xs bg-slate-800 hover:bg-emerald-500/10 hover:text-emerald-400 text-slate-300 p-2 rounded-lg border border-slate-700/50 transition-all duration-200 truncate"
              >
                ❓ {item.q}
              </button>
            ))}
          </div>

        </div>
      )}
    </div>
  );
}