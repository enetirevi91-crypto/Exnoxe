import React, { useState } from 'react';
import './App.css';
import {
  Zap,
  ShieldCheck,
  Percent,
  Eye,
  ChevronLeft,
  ChevronRight,
  Send,
  Star,
  Shield,
} from 'lucide-react';

const TELEGRAM_URL = "https://t.me/+riUY9R1NEAUxMzUy";
const TELEGRAM_CHANNEL = "https://t.me/+riUY9R1NEAUxMzUy";

const reviews = [
  { name: "Александр", date: "12.03.2024", text: "Быстрый обмен, курс порадовал. Всё прошло чётко и безопасно." },
  { name: "Михаил", date: "28.03.2024", text: "Удобно, что не требуют верификацию. Обменял USDT за пару минут." },
  { name: "Дмитрий", date: "05.04.2024", text: "Лучший курс из всех, что находил. Комиссия минимальная." },
  { name: "Игорь", date: "19.04.2024", text: "Всё честно, быстро и анонимно. Рекомендую." },
  { name: "Сергей", date: "02.05.2024", text: "Первый раз обменивал, помогли с деталями. Спасибо!" },
  { name: "Андрей", date: "17.05.2024", text: "Никаких проблем, обмен прошёл за несколько минут." },
  { name: "Владимир", date: "30.05.2024", text: "Приятный сервис, отзывчивые операторы. Всё прозрачно." },
  { name: "Павел", date: "14.06.2024", text: "Работают профессионально. Курс зафиксировали сразу." },
  { name: "Никита", date: "28.06.2024", text: "Хорошая площадка, без скрытых комиссий. Обращусь ещё." },
];

function TelegramButton({ children, size = "md" }) {
  const sizeClass = size === "lg" ? "btn-lg" : size === "sm" ? "btn-sm" : "btn-md";
  return (
    <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className={`telegram-btn ${sizeClass}`}>
      <Send className={size === "sm" ? "icon-sm" : "icon-md"} />
      {children}
    </a>
  );
}

function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <div className="review-header">
        <div className="review-name">{review.name}</div>
        <div className="review-date">{review.date}</div>
      </div>
      <div className="review-text">{review.text}</div>
      <div className="review-rating">
        {[...Array(5)].map((_, i) => <Star key={i} className="star-icon" />)}
      </div>
    </div>
  );
}

function App() {
  const [reviewIndex, setReviewIndex] = useState(0);
  const visibleCount = 3;
  const maxIndex = reviews.length - visibleCount;

  const nextReviews = () => {
    setReviewIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevReviews = () => {
    setReviewIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <div className="page">
      <div className="bg-aurora" />
      <div className="bg-stars" />

      <header className="header">
        <div className="header-inner">
          <img src="/logo1.png" alt="Exnode" className="header-logo" />
          <TelegramButton size="sm">Написать в Telegram</TelegramButton>
        </div>
      </header>

      <section className="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-badge">Быстро • Безопасно • Анонимно</div>
            <h1 className="hero-title">
              Обмен криптовалют<br />
              на <span className="blue-text">лучших</span> условиях
            </h1>
            <p className="hero-subtitle">
              Exnode — это надежный и быстрый обмен криптовалют.
              Выгодные курсы, минимальные комиссии и безопасность
              ваших транзакций.
            </p>
            <div className="hero-cta">
              <TelegramButton size="lg">Написать в Telegram</TelegramButton>
              <div className="protection-text">
                <Shield className="shield-icon" />
                <span>Ваши средства под защитой</span>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-emblem-wrap">
              <img src="/mogo.png" alt="Exnode" className="hero-emblem" />
              <div className="hero-glow" />
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="advantages-section">
        <h2 className="section-title">Почему выбирают <span className="blue-text">Exnode?</span></h2>
        <div className="advantages-grid">
          <div className="advantage-card">
            <Zap className="advantage-icon" />
            <h3>Быстрый обмен</h3>
            <p>Обрабатываем заявки<br />за считанные минуты</p>
          </div>
          <div className="advantage-card">
            <ShieldCheck className="advantage-icon" />
            <h3>Безопасность</h3>
            <p>Ваши средства и данные<br />надежно защищены</p>
          </div>
          <div className="advantage-card">
            <Percent className="advantage-icon" />
            <h3>Лучшие курсы</h3>
            <p>Выгодные условия<br />и минимальные комиссии</p>
          </div>
          <div className="advantage-card">
            <Eye className="advantage-icon" />
            <h3>Анонимность</h3>
            <p>Не требуем регистрации<br />и верификации</p>
          </div>
        </div>
      </section>

      <section className="steps-section">
        <h2 className="section-title">Как это <span className="blue-text">работает?</span></h2>
        <div className="steps-grid">
          <div className="step">
            <div className="step-num">1</div>
            <h3>Вы оставляете заявку</h3>
            <p>Напишите нам в Telegram<br />и укажите детали обмена</p>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <h3>Мы подтверждаем</h3>
            <p>Согласовываем курс<br />и реквизиты</p>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <h3>Вы отправляете средства</h3>
            <p>Отправляете криптовалюту<br />на указанный адрес</p>
          </div>
          <div className="step">
            <div className="step-num">4</div>
            <h3>Получаете результат</h3>
            <p>Получаете средства<br />на свой кошелек</p>
          </div>
        </div>
      </section>

      <section className="reviews-section">
        <h2 className="section-title">Отзывы наших <span className="blue-text">клиентов</span></h2>
        <div className="reviews-slider">
          <button className="slider-arrow" onClick={prevReviews}><ChevronLeft /></button>
          <div className="reviews-grid">
            {reviews.slice(reviewIndex, reviewIndex + visibleCount).map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </div>
          <button className="slider-arrow" onClick={nextReviews}><ChevronRight /></button>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-cta-left">
          <h2>Готовы к обмену?</h2>
          <p>Напишите нам в Telegram и получите<br />лучший курс прямо сейчас!</p>
          <TelegramButton size="lg">Написать в Telegram</TelegramButton>
        </div>
        <div className="final-cta-icon">
          <Send className="big-send-icon" />
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-left">
            <img src="/logo1.png" alt="Exnode" className="footer-logo" />
            <p>Надёжный обмен криптовалют<br />на лучших условиях</p>
          </div>
          <div className="footer-right">
            <span className="copyright">© 2024 Exnode. Все права защищены.</span>
            <a href={TELEGRAM_CHANNEL} target="_blank" rel="noopener noreferrer" className="footer-tg">
              <Send className="footer-send-icon" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;